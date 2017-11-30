<?php
/**
 * @name dbglog
 * @version 1.0.2
 **/
class Dbg
{
	/**
	 * Vytiskne řetězec na obrazovku
	 * @param {string} Řetězec
	 * @param {boolean} Budeme používat formátování pro odsazení?
	 **/
	public static function write($var, $p) {
		if ($p == 0) echo "<pre>";
		print_r($var);
		if ($p == 0) echo "</pre>";
	}

	/**
	 * Zaloguje řetězec do debug logu v souboru
	 * @param {string} Řetězec
	 **/
	public static function log($var) {
		$file = fopen("log/debug.log", "a");
		$output = date("[d.m.Y - H:i:s] ");
		if (empty($var)) $var = "false"; 
		$output .= print_r($var, true);
		fwrite($file, ($output."\n"));
		fclose($file);
	}
}
?>
