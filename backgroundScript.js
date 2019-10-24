chrome.contextMenus.create({
	id: "edit-page",
	contexts: ['page', 'editable'],
	title: "Edit the content [ON / OFF]"
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	if (info.menuItemId == "edit-page") {
		chrome.tabs.executeScript({
			file: "editContent.js"
		});
	}
});
