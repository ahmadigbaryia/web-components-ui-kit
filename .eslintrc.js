module.exports = {
	env: {
		browser: true,
		es2020: true,
		jest: true,
		node: true,
		amd: true,
	},
	extends: ["eslint:recommended"],
	parserOptions: {
		sourceType: "module"
	},
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
