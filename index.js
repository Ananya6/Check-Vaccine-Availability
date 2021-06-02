const https = require('https');
var hitApi=require('./hitUrl')
var mssg=require('./sns')

exports.handler = (event,context) => {
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var today_date=dd+"-"+mm+"-2021";
    
    
    var ggn_url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=188&date="+today_date
    var south_delhi_url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=149&date="+today_date

    hitApi.hit(ggn_url,"Gurgaon")
    //hitApi.hit(south_delhi_url,"Delhi")

//   const req = https.get(ggn_url,
//         (res)=> {
//           res.on('data', chunk => {
//             dataString += chunk;
//           });
          
//           res.on('end', () => {
//             console.log("ending")
//             var allVac=JSON.parse(dataString,null,2)
//             var i=0
//               //console.log(allVac);
          
//             //console.log(allVac.centers[0].sessions[0]);
            
//             var avl_slots=[]
//             allVac.centers.forEach((center)=> {
                
//                 var name=center.name;
//                 center.sessions.forEach(session=>{
//                   //  console.log("min_age_limit: ",session.min_age_limit);
//                     var age=session.min_age_limit;
//                     var date=session.date
//                     var vaccine=session.vaccine;
//                     var slots=session.slots;
//                     var avl_dose1=session.available_capacity_dose1;
//                     var avl_dose2=session.available_capacity_dose2;
                   
//                   if(vaccine=='COVAXIN'){
//                     if(age==18){
//                       var avl_json={
//                          "No": i,
//                          "Name":name,
//                          "Date":date,
//                          "Time Slots":slots,
//                          "Qty":avl_dose1}
                      
                       
//                       var avl=JSON.stringify(avl_json)
//                       //console.log(avl_details)
//                       // avl_slots.push(avl)
                       
//                       var mySlot=i+" Center Name: "+name+" Date: "+date+" Time Slots: "+slots+" Qty: "+avl_dose1+"--";
//                       i++;
//                         //avl_slots+="------SLOT------------\n"+mySlot
//                       avl_slots.push(mySlot)
                        
//                       }
//                   }
//                 })
//              });

            
//           avl_slots=avl_slots.toString()
//           var check_string="-----SLOT------------\nhey" 
//           //mssg.handler(avl_slots)
                  
//           })
        
//         }).on('error', (e) => {
//           reject({
//               statusCode: 500,
//               body: 'Something went wrong!'
//           });
//         });
};
    
    
    //return response;

