/**
 *
 * @name Stage_Controller
 * @module
 */
define(['text!../html/container.html'], function (container) {

    //Imports
    var Errors = require('Errors');


    /**
     * An array that stores all Screen objects
     * @private
     * @type {array}
     *
     * @memberOf module:Stage_Controller
     */
    var screens = [];
    /**
     * The path where the stage controller will look for the html pages
     * @private
     * @type {string}
     *
     * @memberOf module:Stage_Controller
     */
    var htmlPath;
    /**
     * The path where the stage controller will look for the js controllers
     * @private
     * @type {string}
     *
     * @memberOf module:Stage_Controller
     */
    var controllerPath;
    /**
     * container should be an id on the html page to be the base for all other html content
     * @private
     * @type {string}
     *
     * #memberOf module:Stage_Controller
     */
    var containerId;

    /**
     * This function is called to init this module
     * @method start
     * @public
     *
     * @memberOf module:Stage_Controller
     */
    function start() {
        if(containerId != undefined)
            $('#' + containerId).append(container);
        else
            throw new Error(Errors.undefinedContainer);
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
     * @memberOf module:Stage_Controller
     */
    function Screen(_name, _htmlPage, _controllerName) {

        /**
         * The screen name
         * @private
         * @type {string}
         * @private
         *
         * @memberOf module:Stage_Controller.Screen
         */
        var name = _name;
        /**
         * The screen html path
         * @private
         * @type {string}
         * @private
         *
         * @memberOf module:Stage_Controller.Screen
         */
        var htmlPage = _htmlPage;
        /**
         * The screen controller path
         * @private
         * @type {string}
         * @private
         *
         * @memberOf module:Stage_Controller.Screen
         */
        var controllerName = _controllerName;

        /**
         * @method getHtmlPage
         * @return {string} htmlPage
         * @public
         *
         * @memberOf module:Stage_Controller.Screen
         */
        function getHtmlPage() {
            return htmlPage;
        }

        /**
         * @method getControllerName
         * @return {string} controllerName
         * @public
         *
         * @memberOf module:Stage_Controller.Screen
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
     * @method addScreen
     * @param {string} _name
     * @param {string} _htmlPage
     * @param {string} _controller
     * @public
     *
     * @memberOf module:Stage_Controller
     */
    function addScreen(_name, _htmlPage, _controller) {
        L.log(['Adding Screen: ', _name, _htmlPage, _controller], 1);
        screens.push(new Screen(_name, _htmlPage, _controller));
    }

    /**
     * This function changes the screen that is rendered
     * @method changeScreen
     * @param {int} nextScreenId
     * @public
     *
     * @memberOf module:Stage_Controller
     */
    function changeScreen(nextScreenId) {
        var nextScreen = screens[nextScreenId];

        //L.log('text!'+htmlPath+nextScreen.getHtmlPage());


        require(['text!' + htmlPath + nextScreen.getHtmlPage(), controllerPath + nextScreen.getControllerName()], function (page, controller) {
            L.log("Actual Screen Name: " + nextScreen.getControllerName());
            $('#stage').empty();
            $('#stage').append(page);
            controller.load();
        });
    }

    /**
     * Sets the base html path
     * @method setHtmlPath
     * @param {string} _path
     * @public
     *
     * @memberOf module:Stage_Controller
     */
    function setHtmlPath(_path) {
        htmlPath = _path;
    }

    /**
     * Container setter
     *
     * @param _id
     */
    function setContainer(_id){
        containerId = _id;
    }

    function getContainer(){
        return container;
    }

    /**
     * Sets the base controller path
     * @method setControllersPath
     * @param {string} _path
     * @public
     *
     * @memberOf module:Stage_Controller
     */
    function setControllersPath(_path) {
        controllerPath = _path;
    }

    return {

        start: start,
        addScreen: addScreen,
        changeScreen: changeScreen,

        setHtmlPath: setHtmlPath,
        setControllersPath: setControllersPath,

        setContainer: setContainer,
        getContainer: getContainer
    }
});