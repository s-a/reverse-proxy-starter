#!/usr/bin/env node

'use strict'

var argv = require('minimist')(process.argv.slice(2))
var proxy = require('redbird')({
	port: argv.port
})

for (let i = 0; i < argv._.length; i += 2) {
	let path = argv._[i]
	let url = argv._[i + 1]

	// Subdomains, paths, everything just works as expected
	proxy.register(path, url)
}