
  if ('serviceWorker' in navigator) {
    console.log("Will service worker register?");
    navigator.serviceWorker.register('/serviceworker.js').then(function(reg){
      console.log("Yes it did.");
    }).catch(function(err) {
      console.log("No it didn't. This happened: ", err)
    });
  }
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
