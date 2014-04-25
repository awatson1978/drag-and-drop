Session.setDefault('movedElementId', null);
Session.setDefault('mouseMoveElementId', 'Hello Dropzones!');
Session.setDefault('mouseMoveX', 0);
Session.setDefault('mouseMoveY', 0);

Template.helloPage.greeting = function () {
  return "Welcome to drag-and-drop.";
};

Template.helloPage.rendered = function(){
  $(document).mousemove(function (e) {
     Session.set('movedElementId', e.target.id);
     Session.set('mouseMoveX', e.clientX);
     Session.set('mouseMoveY', e.clientY);
     //Session.set('mouseMoveElementId', document.elementFromPoint(e.clientX,e.clientY));
  });

  $('.dragDropBlock').draggable({
    stop: function(event, ui){
      //console.log(document.querySelectorAll( ":hover" ));
      console.log(document.elementFromPoint(Session.get('mouseMoveX'),Session.get('mouseMoveY')).id)
    },
    grid: [ 10, 10 ],
    opacity: 0.35
  });
  $('.dragdropzone').droppable({
    accept: ".dragDropBlock",
    drop: function(){
      $('#' + Session.get('movedElementId')).appendTo("#" + this.id);
      $('#' + Session.get('movedElementId')).css('top', '0');
      $('#' + Session.get('movedElementId')).css('left', '0');
      Session.clear('movedElementId');
    }
  });
}

Template.helloPage.getMouseMoveId = function(){
  if(Session.get('mouseMoveElementId')){
    return Session.get('mouseMoveElementId');
  }else{
    return "...";
  }
}
