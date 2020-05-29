<?php
  if ($_POST['name'] === 'Admin') {
    echo 'fail';
  } else {
    echo $_POST['name'];
  }