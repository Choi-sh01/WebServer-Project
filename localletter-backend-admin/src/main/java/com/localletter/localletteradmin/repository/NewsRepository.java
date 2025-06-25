// NewsRepository.java
package com.localletter.localletteradmin.repository;

import com.localletter.localletteradmin.domain.NewsArticle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<NewsArticle, Long> {
}
