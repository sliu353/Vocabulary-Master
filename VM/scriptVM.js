debugger;

$( document ).ready(
	function(){
		$( "body" ).append("<div id=\"toggle-button\" class=\"switch\"><input id=\"cmn-toggle-1\" class=\"cmn-toggle cmn-toggle-round\" type=\"checkbox\"><label for=\"cmn-toggle-1\"></label></div>");
		$("#cmn-toggle-1").change(function() {
			if(this.checked) {
				$("body").append("<div id=\"searchTextbox\"> <input style=\"border: none; margin: 0; padding: 0 5px 0 15px;\" type=\"text\" id=\"fname\" ><input type=\"button\" value=\"⚲\"></div>");
				document.onmouseup = function() {
					var selection = getSelectionText();
					if(selection != "" && selection != null){
						$.ajax({
							url:  'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + selection,
							async: true,
							headers:{
								app_id: 'db09e080',
								app_key: '738473d9f2ea3a8967f5a861e0386819'
							},
							success: function(result){
								//alert(result);
								alert(result.results[0].id);
							}
						});
					}
				};
			}
			else{
				$("#searchTextbox").remove();
				document.onmouseup = null;
			}
		});
	}
)

function getDefinitionBlock(result){
	var block = "";
	for( this_result in result.results){
		//for(def in this_result.
		//	block += ""
	}
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
	}
		/*
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
	*/
    return text;
}

