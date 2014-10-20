define(['levelsData', 'commandBar', 'dialogModal', 'interactiveObjects', 'modalScene', 'scene'], function(game, CommandBar, Dialog, InteractiveObject, ModalScene, Scene)
{

//Attributes

	var Level;
    var Actions;
    var InteractiveObjects;
    var Dialogs;
    var Flags;
    var cur_scene;

//Methods
	function start(){
		console.log("Starting Game");

        changeLevel(game.getCurrentLevel());
        startLevel();
	}

    //Level
    function getCurrentLevel(){
        return Level;
    }

    function changeLevel (_newLevel){
        Level = $.extend(true, {}, _newLevel);
        Actions = Level.getActions();
        Dialogs = Level.getDialogs();
        InteractiveObjects = Level.getInteractiveObjects();
        Flags = Level.getFlags();
        cur_scene = Level.getCurrentSceneId();
    }

	function startLevel(){
        changeScene(Level.getCurrentSceneId());
        console.log(Level.getCurrentSceneId());
	}

    //Scene
	function changeScene(_newSceneId){
        Level.setCurrentSceneById(_newSceneId);
        cur_scene = _newSceneId;

        var newScene = Level.getCurrentScene();

        console.log("New scene: "+ newScene.getCssClass());


        Scene.changeScene(newScene.getCssClass());
        CommandBar.changeToActionsButtons(Actions[cur_scene]);
        InteractiveObject.changeToInteractiveObjects(InteractiveObjects[cur_scene]);
    }

    //ModalScene
	function openModalScene(_modalSceneId){

    }

    function closeModalScene(){

    }

    //Dialog
	function openDialog(_sceneId, _dialogId){
        var dialog = Dialogs[_sceneId][_dialogId];
        Dialog.show(dialog);
    }
	
	function closeDialog(){
        Dialog.close();
    }

    //End Level
    function openEndLevel(){

    }

    function closeEndLevel(){

    }

//Getters

    function getFlag(_sceneId, _actionId){
        return Flags[_sceneId][_actionId];
    }

//Setters

    function setFlag(_sceneId, _actionId, _value){
        Flags[_sceneId][_actionId] = _value;
    }

//Public Interface
	return {
		start : start,
        changeScene: changeScene,
        openDialog: openDialog,
        closeDialog: closeDialog,
        openModalScene: openModalScene,
        closeModalScene: closeModalScene,
        openEndLevel: openEndLevel,
        closeEndLevel: closeEndLevel,

        getCurrentLevel : getCurrentLevel,
        getFlag: getFlag,

        setFlag: setFlag
	}
});