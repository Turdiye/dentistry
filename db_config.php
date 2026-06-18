<?php

$DB_HOST = 'localhost';
$DB_USER = 'root';   // стандартный юзер в XAMPP
$DB_PASS = '1234Pas';       // у root в XAMPP по умолчанию НЕТ пароля
$DB_NAME = 'reviews_db'; // название твоей базы


$DSN = "mysql:host=$DB_HOST;port=3306;dbname=$DB_NAME;charset=utf8mb4";
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($mysqli->connect_errno) {
  error_log("DB connect error: " . $mysqli->connect_error);
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'DB connect error']);
  exit;
}
$mysqli->set_charset('utf8mb4');


$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

// для создания таблицы
// CREATE TABLE reviews (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   text TEXT NOT NULL,
//   rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
//   created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
// ) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;