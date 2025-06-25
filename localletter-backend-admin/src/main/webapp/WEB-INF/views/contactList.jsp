<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="header.jsp" %>
<%@ include file="sidebar.jsp" %>

<div style="margin-left: 220px; padding: 20px;">
    <h2>문의 목록</h2>
    <table border="1">
        <thead>
        <tr>
            <th>ID</th><th>이름</th><th>이메일</th><th>유형</th><th>내용</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="msg" items="${messages}">
            <tr>
                <td>${msg.id}</td>
                <td>${msg.name}</td>
                <td>${msg.email}</td>
                <td>${msg.type}</td>
                <td>${msg.content}</td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
