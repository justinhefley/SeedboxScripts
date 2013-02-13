var tempvar;
var transmission = "91.121.22.136:9091"
var webmin = "91.121.22.136:10000"

$(document).ready(function(){
	$('#transmission').click(function(){
		$('#embeded').fadeOut();
		doPage("91.121.22.136:9091");
		$('#embeded').fadeIn();
	});
});










function doPage()
{
    document.getElementById("#objemb").data="91.121.22.136:10000";
    document.getElementById("#objemb").src="91.121.22.136:10000";
return  
}

