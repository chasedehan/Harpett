//videoContent.js

VideoList = new Mongo.Collection('videos');


if(Meteor.isClient) {
	Meteor.subscribe('VideoList');
	Template.videos.helpers({
		'videoListings': function(){ return VideoList.find();}
	});
}

if(Meteor.isServer){
	Meteor.publish('VideoList', function(){
		return VideoList.find();
	});

	Meteor.startup(function(){
		VideoList.remove({});
		VideoList.insert({
			listName: "Time Value of Money", link: "https://www.youtube.com/playlist?list=PLulAsAWm1FjHnj19m4stnZCEDuq88gAW6"
		});
		VideoList.insert({
			listName: "Raising Capital", link: "https://www.youtube.com/playlist?list=PLulAsAWm1FjEepCmisVgCPKayeOnjXM2u"
		});
	});

}