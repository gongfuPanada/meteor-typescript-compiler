Package.describe({
	name: 'meteortypescript:compiler',
	summary: 'TypeScript compiler for Meteor',
	git: 'https://github.com/meteor-typescript/meteor-typescript-compiler.git',
	version: '3.2.2'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.0.1');
	api.imply([
		'barbatus:typescript@0.3.3'
	]);
});
