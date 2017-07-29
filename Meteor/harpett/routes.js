//routes.js

Router.route('/signUp');
Router.route('/login');

//The below router is setting it up to display the relevant content for each page
Router.route('/dashboard');

Router.route('/courses/:name',{
	name: 'courseHome',
	template: 'courseHome',
	data: function(){
		var currentCourse = this.params.name;
		return Course.findOne({name: currentCourse});
		//Index the question collection appropriately so that they pulled in the right direction
		//I should be pulling the collection data from this point and returning it appropriately
	},
	onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});


Router.route('/practice'); //Defines the home page for practice so they can select; its basically unused right now
Router.route('/practice/:name', {
	template: 'practice',
	data: function(){
		console.log(this.params.name);
		var currentCourse = this.params.name;
		return Course.findOne({name: currentCourse});
	},
	onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});
Router.route('/videos'); //Defines the home page for videos so they can select; its basically unused right now
Router.route('/videos/:name', {
	template: 'videos',
	data: function(){
		var currentCourse = this.params.name;
		return Course.findOne({name: currentCourse});
	},
	onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});
Router.route('/quiz'); //Defines the home page for quizzes so they can select; its basically unused right now
Router.route('/quiz/:name', {
	template: 'quiz',
	data: function(){
		console.log(this.params.name);
		var currentCourse = this.params.name;
		return Course.findOne({name: currentCourse});
	},
	onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});
Router.route('/otherContent'); //Defines the home page for other content so they can select; its basically unused right now
Router.route('/otherContent/:name', {
	template: 'otherContent',
	data: function(){
		console.log(this.params.name);
		var currentCourse = this.params.name;
		return Course.findOne({name: currentCourse});
	},
	onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});

Router.route('/contact');

Router.route('/', {
	name: 'home',
	template: 'home'
});
Router.configure({
	layoutTemplate: 'main'
});