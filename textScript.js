$(document).ready(function(){
  words = ['fire','glowing','dark','shimmer','softly','floating','depth','lightning','incandescence','sheer','lonely','flittering','mystery','breeze','ghostly','whistling','wind','rustling','crackling','broken','lamps','path','gather','onward']
  theStr = ''
  strLen = 0;
  strLen1 = 0;
  strLen2 = 0;
  rainbowCount = 0;
  for(i=0;i<10;i++){
    theStr = theStr+(words[Math.floor(Math.random() * 14)] + " ");
   
  }
  
  strLen = theStr.length;
  
  $('#flyStr').text(theStr);
  
  $('#flyStr').each(function(){
      var txt = $(this).text();
      strLen = txt.length;
      var html = '';
      var count = 0;
      for (t in txt)
      {
          html = html + '<span class = "letter" id = "letter'+count+'"'+'>' + txt[t] + '</span>';
         count += 1;
      }
      // Put the generated HTML back in the document.
      
      $(this).html(html);
     
    });
  
 
      $('.letter').mouseover(function(){

        $(this).stop(true,true).animate({color: "#fff"},700);
        $(this).animate({color: "#000"},3000);
       
      });
  
 

 var flicker = setInterval(randoGlo,250);
  
 function randoGlo(){
   var rand = Math.floor(Math.random() * strLen);
   console.log(strLen);
   console.log(rand);
   $('#letter'+rand).stop(true,true).animate({color: "#fff"},500);
   $('#letter'+rand).animate({color: "#000"},3000);
 }
  
 $('#volStr').each(function(){
      var txt = $(this).text();
      var html = '';
      var count = 0;
      strLen1 = txt.length;
      for (t in txt)
      {
          html = html + '<span class = "letter1" id = "char'+count+'"'+'>' + txt[t] + '</span>';
         count += 1;
      }
      // Put the generated HTML back in the document.
      
      $(this).html(html);
     
    });
  
 var molten = setInterval(moltenGlo,250);
  
  function moltenGlo(){
   var rand = Math.floor(Math.random() * strLen1);
   console.log(strLen1);
   console.log(rand);
   $('#char'+rand).stop(true,true).animate({color: "#f11", queue: false},2500).animate({fontSize: '1.7em'},{duration:2500, queue:false,complete:function(){
     $('#char'+rand).animate({color: "#500"},2500).animate({fontSize: '1em'},{duration: 2500, queue: false})
   }});
   //$('#char'+rand).animate({fontSize: '1.7em'},{duration: 2500, queue: false});
   //$('#char'+rand).animate({color: "#500"},2500).animate({fontSize: '1em'},{duration: 2500, queue: true});
   //$('#char'+rand).animate({fontSize: '1em'},{duration: 2500, queue: true});
 }
  
  $('#rainStr').each(function(){
      var txt = $(this).text();
      var html = '';
      var count = 0;
      strLen2 = txt.length;
      for (t in txt)
      {
          html = html + '<span class = "letter2" id = "bow'+count+'"'+'>' + txt[t] + '</span>';
         count += 1;
      }
      // Put the generated HTML back in the document.
      
      $(this).html(html);
     
    });
  
  var rainbow = setInterval(rainBo,250);
  
  function rainBo(){
    $('#bow'+rainbowCount).animate({color:"#f00"},1600); //red
    $('#bow'+rainbowCount).animate({color:"#ffa705"},1600); //orange
    $('#bow'+rainbowCount).animate({color:"##ffee00"},1600); //yello
    $('#bow'+rainbowCount).animate({color:"#0f0"},1600);
    $('#bow'+rainbowCount).animate({color:"#00edff"},1600);
    $('#bow'+rainbowCount).animate({color:"#00f"},1600);
    $('#bow'+rainbowCount).animate({color:"#e900ff"},1600);
    $('#bow'+rainbowCount).animate({color:"#fff"},1000);
    if(rainbowCount > strLen2){
      rainbowCount = 0;
    }
    else{
      rainbowCount += 1;
    }
    
  }
});