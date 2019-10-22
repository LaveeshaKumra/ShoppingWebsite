package com.caseStudy.eCart.modals;

import javax.persistence.*;

@Entity
@Table(name = "cart")
public class Cart {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int cartid;
@ManyToOne
    private Products items;
@ManyToOne
    private Users user;
@Column(name="quantity")
    private int quantity;

public Cart(com.caseStudy.eCart.modals.Products items,com.caseStudy.eCart.modals.Users user,int quantity)
{
    this.items=items;
    this.user=user;
    this.quantity=quantity;
}
public Cart()
{

}

    public int getCartid() {
        return cartid;
    }

    public void setCartid(int cartid) {
        this.cartid = cartid;
    }

    public Products getItems() {
        return items;
    }

    public void setItems(Products items) {
        this.items = items;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
