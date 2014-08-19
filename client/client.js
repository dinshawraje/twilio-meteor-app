Template.input.events = {
  'click input#send' : function () {
    console.log('here');
    
    var number = document.getElementById("number").value;
    var sms = document.getElementById("sms").value;
    Meteor.call("send_sms",number,sms, function(){});
    // Messages.insert({number: number,sms: sms});
  }
  
};

