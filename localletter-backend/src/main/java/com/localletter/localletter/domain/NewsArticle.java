package com.localletter.localletter.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
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
}
