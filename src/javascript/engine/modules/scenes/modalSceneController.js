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
/**
 *
 * @name ModalScene
 * @module
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define([ "text!../html/scenes/modalScene.html" ], function( html ) {

// Attributes

  var divSelector = "#modalScene";
  var showing = false;

  var lastSceneClass = "";
// Methods
  // Init
  /**
   * Description
   * @method init
   * @memberOf module:ModalScene
   */
  function init( selector ) {
    $( selector ).append( html );
  }

  /**
   * Description
   * @method open
   * @param {} _modalScene
   * @memberOf module:ModalScene
   */
  function open( _modalScene ) {
    if ( lastSceneClass == "") {
      $( divSelector ).addClass( _modalScene.getCssClass() );
    } else {
      $( divSelector ).removeClass( lastSceneClass );
      $( divSelector ).addClass( _modalScene.getCssClass() );
    }

    $( divSelector ).empty();
    $( divSelector ).append( _modalScene.getTemplate() );


    lastSceneClass = _modalScene.getCssClass();


    console.info("Show Modal Scene");
    showing = true;
    $( divSelector ).show();
  }

  /**
   * Description
   * @method close
   * @memberOf module:ModalScene
   */
  function close() {
    console.info("Close modal Scene");
    showing = false;
    $( divSelector ).hide();
  }

// Getters
  /**
   * Description
   * @method isShowing
   * @return showing
   * @memberOf module:ModalScene
   */
  function isShowing() {
    return showing;
  }

// Setters


// Public Interface
  return {
    init: init,

    close: close,
    open: open,

    isShowing: isShowing

  };

});
