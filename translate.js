function Translate(word, language){
    this.apikey =""; // your apikey
    this.word = word;
    this.language = language;

    // XHR OBJECT
    this.xhr = new XMLHttpRequest();
}


Translate.prototype.translateWord = function(callback){
    // ajax
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint,true);
    this.xhr.onload = () =>{
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }
        else{
            console.log("An error occured");
        }
    }
    this.xhr.send();
}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}