var linki;
document.getElementById('submit').onclick = function() {
    callInject(decodeURI(document.getElementById('imgLink').value))

}

function callInject(injectLink){
    console.log(injectLink);
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.executeScript(null, {
            code: "var linkImage = '"+ injectLink +"';"
        }, function() {
        chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log("injected!"))
        });
    });
}

