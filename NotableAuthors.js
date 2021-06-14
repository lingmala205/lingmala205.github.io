 /*Create a date and time stamp 
 showing when the page was last updated.
 It ideally updates everytime it gets 
 a hit from users who access the page.*/
 var date = document.lastModified;
 document.getElementById("update").innerHTML = date;
 document.write("Last updated: " + x);
 
 
 /*Include the tooltips for the naivgation links.*/
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});