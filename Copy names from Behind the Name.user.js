// ==UserScript==
// @name     Copy names from Behind the Name
// @version  1
// @grant    GM.setClipboard
// @include	 https://www.behindthename.com/names/*
// ==/UserScript==

var buttonContainerNode = document.createElement('div');
buttonContainerNode.innerHTML = '<button id="copyListToClipboard">Copy to Clipboard</button>'
buttonContainerNode.setAttribute('id', 'copyListToClipboardContainer');

var titleSection = document.getElementsByClassName('title').item(0);
titleSection.appendChild(buttonContainerNode);

document.getElementById('copyListToClipboard').addEventListener('click', ButtonClickAction)
                                                    
function ButtonClickAction(event) {
  handleNames();                                           
}

function handleNames() {
  var nameList = Array.from(document.getElementsByClassName('listname'))
  	.map((span) => span.firstChild.text)
  	.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
  	.join("\n");
  console.log(nameList);
  
	GM.setClipboard(nameList);
}