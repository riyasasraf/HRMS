package com.hr.Backend.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class NavigationController {
    @GetMapping("/")
    public String HelloWorld(){
        return  "Hello";
    }



}
