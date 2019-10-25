
if (document.body.contentEditable === 'true') {
	document.querySelectorAll('*').forEach(e => e.contentEditable = 'false');
	console.log('Done. Content is now static.');
	alert('Done. You cannnot edit content any more.');
} else {
	document.querySelectorAll('*').forEach(e => e.contentEditable = 'true');
	console.log('Content is editable. Select the option again to revert its condition. \nRefresh the browser to revert changes.');
	alert('Content is now editable. \nSelect the option again to revert its condition. \nRefresh the browser to reverse changes.');
}