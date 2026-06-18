<?php
require_once __DIR__ . '/db_config.php';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
$mysqli->set_charset('utf8mb4');

$name   = trim($_POST['username'] ?? '');
$text   = trim($_POST['review'] ?? '');
$rating = (int)($_POST['rating'] ?? 5);

if ($name && $text) {
    $sql = "INSERT INTO reviews (username, review_text, rating, ip, user_agent)
            VALUES (?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql);
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $stmt->bind_param('ssiss', $name, $text, $rating, $ip, $ua);
    $stmt->execute();
}

// редирект обратно на страницу отзывов
header("Location: reviews.html"); // или reviews.php, если там список отзывов
exit;

