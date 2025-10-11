<?php
$form = FW::validPostData(array("name", "email", "message", "code"));

# Are all required fields not empty?
$emptyFields = array();
foreach ($form as $key => $value) {
	if (!$value) array_push($emptyFields, $key);
}

if (count($emptyFields)) {
	# JSON fields are empty
	$status = 400;
	$err = "emptyFields";
} else {
	if (!preg_match("/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/", $form["email"])) {
	//if ($form["email"], FILTER_VALIDATE_EMAIL) {
		# Email is not valid
		header("HTTP/1.1 400 Bad Request");
		exit;
		$status = 400;
		$err = "emailNotValid";
	} else {
    header("HTTP/1.1 403 Forbidden");
    exit;
    $status = 403;
    $err = "spam";

		// if ($form["code"] != "idclip") {
		// 	# Access denied (antiSPAM)
		// 	header("HTTP/1.1 403 Forbidden");
		// 	exit;
		// 	$status = 403;
		// 	$err = "spam";
		// } else {
		// 	# Send email
		// 	$fromEmail = Config::get("MAILaddrFrom");
		// 	$subject = Config::get("MAILsubjectCont") . " " . $_POST["name"];
		// 	$message = $_POST["message"];
		// 	$to = Config::get("MAILtoAddr");

		// 	$headers = "From: " . $fromEmail . "\r\n" .
		// 		"Reply-To: " . $fromEmail . "\r\n" .
		// 		"X-Mailer: PHP/" . phpversion();
		// 	$headers .= 'MIME-Version: 1.0' . "\r\n";
		// 	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

		// 	if (mail($to, $subject, $message, $headers)) {
		// 		$status = 200;
		// 	} else {
		// 		$status = 500;
		// 	}
		// }
	}
}

# Data pro šablony
$data["status"] = $status;
$data["error"] = $err;
$data["emptyFields"] = $emptyFields;

# Vygenerování šablony
$page = new Pagegen("contact.json", $data, array("content_type" => "application/json"));
exit;
?>
