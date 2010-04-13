/******************
 * Please read the license agreement.
 * You may not remove or change this notice.
 * Do not sell this as your own work or remove this copyright notice.
 * This script is freely distributable under the terms of 
 *    an MIT-style license (http://www.opensource.org/licenses/mit-license.php)
 * Copyright Tim Tully 2006. All rights reserved.
 * 
 * FlickrAPI is a class to talk to the Flickr backend w/o 
 * using any middle tier logic. 
 * @author Tim Tully(tully_tim@yahoo.com)
 * @version 1.0
 * @constructor
 * @param {String} key This is the application key
 * @param {String} shared_secret This is the shared secret for the user
 *******/
function FlickrAPI(key, shared_secret){
   var auth_url = 'http://flickr.com/services/auth/?';
   var rest_url = '/proxy.php?yws_path=';
   var key = key;
   var shared_secret = shared_secret;
   var xmlhttp = null;

   this.getLoginURL = function(perms){
	var url = auth_url;
	var sig;
	url += "api_key=" + key + "&perms=" + perms + "&api_sig=" + getSig(perms);
	return url;
   }

/******************
 * This method calls a flickr api method using the passed hash params
 *****************/
   this.callMethodXML = function(method, params){
	return _call(method, params);
   }

   this.callMethodJSON = function(method, params){
	params['format'] = 'json';
	params['nojsoncallback'] = 1; 
	return _call(method, params);
   }

   function _call(method, params){
	var url = rest_url;
	var tmp_url = "http://api.flickr.com/services/rest?method=" + method + "&api_key=" + key;
	for(key in params){
		tmp_url += "&" + key + "=" + params[key]; 
	}
	url += encodeURIComponent(tmp_url);
	xmlhttp = xmlHttpCreate();
	xmlhttp.open("GET", url, false);
	xmlhttp.send(""); 
	if(params['format'] = 'json'){	
	   return xmlhttp.responseText;
	}
	return xmlhttp.responseXML;
   }

/*************************
 * Right now, return only medium sized photos. 
 * We can easily change this later. 
 *************************/
   this.getPhotoURL = function(photo){
	return "http://static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg";
   }

   function getSig(perms){
	var sig = shared_secret + "api_key" + key +  "perms" + perms; 
	return hex_md5(sig);
   }

   function xmlHttpCreate(){
	var req = null;
	try{
                req = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
                try{
                        req = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch(sc){
                        req=null;
                }
        }
        if(!req && typeof XMLHttpRequest != "undefined"){
                req = new XMLHttpRequest();
        }
	return req; 
   }
}
