Meteor.methods({
  send_sms:function(param1, param2) {
    console.log("am here with "+number+","+sms);
    var number = param1;
    var sms = param2;
    console.log("am here with "+number+","+sms);
    var accountSid = 'AC24e561d249bf2fe910ebd773232e2a3f';
    var authToken = '03f92b8c8421b5a9be6ab38b731628cf';


      twilio = Twilio(accountSid, authToken);
        twilio.sendSms({
          to:'+91'+number, // Any number Twilio can deliver to
          from: '+1 267-396-1069', // A number you bought from Twilio and can use for outbound communication
          body: sms // body of the SMS message
        }, function(err, responseData) { //this function is executed when a response is received from Twilio
          if (err) { // "err" is an error received during the request, if any
            // "responseData" is a JavaScript object containing data received from Twilio.
            // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
            // http://www.twilio.com/docs/api/rest/sending-sms#example-1
            console.log(err);
            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."
          }
      });
  }
  
});