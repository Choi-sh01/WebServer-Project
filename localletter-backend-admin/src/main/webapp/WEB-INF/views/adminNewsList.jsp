<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="header.jsp" %>
<%@ include file="sidebar.jsp" %>

<div style="margin-left: 220px; padding: 20px;">
    <h2>뉴스 목록</h2>

    <!-- ✅ 성공 메시지 표시 -->
    <c:if test="${not empty message}">
        <div style="color: green; font-weight: bold;">${message}</div>
        <br/>
    </c:if>

    <table border="1" cellpadding="5" cellspacing="0">
        <thead>
        <tr>
            <th>ID</th>
            <th>제목</th>
            <th>요약</th>
            <th>카테고리</th>
            <th>도시</th>
            <th>수정</th>
            <th>삭제</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="news" items="${newsList}">
            <tr>
                <td>${news.id}</td>
                <td>${news.title}</td>
                <td>${news.summary}</td>
                <td>${news.category}</td>
                <td>${news.city}</td>
                <td><a href="/admin/news/edit/${news.id}">수정</a></td>
                <td>
                    <form method="post" action="/admin/news/delete/${news.id}" onsubmit="return confirm('정말 삭제하시겠습니까?');">
                        <button type="submit">삭제</button>
                    </form>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

    <br/>
    <a href="/admin/news/register">➕ 새 뉴스 등록</a>
</div>
