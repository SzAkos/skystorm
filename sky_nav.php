<?
  $xml = file_get_contents('./sky_navigation.xml');
  header("Access-Control-Allow-Origin: *");
  header("Content-type: application/xml");
  header("Access-Control-Allow-Credentials: true");
  header("Content-length: " . strlen($xml));
  header("Connection: close");

  print $xml;
?>
