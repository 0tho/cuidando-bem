/**
 * The module stage is responsible to change and control the "screen" presented to the user.
 * For the module work it is needed to register "views" and "controllers" before calling the method start
 *
 * A view is a html file, and a controller is a js file that is responsible to make its view work.
 * To bind all events to the view, as for example button clicks.
 * Because this project uses require.js every call to a new "screen" will asynchronously load the new view and controller
 *
 * @name Stage
 * @module
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define(function () {
    console.info("Stage - module loaded");
    //Imports
    var Errors = {
        undefinedContainer: "'container' is undefined and Stage can't continue without a place to load its content"
    };

    /**
     * An array that stores all Screen objects
     * @private
     * @type {Array}
     *
     * @memberOf module:Stage
     */
    var screens = [];

    /**
     * Path used as base for all html(views) files
     * @private
     * @type {string}
     *
     * @memberOf module:Stage
     */
    var htmlPath;
    /**
     * Path used as base for all js(controllers) files
     * @private
     * @type {string}
     *
     * @memberOf module:Stage
     */
    var controllerPath;

    /**
     * Container should be an jquery selector string relative to the main html file. The selected element will be used
     * as base for all other elements that the module stage will append.
     * @private
     * @type {string}
     *
     * @memberOf module:Stage
     */
    var containerSelector;

    var startingScreenId = 0;
    /**
     * This function is called to init this module. It checks if an id was passed to the module and changes the screen
     * to the starting screen. That is also required to be registered.
     * @method start
     * @public
     *
     * @memberOf module:Stage
     */
    function start() {
        if(containerSelector == undefined)
            throw new Error(Errors.undefinedContainer);

        changeScreen(startingScreenId);
    }

    /**
     * This class stores the name of the page, its html path and its controller path
     * @class Screen
     * @param {string} _name
     * @param {string} _htmlPage
     * @param {string} _controllerName
     * @return ObjectExpression
     * @private
     *
     * @memberOf module:Stage
     */
    function Screen(_name, _htmlPage, _controllerName) {

        /**
         * The screen name
         * @private
         * @type {string}
         *
         * @memberOf module:Stage.Screen
         */
        var name = _name;
        /**
         * The screen html path
         * @private
         * @type {string}
         *
         * @memberOf module:Stage.Screen
         */
        var htmlPage = _htmlPage;
        /**
         * The screen controller path
         * @private
         * @type {string}
         *
         * @memberOf module:Stage.Screen
         */
        var controllerName = _controllerName;

        /**
         * @method getHtmlPage
         * @return {string} htmlPage
         * @public
         *
         * @memberOf module:Stage.Screen
         */
        function getHtmlPage() {
            return htmlPage;
        }

        /**
         * @method getControllerName
         * @return {string} controllerName
         * @public
         *
         * @memberOf module:Stage.Screen
         */
        function getControllerName() {
            return controllerName;
        }

        return {
            getHtmlPage: getHtmlPage,
            getControllerName: getControllerName
        }
    }

    /**
     * Adds a screen object to screens array
     * @method registerScreen
     * @param {string} _name
     * @param {string} _htmlPage
     * @param {string} _controller
     * @public
     *
     * @memberOf module:Stage
     */
    function registerScreen(_name, _htmlPage, _controller) {
        console.log('\tAdding Screen: ', _name, _htmlPage, _controller);
        screens.push(new Screen(_name, _htmlPage, _controller));
    }

    /**
     * This function changes the screen that is rendered
     * @method changeScreen
     * @param {int} nextScreenId
     * @public
     *
     * @memberOf module:Stage
     */
    function changeScreen(nextScreenId) {
        var nextScreen = screens[nextScreenId];

        //console.log('text!'+htmlPath+nextScreen.getHtmlPage());


        require(['text!' + htmlPath + nextScreen.getHtmlPage(), controllerPath + nextScreen.getControllerName()], function (page, controller) {
            console.log("Actual Screen Name: " + nextScreen.getControllerName());
            $(containerSelector).empty();
            $(containerSelector).append(page);
            controller.load();
        });
    }

    /**
     * Sets the base html path
     * @method setHtmlPath
     * @param {string} _path
     * @public
     *
     * @memberOf module:Stage
     */
    function setHtmlPath(_path) {
        htmlPath = _path;
    }

    /**
     * Container setter

     * @method setContainer
     * @param {string} _id
     * @public
     *
     * @memberOf module:Stage
     */
    function setContainer(_id){
        containerSelector = _id;
    }

    /**
     * This function sets the first screen to be loaded when the start method is called

     * @method setContainer
     * @param {number} _id
     * @public
     *
     * @memberOf module:Stage
     */
    function setStartingScreenId(_id){
        startingScreenId = _id;
    }

    /**
     * Container getter

     * @method getContainer
     * @public
     *
     * @memberOf module:Stage
     */
    function getContainer(){
        return containerSelector;
    }

    /**
     * Sets the base controller path
     * @method setControllersPath
     * @param {string} _path
     * @public
     *
     * @memberOf module:Stage
     */
    function setControllersPath(_path) {
        controllerPath = _path;
    }

    return {
        start: start,
        registerScreen: registerScreen,
        changeScreen: changeScreen,

        setHtmlPath: setHtmlPath,
        setControllersPath: setControllersPath,
        setStartingScreenId: setStartingScreenId,

        setContainer: setContainer,
        getContainer: getContainer
    }
});