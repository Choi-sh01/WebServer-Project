package com.localletter.localletter.controller;

import com.localletter.localletter.domain.NewsArticle;
import com.localletter.localletter.service.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/news")
@CrossOrigin(origins = "*")  // CORS 허용 (React와 연결)
public class NewsApiController {

    private final NewsService newsService;

    // 지역별 뉴스 리스트 조회 (필터링)
    @GetMapping
    public List<NewsArticle> getNewsList(
            @RequestParam String province,
            @RequestParam String city,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String keyword
    ) {
        if (keyword != null && !keyword.isBlank()) {
            return newsService.searchNews(province, city, keyword);
        } else if (category != null && !category.isBlank()) {
            return newsService.getNewsByCategory(province, city, category);
        } else {
            return newsService.getNewsByRegion(province, city);
        }
    }

    // 뉴스 상세 보기
    @GetMapping("/{id}")
    public NewsArticle getNewsDetail(@PathVariable Long id) {
        return newsService.getNewsById(id);
    }
}
