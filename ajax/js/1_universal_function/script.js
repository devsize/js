window.onload = function () {
  document.querySelector('#show_ip').onclick = function () {
    ajaxGet('ip.php', function (data) {
      console.log(data);
    });
    ajaxGet('ip.php?id=12&a=b&hz=nz', function (data) {
      document.querySelector('#my_ip').innerHTML = data;
    }); //отправка с параметрами
  }
};

function ajaxGet(url, callback) {
  let f = callback || function(data) {};

  let request = new XMLHttpRequest();

  request.onreadystatechange = function() { // сначала подвешиваем событие, приготовились и потом отправляем
    // request.readyState // 0 - new
    // request.readyState // 1 - open
    // request.readyState // 2 - send
    // request.readyState // 3 - частично пришел ответ
    // request.readyState // 4 - ответ пришел полностью
    if (request.readyState === 4 && request.status === 200) {
      f(request.responseText);
    }
  };

  request.open('GET', url);
  request.send();
}