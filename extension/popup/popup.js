
const button = document.getElementById("show-tab-btn");
const paragraph = document.getElementById("current-tab");
button.addEventListener("click", function() {
    console.log("BUtton Clicked")

    button.innerText = "Button Clicked"

chrome.tabs.query({
        active:true,
        currentWindow: true
    }, function(tabs){
        console.log("TAbsss", tabs)
const tab = tabs[0]; 
    console.log("Tab Url", tab.url)
    paragraph.innerText = tab.url;
    }

)
    
})



