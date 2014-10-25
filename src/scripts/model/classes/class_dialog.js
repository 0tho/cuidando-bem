/*
	Dialogo

	Texto do dialogo
	Quem esta falando (talvez um texto e class css)
	Opcoes de resposta com seus respectivos proximos dialogos
		acao de acordo com a resposta anterior
	Proximo dialogo

*/

define([], function(){

    /**
     *
     * @name Dialog
     * @class
     */
    function Dialog(_speakerName, _speakerCssClass, _text){
        //Inner Class
        function DialogOption(_text, _actionFunction){
            this.text = _text;
            this.actionFunction = _actionFunction;
        }

        //Attributes
        var speakerName = _speakerName;
        var speakerCssClass = _speakerCssClass;
        var text = _text;

        var options = [];

        //Methods

        function executeOption(_optionIndex){
            options[_optionIndex].actionFunction();
        }

        //Getters

        function getOptions(){
            return options;
        }

        function getSpeakerName(){
            return speakerName;
        }

        function getSpeakerCssClass(){
            return speakerCssClass;
        }

        function getText(){
            return text;
        }

        function getOptionText(_optionIndex){
            return options[_optionIndex].text;
        }

        //Setters
        function registerOption(_option){
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