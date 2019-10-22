package com.caseStudy.eCart.controller;

import com.caseStudy.eCart.modals.Cart;
import com.caseStudy.eCart.Respository.cartRepository;
import com.caseStudy.eCart.modals.OrderHistory;
import com.caseStudy.eCart.service.cartservice;
import com.caseStudy.eCart.service.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/cart")
public class cartController {
    private cartRepository c;
    @Autowired
    cartservice p;
    @Autowired
    userservice u;
    @RequestMapping(value="/removeproduct/recieve/{productid}",method= RequestMethod.GET)
    @ResponseBody
    public Optional<Cart> removeproduct(@PathVariable int productid, Principal principal)
    {
        return p.removeproduct(u.getUserId(principal),productid);
    }
    @RequestMapping(value="/addtocart/recieve/{productid}",method= RequestMethod.GET)
    @ResponseBody
    public Cart addproduct(@PathVariable int productid, Principal principal)
    {
        return p.addProduct(u.getUserId(principal),productid);
    }
    @RequestMapping(value="/showcart/recieve",method= RequestMethod.GET)
    @ResponseBody
    public List<Cart> showproduct(Principal principal)
    {
        return p.showCart(u.getUserId(principal));
    }
    @RequestMapping(value="/removefromcart/recieve/{productid}",method= RequestMethod.GET)
    @ResponseBody
    public String remove(@PathVariable int productid, Principal principal)
    {
        return p.clearCart(u.getUserId(principal),principal);
    }

    @RequestMapping(value="/deleteproduct/recieve/{productid}",method= RequestMethod.GET)
    @ResponseBody
    public Optional<Cart> deleteproduct(@PathVariable int productid, Principal principal)
    {
        return p.deleteproduct(u.getUserId(principal),productid);
    }


    @RequestMapping(value = "/checkout/recieve", method = RequestMethod.GET)
    @ResponseBody
    public double checkout(Principal principal) {
        return p.checkout(u.getUserId(principal),principal);
    }

    @RequestMapping(value = "/checkout/orderhistory/recieve", method = RequestMethod.GET)
    @ResponseBody
    public List<OrderHistory> history( Principal principal) {
        return p.showOrderHistory(u.getUserId(principal),principal);
    }

}
