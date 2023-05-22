


//heading

var head=document.createElement("h1");
head.innerHTML="HOLIDAYS LIST";
//container
var div1=document.createElement("div");
div1.setAttribute("class","container-fluid");
//row1
var div2=document.createElement("div");
div2.setAttribute("class","row");
div2.append(head);
div1.append(div2);
document.body.appendChild(div1);
//main function

async function pr(){
    let ele=await fetch("https://date.nager.at/api/v3/PublicHolidays/2023/AT");
    let ele1=await ele.json();
    //console.log(ele1);
     len=ele1.length;
    for(var i=0;i<len;i++)
    {

           //div3(row)
           var div3=document.createElement("div");
           div3.setAttribute("class","row");
           div3.style.margin="100px";
           div3.style.border= "1px solid black";
           div3.style.borderRadius="20px";
           div3.style.backgroundColor="blanchedalmond";
           div3.style.padding="20px";
           //HOLIDAY NAME
           var holiday=document.createElement("h4");
           holiday.innerHTML=`Holiday name : ${ele1[i].name}`;
           holiday.style.fontFamily="cursive";
           div3.append(holiday);
           div1.append(div3);
           document.body.appendChild(div3);

           //HOLIDAY LOCAL NAME 
           var local=document.createElement("h4");
           local.innerHTML=`Holiday local name  : ${ele1[i].localName}`;
           local.style.fontFamily="cursive";
           div3.append(local);
           div1.append(div3);
           document.body.appendChild(div3);
            
           //date of the holiday
           var date=document.createElement("h4");
           date.innerHTML=`Date : ${ele1[i].date}`;
           date.style.fontFamily="cursive";
           div3.append(date);
           div1.append(div3);
           document.body.appendChild(div3);

           //global or not
           var global=document.createElement("h4");
           global.innerHTML=`Global Holiday : ${ele1[i].global}`;
           global.style.fontFamily="cursive";
           div3.append(global);
           div1.append(div3);
           document.body.appendChild(div3);

           //launch year
           var launch=document.createElement("h4");
           launch.innerHTML=`Launch Year : ${ele1[i].launchYear}`;
           launch.style.fontFamily="cursive";
           div3.append(holiday);
           div1.append(div3);
           document.body.appendChild(div3);
    }





    }
    pr();
    
    



