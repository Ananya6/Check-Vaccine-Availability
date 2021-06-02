const https = require('https');
var hitApi=require('./hitUrl')
var mssg=require('./sns')

exports.handler = (event,context) => {
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var today_date=dd+"-"+mm+"-2021";
    
    // YOU CAN CHANGE THE BELOW URL DEPENDING ON YOUR CITY
    //To get stated id : https://cdn-api.co-vin.in/api/v2/admin/location/states, 
    // Put state ID in link https://cdn-api.co-vin.in/api/v2/admin/location/districts/: PUT this district id in [DISTRICT_ID] below
    //var south_delhi_url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=[DISTRICT_ID]&date="+today_date

    var ggn_url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=188&date="+today_date
    hitApi.hit(ggn_url,"Gurgaon")

};
    

