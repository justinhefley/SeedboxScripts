
$(document).ready(function(){
	$('#transmission').click(function(){
		$('#embeded').fadeOut();
		$('#embeded').replaceWith('<div id="embeded"><iframe src=' + downloader + ' width="100%" height="100%" scrolling="yes"> </iframe> </div>');
		$('#embeded').fadeIn();
	});
});

$(document).ready(function(){
	$('#torrentday').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"> <iframe id="objemb" src=' + site + ' width="1300px" height="100%" scrolling="yes"> </iframe></div>');
		$('#embeded').fadeIn();
	});
});

$(document).ready(function(){
	$('#ajaxplorer').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"><object id="objemb" data=' + ajaxplorer + ' width="100%" height="100%"> <embed id="objemb" src=' + ajaxplorer + ' width="100%" height="100%"> </embed> Error: Embedded data could not be displayed. </object></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#logs').click(function(){
		$('#embeded').fadeOut('slow');
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src="http://localhost/logs.php" width="1500px" height="100%"></iframe></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#xbmc').click(function(){
		$('#embeded').fadeOut();
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src=' + xbmc + ' width="100%" height="100%"> </iframe></div>');
		$('#embeded').fadeIn();
	});
});
$(document).ready(function(){
	$('#home').click(function(){
		$('#embeded').fadeOut();
		$('#embeded').replaceWith('<div id="embeded"><iframe id="objemb" src=' + home + ' width="100%" height="100%"> </iframe></div>');
		$('#embeded').fadeIn();
	});
	$('#home').click();

});
