function funcBefore () {
  $('.loading').show();
  $('#information').text('Ожидание данных...');
}

function funcSuccess (data) {
  $('.loading').hide();
  $('#information').text(data);
}


$(document).ready(function () {
  $('#load').click(function () {
    let admin = 'Admin';

    $.ajax ({
      url: 'connection.php',
      type: 'POST',
      data: ({name: admin, number: 555}),
      dataType: "html", //или может быть "text"
      beforeSend: funcBefore,
      success: funcSuccess
    });
  });

  $('#done').bind('click', function () {

    $.ajax ({
      url: 'check.php',
      type: 'POST',
      data: ({name: $('#name').val()}),
      dataType: "html",
      beforeSend: function() {
        $('#information').text('Ожидание данных...');
      },
      success: function (data) {
        if (data === 'fail') {
          alert('Имя занято');
          $('#information').text('имя Admin занято');
        } else {
          $('#information').text(data);
        }
      }
    });
  });
});