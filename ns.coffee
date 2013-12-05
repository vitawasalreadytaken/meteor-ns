global = @

NS = (spec) ->
	ns = global
	for part in spec.split '.'
		ns = ns[part] ?= {}
	ns
