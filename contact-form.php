<?php
if(!empty($_POST["send"])) {
	$name = $_POST["name"];
    $email = $_POST["email"];
	$telefone = $_POST["telefone"];
	$message = $_POST["message"];
	$toEmail = "arthur.alentejo228@gmail.com";

	$mailHeaders = "Name: " . $name .
	"\r\n Email: ". $email  .
	"\r\n Phone: ". $telefone  .
	"\r\n Message: " . $message . "\r\n";

	if(mail($toEmail, $name, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	} else {
        $message = "Error";
    }
return $message;
}
?>

