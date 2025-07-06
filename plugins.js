$(document).ready(function() {					
		path = document.location.href.substring(0, document.location.href.indexOf("Help%20Plugins")) + "/Help/";
		$( ".body-container" ).prepend( $( '<p class="backLink"><a class="backLink" href=""><img class="backLink" src=""></img> &#160;Back to Design Studio help</a></p>' ));
		$('a.backLink').attr('href', path + "Default.htm");
		$('img.backLink').attr('src', path + "Content/icon.png");
	});


function searchIt() {
	var sStr = $('#sStr').val();
	var srPath = document.location.href.substring(0, document.location.href.indexOf("Help%20Plugins")) + "/Help/Content/search_results.htm?q=" + sStr;
	document.location = srPath;
}