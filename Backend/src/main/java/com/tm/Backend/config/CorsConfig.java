 package com.tm.Backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class CorsConfig implements WebMvcConfigurer {

//   @Override
//   public void addCorsMappings(CorsRegistry registry) {
//     registry.addMapping("/**")
//         .allowedOrigins("http://localhost:5173")
//         .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//         .allowedHeaders("*");
//   }
// }

@Configuration
public class CorsConfig implements WebMvcConfigurer {
@Override
public void addCorsMappings(CorsRegistry registery) {
  registery.addMapping("/**").allowedOrigins("http://localhost:5173")
      .allowedMethods("GET", "put", "POST", "DELETE", "OPTIONS").allowedHeaders("*");
  
}
  
}