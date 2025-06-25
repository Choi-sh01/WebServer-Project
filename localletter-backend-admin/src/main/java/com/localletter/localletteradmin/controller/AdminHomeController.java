package com.localletter.localletteradmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminHomeController {

    @GetMapping
    public String home() {
        return "adminHome";  // /WEB-INF/views/adminHome.jsp로 이동
    }
}
