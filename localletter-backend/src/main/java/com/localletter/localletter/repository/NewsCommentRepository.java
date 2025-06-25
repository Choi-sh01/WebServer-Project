package com.localletter.localletter.repository;

import com.localletter.localletter.domain.NewsComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NewsCommentRepository extends JpaRepository<NewsComment, Long> {
    List<NewsComment> findByNewsIdOrderByCreatedAtAsc(Long newsId);
}