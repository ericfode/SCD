var photoSet;
$(document).ready(function(){
	var $pane = $('#pane')
	var apiKey = '821bf131b7af5daeff4520798ee4d3a2';
	var setID = '72157623725089265';

	$.getJSON('http://api.flickr.com/services/rest/?'+
		'&method=flickr.photosets.getPhotos&api_key=' +
		 apiKey + '&photoset_id='+ setID  + 
		 '&per_page=6&page=1&format=json&jsoncallback=?',function(response){
	var round =0;
	var outPic;
	var $first = $('.thumb');
	photoSet=response.photoset;
	jQuery.each(response.photoset.photo,function(index,value){
		outPic = value;
		round++;
		
		var path = 'url(http://farm'+
									value.farm +
									'.static.flickr.com/'+
									value.server +
									'/' + value.id + '_' +value.secret + '_' + 't' + '.jpg)'
		$first.css("background-image",path);
		$first.addClass(round.toString());
		$first = $first.next();
	});
		var path = 'url(http://farm'+
									outPic.farm +
									'.static.flickr.com/'+
									outPic.server +
									'/' + outPic.id + '_' +outPic.secret + '_' + 'm' + '.jpg)'
		$('#pane').css("background-image",path);
	
	$('.thumb').mouseover(function(){
	var num = $(this).attr('class').split(' ').slice(-1);
	var index = parseInt(num);
	var outPic = photoSet.photo[index];
	var path = 'url(http://farm'+
									outPic.farm +
									'.static.flickr.com/'+
									outPic.server +
									'/' + outPic.id + '_' +outPic.secret + '_' + 'm' + '.jpg)'
	$('#pane').css("background-image",path);	

});
	});
});


	

