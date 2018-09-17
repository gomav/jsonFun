$(document).ready(function(){
    
    
    $.getJSON('data.json', function(data){
        
            var output = "";
       
       
           for(var i = 0; i <= data.courses.length; i++){

               for(key in data.courses[i]) {

                   if(data.courses[i].hasOwnProperty(key)){

                        output += '<li>' + 
                        '<a href="' + data.courses[i][key] + 
                        '">' + key + '</a>' + 
                        '</li>';   


                   }



               }



           }
       
    
       
       var update = document.getElementById('social');
       
       update.innerHTML = output;
    
        
        
        
    });// jQuery Json
    
    

    
}); // ready jQuey
        
       
    



