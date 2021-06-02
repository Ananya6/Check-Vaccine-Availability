const https = require('https');
var mssg=require('./sns')

exports.hit=(url,district)=>{
  let dataString = '';
    
  const req = https.get(url,
        (res)=> {
          res.on('data', chunk => {
            dataString += chunk;
          });
          
          res.on('end', () => {
            
            var allVac=JSON.parse(dataString,null,2)
            var i=0//center counter
            
            var avl_slots=[]
            
            var centers=allVac.centers
            
            if(typeof centers !== 'undefined'){
              centers.forEach((center)=> {
                
                var name=center.name;
                if(typeof center.sessions !== 'undefined' && center.sessions.length > 0){
                  center.sessions.forEach(session=>{
                      var age=session.min_age_limit;
                      var date=session.date
                      var vaccine=session.vaccine;
                      var avl_dose1=session.available_capacity_dose1;
                      var avl_dose2=session.available_capacity_dose2;
                     
                    // ---CHANGE DESIRED AGE AND VACCINE TYPE HERE--
                    if(age==18&&vaccine=='COVAXIN'){
                      if(avl_dose1>0){// CHANGE DESIRED DOSE HERE
                        
                        var mySlot=i+" Center Name: "+name+" "+" Date: "+date+vaccine+" Qty: "+avl_dose1+"--";
                        i++;
                        avl_slots.push(mySlot)
  
                        }
                   // }
                  })
                }else{
                  console.log("No sessions in center "+name+" available")
                }
             });
            }else{
              console.log("No centers in city available"+ centers.length)
            }

          
          if(typeof avl_slots !== 'undefined' && avl_slots.length > 0){
             avl_slots="In "+district+" :"+avl_slots.toString()
             mssg.handler(avl_slots)
          }else{
            console.log("No slots avl")
          }        
          })
        
        }).on('error', (e) => {
          console.log("error: "+e)
        });
        
 
}
