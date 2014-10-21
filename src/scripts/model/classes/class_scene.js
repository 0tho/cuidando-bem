/* 
This module declares the object type scene that represents one of the rooms inside the game.

Each scene may have more than one interactive Object that will be declared later.

Each scene has a background image
*/
define([], function(){
	return function Scene(_name, _cssClass, _load, _unload){
		//Attributes

		var name = _name;
		var cssClass = _cssClass;

		var loaderFunction = _load;
		var unloadFunction = _unload;
		
		//Methods

		function onLoad()
		{
			L.log("Scene "+name+" loader function");
			loaderFunction();
		}
		function onUnload()
		{
			L.log("Scene "+name+" unload function");
			unloadFunction();
		}
		
		//Getters

		function getName()
		{
			return name;
		}

		function getCssClass()
		{
			return cssClass;
		}
		
		//Setters
		
		//Public interface
		return {			
			getName: getName,
			getCssClass: getCssClass,
			onLoad: onLoad,
			onUnLoad: onUnload			
		}
		
	}
});
