addEventListeners();
function addEventListeners(){
    document.getElementById("translate-form").addEventListener("submit", translateWord);

    // change 
    document.getElementById("language").onchange=function(){
        // ınterface
    }
}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    translate.translateWord(function(){
        if(err){
            console.log(err);
        }
        else{
            console.log(response);
        }
    });

    e.preventDefault();
}