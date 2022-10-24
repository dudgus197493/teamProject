<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>지오로케이션 사용 좌표 찍기</title>
<script src="/teamproject/resources/scripts/geoLocation.js"></script>
</head>
<body>
	<h1>메인 페이지</h1>
	<form action="/teamproject/select/aroundPlace" method="GET">
        <input type="text" id="x" name="y">
        <input type="text" id="y" name="x">
        <button>탐색</button>
    </form>
</body>
</html>