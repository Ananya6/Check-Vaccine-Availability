
var AWS = require('aws-sdk');
// var df=require('./demofunction')

exports.handler=async(slot)=>{
            console.log("SNS Publishing Start")
           // AWS.config.update({region: 'ap-south-1'});
            var params = {
                Message: slot, /* required */
                TopicArn: 'arn:aws:sns:ap-south-1:439529839215:VaccBOM'
            };
                      
                      // Create promise and SNS service object
            var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
            
            console.log("Main Start")
            
              await publishTextPromise // wait until the task done
                         .then((data) => {
                           console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
                           console.log("MessageID is " + data.MessageId);
                         })
                         .catch((err) => {
                           console.error(err, err.stack);
                         });
                         
            
  
            console.log("SNS Publishing End");
            //df.call()
            
}

