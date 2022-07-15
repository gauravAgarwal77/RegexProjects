setInterval( currentTime,1000);

function currentTime() {
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let weekDay = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ];
      let today = weekDay[date.getDay()];
      let months = date.toLocaleString("default", {
        month: "long",
      });
      let year = date.getFullYear();
    let session = "AM";
  
      
    if(hours > 11){
        session = "PM";
     }
    //  let time;

    //  if(hours==9 && hours<=10){
    //   time="Breakfast";
    //  }  
    //  else if(hours==1 && hours<=3){
    //   time="Lunch";
    //  }
    //  else if(hours==7 && hours<=9){
    //   time="Dinner";
    //  }
     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;
      
     
  
    document.getElementById("hour").innerHTML= hours + ":";
    document.getElementById("min").innerHTML= minutes + ":";
    document.getElementById("sec").innerHTML= seconds ;
    document.getElementById("session").innerHTML= session;
    document.getElementById("DDY").innerHTML= today + " " + months + " " + year;
  


   
  
  }
  
 