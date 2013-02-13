
$(document).ready(function(){
	$('#transmission').click(function(){
		$('#embeded').fadeOut();
		$('#embeded').replaceWith('<div id="embeded"><iframe src="http://91.121.22.136:9091" width="100%" height="100%" scrolling="yes"> </iframe> </div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#torrentday').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"> <iframe id="objemb" src="http://www.torrentday.com" width="1300px" height="100%" scrolling="yes"> </iframe></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#xspeeds').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"> <iframe id="objemb" src="http://www.xspeeds.com" scrolling="yes" width="1300px" height="100%"> </iframe> </div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#ajaxplorer').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"><object id="objemb" data=http://91.121.22.136/ajaxplorer width="100%" height="100%"> <embed id="objemb" src=http://91.121.22.136/ajaxplorer width="100%" height="100%"> </embed> Error: Embedded data could not be displayed. </object></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#logs').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src="http://91.121.22.136/logs.php" width="1500px" height="100%"></iframe></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#mediacenter').click(function(){
		$('#embeded').fadeOut();
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src="http://dahef34.dyndns.org:8000/dav/volume1_public/Movies" width="100%" height="100%"> </iframe></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#xbmc').click(function(){
		$('#embeded').fadeOut();
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src="http://dahef34.dyndns.org:8085" width="100%" height="100%"> </iframe> </div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#couch').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src=http://91.121.22.136:7000 width="100%" height="100%"> </iframe></div>');
		$('#embeded').fadeIn();
	});
});
<?php
// Location of Bittorrent Client
$downloader='http://localhost:9091';

// Location of Marascino Install
$home='http://localhost:7000';

// Location of Ajaxplorer Install
$ajaxplorer='http://localhost/ajaxplorer';

// Location of Torrent Site
site=http://www.bittorrent.com
$name="Bittorrent";

// Remote XBMC Install
//  This will require that you have enabled the proper
//  UPNP on XBMC and that you have the port forwarded
//  in your router.
$xbmc='http://user.dyndns.org:port';

?>
