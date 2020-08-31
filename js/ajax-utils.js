(function(global) {
	var ajaxUtils = {};

	function getRequestObject() {
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest);
		}
		else if(window.ActiveXObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			gloabl.alert("Ajax is not supported!");
			return (null);
		}
	}
	
	ajaxUtils.sendGetRequest = 
		function(requestUrl,responseHandler) {
			var request = getRequestObject();
			//setting the request parameters
			request.onreadystatechange = 
				function(){
					handleResponse(request,responseHandler,isJsonResponse);	// function called when it comes back from the request
				}
			request.open("GET",requestUrl,true);				// Asynchronous request
			request.send(null);  //for POST only
		};

	function handleResponse(request,responseHandler,isJsonResponse) {
		if((request.readystate==4) && (request.status==200)) { // make sure we are at the last 4th state
			responseHandler(request);		//pulling the request i.e. response of the server
		}

		if(isJsonResponse==undefined){
			isJsonResponse=true;
		}

		if(isJsonResponse) {
			responseHandler(JSON.parse(request.responseText));
		} else {
			responseHandler(request.responseText);
		}
	}

	global.$ajaxUtils = ajaxUtils;

})(window);