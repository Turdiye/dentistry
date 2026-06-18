<?php

header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/db_config.php';

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
  $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
  $mysqli->set_charset('utf8mb4');

  $res = $mysqli->query("
    SELECT id, username, review_text, rating, created_at
    FROM reviews
    ORDER BY created_at DESC, id DESC
    LIMIT 50
  ");

  $rows = [];
  while ($row = $res->fetch_assoc()) {
    $row['username']    = htmlspecialchars($row['username'],    ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $row['review_text'] = htmlspecialchars($row['review_text'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $rows[] = $row;
  }

  echo json_encode(['ok'=>true,'items'=>$rows], JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
  error_log($e);
  http_response_code(500);
  echo json_encode(['ok'=>false,'items'=>[]]);
}
