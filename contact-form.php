<?php
	echo "weeeeee";

	$to_email = "alex.moroz.aus@gmail.com";
	$subject = "Simple Email Test via PHP";
	$body = "Hi, This is a test email sent from PHP script";
	$headers = "From: alex.moroz.aus@gmail.com";

	if (mail($to_email, $subject, $body, $headers)) {
		header("Location: sendMessage.html");
	} else {
		echo "Email sending failed...";
	}

?>