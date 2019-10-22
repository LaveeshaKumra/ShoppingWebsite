package com.caseStudy.eCart.Respository;

import com.caseStudy.eCart.modals.Cart;
import com.caseStudy.eCart.modals.Products;
import com.caseStudy.eCart.modals.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface cartRepository extends JpaRepository<Cart,Integer> {
    Optional<Cart> findByUserAndItems(Users users, Products products);

    List<Cart> findByUserAndItems_Active(Users user, int i);

    List<Cart> findAllByUser(Users user);

    //List<Object> findByUserAndItems(Users users, Products products);

    // List<Object> findByUserAndItems(Users users, Products products);

    //  Optional<Object> findByUserandItems(Users users, Products products);
}
