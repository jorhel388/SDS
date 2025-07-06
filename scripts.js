
$(document).ready(function() {

// PLUGIN SETUP
var myPlugins = getPluginRegistry();


// plugin folders must be in same folder as Design Studio help inside "Help Plugins" folder
//path = document.location.href.substring(0, document.location.href.indexOf("Design_Studio")) + "Help Plugins/"; //this is the original script from Scott
path = document.location.href.substring(0, document.location.href.lastIndexOf("/Help/")) + "/Help Plugins/";


// MENU
// adds plugins menu as last menu item
// does not run if plugin list above is empty
if (Object.keys(myPlugins).length > 0) { 
	$("ul.navigation").on("loaded", function () {
		$('ul.navigation').append('<li class="has-children" data-mc-id="4"><a href="javascript:void(0);">Plugins</a><ul class="sub-menu"></ul></li>');
		$.each( myPlugins, function( name, url ) {
			$('[data-mc-id="4"] ul.sub-menu').append("<li><a href='" + path + url + "/Default.htm'>" + name + "</a></li>");
		});
	});
}


// SEARCH RESULTS				
// adds plugin search result iframes to "plugins" div
// only runs in search results topic
// "icon.png" is stored in Content folder (Design Studio and each plugin)
fURL = window.location.pathname;
var filename = fURL.substring(fURL.lastIndexOf('/')+1);
if (filename == "search_results.htm") {
	if (Object.keys(myPlugins).length > 0) { 
		$(".main-section").on("loaded", function () {
			$.each( myPlugins, function(name, url) {
				nameID = name.replace(/\s+/g, '-').toLowerCase();
				icn = path + url + "/Content/icon.png";
				url = path + url + "/Content/search_results.htm";
				$('#plugins').append('<h2><img src="' + icn + '" /> ' + name + ' <button id="' + nameID + '"  onclick="expColl(\'#' + nameID + '\')">Collapse</button></h2><div class="results"><iframe id="' + nameID + '" src="' + url + location.search + '" width="100%" style="border: none"></iframe><div>');
			});
		});
	}

	$("button#searchPane").click(function() { expCollSP("#searchPane"); });
}

});


// expand/collapse Design Studio search results
function expCollSP(id) {
boxID = "div" + id;
	$(boxID).css('overflow-y', 'scroll');
	if ($(boxID).height() == 112) { $(boxID).animate({height: "37px"}); $("button" + id).html('Expand'); }
	else if ($(boxID).height() < 600) { $(boxID).animate({height: "600px"}); $("button" + id).html('Collapse'); }
	else if ($(boxID).height() >= 600) { $(boxID).animate({height: "37px"}); $("button" + id).html('Expand'); }
}


// expand/collapse plugin search results
// separate in case plugins need different functionality
function expColl(id) {
boxID = "iframe" + id;
	$(boxID).css('overflow-y', 'scroll');
	if ($(boxID).height() == 112) { $(boxID).animate({height: "37px"}); $("button" + id).html('Expand'); }
	else if ($(boxID).height() < 600) { $(boxID).animate({height: "600px"}); $("button" + id).html('Collapse'); }
	else if ($(boxID).height() >= 600) { $(boxID).animate({height: "37px"}); $("button" + id).html('Expand'); }
}