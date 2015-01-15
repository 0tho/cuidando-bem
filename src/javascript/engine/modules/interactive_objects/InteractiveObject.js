/* 
 This module declares the object interactive Object that
 represents one object that will be "clickable" inside a scene
 */

define([], function () {


    var counter = -1;

    /**
     * @class
     * @name Action
     * @param {string} _id
     * @param {string} _name
     * @return ObjectExpression
     */
    "use strict";
    function InteractiveObject(_id, _name) {
        counter++;
        //Attributes

        if(_id == null)
            _id = "action_"+counter;

        if(_name == null)
            _name = "";

        var id = _id;
        /**
         * @type {string}
         * @private
         *
         * @memberOf Action#
         */
        var name = _name;
        /**
         * @type {string}
         * @private
         *
         * @memberOf Action#
         */
        var cssClass = "noTexture";
        /**
         * @type {boolean}
         * @private
         *
         * @memberOf Action#
         */
        var visible = true;
        /**
         * @type {function}
         * @private
         *
         * @memberOf Action#
         */
        var actionFunction = function(){};
        /**
         * @type {boolean}
         * @private
         *
         * @memberOf Action#
         */
        var enable = true;

        //Methods

        /**
         * It runs this class actionFunction
         * @method
         * @method execute
         * @public
         *
         * @memberOf Action#
         */
        function execute() {
            actionFunction();
        }

        //Getters

        /**
         * @method
         * @method getFunction
         * @return actionFunction
         * @public
         *
         * @memberOf Action#
         */
        /*
         function getFunction() {
         return actionFunction;
         }
         */
        function getClone(){
            return new InteractiveObject(id, name)
                .setCssClass(cssClass)
                .setVisible(visible)
                .setFunction(actionFunction)
                .setEnable(enable);
        }

        function getId(){
            return id;
        }

        /**
         * @method
         * @method getName
         * @return name
         * @public
         *
         * @memberOf Action#
         */
        function getName() {
            return name;
        }

        /**
         * @method
         * @method getCssClass
         * @return cssClass
         * @public
         *
         * @memberOf Action#
         */
        function getCssClass() {
            return cssClass;
        }

        /**
         * @method
         * @method isEnabled
         * @return enable
         * @public
         *
         * @memberOf Action#
         */
        function isEnabled() {
            return enable;
        }

        /**
         * @method
         * @method isVisible
         * @return visible
         * @public
         *
         * @memberOf Action#
         */
        function isVisible() {
            return visible;
        }

        //Setters
        /**
         * @method
         * @method setEnable
         * @param {boolean} _enable
         * @public
         *
         * @memberOf Action#
         */
        function setEnable(_enable) {
            enable = _enable;
            return this;
        }

        /**
         * @method
         * @memberOf Action
         * @method setVisible
         * @param {boolean} _visible
         * @public
         *
         * @memberOf Action#
         */
        function setVisible(_visible) {
            visible = _visible;
            return this;
        }

        function setCssClass(_cssClass){
            cssClass = _cssClass;
            return this;
        }

        function setId(_id){
            id = _id;
            return this;
        }

        function setName(_name){
            name = _name;
            return this;
        }

        function setFunction(_function){
            actionFunction = _function;
            return this;
        }

        //Public interface

        return {
            execute: execute,

            getClone:getClone,
            getId: getId,
            getName: getName,
            getCssClass: getCssClass,
            isEnabled: isEnabled,
            isVisible: isVisible,

            setId: setId,
            setName: setName,
            setCssClass: setCssClass,
            setEnable: setEnable,
            setVisible: setVisible,
            setFunction: setFunction
        };
    }
    return InteractiveObject;
});
