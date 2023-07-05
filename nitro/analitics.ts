export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook('render:html', (html, { event }) => {
		// ADD you any analitics here
		html.bodyAppend.push('<!--  -->');
	});
});