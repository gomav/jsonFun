'use strict';
var r;

if(window.XMLHttpRequest){
    r = new XMLHttpRequest();

} else {
    r = new ActiveXObject('Microsoft.XMHTTP');
}

r.open('GET', 'data.json');

r.onreadystatechange = function (){
    if(r.status === 200) && (r.readyState === 4) {

    }


}
