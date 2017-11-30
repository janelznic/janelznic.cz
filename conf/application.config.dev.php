<?php
# Routes
$config = array(
	"defaultLang" => "cs",
	"supportedLangs" => array("cs", "en"),
	"routes" => array(
		"cs" => array(
			"default" => "",
			"" => "index",
			"form" => "contact"
		),
		"en" => array(
			"default" => "",
			"" => "index",
			"form" => "contact"
		)
	),

	# SMTP server
	"SMTPenabled" => false,
	"SMTPhost" => "",
	"SMTPport" => 25,
	"SMTPauth" => false,
	"SMTPusername" => "",
	"SMTPpassword" => "",

	"MAILaddrFrom" => "",
	"MAILfromName" => "",
	"MAILtoAddr" => "",
	"MAILsubjectCont" => "",
	"MAILwordWrap" => 50
);
?>
