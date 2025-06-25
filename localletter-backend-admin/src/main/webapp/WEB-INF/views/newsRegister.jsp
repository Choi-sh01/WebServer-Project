<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="header.jsp" %>
<%@ include file="sidebar.jsp" %>

<div style="margin-left: 220px; padding: 20px;">
  <h2>뉴스 등록 / 수정</h2>
  <form method="post" action="/admin/news/register" enctype="multipart/form-data">
    <input type="hidden" name="id" value="${news.id}" />

    제목: <input type="text" name="title" value="${news.title}" /><br/><br/>
    요약: <input type="text" name="summary" value="${news.summary}" /><br/><br/>
    본문: <textarea name="content" rows="5" cols="60">${news.content}</textarea><br/><br/>

    이미지 URL: <input type="text" name="imageUrl" value="${news.imageUrl}" /><br/><br/>
    또는 이미지 업로드: <input type="file" name="imageFile" /><br/><br/>

    카테고리:
    <select name="category">
      <option value="정책" ${news.category == '정책' ? 'selected' : ''}>정책</option>
      <option value="청년" ${news.category == '청년' ? 'selected' : ''}>청년</option>
      <option value="인프라" ${news.category == '인프라' ? 'selected' : ''}>인프라</option>
      <option value="문화" ${news.category == '문화' ? 'selected' : ''}>문화</option>
      <option value="교육" ${news.category == '교육' ? 'selected' : ''}>교육</option>
      <option value="환경" ${news.category == '환경' ? 'selected' : ''}>환경</option>
    </select><br/><br/>

    시/도:
    <select name="province">
      <option value="강원도" ${news.province == '강원도' ? 'selected' : ''}>강원도</option>
    </select><br/><br/>

    시/군/구:
    <select name="city">
      <option value="춘천시" ${news.city == '춘천시' ? 'selected' : ''}>춘천시</option>
      <option value="원주시" ${news.city == '원주시' ? 'selected' : ''}>원주시</option>
      <option value="강릉시" ${news.city == '강릉시' ? 'selected' : ''}>강릉시</option>
      <option value="동해시" ${news.city == '동해시' ? 'selected' : ''}>동해시</option>
      <option value="속초시" ${news.city == '속초시' ? 'selected' : ''}>속초시</option>
      <option value="삼척시" ${news.city == '삼척시' ? 'selected' : ''}>삼척시</option>
      <option value="홍천군" ${news.city == '홍천군' ? 'selected' : ''}>홍천군</option>
      <option value="횡성군" ${news.city == '횡성군' ? 'selected' : ''}>횡성군</option>
      <option value="영월군" ${news.city == '영월군' ? 'selected' : ''}>영월군</option>
      <option value="평창군" ${news.city == '평창군' ? 'selected' : ''}>평창군</option>
      <option value="정선군" ${news.city == '정선군' ? 'selected' : ''}>정선군</option>
      <option value="철원군" ${news.city == '철원군' ? 'selected' : ''}>철원군</option>
      <option value="화천군" ${news.city == '화천군' ? 'selected' : ''}>화천군</option>
      <option value="양구군" ${news.city == '양구군' ? 'selected' : ''}>양구군</option>
      <option value="인제군" ${news.city == '인제군' ? 'selected' : ''}>인제군</option>
      <option value="고성군" ${news.city == '고성군' ? 'selected' : ''}>고성군</option>
      <option value="양양군" ${news.city == '양양군' ? 'selected' : ''}>양양군</option>
    </select><br/><br/>

    날짜: <input type="date" name="publishedDate" value="${news.publishedDate}" /><br/><br/>
    출처: <input type="text" name="source" value="${news.source}" /><br/><br/>

    <button type="submit">저장</button>
  </form>
</div>
