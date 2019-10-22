package com.caseStudy.eCart.service;



import com.caseStudy.eCart.modals.Cart;
//import com.caseStudy.eCart.models.FixedCart;
import com.caseStudy.eCart.modals.OrderHistory;
import com.caseStudy.eCart.modals.Products;
import com.caseStudy.eCart.modals.Users;
import com.caseStudy.eCart.Respository.*;
import com.caseStudy.eCart.Respository.productsRespositry;
import com.caseStudy.eCart.Respository.cartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class cartservice {
    @Autowired
    private productsRespositry productRepoistory;
    @Autowired
    private cartRepository cartRepository;
    //@Autowired
    // private FixedCartRepository fixedCartRepository;
    @Autowired
    private userRepository userRepository;
    @Autowired
    private orderHistoryRepository orderHistoryRepository;

    public Cart addProduct(int  userid, int productid) {
        Products products = productRepoistory.findByProductid(productid);
        Users users = userRepository.findByUserid(userid);



        if (cartRepository.findByUserAndItems(users, products).isPresent()) {
            Cart cartt =(Cart) cartRepository.findByUserAndItems(users, products).get();
            cartt.setQuantity(cartt.getQuantity() + 1);
            cartRepository.save(cartt);
        } else {
            Cart c = new Cart(products, users, 1);
            cartRepository.save(c);
        }
        return (Cart)cartRepository.findByUserAndItems(users,products).get();
    }


    public Optional<Cart> removeproduct(int userid,int productid) {
        Products products = productRepoistory.findByProductid(productid);
        Users users = userRepository.findByUserid(userid);

        if(cartRepository.findByUserAndItems(users,products).get().getQuantity() == 1) {
            Cart cart = (Cart)cartRepository.findByUserAndItems(users,products).get();
            cart.setQuantity(0);
            cartRepository.delete(cart);
        }
        else {
            Cart cart = cartRepository.findByUserAndItems(users,products).get();

            cart.setQuantity(cart.getQuantity() - 1);
            cartRepository.save(cart);
        }
        return cartRepository.findByUserAndItems(users,products);
    }

    public List<Cart> showCart(int  user_id) {
        Users user = userRepository.findByUserid(user_id);
        return cartRepository.findByUserAndItems_Active(user, 1);
    }
    public Optional<Cart> deleteproduct(int userid,int productid)
    {
        Products product=productRepoistory.findByProductid(productid);
        Users users=userRepository.findByUserid(userid);
        Cart cart=cartRepository.findByUserAndItems(users,product).get();
        cartRepository.delete(cart);
        return cartRepository.findByUserAndItems(users,product);

    }
    public String clearCart(int userId,Principal principal) {

        Users user = userRepository.findByUserid(userId);
        List<Cart> cartList=cartRepository.findAllByUser(user);
        for (Cart cart : cartList) {
            cartRepository.deleteById((int) cart.getCartid());
        }
        return "cart cleared!";
    }



    public double checkout(int userid, Principal principal) {
        Users users = userRepository.findByUserid(userid);
        double p;
        double total = 0;
        List<Cart> cartList = cartRepository.findAllByUser(users);
        for(Cart cart: cartList){
            OrderHistory orderHistory = new OrderHistory();
            orderHistory.setProducts(cart.getItems());
            orderHistory.setUsers(cart.getUser());
            p = cart.getItems().getProductPrice();
            orderHistory.setQuantity(cart.getQuantity());
            total = total+cart.getQuantity()*p;
            orderHistory.setPrice((int)(cart.getQuantity()*p));
            orderHistory.setDate();
            orderHistoryRepository.save(orderHistory);

        }
        clearCart(userid,principal);
        return total;



    }

    public List<OrderHistory> showOrderHistory(int userid,Principal principal){
        Users users=userRepository.findByUserid(userid);
        return orderHistoryRepository.findAllByUsers(users);
    }
}


