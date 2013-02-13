<!doctype html>
<head>
<meta charset="UTF-8">
<title>SeedBox Logs</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/styles.css"/>
</head>
<body>
<div id="stretch">
<div id="containerlabel">FTP Logs</div>
<div id="containerlabel">System Logs</div>
<div id="containerlabel">System Info</div>
</br>
<div id="logcontainer">
<?php
$file = fopen("/path/to/ftp.log","r");

while(! feof($file))
	{
	echo fgets($file). "<br />";
	}

fclose($file);
?>
</div>

<div id="logcontainer">
<?php
$file = fopen("/var/log/syslog","r");

while(! feof($file))
	{
	echo fgets($file). "<br />";
	}

fclose($file);
?>
</div>

<div id="logcontainer">
<?php
$file = fopen("/etc/motd","r");

while(! feof($file))
	{
	echo fgets($file). "<br />";
	}

fclose($file);
?>

</div>
<br />

<div id="containerlabel">Flexget Logs</div>
<br />
<div id="logcontainer">
<?php
$file = fopen("/path/to/search.log","r");

while(! feof($file))
	{
	echo fgets($file). "<br />";
	}

fclose($file);
?>
</div>
</div>
</body>
</html>
