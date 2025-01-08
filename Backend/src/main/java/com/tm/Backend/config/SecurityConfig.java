package com.tm.Backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .authorizeRequests(authz -> authz.requestMatchers("/api/status").permitAll() 
            .anyRequest().authenticated() 
        ).formLogin(form -> form.disable());
    return http.build();
  }
}
