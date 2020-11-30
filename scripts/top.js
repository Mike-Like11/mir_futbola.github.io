 window.setInterval(function(){
   if(window.innerWidth>600){   
      document.querySelector('.widget').style.position="fixed";
      document.querySelector('#top_clubs').style.width="20%";
      document.querySelector('#top_clubs').style.right="0";
       document.querySelector('#real_madrid').style.width="50%";
  document.querySelector('#man_utd').style.width="50%";
  document.querySelector('#barca').style.width="50%";
      document.querySelector('.menu_list').style.display="block";
      document.querySelector('.widget').style.height="100%";
      document.querySelector('.widget').style.width="20%"; 
  }
else{
  
  if(document.querySelector('.menu_list').style.display=="block"){
  document.querySelector('#real_madrid').style.width="75%";
  document.querySelector('#man_utd').style.width="75%";
  document.querySelector('#barca').style.width="75%";
  document.querySelector('#top_clubs').style.width="75%";
   document.querySelector('#top_clubs').style.marginLeft="25%";
 }
  
  
}
},0);