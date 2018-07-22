<?php

echo "hi";
ini_set('display_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set('Etc/UTC');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\POP3;

// require '/vendor/autoload.php';
// require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';
// require 'src/POP3.php';

$name = $_POST['name'];
$state = $_POST['state'];
$renttype = $_POST['renttype'];
$proptype = $_POST['proptype'];
$reqmoney = $_POST['reqmoney'];
$zipcode = $_POST['zipcode'];
$credit = $_POST['credit'];
$email = $_POST['email'];
$phone = $_POST['phone'];


$mail = new PHPMailer();

$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 587;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = 'testbaokhoa@gmail.com';
//Password to use for SMTP authentication
$mail->Password = 'test123test123';
//Set who the message is to be sent from
$mail->setFrom('testbaokhoa@gmail.com');
//Set an alternative reply-to address
$mail->addReplyTo('testbaokhoa@gmail.com');
//Set who the message is to be sent to
// $mail->addAddress('mton35@gmail.com');
$mail->addAddress('testbaokhoa@gmail.com');
//Set the subject line
$mail->Subject = 'Home Rate Loan Website Customer';
$mail->Body = '<p>Customer from HomeRateLoan</p>' .
'<br' .
'<p>Name: ' . $_POST['name'] . '</p>' .
'<p>State: ' . $_POST['state'] . '</p>' .
'<p>Rent Type: ' . $_POST['renttype'] . '</p>' .
'<p>Property Type: ' . $_POST['proptype'] . '</p>' .
'<p>Required Money: ' . $_POST['reqmoney'] . '</p>' .
'<p>Zipcode: ' . $_POST['zipcode'] . '</p>' .
'<p>Credit: ' . $_POST['credit'] . '</p>' .
'<p>Email: ' . $_POST['email'] . '</p>' .
'<p>Phone: ' . $_POST['phone'] . '</p>';
// $mail->Body = 'This is my test';
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
// $mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually
// $mail->AltBody = 'This is a plain-text message body';
//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');
//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
?>
