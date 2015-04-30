/**
 *
 * @name Prontuario_Controller
 * @module
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define(['text!../assets/html/prontuario/prontuario.html'], function (html) {

    //region Attributes

    var prontuarioSelector = "#prontuario";

    var nomeDisplaySelector = "#pront_nome";
    var nomeText;

    var dataNascimentoDisplaySelector = "#pront_data_nascimento";
    var dataNascimentoText;

    var idadeDisplaySelector = "#pront_idade";
    var idadeText;

    var sexoDisplaySelector = "#pront_sexo";
    var sexoText;

    var estadoCivilDisplaySelector = "#pront_estado_civil";
    var estadoCivilext;

    var profissaoDisplaySelector = "#pront_profissao";
    var profissaoText;

    var paiDisplaySelector = "#pront_nome_pai";
    var paiText;

    var maeDisplaySelector = "#pront_nome_mae";
    var maeText;

    var dataInternacaoDisplaySelector = "#pront_data_internacao";
    var dataInternacaoText;

    var leitoDisplaySelector = "#pront_numero_leito";
    var leitoText;

    var antecedentesHospitalaresDisplaySelector = "#pront_antecedentes";
    var antecedentesText;

    var hipoteseDiagnosticaDisplaySelector = "#pront_hipotese_diagnostica";
    var hipoteseText;

    var observacoesDisplaySelector = "#pront_observacoes";
    var observacoesText;

    //TODO: Radio button e caixa de texto para Alergia medicamentosa

    var pesoDisplaySelector = "#pront_peso";
    var pesoText;

    var alturaDisplaySelector = "#pront_altura";
    var alturaText;

    var circunferenciaAbdominalSelector = "#pront_circunferencia_abdominal";
    var circunferenciaAbdominalText;

    //TODO: Prescri��o M�dica

    //TODO: Prescri��o de Enfermagem
    var ssvv_tbodySelector = "#ssvv_tbody";

    var ssvv_dataSelector = ".data";
    var ssvv_pressaoArterialSelector = ".pa";
    var ssvv_frequenciaCardiacaSelector = ".fc";
    var ssvv_frequenciaRespiratoriaSelector = ".fr";
    var ssvv_saturacaoSelector = ".sat";
    var ssvv_temperaturaSelector = ".temp";

    var ssvv_data = [
        {
            data: "",
            pa: "",
            fc: "",
            fr: "",
            sat: "",
            temp: ""
        },
        {
            data: "",
            pa: "",
            fc: "",
            fr: "",
            sat: "",
            temp: ""
        }
    ];

    var ssvv_regExps = [
        {
            data: "",
            pa: "",
            fc: "",
            fr: "",
            sat: "",
            temp: ""
        },
        {
            data: "",
            pa: "",
            fc: "",
            fr: "",
            sat: "",
            temp: ""
        }
    ];
    //TODO: Anota��o de Enfermagem

    var anotacaoEnfermagem_tbodySelector = "#anotacaoEnfermagem_tbody";

    var anotacaoEnfermagem_dataSelector = ".data";
    var anotacaoEnfermagem_anotacaoSelector = ".anotacao";

    var anotacaoEnfermagem_data = [
        {
            data: "",
            anotacao: ""
        },
        {
            data: "",
            anotacao: ""
        },
        {
            data: "",
            anotacao: ""
        },
        {
            data: "",
            anotacao: ""
        }
    ];

    var anotacaoEnfermagem_regExps = [
        {
            data: "",
            anotacao: ""
        },
        {
            data: "",
            anotacao: ""
        },
        {
            data: "",
            anotacao: ""
        },
        {
            data: "",
            anotacao: ""
        }
    ];

    //endregion

    //region Gets
    function getNome(){
        return nomeText;
    }

    function getDataNascimento(){
        return dataNascimentoText;
    }

    function getIdade(){
        return idadeText;
    }

    function getSexo(){
        return sexoText;
    }

    function getEstadoCivil(){
        return estadoCivilext;
    }

    function getProfissao(){
        return profissaoText;
    }

    function getPai(){
        return paiText;
    }

    function getMae(){
        return maeText;
    }

    function getDataInternacao(){
        return dataInternacaoText;
    }

    function getLeito(){
        return leitoText;
    }

    function getAntecedentes(){
        return antecedentesText;
    }

    function getHipotese(){
        return hipoteseText;
    }

    function getObservacoes(){
        return observacoesText;
    }

    function getPeso(){
        return pesoText;
    }

    function getAltura() {
        return alturaText;
    }

    function getCircunferenciaAbdominal(){
        return circunferenciaAbdominalText;
    }

    //endregion

    //region Sets
    function setNome(_nomeText){
        nomeText = _nomeText;
        $(nomeDisplaySelector).text(nomeText);
    }

    function setDataNascimento(_dataText){
        dataNascimentoText = _dataText;
        $(dataNascimentoDisplaySelector).text(dataNascimentoText);
    }

    function setIdade(_idadeText){
        idadeText = _idadeText;
        $(idadeDisplaySelector).text(idadeText);
    }

    function setSexo(_sexoText){
        sexoText = _sexoText;
        $(sexoDisplaySelector).text(sexoText);
    }

    function setEstadoCivil(_estadoCivilext){
        estadoCivilext = _estadoCivilext;
        $(estadoCivilDisplaySelector).text(estadoCivilext);
    }

    function setProfissao(_profissaoText){
        profissaoText = _profissaoText;
        $(profissaoDisplaySelector).text(profissaoText);
    }

    function setPai(_paiText){
        paiText = _paiText;
        $(paiDisplaySelector).text(paiText);
    }

    function setMae(_maeText){
        maeText = _maeText;
        $(maeDisplaySelector).text(maeText);
    }

    function setDataInternacao(_dataInternacaoText){
        dataInternacaoText = _dataInternacaoText;
        $(dataInternacaoDisplaySelector).text(dataInternacaoText);
    }

    function setLeito(_leitoText){
        leitoText = _leitoText;
        $(leitoDisplaySelector).text(leitoText);
    }

    function setAntecedentes(_antecedentesText){
        antecedentesText = _antecedentesText;
        $(antecedentesHospitalaresDisplaySelector).text(antecedentesText);
    }

    function setHipotese(_hipoteseText){
        hipoteseText = _hipoteseText;
        $(hipoteseDiagnosticaDisplaySelector).text(hipoteseText);
    }

    function setObservacoes(_observacoesText){
        observacoesText = _observacoesText;
        $(observacoesDisplaySelector).text(observacoesText);
    }

    function setPeso(_pesoText){
        pesoText = _pesoText;
        $(pesoDisplaySelector).text(pesoText);
    }

    function setAltura(_alturaText) {
        alturaText = _alturaText;
        $(alturaDisplaySelector).text(alturaText);
    }

    function setCircunferenciaAbdominal(_circunferenciaAbdominalText){
        circunferenciaAbdominalText = _circunferenciaAbdominalText;
        $(circunferenciaAbdominalSelector).text(circunferenciaAbdominalText);
    }

    function setSsvvRowData(_row, _data, _pa, _fc, _fr, _sat, _temp){
        if(_row < 0 || _row > ssvv_data.length){
            throw new Error("Invalid row index");
        }

        ssvv_data[_row].data = _data;
        ssvv_data[_row].pa = _pa;
        ssvv_data[_row].fc = _fc;
        ssvv_data[_row].fr = _fr;
        ssvv_data[_row].sat = _sat;
        ssvv_data[_row].temp = _temp;

        $($(ssvv_dataSelector, ssvv_tbodySelector)[_row]).val(_data);
        $($(ssvv_pressaoArterialSelector, ssvv_tbodySelector)[_row]).val(_pa);
        $($(ssvv_frequenciaCardiacaSelector, ssvv_tbodySelector)[_row]).val(_fc);
        $($(ssvv_frequenciaRespiratoriaSelector, ssvv_tbodySelector)[_row]).val(_fr);
        $($(ssvv_saturacaoSelector, ssvv_tbodySelector)[_row]).val(_sat);
        $($(ssvv_temperaturaSelector, ssvv_tbodySelector)[_row]).val(_temp);
    }

    function setSsvvRowRegExp(_row, _data, _pa, _fc, _fr, _sat, _temp){
        if(_row < 0 || _row > ssvv_data.length){
            throw new Error("Invalid row index");
        }

        ssvv_regExps[_row].data = _data;
        ssvv_regExps[_row].pa = _pa;
        ssvv_regExps[_row].fc = _fc;
        ssvv_regExps[_row].fr = _fr;
        ssvv_regExps[_row].sat = _sat;
        ssvv_regExps[_row].temp = _temp;
    }

    function setAnotacaoEnfermagemRowData(_row, _data, _anotacao){
        if(_row < 0 || _row > anotacaoEnfermagem_data.length){
            throw new Error("Invalid row index");
        }

        anotacaoEnfermagem_data[_row].data = _data;
        anotacaoEnfermagem_data[_row].anotacao = _anotacao;

        $($(anotacaoEnfermagem_dataSelector, anotacaoEnfermagem_tbodySelector)[_row]).val(_data);
        $($(anotacaoEnfermagem_anotacaoSelector, anotacaoEnfermagem_tbodySelector)[_row]).val(_anotacao);
    }

    function setAnotacaoEnfermagemRowRegExp(_row, _data, _anotacao){
        if(_row < 0 || _row > anotacaoEnfermagem_data.length){
            throw new Error("Invalid row index");
        }

        anotacaoEnfermagem_regExps[_row].data = _data;
        anotacaoEnfermagem_regExps[_row].anotacao = _anotacao;
    }
    //endregion

    //region Methods

    function init(selector) {
        $(selector).append(html);

        $('.content').tabs();
    }

    function open(){
        $(prontuarioSelector).show();
        updateData();
    }

    function updateData(){
        $(nomeDisplaySelector).text(nomeText);
        $(dataNascimentoDisplaySelector).text(dataNascimentoText);
        $(idadeDisplaySelector).text(idadeText);
        $(sexoDisplaySelector).text(sexoText);
        $(estadoCivilDisplaySelector).text(estadoCivilext);
        $(profissaoDisplaySelector).text(profissaoText);
        $(paiDisplaySelector).text(paiText);
        $(maeDisplaySelector).text(maeText);
        $(dataInternacaoDisplaySelector).text(dataInternacaoText);
        $(leitoDisplaySelector).text(leitoText);
        $(antecedentesHospitalaresDisplaySelector).text(antecedentesText);
        $(hipoteseDiagnosticaDisplaySelector).text(hipoteseText);
        $(observacoesDisplaySelector).text(observacoesText);
        $(pesoDisplaySelector).text(pesoText);
        $(alturaDisplaySelector).text(alturaText);
        $(circunferenciaAbdominalSelector).text(circunferenciaAbdominalText);

        for(row = 0; row< ssvv_data.length; row++){
            $($(ssvv_dataSelector, ssvv_tbodySelector)[row]).val(ssvv_data[row].data);
            $($(ssvv_pressaoArterialSelector, ssvv_tbodySelector)[row]).val(ssvv_data[row].pa);
            $($(ssvv_frequenciaCardiacaSelector, ssvv_tbodySelector)[row]).val(ssvv_data[row].fc);
            $($(ssvv_frequenciaRespiratoriaSelector, ssvv_tbodySelector)[row]).val(ssvv_data[row].fr);
            $($(ssvv_saturacaoSelector, ssvv_tbodySelector)[row]).val(ssvv_data[row].sat);
            $($(ssvv_temperaturaSelector, ssvv_tbodySelector)[row]).val(ssvv_data[row].temp);
        }
        //todo  anotacao enfermagem
    }

    function close(){
        $(prontuarioSelector).hide();
    }

    function isDataValid(){

        var row;
        var valid = true;

        for(row = 0; row< ssvv_data.length; row++){
            data = $($(ssvv_dataSelector, ssvv_tbodySelector)[row]).val();
            pa = $($(ssvv_pressaoArterialSelector, ssvv_tbodySelector)[row]).val();
            fc = $($(ssvv_frequenciaCardiacaSelector, ssvv_tbodySelector)[row]).val();
            fr = $($(ssvv_frequenciaRespiratoriaSelector, ssvv_tbodySelector)[row]).val();
            sat = $($(ssvv_saturacaoSelector, ssvv_tbodySelector)[row]).val();
            temp = $($(ssvv_temperaturaSelector, ssvv_tbodySelector)[row]).val();

            valid = valid && ssvv_regExps[row].data.test(data);
            valid = valid && ssvv_regExps[row].pa.test(pa);
            valid = valid && ssvv_regExps[row].fc.test(fc);
            valid = valid && ssvv_regExps[row].fr.test(fr);
            valid = valid && ssvv_regExps[row].sat.test(sat);
            valid = valid && ssvv_regExps[row].temp.test(temp);
        }

        for(row = 0; row< anotacaoEnfermagem_data.length; row++){
            data =  $($(anotacaoEnfermagem_dataSelector, anotacaoEnfermagem_tbodySelector)[row]).val();
            anotacao = $($(anotacaoEnfermagem_anotacaoSelector, anotacaoEnfermagem_tbodySelector)[row]).val();

            valid = valid && anotacaoEnfermagem_regExps[row].data.test(data);
            valid = valid && anotacaoEnfermagem_regExps[row].anotacao.test(anotacao);
        }

        return valid;
    }

    //endregion

//Public Interface
    return {
        init: init,

        open: open,
        close: close,
        isDataValid: isDataValid,
        updateDate: updateData,

        getNome: getNome,
        getDataNascimento: getDataNascimento,
        getIdade: getIdade,
        getSexo: getSexo,
        getEstadoCivil: getEstadoCivil,
        getProfissao: getProfissao,
        getPai: getPai,
        getMae: getMae,
        getDataInternacao: getDataInternacao,
        getLeito: getLeito,
        getAntecedentes: getAntecedentes,
        getHipotese: getHipotese,
        getObservacoes: getObservacoes,
        getPeso: getPeso,
        getAltura: getAltura,
        getCircunferenciaAbdominal: getCircunferenciaAbdominal,

        setNome: setNome,
        setDataNascimento: setDataNascimento,
        setIdade: setIdade,
        setSexo: setSexo,
        setEstadoCivil: setEstadoCivil,
        setProfissao: setProfissao,
        setPai: setPai,
        setMae: setMae,
        setDataInternacao: setDataInternacao,
        setLeito: setLeito,
        setAntecedentes: setAntecedentes,
        setHipotese: setHipotese,
        setObservacoes: setObservacoes,
        setPeso: setPeso,
        setAltura: setAltura,
        setCircunferenciaAbdominal: setCircunferenciaAbdominal,

        setSsvvRowData: setSsvvRowData,
        setSsvvRowRegExp: setSsvvRowRegExp,

        setAnotacaoEnfermagemRowData: setAnotacaoEnfermagemRowData,
        setAnotacaoEnfermagemRowRegExp: setAnotacaoEnfermagemRowRegExp
    }

});