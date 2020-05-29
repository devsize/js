<?php
if ($_GET['country'] == 1) {
    echo json_encode([
      '1' => 'Вашингтон',
      '2' => 'Сиетл'
    ]);
} elseif ($_GET['country'] == 2) {
  echo json_encode([
    '3' => 'Париж',
    '4' => 'Марсель'
  ]);
}
