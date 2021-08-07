

const del = require("del");
del.sync("./dist");
const dom = require('./src/_codes/dom');
const jsonFilter = require('./src/_codes/json');


module.exports = function(config) {

	config.addPassthroughCopy({"src/assets": "assets"});
	config.addPassthroughCopy({"node_modules/shut/dist/css": "assets"});
	
	// config.addGlobalData("key", "value");

	// config.addShortcode("dom", dom);

	config.addFilter("dom", dom);
	config.addFilter("json", jsonFilter);

	return  {
	  dir: {
		input: "src",
		output: "dist"
	  }
	};
  
  };