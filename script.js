const text = "THIS IS A AUTO WRITE TEXT USING JAVA SCRIPT";

let index = 0;

function writetext(){
    document.body.innerText = text.slice(0, index);
    index++;

    if (index > text.length -1 ) {
        index = 0;
    }
}

setInterval(writetext,70);