


<?php

$name = $_POST['name'];
$email = $_POST['email'];
$state = $_POST['state'];
$renttype = $_POST['renttype'];
$proptype = $_POST['proptop'];
$curloan = $_POST['curloan'];
$propval = $_POST['propval'];
$reqmoney = $_POST['reqmoney'];
$propzip = $_POST['propzip'];
$credit = $_POST['credit'];
$phone = $_POST['phone'];

$to = 'mton35@gmail.com';
$email_subject = "HomeRateLoan Customer: $name";
$email_body =
"You have received a new message from your website contact form.
\n\n
"."Here are the details:
\n\n
Name: $name
\n\n
Email: $email_address
\n\n
State: $state
\n\n
Rent Type: $renttype
\n\n
Property Type: $proptype
\n\n
Loan: $curloan
\n\n
Property Value: $propval
\n\n
Requested Funds: $reqmoney
\n\n
Property Zip Code: $propzip
\n\n
Credit: $credit
\n\n
Phone: $phone
\n\n
Message:
\n
Have a nice day!";


$headers = "From: info@homerateloan.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
