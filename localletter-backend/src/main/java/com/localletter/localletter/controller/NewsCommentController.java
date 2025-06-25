package com.localletter.localletter.controller;

import com.localletter.localletter.domain.NewsComment;
import com.localletter.localletter.repository.NewsCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/news/{newsId}/comments")
public class NewsCommentController {

    @Autowired
    private NewsCommentRepository commentRepo;

    @PostMapping
    public ResponseEntity<?> addComment(@PathVariable Long newsId, @RequestBody Map<String, String> body) {
        String content = body.get("content");
        String password = body.get("password");

        if (content == null || password == null || content.isBlank() || password.isBlank()) {
            return ResponseEntity.badRequest().body("내용과 비밀번호는 필수입니다.");
        }

        NewsComment comment = new NewsComment();
        comment.setNewsId(newsId);
        comment.setContent(content);
        comment.setPassword(password);  // ✅ 반드시 설정
        commentRepo.save(comment);
        return ResponseEntity.ok().build();
    }


    @GetMapping
    public List<NewsComment> getComments(@PathVariable Long newsId) {
        return commentRepo.findByNewsIdOrderByCreatedAtAsc(newsId);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteComment(
            @PathVariable Long newsId,
            @PathVariable Long commentId,
            @RequestBody Map<String, String> body) {

        String inputPassword = body.get("password");

        NewsComment comment = commentRepo.findById(commentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "댓글을 찾을 수 없습니다."));

        if (!comment.getNewsId().equals(newsId)) {
            return ResponseEntity.badRequest().body("뉴스 ID가 일치하지 않습니다.");
        }

        if (!comment.getPassword().equals(inputPassword)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("비밀번호가 일치하지 않습니다.");
        }

        commentRepo.delete(comment);
        return ResponseEntity.ok("댓글이 삭제되었습니다.");
    }

}
