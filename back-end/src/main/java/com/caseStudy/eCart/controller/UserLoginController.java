package com.caseStudy.eCart.controller;


import com.caseStudy.eCart.Respository.productsRespositry;
import com.caseStudy.eCart.Respository.userRepository;
import com.caseStudy.eCart.modals.Products;
import com.caseStudy.eCart.modals.Users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class UserLoginController {
    @Autowired
    userRepository p1;

    @GetMapping("/validateUser")
    public String validateuser()
    {
        return "\"user validated\"";
    }
    @PostMapping(path="/addUsers", produces="application/json")
    public Users addusers(@Valid @RequestBody Users user )
    {
        return p1.save(user);
    }
    @GetMapping("/getUsers")
    public List<Users> getusers()
    {
        return p1.findAll();
    }


}


