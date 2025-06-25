package com.localletter.localletteradmin.controller;

import com.localletter.localletteradmin.domain.NewsArticle;
import com.localletter.localletteradmin.repository.NewsRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/news")
public class AdminNewsController {

    private final NewsRepository newsRepository;

    // 🔍 뉴스 목록
    @GetMapping("/list")
    public String list(Model model) {
        List<NewsArticle> articles = newsRepository.findAll();
        model.addAttribute("newsList", articles);
        return "adminNewsList";
    }

    // 📝 뉴스 등록 폼
    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        List<String> regionList = getGangwonRegions();
        model.addAttribute("news", new NewsArticle());
        model.addAttribute("regionList", regionList);
        return "newsRegister";
    }

    // 📝 뉴스 등록 처리
    @PostMapping("/register")
    public String register(@ModelAttribute NewsArticle news,
                           @RequestParam("imageFile") MultipartFile imageFile,
                           RedirectAttributes redirectAttributes) throws IOException {

        news.setProvince("강원도");

        if (!imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);
            news.setImageUrl(imageUrl);
        } else if (news.getImageUrl() == null || news.getImageUrl().isBlank()) {
            news.setImageUrl(null);
        }

        newsRepository.save(news);
        redirectAttributes.addFlashAttribute("message", "뉴스가 성공적으로 등록되었습니다.");
        return "redirect:/admin/news/list";
    }

    // ✏️ 뉴스 수정 폼
    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        NewsArticle article = newsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid news ID: " + id));
        List<String> regionList = getGangwonRegions();
        model.addAttribute("news", article);
        model.addAttribute("regionList", regionList);
        return "newsRegister";
    }

    // ✅ 뉴스 수정 처리
    @PostMapping("/edit/{id}")
    public String edit(@PathVariable Long id,
                       @ModelAttribute NewsArticle updatedNews,
                       @RequestParam("imageFile") MultipartFile imageFile,
                       RedirectAttributes redirectAttributes) throws IOException {

        NewsArticle original = newsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid news ID: " + id));

        original.setProvince("강원도");
        original.setCity(updatedNews.getCity());
        original.setTitle(updatedNews.getTitle());
        original.setSummary(updatedNews.getSummary());
        original.setContent(updatedNews.getContent());
        original.setCategory(updatedNews.getCategory());
        original.setPublishedDate(updatedNews.getPublishedDate());
        original.setSource(updatedNews.getSource());

        if (!imageFile.isEmpty()) {
            String imageUrl = saveImage(imageFile);
            original.setImageUrl(imageUrl);
        } else if (updatedNews.getImageUrl() != null && !updatedNews.getImageUrl().isBlank()) {
            original.setImageUrl(updatedNews.getImageUrl());
        }

        newsRepository.save(original);
        redirectAttributes.addFlashAttribute("message", "뉴스가 성공적으로 수정되었습니다.");
        return "redirect:/admin/news/list";
    }

    // 🗑️ 뉴스 삭제
    @PostMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        newsRepository.deleteById(id);
        return "redirect:/admin/news/list";
    }

    // 📍 강원도 시군구 목록
    private List<String> getGangwonRegions() {
        return List.of(
                "춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시",
                "홍천군", "횡성군", "영월군", "평창군", "정선군", "철원군",
                "화천군", "양구군", "인제군", "고성군", "양양군"
        );
    }

    // 🖼 이미지 저장 메서드
    private String saveImage(MultipartFile imageFile) throws IOException {
        String uploadDir = System.getProperty("user.dir") + "/uploaded-images/";

        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        String originalFilename = imageFile.getOriginalFilename();
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String newFilename = UUID.randomUUID().toString() + extension;
        File destination = new File(uploadDir + newFilename);
        imageFile.transferTo(destination);

        // DB에는 /images/파일명 형태로 저장
        return "/images/" + newFilename;
    }



}
