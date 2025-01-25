package com.Backend.Hr.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class NavigationController {

    @GetMapping("/hello")
    static  String HelloWorld(){
        System.out.println("hello world");
        return "hello";
    }

}
