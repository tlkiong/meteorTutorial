TasksData = new Mongo.Collection("collectionOfData");

  if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
      taskCollection: function () {
        return TasksData.find({});
      }
    });

    // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
    Template.body.events({
      "submit .new-task": function (event) {
        // This function is called when the new task form is submited

        var text = event.target.message.value;

        TasksData.insert({
          text: text,
          createdAt: new Date() // current time
        });

        // Clear form
        event.target.message.value = "";

        // Prevent default form submit
        return false;
      }
    });
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
