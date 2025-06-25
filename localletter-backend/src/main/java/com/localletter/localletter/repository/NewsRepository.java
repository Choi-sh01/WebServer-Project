package com.localletter.localletter.repository;

import com.localletter.localletter.domain.NewsArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<NewsArticle, Long> {

    // 시/군/구로만 필터링 (강원도 기준)
    List<NewsArticle> findByCityOrderByPublishedDateDesc(String city);

    // 시/군/구 + 카테고리로 필터링
    List<NewsArticle> findByCityAndCategoryOrderByPublishedDateDesc(String city, String category);

    // 시/군/구 + 키워드 검색 (제목 or 요약 포함)
    List<NewsArticle> findByCityAndTitleContainingIgnoreCaseOrSummaryContainingIgnoreCase(
            String city, String titleKeyword, String summaryKeyword
    );
}
