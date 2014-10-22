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
		L.group("Game Running:");

        changeLevel(game.getCurrentLevel());
        startLevel();
	}

    //Level
    function getCurrentLevel(){
        return Level;
    }

    function changeLevel (_newLevel){
        Level = $.extend(true, {}, _newLevel);

        cur_scene = Level.getCurrentSceneId();
    }

	function startLevel(){
        L.log('Starting level:' + Level.getName());
        changeScene(Level.getCurrentSceneId());
	}

    //Scene
	function changeScene(_newSceneId){
        L.group("Change Scene to: "+ Level.getCurrentScene().getName());

        Level.setCurrentSceneById(_newSceneId);

        cur_scene = _newSceneId;
        Actions = Level.getActions(cur_scene);
        Dialogs = Level.getDialogs(cur_scene);
        InteractiveObjects = Level.getInteractiveObjects(cur_scene);

        Flags = Level.getFlags();

        var newScene = Level.getCurrentScene();


        Scene.changeScene(newScene.getCssClass());
        CommandBar.changeToActionsButtons(Actions);
        InteractiveObject.changeToInteractiveObjects(InteractiveObjects);

        L.groupEnd();
    }

    //ModalScene
	function openModalScene(_modalSceneId){

    }

    function closeModalScene(){

    }

    //Dialog
	function openDialog(_dialogId){
        var dialog = Dialogs[_dialogId];
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