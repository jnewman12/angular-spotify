var app = angular.module('angularSpotify');
app.factory('Tracks', [

	function Tracks(){
	var name = '';
	var tracksList = [];
	var total = 0;
	var popularity = 0;
	var tracksTime = 0;
	var totalTracksTime = 0;

	var service = {
		addToTracks: addToTracks,
		cleartracks: cleartracks,
		getItems: getItems,
		getName: getName,
		getTracksTime: getTracksTime,
		getPopularity: getPopularity,
		deleteTrack: deleteTrack,
		makeNewTrackList: makeNewTrackList
	}
	return service;

	function addToTracks(track, trackDuration, trackPopularity) {
		// adding to playlist
		tracksList.push(track);
		tracksTime = tracksTime + trackDuration;
		popularity = popularity + trackPopularity;
	}

	function cleartracks() {
		// resetting playlist
		var name = '';
		var tracksList = [];
		var total = 0;
		var popularity = 0;
		var tracksTime = 0;
	}

	function getItems() {
		// gettting the items from tracks
		return tracksList;
	}

	function getName() {
		// get the name of the trackList
		return name;
	}

	function getTracksTime() {
		// total time of songs
		return tracksTime;
	}

	function getPopularity() {
		// get the popularity of the tracks
		return popularity;
	}

	function deleteTrack(index) {
 		if(typeof index === "number") {
 			var remove = tracksList[index];
 			totalTrackTime = totalTrackTime - remove.duration_ms;
 			popularity = popularity - remove.popularity;
 			tracksList.splice(index, 1);
 		}
 	}

	function makeNewTrackList(name, tracks, popularity, totalTracksTime) {
		// make a new playlist
		this.name = name;
		this.tracks = tracks;
		this.popularity = popularity;
		this.totalTracksTime;
	}

 }
]);
