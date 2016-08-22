/*
 This file is part of Cuidando Bem.

 Cuidando Bem is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Cuidando Bem is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Cuidando Bem.  If not, see <http://www.gnu.org/licenses/>.
 */
define([], function() {

  var counter = -1;

  /**
   * A class that defines actions and its behaviour
   * @class
   * @name Action
   * @param {string} _id
   * @param {string} _name
   * @return ObjectExpression
   *
   * @author Otho - Marcelo Lopes Lotufo
   */
  "use strict";
  function Action( _id, _name ) {
    counter++;
    // Attributes

    if ( _id == null ) {
      _id = "action_" + counter;
    }

    if ( _name == null ) {
      _name = "";
    }

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
    var onClickFunction = function() {
    };
    /**
     * @type {boolean}
     * @private
     *
     * @memberOf Action#
     */
    var enable = true;

    // Methods

    /**
     * It runs this class actionFunction
     * @method
     * @method execute
     * @public
     *
     * @memberOf Action#
     */
    function execute() {
      onClickFunction();
    }

    // Getters

    /**
     * @method
     * @method getFunction
     * @return actionFunction
     * @public
     *
     * @memberOf Action#
     */

    function getFunction() {
      return onClickFunction;
    }

    function getClone() {
      return new Action( id, name )
        .setCssClass( cssClass )
        .setVisibility( visible )
        .onClick( onClickFunction )
        .setEnable( enable );
    }

    function getId() {
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

    // Setters
    /**
     * @method
     * @method setEnable
     * @param {boolean} _enable
     * @public
     *
     * @memberOf Action#
     */
    function setEnable( _enable ) {
      enable = _enable;
      return this;
    }

    /**
     * @method
     * @method setVisibility
     * @param {boolean} _visible
     * @public
     *
     * @memberOf Action#
     */
    function setVisibility( _visible ) {
      visible = _visible;
      return this;
    }

    function setCssClass( _cssClass ) {
      cssClass = _cssClass;
      return this;
    }

    function setId( _id ) {
      id = _id;
      return this;
    }

    function setName( _name ) {
      name = _name;
      return this;
    }

    function onClick( _function ) {
      onClickFunction = _function;
      return this;
    }

    // Public interface

    return {
      execute: execute,

      getClone: getClone,
      getFunction: getFunction,
      getId: getId,
      getName: getName,
      getCssClass: getCssClass,
      isEnabled: isEnabled,
      isVisible: isVisible,

      setId: setId,
      setName: setName,
      setCssClass: setCssClass,
      setEnable: setEnable,
      setVisibility: setVisibility,
      onClick: onClick
    };
  }


  return Action;
});
