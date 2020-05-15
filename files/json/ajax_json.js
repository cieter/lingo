/* five letter words */
var ajaxFive = new XMLHttpRequest();
var fiveUrl = "files/json/five_words.json";
ajaxFive.open("GET", fiveUrl, true);
ajaxFive.setRequestHeader("content-type", "application/json");
ajaxFive.onreadystatechange = function (){
    if(ajaxFive.readyState == 4 && ajaxFive.status == 200){
        var fiveContent = JSON.stringify(ajaxFive.responseText);
        console.log(fiveContent);
        return fiveContent;
        // callback(ajaxFive.responseText);
    }
}
ajaxFive.send(null);

/* six letter words */
var ajaxSix = new XMLHttpRequest();
var sixUrl = "files/json/six_words.json";
ajaxSix.open("GET", sixUrl, true);
ajaxSix.setRequestHeader("content-type", "application/json");
ajaxSix.onreadystatechange = function (){
    if(ajaxSix.readyState == 4 && ajaxSix.status == 200){
        var sixContent = JSON.parse(ajaxSix.responseText);
        console.log(sixContent);
    }
}
ajaxSix.send(null);

/* seven letter words */
var ajaxSeven = new XMLHttpRequest();
var sevenUrl = "files/json/seven_words.json";
ajaxSeven.open("GET", sevenUrl, true);
ajaxSeven.setRequestHeader("content-type", "application/json");
ajaxFive.onreadystatechange = function (){
    if(ajaxSeven.readyState == 4 && ajaxSeven.status == 200){
        var sevenContent = JSON.parse(ajaxSeven.responseText);
        console.log(sevenContent);
    }
}
ajaxSeven.send(null);

/* eleven letter words */
var ajaxEleven = new XMLHttpRequest();
var elevenUrl = "files/json/eleven_words.json";
ajaxEleven.open("GET", elevenUrl, true);
ajaxEleven.setRequestHeader("content-type", "application/json");
ajaxEleven.onreadystatechange = function (){
    if(ajaxEleven.readyState == 4 && ajaxEleven.status == 200){
        var elevenContent = JSON.parse(ajaxEleven.responseText);
        console.log(elevenContent);
    }
}
ajaxEleven.send(null);

/* twelve letter words */
var ajaxTwelve = new XMLHttpRequest();
var twelveUrl = "files/json/twelve_words.json";
ajaxTwelve.open("GET", twelveUrl, true);
ajaxTwelve.setRequestHeader("content-type", "application/json");
ajaxTwelve.onreadystatechange = function (){
    if(ajaxTwelve.readyState == 4 && ajaxTwelve.status == 200){
        var twelveContent = JSON.parse(ajaxTwelve.responseText);
        console.log(twelveContent);
    }
}
ajaxTwelve.send(null);

/* thirteen letter words */
var ajaxThirteen = new XMLHttpRequest();
var thirteenUrl = "files/json/thirteen_words.json";
ajaxThirteen.open("GET", thirteenUrl, true);
ajaxThirteen.setRequestHeader("content-type", "application/json");
ajaxThirteen.onreadystatechange = function (){
    if(ajaxThirteen.readyState == 4 && ajaxThirteen.status == 200){
        var thirteenContent = JSON.parse(ajaxThirteen.responseText);
        console.log(thirteenContent);
    }
}
ajaxThirteen.send(null);

// for(var i = 0; i < ajaxFive.responseText.length; i++)
// {
//     console.log(ajaxFive.response[i]);
// }

//document.getElementById('testarray').innerHTML = fiveContent;
// var five = selectNumberOfLetters(5);
// for (var i = 0; i < five.length; i++){
//     console.log(i);
// }
//document.getElementById('testarray').innerHTML = five;
