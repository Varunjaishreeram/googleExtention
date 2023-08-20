// Get the title of the currently active tab
function getCurrentTabTitle() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tab = tabs[0];
      let title = tab.title;
    console.log(tab,title)
      document.getElementById('titleDisplay').textContent = title;
    });
  }
  
  // Attach an event listener to the button
document.getElementById('getTitleButton').addEventListener('click', getCurrentTabTitle);
  