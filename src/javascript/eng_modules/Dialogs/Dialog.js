/*
 Dialogo

 Texto do dialogo
 Quem esta falando (talvez um texto e class css)
 Opcoes de resposta com seus respectivos proximos dialogos
 acao de acordo com a resposta anterior
 Proximo dialogo


 */

define([], function () {

    /**
     * @class
     * @name Dialog
     * @param {string} _speakerName
     * @param {string} _speakerCssClass
     * @param {string} _text
     * @return ObjectExpression
     */
    function Dialog(_speakerName, _speakerCssClass, _text) {
        //Inner Class
        /**
         * Description
         * @class Dialog.DialogOption
         * @param {string} _text
         * @param {function} _actionFunction
         *
         * @memberOf Dialog
         */
        function DialogOption(_text, _actionFunction) {
            this.text = _text;
            this.actionFunction = _actionFunction;
        }

        //Attributes
        /**
         * @type {string}
         * @private
         *
         * @memberOf Dialog#
         */
        var speakerName = _speakerName;
        /**
         * @type {string}
         * @private
         *
         * @memberOf Dialog#
         */
        var speakerCssClass = _speakerCssClass;
        /**
         * @type {string}
         * @private
         *
         * @memberOf Dialog#
         */
        var text = _text;
        /**
         * @type {array}
         * @private
         *
         * @memberOf Dialog#
         */
        var options = [];

        //Methods

        /**
         * Description
         *
         * @method executeOption
         * @param {int} _optionIndex
         *
         * @memberOf Dialog#
         */
        function executeOption(_optionIndex) {
            options[_optionIndex].actionFunction();
        }

        //Getters

        /**
         * Description
         * @method getOptions
         * @return options
         *
         * @memberOf Dialog#
         */
        function getOptions() {
            return options;
        }

        /**
         * Description
         * @method getSpeakerName
         * @return speakerName
         * @memberOf Dialog#
         */
        function getSpeakerName() {
            return speakerName;
        }

        /**
         * Description
         * @method getSpeakerCssClass
         * @return speakerCssClass
         * @memberOf Dialog#
         */
        function getSpeakerCssClass() {
            return speakerCssClass;
        }

        /**
         * Description
         * @method getText
         * @return text
         *
         * @memberOf Dialog#
         */
        function getText() {
            return text;
        }

        /**
         * Description
         * @method getOptionText
         * @param {int} _optionIndex
         * @return MemberExpression
         *
         * @memberOf Dialog#
         */
        function getOptionText(_optionIndex) {
            return options[_optionIndex].text;
        }

        //Setters
        /**
         * Description
         * @method registerOption
         * @param {DialogOption} _option
         *
         * @memberOf Dialog#
         */
        function registerOption(_option) {
            options.push(_option);
        }

        //Public interface

        return {
            DialogOption: DialogOption,
            executeOption: executeOption,

            getSpeakerName: getSpeakerName,
            getSpeakerCssClass: getSpeakerCssClass,
            getText: getText,
            getOptions: getOptions,
            getOptionText: getOptionText,

            registerOption: registerOption
        }
    }

    return Dialog;
});