<%@ page contentType="text/html; charset=UTF-8" %>
<%@ include file="header.jsp" %>
<%@ include file="sidebar.jsp" %>

<div style="margin-left: 220px; padding: 20px;">
    <h2>뉴스 수정</h2>
    <form action="/admin/news/edit/${news.id}" method="post">
        제목: <input type="text" name="title" value="${news.title}"><br>
        요약: <input type="text" name="summary" value="${news.summary}"><br>
        본문: <textarea name="content">${news.content}</textarea><br>
        카테고리: <input type="text" name="category" value="${news.category}"><br>
        이미지 업로드: <input type="file" name="imageFile" /><br/>
        또는 이미지 URL: <input type="text" name="imageUrl" value="${news.imageUrl}" /><br/>

        <!-- 시도 고정 -->
        시도:
        <input type="text" name="province" value="강원도" readonly><br>

        <!-- 시군구 선택 -->
        시군구:
        <select name="city">
            <c:forEach var="region" items="${regionList}">
                <option value="${region}" ${region == news.city ? 'selected' : ''}>${region}</option>
            </c:forEach>
        </select><br>

        날짜: <input type="date" name="publishedDate" value="${news.publishedDate}"><br>
        출처: <input type="text" name="source" value="${news.source}"><br>
        <button type="submit">수정</button>
    </form>
</div>
