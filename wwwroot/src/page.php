<?php
$routes = Config::get("routes");
$redirectUrl = $_SERVER["REDIRECT_URL"];
$browserLang = strtolower(substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2));

# Separate every component from URL
$URL = array_slice(explode("/", $redirectUrl), 1);
$urlLang = $URL[0];
$page = $URL[1];

# Check if selected lang in URL exists
if (is_array($routes[$urlLang])) {
	$selectedLang = $urlLang;
	if (!substr($redirectUrl, 3, 3) == "/") {
		header("HTTP/1.1 301 Moved Permanently");
		header(sprintf("Location: /%s/", $selectedLang));
		exit;
	}
} else {
	# If URL after first slash is empty
	if (!$urlLang) {
		# Check if browser language is supported
		if (is_array($routes[$browserLang])) {
			header(sprintf("Location: /%s/", $browserLang));
			exit;
		} else {
			header("HTTP/1.0 404 Not Found");
			header(sprintf("Location: /%s/", Config::get("defaultLang")));
			exit;
		}
	} else {
		# Page for this URL is not exist
		header("HTTP/1.0 404 Not Found");
		$page = new Pagegen("notice.html", $data = array("status" => 404));
	}
}

# Routing setup
if (isset($_SERVER["REDIRECT_URL"])) {
	# Set default language and page ID if needed
	$lang = $selectedLang;
	if(array_key_exists($page, $routes[$lang])) {
		$page = $routes[$lang][$page];
	} else {
		# Check if page exists
		if (!$page) {
			$page = $routes[$lang][$routes[$lang]["default"]];
		} else {
			header("HTTP/1.0 404 Not Found");
			$page = new Pagegen("notice.html", $data = array("status" => 404));
		}
	}
} else {
	$lang = $selectedLang;
	header(sprintf("Location: %s/%s", $lang, $routes[$lang]["default"]));
	exit;
}

# Include script / module for page
$modFile = "src/pg/".$page.".php";
if (file_exists($modFile)) {
	# Templates data
	$data["lang"] = $lang;
	$data["url"] = $_SERVER["REDIRECT_URL"];
	$data["pageId"] = $URL[1];

	require_once($modFile);
} else {
	header("HTTP/1.0 404 Not Found");
	$page = new Pagegen("notice.html", $data = array("status" => 404));
}
?>
