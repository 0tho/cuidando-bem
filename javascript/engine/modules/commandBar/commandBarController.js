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
 * @name CommandBar
 * @module
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define([
        "text!../html/command_bar/commandBar.html",
        "text!../html/command_bar/actionButtonTemplate.html"
    ],
    function( html, actionButtonTemplate ) {

// Attributes
    /**
     * This string represents a selector for the html element that is the command bar
     *
     * @type {string}
     * @private
     * @constant
     *
     * @memberOf module:CommandBar
     */
    var barSelector = "#commandBar";
    /**
     * This is a class selector for all the action button elements int the html
     *
     * @type {string}
     * @private
     * @constant
     *
     * @memberOf module:CommandBar
     */
    var actionButtonSelector = ".action_button";

// Methods
    // Init
    /**
     * The init method should insert into the main html every html that the commandbar needs
     *
     * @method init
     * @public
     *
     * @memberOf module:CommandBar
     */
    function init( selector ) {
        $( selector ).append( html );
    }

    /**
     * Add all action buttons in an array of actions. Calls "addActionButton" for each action
     * in the array
     *
     * @method addAllActionButtons
     * @param {} _actions
     * @public
     *
     * @memberOf module:CommandBar
     */
    function addAllActionButtons( _actions ) {

        var i;

        for ( i = 0; i < _actions.length; i++ ) {
 );
            var action = _actions[ i ];
            addActionButton( action );
        }

  }

    /**
     * Change the current actions buttons for a new array of actions
     *
     * @method changeToActionsButtons
     * @param {} _actions
     * @public
     *
     * @memberOf module:CommandBar
     */
    function changeToActionsButtons( _actions ) {
        removeAllActionButtons();
        addAllActionButtons( _actions );
    }

    // This function, if called should remove all the listeners and extra interface
    /**
     * This method removes every event listener from the action buttons
     *
     * @method close
     * @public
     *
     * @memberOf module:CommandBar
     */
    function close() {
        var actionButtons = $( actionButtonSelector );

        for ( button in actionButtons ) {
            var actionButton = $( actionButtons[ button ] );
            actionButton.removeAllListeners();
        }
    }

    /**
     * This method hides the command bar
     *
     * @method hide
     * @public
     *
     * @memberOf module:CommandBar
     */
    function hide() {
        $( barSelector ).hide();
    }

    /**
     * This method shows the command bar
     *
     * @method show
     * @public
     *
     * @memberOf module:CommandBar
     */
    function show() {
        $( barSelector ).show();
    }


    /**
     * Add action button in command bar, also adds every attribute needed for an action to work
     * including its "click" callback function
     *
     * @method addActionButton
     * @param {} _action
     * @public
     *
     * @memberOf module:CommandBar
     */
    function addActionButton( _action ) {
        var element = $( $( actionButtonTemplate )[ 0 ] );

        element.click( _action.getFunction() );
        element.attr("title", _action.getName() );
        element.attr("id", _action.getId() );
        element.addClass( _action.getCssClass() );

        element.tooltip({
            tooltipClass: "actionButton-ui-tooltip",
            show: {
                duration: 100
            },
            position: {
                my: "center bottom-20",
                at: "center top",
                using: function( position, feedback ) {
                    $( this ).css( position );
                    $("<div>")
                        .addClass("arrow")
                        .addClass( feedback.vertical )
                        .addClass( feedback.horizontal )
                        .appendTo( this );
                }
            }
        });

        if ( _action.isEnabled() ) {
            element.addClass("enabled");
        } else {
            element.addClass("disabled");
        }


        $( barSelector ).append( element );
        if ( !_action.isVisible() ) {
            element.hide();
        }
    }

    // Remove all buttons
    /**
     * Empties the command bar
     *
     * @method removeAllActionButtons
     * @public
     *
     * @memberOf module:CommandBar
     */
    function removeAllActionButtons() {
        $( barSelector ).empty();
    }

    // Remove Button
    /**
     * Remove a single action button from the command bar based in its action id
     *
     * @method removeActionButton
     * @public
     *
     * @memberOf module:CommandBar
     * @todo function to remove only one action button based on ID
     */
    function removeActionButton() {

    }

    // Activate button
    /**
     * Sets the button appearing in the command bar to enabled
     *
     * @method activateActionButton
     * @param {} _action
     * @public
     *
     * @memberOf module:CommandBar
     */
    function enableActionButton( _action ) {
        var selector = "#" + _action.getId();
        var element = $( selector );
        element.removeClass("disabled");
        element.addClass("enabled");
        element.click( _action.getFunction() );
        element.tooltip("enable");
    }

    // Deactivate Button
    /**
     * Sets the button appearing in the command bar to disabled
     *
     * @method deactivateActionButton
     * @param {} _action
     * @public
     *
     * @memberOf module:CommandBar
     */
    function disableActionButton( _action ) {
        var selector = "#" + _action.getId();
        var element = $( selector );
        element.removeClass("enabled");
        element.addClass("disabled");
        element.unbind("click");
        element.tooltip("disable");
    }

    /**
     * Enable all actions in an array
     *
     * @method activeAllActionButtons
     * @param {} _actions
     * @public
     *
     * @memberOf module:CommandBar
     */
    function enableAllActionButtons( _actions ) {

        var i;

        for ( i = 0; i < _actions.length; i++ ) {
 );
            var action = _actions[ i ];
            enableActionButton( action );
        }

    }

    /**
     * Disable all actions in an array
     *
     * @method deactivateAllActionButtons
     * @param {} _actions
     * @public
     *
     * @memberOf module:CommandBar
     */
    function disableAllActionButtons( _actions ) {

        var i;

        for ( i = 0; i < _actions.length; i++ ) {
 );
            var action = _actions[ i ];
            disableActionButton( action );
        }

    }

    /**
     * Updates the action to its "enabled/disabled" state
     *
     * @method updateAllActionButtons
     * @param {} _actions
     * @public
     *
     * @memberOf module:CommandBar
     */
    function updateAllActionButtons( _actions ) {

        var i;

        for ( i = 0; i < _actions.length; i++ ) {
 );
            var action = _actions[ i ];
            if ( action.isEnabled() ) {
                enableActionButton( action );
            } else {
                disableActionButton( action );
            }
        }

    }

// Getters

// Setters
    /**
     * Set an action visibility
     *
     * @method setActionVisible
     * @param {} _action
     * @param {} _value
     * @public
     *
     * @memberOf module:CommandBar
     */
    function setActionVisible( _action, _value ) {
        var selector = "#" + _action.getId();

        if ( _value ) {
            $( selector ).show();
        } else {
            $( selector ).hide();
        }
    }

// Public Interface
    return {
        init: init,
        close: close,

        hide: hide,
        show: show,

        addActionButton: addActionButton,
        addAllActionButtons: addAllActionButtons,
        changeToActionsButtons: changeToActionsButtons,

        removeActionButton: removeActionButton,
        enableActionButton: enableActionButton,
        disableActionButton: disableActionButton,

        enableAllActionButtons: enableAllActionButtons,
        disableAllActionButtons: disableAllActionButtons,

        updateAllActionButtons: updateAllActionButtons,

        setActionVisible: setActionVisible
    };

});
