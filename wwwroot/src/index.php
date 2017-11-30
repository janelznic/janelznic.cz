<?php
# Data pro šablony
$data = array();

# Konfigurace
require_once("config/templates.config.php");
require_once("config/application.config.php");
require_once("src/configinit.php");

# Knihovny
require_once("src/lib/framework.php");
if ($dict["devMode"]) require_once("src/lib/dbglog.php");
require_once("src/lib/pagegen.php");
require_once("src/lib/class.smtp.php");
require_once("src/lib/class.phpmailer.php");

# Procesy
require_once("src/page.php");
?>
