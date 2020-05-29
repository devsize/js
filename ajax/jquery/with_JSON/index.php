<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="jquery-3.5.1.min.js"></script>
  <script>
    $(document).ready(function () {
      $("select[name='country']").bind('change', function () {
        $("select[name='city']").empty(); // очистка элемента name="city". Для того, что бы после выбора пустого country -> city очищался
        $.get("countryCheck.php", {country: $("select[name='country']").val()}, function (data) {
          data = JSON.parse(data);
          for (let key in data) {
            $("select[name='city']").append($("<option value='" + key + "'>" + data[key] + "</option>"));
          }
        })
      });
    });
  </script>
</head>
<body>
  <label>Укажите страну</label>
  <select name="country">
    <option value="0" selected="selected"></option>
    <option value="1">Америка</option>
    <option value="2">Франция</option>
  </select>
  <label>Города</label>
  <select name="city">
    <option value="0"></option>
  </select>
</body>
</html>