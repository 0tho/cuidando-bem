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
 * @name DialogModal
 * @module
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define([ "text!../html/dialog/dialog.html", "text!../html/dialog/dialogButtonTemplate.html" ],
    function( html, dialogButtonTemplate ) {

// Attributes
        var dialogModalSelector = "#dialogBar";

        var dialogCharNameSelector = ".dialog_charName";
        var dialogCharImg = "#dialog_charImg";
        var dialogMaskSelector = "#dialogBar-mask";
        var dialogTextSelector = ".dialog_mainText";
        var dialogOptionsSelector = ".dialog_options";
        var dialogButtonSelector = ".dialog_right";
        var dialogRereadSelector = ".dialog_reread";

        var isDialogOpen = false;

// Methods
        // Init
        /**
         * Description
         * @method init
         * @memberOf module:DialogModal
         */
        function init( selector ) {
            $( selector ).append( html );
        }

        /**
         * Description
         * @method show
         * @param {} _dialog
         * @memberOf module:DialogModal
         */
        function show( _dialog ) {
            if ( !isDialogOpen ) {
                openDialog( _dialog );
            } else {
                changeDialogTo( _dialog );
            }
        }

        /**
         * Description
         * @method openDialog
         * @param {} _dialog
         * @memberOf module:DialogModal
         */
        function openDialog( _dialog ) {

            dialog = _dialog;

            // $(dialogModalSelector).css("display", "table");
            // $(dialogModalSelector).hide()

            $( dialogMaskSelector ).show();
            $( dialogModalSelector ).show("fade", {
                duration: 200,
                complete: function() {
                    changeDialogTo( _dialog );
                }
            });
            isDialogOpen = true;
            var enter = 13,
                arrow_down = 40,
                arrow_up = 38,
                one = 49,
                two = 50,
                three = 51;

            // @dev {
            $( document ).keydown(function( e ) {
                if( $("#dialogBar").is(":visible") ){
                    if( e.which == arrow_up || e.which == enter ){
                        if( $(".dialog_reread").is(":visible") ){
                            $(".dialog_reread").click();
                        }
                    }
                    else if( e.which == arrow_down ){
                        if( $(".dialog_right").is(":visible") ){
                            $(".dialog_right").click();
                        }
                    }
                    else if( e.which == one ){
                        if( $(".dialog_button[value='1']").is(":visible") ){
                            $(".dialog_button[value='1']").click();
                        }
                    }
                    else if( e.which == two ){
                        if( $(".dialog_button[value='2']").is(":visible") ){
                            $(".dialog_button[value='2']").click();
                        }
                    }
                    else if( e.which == three ){
                        if( $(".dialog_button[value='3']").is(":visible") ){
                            $(".dialog_button[value='3']").click();
                        }
                    }
                }
                return;
            });
        }

        /**
         * Description
         * @method changeDialogTo
         * @param {} _dialog
         * @memberOf module:DialogModal
         */
        function changeDialogTo( _dialog ) {

            // set the text for charName and provide accessibility
            $( dialogCharNameSelector ).text( _dialog.getSpeakerName() );
            $( dialogCharImg ).removeClass();
            $( dialogCharImg ).addClass( _dialog.getSpeakerCssClass() );
            $( dialogCharImg ).show();
            $( dialogTextSelector ).text( _dialog.getText() );

            $( '<span>' + _dialog.getSpeakerName() + ': </span>' ).appendTo( "#accessible_log" );

            if( _dialog.getText() != "" ){
                $( '<span>' + _dialog.getText() + '</span><br>' ).appendTo( "#accessible_log" );
            }

            $(".dialog_reread").off();

            $(".dialog_reread").click(function(){
                $( '<span>' + $(".dialog_charName").text() + ': </span>' ).appendTo( "#accessible_log" );
                if( $(".dialog_mainText").text() != "" ){
                    $( '<span>' + $(".dialog_mainText").text() + '</span><br>' ).appendTo( "#accessible_log" );
                }
                else if( $(".dialog_options").text() != "" ){
                    var options = $(".dialog_options .text").map(function(){
                        return $.trim($(this).text());
                        }).get();

                    for ( i = 0; i < options.length; i++ ) {
                        if(options.length == 1){
                            op = "única";
                        }
                        else{
                            op = i + 1;
                        }

                        $( '<span>Opção ' + op + ': ' + options[ i ] + '</span><br>' ).appendTo( "#accessible_log" );
                    }
                }
            });

            // set the text for answer options (accessibility is provided in the method addAllDialogButtons)
            changeDialogOptionsTo( _dialog.getOptions(), _dialog.getRandomize() );

            // type of animation to be executed
            var charNameAnimation = "blind";
            var textAnimation = "clip";
            var duration = 250;

            // if first time hide everything to animate later
            if ( isDialogOpen == false ) {
                $( dialogModalSelector + " div").hide();
                // animation();
                $( dialogCharNameSelector ).first().show();
                $( dialogCharImg ).show(  );
                $( dialogTextSelector ).show();
                $( dialogOptionsSelector ).show(  );

            }
            // if already opened, keep the charName and animate the rest
            else {
                $( dialogTextSelector ).hide();
                $( dialogOptionsSelector ).hide();
                // animation();
                $( dialogCharNameSelector ).first().show();
                $( dialogCharImg ).show(  );
                $( dialogTextSelector ).show();
                $( dialogOptionsSelector ).show(  );
            }

            // animation for dialog
            function animation() {
                $( dialogCharNameSelector ).first().show( charNameAnimation, {
                    duration: duration,
                    progress: function() {
                        $( dialogCharImg.show( charNameAnimation ) );
                    },
                    complete: function() {
                        if ( _dialog.getText() != "") {
                            $( dialogTextSelector ).show( textAnimation, {
                                duration: duration,
                                complete: function() {
                                    $( dialogOptionsSelector ).show( textAnimation );
                                }
                            });
                        } else {
                            $( dialogOptionsSelector ).show( textAnimation );
                        }
                    }
                });
            }
        }

        /**
         * Description
         * @method changeDialogOptionsTo
         * @param {} _options
         * @memberOf module:DialogModal
         */
        function changeDialogOptionsTo( _options, randomize ) {

            // remove all dialog buttons (answer options)
            removeAllDialogButtons();

            // if only one option and there's no text on it
            // the 'next' arrow will show up on the dialog
            if ( _options.length == 1 && _options[ 0 ].text == "") {
                console.log("Show 'next arrow' on dialog");
                var element = $( dialogButtonSelector );
                element.click( _options[ 0 ].actionFunction );
                element.on();
                $( dialogButtonSelector ).removeClass("off");
                $( dialogButtonSelector ).addClass("on");
                $( dialogButtonSelector ).append( element );
            }
            // if there's dialog options to be shown (answers)
            else {
                console.log("Show 'options' on dialog");
                addAllDialogButtons( _options, randomize );
            }
        }

        /**
         * Description
         * @method close
         * @memberOf module:DialogModal
         */
        function close() {

            $( dialogCharNameSelector ).hide();
            $( dialogCharImg ).hide();
            $( dialogTextSelector ).hide();
            $( dialogOptionsSelector ).hide();
            $( dialogMaskSelector ).hide();
            $( dialogModalSelector ).hide("fade", 200 );
            isDialogOpen = false;

            $( document ).unbind("keydown");
        }

        /**
         * Description
         * @method hide
         * @memberOf module:DialogModal
         */
        function hide() {

        }

        /**
         * Description
         * @method printText
         * @memberOf module:DialogModal
         */
        function printText() {

        }

        /**
         * Description
         * @method addDialogButton
         * @param {} _option
         * @memberOf module:DialogModal
         */
        function addDialogButton( _option, _number ) {
            console.log( _option );

            var element = $( dialogButtonTemplate );

            element.click( _option.actionFunction );

            $(".text", element ).text( _option.text );
            $( element ).attr("value", _number );

            $( dialogOptionsSelector ).append( element );

        }

        // Fisher–Yates Shuffle
        function shuffle( array ) {
            var m = array.length, t, i;

            // While there remain elements to shuffle…
            while ( m ) {

                // Pick a remaining element…
                i = Math.floor( Math.random() * m-- );

                // And swap it with the current element.
                t = array[ m ];
                array[ m ] = array[ i ];
                array[ i ] = t;
            }

            return array;
        }

        /**
         * Description
         * @method addAllDialogButtons
         * @param {} _options
         * @memberOf module:DialogModal
         */
        function addAllDialogButtons( _options, randomize ) {
            var i, op;

            if ( randomize ) {
                _options = shuffle( _options );
            }

            for ( i = 0; i < _options.length; i++ ) {
                // accessibility
                addDialogButton( _options[ i ], i + 1 );

                if(_options.length == 1){
                    op = "única";
                }
                else{
                    op = i + 1;
                }

                $( '<span>Opção ' + op + ': ' + _options[ i ].text + '</span><br>' ).appendTo( "#accessible_log" );
            }
        }

        /**
         * Description
         * @method removeDialogButton
         * @param {} _option
         * @memberOf module:DialogModal
         */
        function removeDialogButton( _option ) {
            $("." + _option.getCssClass(), element ).remove();
        }

        /**
         * Description
         * @method removeAllDialogButtons
         * @memberOf module:DialogModal
         */
        function removeAllDialogButtons() {
            $( dialogOptionsSelector ).empty();
            $( dialogButtonSelector ).empty();
            $( dialogButtonSelector ).off();
            $( dialogButtonSelector ).removeClass("on");
            $( dialogButtonSelector ).addClass("off");
        }

// Getters
// Setters
// Public Interface
        return {
            init: init,

            show: show,
            close: close
        };

    });
