<?php
define("CONFIG", serialize($config));
define("DICT", serialize($dict));

/**
 * Načte konfiguraci a umožní k ní přístup odkudkoliv
 **/
class Config
{
	public static function get($key) {
		$config = unserialize(CONFIG);
		return $config[$key];
	}

	public static function dict($key) {
		$dict = unserialize(DICT);
		return $dict[$key];
	}
}
?>
