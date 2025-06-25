package com.localletter.localletteradmin.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class AdminLoginController {

    // 로그인 페이지
    @GetMapping("/login")
    public String showLoginForm() {
        return "adminLogin";
    }

    // 로그인 처리
    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        HttpServletRequest request,
                        Model model) {
        // 하드코딩된 관리자 계정 (추후 DB로 확장 가능)
        if ("admin".equals(username) && "1234".equals(password)) {
            HttpSession session = request.getSession();
            session.setAttribute("adminLogin", true);
            return "redirect:/admin/home";
        } else {
            model.addAttribute("error", "아이디 또는 비밀번호가 올바르지 않습니다.");
            return "adminLogin";
        }
    }

    // 로그아웃
    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:/admin/login";
    }

    // 로그인 성공 시 진입할 홈 페이지
    @GetMapping("/home")
    public String showAdminHome(HttpServletRequest request) {
        if (request.getSession().getAttribute("adminLogin") == null) {
            return "redirect:/admin/login";
        }
        return "adminHome";
    }
}
