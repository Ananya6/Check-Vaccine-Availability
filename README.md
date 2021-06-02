# Check-Vaccine-Availability

This project uses AWS eventbridge events, AWS lambda(using nodejs) and AWS SNS to notify you whenever the a slot for your desired vaccine(covaxin or covishield), age group(18+ or 45+) and dosage(dose 1 or 2) is available.

As vaccination slots get filled within 1-2 minutes of creating them, it is becoming increasing difficult to book one.

That's why I created this so that I can get email notification for just my desired slot.

Architecture:

Eventbridge event(scheduled every min) --[triggers]--> AWS Lambda function --[creates SNS if slot is available]-->SNS notifies the slot details over mail.

To create Eventbridge events: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html
Create Standard SNS topic: https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html

The SNS notification will be of the below format:
"Message" : "In Delhi :
0 Center Name: Max Hospital SESSION SITE 2 Date: 23-05-2021 COVAXIN Qty: 5--,
1 Center Name: Max Hospital SESSION SITE 2 Date: 24-05-2021 COVAXIN Qty: 2--,
2 Center Name: Max Hospital SESSION SITE 3 Date: 23-05-2021 COVAXIN Qty: 100--,
3 Center Name: Madhukar Rainbow Hospital Date: 23-05-2021 COVAXIN Qty: 50--,
4 Center Name: Madhukar Rainbow Hospital Date: 24-05-2021 COVAXIN Qty: 1--,

#vaccine#onlinevaccineslotbooking#github #aws
