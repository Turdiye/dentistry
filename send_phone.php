    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);
    $honeypot = $_POST["website"];

    if (!empty($honeypot)) {
        echo "Ошибка!";
        exit;
    }

    if (empty($name)) {
        echo "\nОшибка: имя не может быть пустым.";
        exit;
    }
    if (preg_match('/\d/', $name)) {
        echo "\nОшибка: имя не должно содержать цифры.";
        exit;
    }

    // Проверка номера
    if (empty($phone)) {
        echo "\nОшибка: номер телефона не может быть пустым.";
        exit;
    }
    if (!preg_match('/^[0-9]+$/', $phone)) {
        echo "\nОшибка: номер телефона должен содержать только цифры.";
        exit;
    }
    if (strlen($phone) < 9 || strlen($phone) > 12) {
        echo "\nОшибка: номер телефона должен содержать от 9 до 12 цифр.";
        exit;
    }

    $full_number = $country_code . $phone;

    $token = "8086631203:AAGGQ0ol7wpUca2uTvKUuGThjBRV9CdEg6U";
    $chat_id = "-4849858845";

    $text = "📞 Новая заявка:\n\n👤 Имя: $name\n\n☎️ Телефон: $full_number";

    $url = "https://api.telegram.org/bot$token/sendMessage";
    $data = ['chat_id' => $chat_id, 'text' => $text];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ]
    ];
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result) {
        echo "Спасибо! Мы получили ваши данные.";
    } else {
        echo "Ошибка: не удалось отправить данные.";
    }
}
?>
