<?php
# Functions
function getAge($birthDate) {
	# Rozdělíme datum do jednotlivých proměnných
	list($birthYear, $birthMonth, $birthDay) = explode("-", $birthDate);

	# Spočítáme rozdíl
	$yearDiff = date("Y") - $birthYear;
	$monthDiff = date("m") - $birthMonth;
	$dayDiff = date("d") - $birthDay;

	# Pokud narozeniny nenastaly tento rok
	if ($dayDiff < 0 && $monthDiff < 0)
		$yearDiff--;
	return $yearDiff;
}

# JS files
$jsFiles = array();
if ($dict["devMode"]) {
	$jsFileList = file_get_contents("config/jsfiles.conf");
	$jsFiles = array_filter(explode("\n", $jsFileList), "strlen");
} else {
	array_push($jsFiles, "all.js");
}
$data["jsFiles"] = $jsFiles;

# Reference
$refJSON = file_get_contents("config/references.json");
$supportedLangs = Config::get("supportedLangs");
$refs = json_decode($refJSON, true);

foreach ($refs as $k => $v) {
	if ($refs[$k]["type"] != "banner") {
		foreach ($supportedLangs as $thisLang) {
			if (isset($refs[$k][$thisLang])) {
				foreach ($refs[$k][$thisLang] as $index => $value) {
					$refs[$k][$index] = $value;
				}
				unset($refs[$k][$thisLang]);
			}
		}
	}
}

# Nasetujeme si proměnné
$data["age"] = getAge("1987-09-15");
$data["references"] = $refs;
$data["references_json"] = json_encode($refs);

# Slovník
if ($lang == "cs") {
	$dictFile = "config/czech.dict.php";
} else {
	$dictFile = "config/english.dict.php";
}

# Vygenerování šablony
//$page = new Pagegen("index.html", $data, array("dict" => $dictFile, "debug" => true));
$page = new Pagegen("index.html", $data, array("dict" => $dictFile));
exit;
?>
