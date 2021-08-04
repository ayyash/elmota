module.exports = function(config) {

	config.addPassthroughCopy({"src/assets": "assets"});
	config.addPassthroughCopy({"node_modules/shut/dist/css": "assets"});
	

	return  {
	  dir: {
		input: "src",
		output: "dist"
	  }
	};
  
  };