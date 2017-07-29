//main.js
//This file is designed to initialize and insert data for the database
//Most of the functionality will be pushed to other JS files

QuestionList = new Mongo.Collection('questions');//Do I place all the questions for all sections in this Collection?
    //and drill down to the appropriate question
    //OR, do I set up a collection for each course?
Content = new Mongo.Collection("content");  //This database is just to populate and push questions to the client
Course = new Mongo.Collection("courses");   //The listing of courses currently avalable

if (Meteor.isClient) {
  Meteor.subscribe('Content');
  Meteor.subscribe('QuestionList');
  Meteor.subscribe("Course");

  Template.dashboard.helpers({
    //generates the list of courses for choosing in the dashboard
    'course': function(){
        return Course.find({}, {sort: {name: 1}});
    }
  });
}


if (Meteor.isServer) {
  Meteor.publish('Content', function(){
    var currentUserId = this.userId;
    return Content.find({createdBy:currentUserId});
  });
  Meteor.publish('QuestionList', function(){
    return QuestionList.find();
  });
  Meteor.publish('Course', function(){
    return Course.find();
  });


  Meteor.startup(function() {
    Course.remove({});
    Course.insert({name: "Business Finance"});  
    Course.insert({name: "Statistics"});  
    Course.insert({name: "Investments"});

    QuestionList.remove({});
    //Need to insert a few more fields for linking up the questions and their additional content.additional
    //How do I structure?

    QuestionList.insert({
      qName: 'TVM', section: 4, qFunction: 'qNPV()'
    });
    QuestionList.insert({
      qName: 'EAR', section: 5, qFunction: 'qNPV()'
    });
    QuestionList.insert({
      qName: 'CAPM', section: 8, qFunction: 'qNPV()'
    });
    QuestionList.insert({
      qName: 'IRR', section: 9, qFunction: 'qIRR()'
    }
    );

    //The below question array is pushing into a Mongo Array, which I'm not sure how to query.
    //There has to be a way because it is nice to populate it in a Google Docs format and export the JSON
    var questionArray = 
      [
          {
              "qname": "TVM - Present Value",
              "section": 4,
              "qfunction": "qSolveR()"
          },
          {
              "qname": "TVM - Num Periods",
              "section": 4,
              "qfunction": "qSolveN()"
          },
          {
              "qname": "TVM - Discount Rate",
              "section": 4,
              "qfunction": "qSolveFV()"
          },
          {
              "qname": "TVM - Future Value",
              "section": 4,
              "qfunction": "qSolvePV()"
          },
          {
              "qname": "PV - Fixed Payments",
              "section": 4,
              "qfunction": "qSolveFixedP()"
          },
          {
              "qname": "Basic Annuity",
              "section": 4,
              "qfunction": "qSolveAnnuity()"
          },
          {
              "qname": "Effective Annual Rate",
              "section": 5,
              "qfunction": "qEar1()"
          },
          {
              "qname": "Coupon Bond",
              "section": 6,
              "qfunction": "qCouponBond1()",
              "question2": "qCouponBond2()",
              "question3": "qCouponBond3()"
          },
          {
              "qname": "Bonds Expanded",
              "section": 6,
              "qfunction": "qCouponExp()"
          },
          {
              "qname": "Floatation Costs",
              "section": 3,
              "qfunction": "qFloat1()",
              "question2": "qFloat2()",
              "question3": "qFloat3()"
          },
          {
              "qname": "Compute Yield",
              "section": 3,
              "qfunction": "qYieldQ1()",
              "question2": "qYieldQ2()",
              "question3": "qYieldQ3()",
              "question4": "qYieldQ4()"
          },
          {
              "qname": "Stock: DDM",
              "section": 7,
              "qfunction": "qDDM1()"
          },
          {
              "qname": "Stock: Constant G",
              "section": 7,
              "qfunction": "qConstG1()",
              "question2": "qConstG2()",
              "question3": "qConstG3()"
          },
          {
              "qname": "Stock: Uneven G",
              "section": 7,
              "qfunction": "qUnevenGrowth()",
              "question2": "qUnevenGrowth2()",
              "question3": "qUnevenGrowth3()"
          },
          {
              "qname": "CAPM",
              "section": 8,
              "qfunction": "qCAPM1()",
              "question2": "qCAPM2()",
              "question3": "qCAPM3()",
              "question4": "qCAPM4()"
          },
          {
              "qname": "CAPM Extension",
              "section": 8,
              "qfunction": "qCAPMext1()"
          },
          {
              "qname": "Expected Return",
              "section": 8,
              "qfunction": "qrHat()"
          },
          {
              "qname": "Standard Deviation",
              "section": 8,
              "qfunction": "qStdDev()"
          },
          {
              "qname": "Coefficient of Variation",
              "section": 8,
              "qfunction": "qCoefVar()"
          },
          {
              "qname": "NPV",
              "section": 9,
              "qfunction": "qNPV()"
          },
          {
              "qname": "IRR",
              "section": 9,
              "qfunction": "qIRR()"
          },
          {
              "qname": "IOS v. MCC",
              "section": 11,
              "qfunction": "qIOS()"
          },
          {
              "qname": "WACC",
              "section": 11,
              "qfunction": "qWACC1()",
              "question2": "qWACC2()"
          }
      ];
    QuestionList.insert(questionArray);
  });

}
