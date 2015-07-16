//injecting the mainctrl w/ the spotify & track services
var app = angular.module('angularSpotify');
app.controller('MainCtrl', [ 'Spotify', 'Tracks', '$log', '$q', '$scope', '$http',
 function(Spotify, Tracks, $log, $q, $scope){

	var self = this;
 	self.addSongToPlaylist = addSongToPlaylist;
 	self.clear = clear;
 	self.name = 'Playlist';
 	self.trackList = Tracks.trackList;
 	self.search = search;
 	self.removeTrack = removeTrack;
 	self.popularity = 0;
 	self.totalTrackTime = 0;
 	self.query = '';


 	function addSongToPlaylist(track, trackDuration, trackPopularity) {
 		Track.addToTracks(track, trackDuration, trackPopularity);
 		self.popularity = Track.getPopularity();
 		self.totalTrackTime = Track.getTracksTime();
 		self.searchText = '';
 	}

 	function clear() {
 		Track.clearTracks();
 		updateTrackForm();
 	}

 	function search(query) {
 		console.log("hi");
	  	var deferred = $q.defer();
		var formatted = Spotify.formatQuery(query);

		Spotify
			.getTracks(formatted)
			.then(function(res){
				var tracks = res.data.tracks.items;
				deferred.resolve(tracks);
			})
			.catch(function(err){
				console.log(err);
			})


	  	return deferred.promise;
 	}

 	function removeTrack(index) {
 		Playlist.removeTrack(index);
 		self.totalTrackTime = Tracks.getTracksTime();
 		self.popularity = Tracks.getPopularity();
 	}


 	function updateTrackForm() {
 		self.name = Track.getName();
 		self.trackList = Track.getItems();
 		self.popularity = Track.getPopularity();
 		self.totalTrackTime = Track.getTracksTime();
 	}

  }
])


