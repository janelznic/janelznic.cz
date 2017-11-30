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

	"MAILaddrFrom" => "web@janelznic.cz",
	"MAILfromName" => "www.janelznic.cz",
	"MAILtoAddr" => "jan@elznic.com",
	"MAILsubjectCont" => "Zpráva z webu od",
	"MAILwordWrap" => 50
);
?>
