$(function(){
    
    $.getJSON('http://edwincodecollege.com/data.json', function(data){
        
        var template = $('#carimagestemplate').html();
        
        var html  = Mustache.to_html(template, data);
        
        $('.carimages').html(html);
        
        $('.carimages').cycle({
            
            fx : 'fade',
            pause: 1,
            next: '#next',
            prev: '#prev',
            speed : 1000,
            timeout : 1000
            
        
        });
        
        
    });
     
    
});