var global = this;

NS = function (spec) {
	var ns = global;
	var parts = (spec || '').split('.');
	var i, part;

	for (i = 0; i < parts.length; i++) {
		part = parts[i];
		if (!ns[part]) {
			ns[part] = {};
		}
		ns = ns[part];
	}
	return ns;
};
