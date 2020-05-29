<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Jquery AJAX</title>
  <script src="jquery-3.5.1.min.js"></script>
  <script src="script.js"></script>
</head>
<body>
  <input type="text" id="name" placeholder="Введите имя">
  <input type="button" id="done" value="Готово">
  <p id="load" style="cursor: pointer">Загрузить данные</p>
  <div id="information" style="white-space:pre"></div>
  <img src="./img/load.gif" class="loading" alt="loading" style="width: 10%; display: none">
</body>
</html>