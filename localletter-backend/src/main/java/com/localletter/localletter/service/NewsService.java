package com.localletter.localletter.service;

import com.localletter.localletter.domain.NewsArticle;
import com.localletter.localletter.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    // 시/군/구로 뉴스 조회 (강원도 기준)
    public List<NewsArticle> getNewsByRegion(String province, String city) {
        return newsRepository.findByCityOrderByPublishedDateDesc(city);
    }

    // 시/군/구 + 카테고리로 뉴스 조회
    public List<NewsArticle> getNewsByCategory(String province, String city, String category) {
        return newsRepository.findByCityAndCategoryOrderByPublishedDateDesc(city, category);
    }

    // 시/군/구 + 키워드 검색 (제목 or 요약 포함)
    public List<NewsArticle> searchNews(String province, String city, String keyword) {
        return newsRepository.findByCityAndTitleContainingIgnoreCaseOrSummaryContainingIgnoreCase(
                city, keyword, keyword
        );
    }

    // ID로 상세 조회
    public NewsArticle getNewsById(Long id) {
        return newsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("뉴스를 찾을 수 없습니다. ID: " + id));
    }
}
