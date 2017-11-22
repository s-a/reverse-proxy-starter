#!/usr/bin/env node

'use strict'

var argv = require('minimist')(process.argv.slice(2))
var proxy = require('redbird')({
	port: argv.port
})

require('dns').lookup(require('os').hostname(), function (err, address, fam) {
	if (err) {
		throw err
	}
	for (let i = 0; i < argv._.length; i += 2) {
		let path = argv._[i].replace('{local-ip}', address)
		let url = argv._[i + 1].replace('{local-ip}', address)

		// Subdomains, paths, everything just works as expected
		proxy.register(path, url)
	}
})