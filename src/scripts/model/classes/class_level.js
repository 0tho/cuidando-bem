define([], function (){
	return function Level(_name, _isEndOfLevelFunction, _nextLevelFunction){
		//Attributes

		var name = _name;
        var isEndOfLevelFunction = _isEndOfLevelFunction;
        var nextLevelFunction = _nextLevelFunction;

        var scenes = [];
        var modalScenes = [];

        var flags = [];

		var currentScene = 0;
		var initialScene = 0;

		//Methods

		//Getters

		function getName(){
			return name;
		}

		function getActions(_sceneId){
			return scenes[_sceneId].getActions();
		}

		function getDialogs(_sceneId){
			return scenes[_sceneId].getDialogs();
		}

		function getInteractiveObjects(_sceneId){
			return scenes[_sceneId].getInteractiveObjects();
		}

        function getScene(_sceneId){
            return scenes[_sceneId];
        }
        function getFlags(){
            return flags;
        }
        function getFlag(_flagId){
            return flags[_flagId];
        }

		function getInitialScene(){
			return scenes[initialScene];
		}

        function getCurrentScene(){
            return scenes[currentScene];
        }

        function getCurrentSceneId(){
            return currentScene;
        }

		function isEndOfLevel(){
			return isEndOfLevelFunction();
		}

		function getNextLevel(){
			return nextLevelFunciton();
		}	

		//Setters

		function setInitialScene(_initialScene){
			initialScene = _initialScene;
			currentScene = _initialScene;
		}

        function setCurrentSceneById(_newScene){
            currentScene = _newScene;
        }

		function registerScene(_scene){
			scenes.push(_scene);
			L.log("registering scene: ", _scene);
		}

		function registerAction(_action, _sceneId){
			scenes[_sceneId].registerAction(_action);
		}

        function registerInteractiveObject(_interactiveObject, _sceneId){
            scenes[_sceneId].registerInteractiveObject(_interactiveObject);
        }

		function registerDialog(_dialog, _sceneId){
            scenes[_sceneId].registerDialog(_dialog);
		}

		function registerFlag(_flag){
			flags.push(_flag);
		}


		//Public interface
		return {
			getName: getName,
			getActions: getActions,
            getFlag: getFlag,
			getFlags: getFlags,
			getInteractiveObjects: getInteractiveObjects,
			getDialogs: getDialogs,

            getInitialScene: getInitialScene,

            getCurrentScene: getCurrentScene,
            getCurrentSceneId: getCurrentSceneId,
            getScene: getScene,

			isEndOfLevel: isEndOfLevel,
			getNextLevel: getNextLevel,

			setInitialScene: setInitialScene,
            setCurrentSceneById: setCurrentSceneById,


			registerScene: registerScene,
			registerAction: registerAction,
			registerDialog: registerDialog,
			registerFlag: registerFlag,
			registerInteractiveObject: registerInteractiveObject
		}
	}
});