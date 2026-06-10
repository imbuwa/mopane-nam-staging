<?php
$to = 'info@mopane-nam.com';
$subject = 'Website enquiry from Mopane Asset Management';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Please complete all required fields with a valid email address.';
    exit;
}

$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";
$headers = [
    'From: Mopane Website <no-reply@mopane-nam.com>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];

if (mail($to, $subject, $body, implode("\n", $headers))) {
    echo 'Thank you. Your enquiry has been sent.';
    exit;
}

http_response_code(500);
echo 'Unable to send your enquiry right now.';
