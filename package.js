Package.describe({
	summary: 'Simple namespacing helper.'
});

Package.on_use(function (api, where) {
	where = where || ['client', 'server'];
	api.add_files('ns.js', where);
	api.export('NS', where);
});
