function init(){
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  
    if(!isChrome) {
        document.getElementById(browser-warning).innerHTML = '<div id="browser-warning" style="text-align: center; border: 0.45vh solid #FF0000; font-size: 2.5vh; border-radius: 1vh; width: 45vw; position: fixed; margin: 0 auto; left: 0; right: 0;">You are using a non-chromium-based browser! Some site functionality might be gone due to the gayness of other browsers.</div>';
    }
  }
