window.onload = function () {
  let email = document.querySelector('input[name="email"]');
  let phone = document.querySelector('input[name="phone"]');
  let name = document.querySelector('input[name="name"]');

  document.querySelector('#send').onclick = function () {
    let params = `email=${email.value}&phone=${phone.value}&name=${name.value}`;
    ajaxPost(params);
  }
};

function ajaxPost(params) {

  let request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      if (request.responseText === '1') {
        document.querySelector('#result').innerHTML = 'Отправка формы прошла успешно!';
        document.querySelector('form').style.display = 'none';
      } else {
        document.querySelector('#result').innerHTML = request.responseText;
      }
    }
  };

  request.open('POST', 'validation.php');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //если мы не указываем
  // multipart-form/data, данная(application/x-www-form-urlencoded) кодировка используется по умолчанию,
  // что бы отображать правильно все спецсимволы вместо %-ов, ? и т.д.
  request.send(params);// в POST запросе мы обязаны передать параметры в методе send
}