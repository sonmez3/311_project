
$(document).ready(function() {
    $( "#dialog" ).dialog({
     autoOpen:true,

     
      buttons: [
       {
         text: "Continue",
         icon: "ui-icon-check",
         iconPosition: "end",
         click: function() {
           $( this ).dialog( "close" );
         }
       }
     ],
     classes:{"ui-dialog": "ui-corner-all"},
    
     hide: { effect: "fadeOut", duration: 1000 },
     show: { effect: "blind", duration: 800 }
   });
 });