'use strict';
var r;

if(window.XMLHttpRequest){
    r = new XMLHttpRequest();

} else {
    r = new ActiveXObject('Microsoft.XMHTTP');
}

r.open('GET', 'data.json');

r.onreadystatechange = function(){
    if(r.status === 200 && r.readyState === 4){

        var data = JSON.parse(r.respondText);
        var output = "";

        for(var i = 0; i <= data.courses.length; i++){

            for(var key in data.courses[i]){

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
    }
};
//readyState event handler
r.send();
