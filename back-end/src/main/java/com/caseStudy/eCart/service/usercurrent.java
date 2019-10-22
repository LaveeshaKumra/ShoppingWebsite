
package com.caseStudy.eCart.service;

import com.caseStudy.eCart.Respository.userRepository;
import com.caseStudy.eCart.modals.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;
@Service
public class usercurrent {
    @Autowired
    private userRepository userRepository;

//    public Optional<Users> CurrentUser(Principal principal) {
//        String username = principal.getName();
//        return userRepository.findByUsername(username);
//    }
//
//    public int getUserrId(Principal principal) {
//        String username = principal.getName();
//        return userRepository.findByUsername(username).get().getUserid();
//    }
//
//    public String getUserRole(Principal principal) {
//        return  userRepository.findByUsername(principal.getName()).get().getRole();//.getroleid();
//    }
//
    public Users getUserProfile(Principal principal) {
        Optional<Users> op= userRepository.findByUsername(principal.getName());
        return op.get();
    }




}
