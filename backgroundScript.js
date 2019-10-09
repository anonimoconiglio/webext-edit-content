browser.contextMenus.create({
	id: "edit-page",
	title: "Edit the content [ON / OFF]"
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
	if (info.menuItemId == "edit-page") {
		browser.tabs.executeScript({
			file: "editContent.js"
		});
	}
});

