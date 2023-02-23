//================================================
/*
MIT License

Fullscreen, #1 Zoom and Dark Mode more options will get in one
Copyright (C) 2023 hemanta gayen
www.downloadhub.cloud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
//================================================

chrome.tabs.onUpdated.addListener(function () {getTab();})
// Fires when the active tab in a window changes.
chrome.tabs.onActivated.addListener(function () {getTab();})

async function getTab() {
  chrome.tabs.query({active: true, currentWindow: true, url: "*://*.youtube.com/*"}, function(tabs) {
    var currentTab = tabs[0];
    const isTabAffected = Boolean(currentTab?.url);
    if (isTabAffected){
        chrome.action.setPopup({
          popup: "data/interface/index.html"
        });
      chrome.action.setIcon({
          path: {
            32: "data/icons/icon-32.png",
            38: "data/icons/icon-38.png",
            128: "data/icons/icon-128.png",
            64: "data/icons/icon-64.png"
          }
      });
    }else{
        chrome.action.setPopup({
          popup: ""
        });

        chrome.action.setIcon({
          path: {
            32: "data/icons/icon-32-d.png",
            38: "data/icons/icon-38-d.png",
            128: "data/icons/icon-128-d.png",
            64: "data/icons/icon-64-d.png"

          }
        });
    }
  })
}



chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "1",
      title: "\u2665 Rate Me \u2026",
      contexts: ["action"]
    });

    chrome.contextMenus.create({
      id: "2",
      title: "\u266b What's New \u2026",
      contexts: ["action"]
    });

    chrome.contextMenus.create({
      id: "3",
      title: "\u2615\ufe0e Donate \u2026",
      contexts: ["action"]
    });

    chrome.contextMenus.create({
      id: "4",
      title: "\u260e Feedback \u2026",
      contexts: ["action"]
    });
});
async function contextClick(info, tab) {
  const { menuItemId } = info

  if (menuItemId == '1') {
    chrome.tabs.create({url:`https://chrome.google.com/webstore/detail/${chrome.runtime.id}/reviews`})
  }
  if (menuItemId == '2') {
    chrome.tabs.create({url:`https://www.downloadhub.cloud/2022/12/ad-blocker.html`})
  }
  if (menuItemId == '3') {
    chrome.tabs.create({url:`https://www.downloadhub.cloud/2023/02/FullScreen.html?reason=support`})
  }
  if (menuItemId == '4') {
    chrome.tabs.create({url:`https://www.downloadhub.cloud/2023/02/FullScreen.html#report`})
  }
}

chrome.contextMenus.onClicked.addListener(contextClick);


