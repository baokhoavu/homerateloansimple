<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp1.https://homerateloansimple.herokuapp.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'baokhoadinhvu@gmail.com';                 // SMTP username
    $mail->Password = '07opgTbafu46';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 2525;                                    // TCP port to connect to

    //Recipients
    $mail->email_from('info@homerateloan.com', 'Mailer');     // Add a recipient
    $mail->email_address('tealkrysta92@gmail.com');               // Name is optional

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'HomeRateLoan website customer';
    // $mail->Body = '<p>Customer from HomeRateLoan</p>' . "\n" .
    // '<p>Name: ' . $_POST['name'] . '</p>' . "\n" .
    // '<p>State: ' . $_POST['state'] . '</p>' . "\n" .
    // '<p>Rent Type: ' . $_POST['renttype'] . '</p>' . "\n" .
    // '<p>Property Type: ' . $_POST['proptype'] . '</p>' . "\n" .
    // '<p>Required Money: ' . $_POST['reqmoney'] . '</p>' . "\n" .
    // '<p>Zip: ' . $_POST['propzip'] . '</p>' . "\n" .
    // '<p>Credit: ' . $_POST['credit'] . '</p>' . "\n" .
    // '<p>Email: ' . $_POST['email'] . '</p>' . "\n" .
    // '<p>Phone: ' . $_POST['phone'] . '</p>' . "\n";
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    // $mail->Body = 'Name: ' . $_POST['name']."\n";
    // $mail->Body = 'State: ' . $_POST['state']."\n";
    // $mail->Body = 'Rent Type: ' . $_POST['renttype']."\n";
    // $mail->Body = 'Property Type: ' . $_POST['proptype']."\n";
    // $mail->Body = 'Current Loan: ' . $_POST['curloan']."\n";
    // $mail->Body = 'Property Value: ' . $_POST['propval']."\n";
    // $mail->Body = 'Required Money: ' . $_POST['reqmoney']."\n";
    // $mail->Body = 'Zip: ' . $_POST['propzip']."\n";
    // $mail->Body = 'Credit: ' . $_POST['credit']."\n";
    // $mail->Body = 'Email: ' . $_POST['email']."\n";
    // $mail->Body = 'Phone: ' . $_POST['phone']."\n";


    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    error_reporting(E_ALL); ini_set('display_errors', 1);
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
