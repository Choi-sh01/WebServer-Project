package com.localletter.localletteradmin.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class NewsArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String summary;

    @Column(length = 10000)
    private String content;

    private String imageUrl;
    private String category;
    private String province;
    private String city;

    private LocalDate publishedDate;

    private String source;

    public NewsArticle() {}

    // Getter & Setter 생략 가능 (Lombok 없이 직접 작성해도 OK)
    // 혹은 Lombok을 사용할 경우 @Getter, @Setter 추가
}
