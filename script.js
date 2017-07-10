




$(document).ready(function() {

  $("#mainform").submit(function(event){

       event.preventDefault();  
     // alert('it prevented')
      
      displayVals();

  });

});
   
//
//     $(document).ready(function(){
//      $("#bt1").click(function(){
//          $(".maindiv").hide(2000);
//           
//});
//});
    $(document).ready(function(){
      $("#a1").click(function(){
          $(".maindiv").show(2000);
          $("#para1").hide();
           
});
});
  
    
            function displayVals() {
            var user = $( "#uname" ).val();
            var uemail = $( "#email" ).val();
 
  // var multipleValues = $( "#multiple" ).val();
                    $( "#para1" ).html("<b>User Name:</b> " + user +"<br/>" + " <b>User Email:</b> " + uemail );
               $(".maindiv").hide(2000);
              
}
    

    




















// <script type="text/javascript">

//  function validationform()
//  {
//     passmatch();
//     validation();
//     displayinput()
   
//  }

// function passmatch()
// {
//     var pass1= document.mainform.pwd1.value;
//     var pass2= document.mainform.pwd2.value;
//      if (pass1 == pass2) 
//          {
//             return true;
//          }
      
//           else  
//           {
//             alert("password dose not match or same");
//             return false;
//           }
          
// }
    
// function validation()
// {  
//         var name=document.mainform.uname.value;  
//         var password=document.mainform.pwd1.value;  
        
        

//         if (name==null || name=="")
//         {  
//             alert("Name can't be blank");  
//             return false;  
//         }
//         else if(password.length<6)
//         {  
//              alert("Password must be at least 6 characters long.");  
//              return false;  
//          }  

//         var emailval = document.mainform.email.value;
//         var atposition = emailval.indexOf("@");
//         var dotposition = emailval.lastIndexOf(".");

//          if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
//          {
//                 alert("Please enter a valid e-mail address");
//                 return false;  
//         }
        

        
    
   
// }  






// function displayinput()
// {

//                      var a = document.getElementById("uname").value;
//                     var b = document.getElementById("email").value;
                    
//                     document.getElementById('p1').innerHTML = a;
                  
//                     document.getElementById('p2').innerHTML = b;  


// }







// </script>
