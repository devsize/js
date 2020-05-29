<?php

/*function factorial($n) {
  if ($n <= 1) {
    return 1;
  } else {
    return $n * factorial($n - 1);
  }
}*/

function factorial($n) {
  for ($i = $n; $i <= $n; $i--) {
    if ($i <= 1) {
      return 1;
    } else {
      return $i * factorial($i - 1);
    }
  }
}

echo factorial(7);