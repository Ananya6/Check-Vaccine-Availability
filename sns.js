
var AWS = require('aws-sdk');

exports.handler=async(slot)=>{
            console.log("SNS Publishing Start")
           
            var params = {
                Message: slot, 
                TopicArn: 'arn:aws:sns:ap-south-1:*********:VaccBOM'//Enter the SNS topic ARN here
            };
                      
            // Create promise and SNS service object
            var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
     
              await publishTextPromise // wait until the SNS task done
                         .then((data) => {
                           console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
                           console.log("MessageID is " + data.MessageId);
                         })
                         .catch((err) => {
                           console.error(err, err.stack);
                         });
                         
            
  
            console.log("SNS Publishing End");  
            
}

