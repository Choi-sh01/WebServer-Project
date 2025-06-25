<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head><title>관리자 로그인</title></head>
<body>
<h2>관리자 로그인</h2>

<form method="post" action="/admin/login">
  아이디: <input type="text" name="username"><br><br>
  비밀번호: <input type="password" name="password"><br><br>
  <button type="submit">로그인</button>
</form>

<c:if test="${not empty error}">
  <p style="color: red;">${error}</p>
</c:if>
</body>
</html>
