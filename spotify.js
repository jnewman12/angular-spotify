// // the file that returns data from spotify, and manipulates it
// app.factory('Spotify', [
// 	'$http', 
var app = angular.module('angularSpotify');
app.factory('Spotify', [
	'$http', 
	function($http) {
		var service = {
		  getTracks: getTracks,
	  	  formatSearchQuery: formatSearchQuery
		}
		return service;

		function getTracks(query) {
		// 	//input could be replaced w/ adding something as a param, and passing that in instead of input.value
		// 	// var input = document.getElementById('song-search');
		// 	// return $http.get('https://api.spotify.com/v1/search?query=' + query + '&type=track');
		// 	//  $letsTry = $('.song-img').clone().attr('class', 'image').css('background', 'url('+response.tracks.items[i].album.images[1].url+')')
		// 	//  $('#song-results').append($letsTry);
		// 	// var ourButton = document.getElementById('search');
		// 	// var input = document.getElementById('song-search');
		// 	// ourButton.onclick = function(e) {
		// 	// 	return $http.get("https://api.spotify.com/v1/search?query=" + input.value + "&offset=0&limit=21&type=track")
		// 	// }
		// var ourButton = document.getElementById('search');
		// var input = document.getElementById('song-search');
		// ourButton.onclick = function(e) {
		// 	e.preventDefault();
		// 	$.ajax({
		// 	url: "https://api.spotify.com/v1/search?query=" + input.value + "&offset=0&limit=21&type=track",
			
		// 	success: show = function(response) {
		// 	for (var i = 0; i < 22; i++) {
		// 		console.log(response)
		// 		playSong = response.tracks.items[i].preview_url
		// 		$letsTry = $('.song-img').clone().attr('class', 'image').css('background', 'url('+response.tracks.items[i].album.images[1].url+')')
		// 		$('#song-results').append($letsTry);
		// 		// $('.image').onclick = function(){
		// 		// 	song = new Audio(playSong)
		// 		// 	console.log("here I am")
		// 		// 	song.play();
		// 		// }

		// 		// try {
		// 		// 	console.log(response.albums.items[i].album.images[i].url)
		// 		// } catch(err) {
		// 		// 	console.log("ERROR", err)
		// 		// }

		// 		// ADD IMAGE / SONG INFO AFTER
		// 		// $(".image").mouseover(function() {
		// 		// var songInfo = response.albums.items[i].name
		// 		//  console.log("success");
		// 	 //  })
		// 			}
		// 		  }
		// 	    });
		// 	}
			return $http.get('https://api.spotify.com/v1/search?q=' + query + '&type=track');
		}

		function formatSearchQuery(query) {
			var search = query.split(' ');
			var result = '';

			for(var i = 0; i < search.length; i++) {
				if(i === search.length - 1) {
					result += search[i];
				} else {
					result = result + seach[i] + '%20';
				}
				return result;
			}
		}

	}
])
