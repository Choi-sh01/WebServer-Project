package com.localletter.localletteradmin.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/admin/**") // /admin/** 전체 감시
                .excludePathPatterns(
                        "/admin/login", "/admin/logout", "/admin/css/**", "/admin/js/**"
                ); // 로그인, 로그아웃, 정적자원은 제외
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // /images/** 요청을 uploaded-images 폴더에서 제공
        registry.addResourceHandler("/images/**")
                .addResourceLocations("file:uploaded-images/");
    }
}
