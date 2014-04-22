Template.hello.greeting = function () {
  return "Welcome to drag-and-drop.";
};

Template.hello.rendered = function(){
  $('#redPanel').draggable();
  $('#greenPanel').draggable();
  $('#bluePanel').draggable();
}

Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});
