package com.localletter.localletteradmin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class LocalletterAdminApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(LocalletterAdminApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(LocalletterAdminApplication.class);
    }
}
