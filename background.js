// Listen for active tab changes
chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab && tab.url) {
        // Check if the URL is a YouTube URL
        if (tab.url.includes('youtube.com') || tab.url.includes('youtu.be')) {
          console.log("Active YouTube tab URL:", tab.url);
          chrome.storage.local.set({ activeTabURL: tab.url }, () => {
            console.log("Active YouTube URL saved!");
          });
        } else {
          console.log("Active tab is not YouTube. Skipping URL:", tab.url);
        }
      }
    });
  });
  
  // Listen for tab updates (if the URL changes dynamically)
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      // Check if the updated URL is a YouTube URL
      if (changeInfo.url.includes('youtube.com') || changeInfo.url.includes('youtu.be')) {
        console.log("Updated YouTube tab URL:", changeInfo.url);
        chrome.storage.local.set({ activeTabURL: changeInfo.url }, () => {
          console.log("Updated YouTube URL saved!");
        });
      } else {
        console.log("Updated tab is not YouTube. Skipping URL:", changeInfo.url);
      }
    }
  });

// // If you need to retrieve the stored URL in your popup or content script, use:

// chrome.storage.local.get("activeTabURL", (data) => {
//     console.log("Stored active tab URL:", data.activeTabURL);
// });