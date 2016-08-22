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
 * @name Prontuario_Controller
 * @module
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define([ "text!../html/prontuario/prontuario.html" ], function( html ) {

  // Accessibility
  var navigationList = null;
  // TODO: avoid duplication
  const KEYCODE_ARROW_LEFT = 37;
  const KEYCODE_ARROW_UP = 38;
  const KEYCODE_ARROW_RIGHT = 39;
  const KEYCODE_ARROW_DOWN = 40;
  const KEYCODE_ENTER = 13;
  const KEYCODE_P = 80;
  const KEYCODE_ONE = 49;
  const KEYCODE_TWO = 50;
  const KEYCODE_THREE = 51;

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
  var estadoCivilText;

  var profissaoDisplaySelector = "#pront_profissao";
  var profissaoText;

  var paiDisplaySelector = "#pront_nome_pai";
  var paiText;
  var paiLocked;

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

  var alergiaMedicamentosaSpanSim = "#pront_alergia_spanSim";
  var alergiaMedicamentosaDivSim = "#pront_alergia_divSim";
  var alergiaMedicamentosaTextSelector = "#pront_alergia_qual";
  var alergiaMedicamentosaText;
  var alergiaMedicamentosaRegExp;
  var alergiaMedicamentosaDivNao = "#pront_alergia_divNao";
  var alergiaMedicamentosaSpanNao = "#pront_alergia_spanNao";
  var alergiaMedicamentosaStatus;
  var alergiaMedicamentosaCorrectStatus;
  var alergiaMedicamentosaStatusEmpty = "   ";
  var alergiaMedicamentosaStatusX = "X";
  var alergiaMedicamentosaDisabled = false;


  var pesoDisplaySelector = "#pront_peso";
  var pesoText;

  var alturaDisplaySelector = "#pront_altura";
  var alturaText;

  var circunferenciaAbdominalSelector = "#pront_circunferencia_abdominal";
  var circunferenciaAbdominalText;

  var prescMedicaTbodySelector = "#prescMedica_tbody";
  var prescMedicaRowSelector = ".prescMedica_row";

  var prescMedicaDataSelector = ".data";
  var prescMedicaMedicacaoSelector = ".medicacao";
  var prescMedicaViaSelector = ".via";
  var prescMedicaPosologiaSelector = ".posologia";
  var prescMedicaHorarioSelector = ".horario";
  var prescMedicaRelatorioSelector = ".relatorio";

  var prescMedicaData = [
    {
      disabled: false,
      data: "",
      medicacao: "",
      via: "",
      posologia: "",
      horario: "",
      relatorio: false
    },
    {
      disabled: false,
      data: "",
      medicacao: "",
      via: "",
      posologia: "",
      horario: "",
      relatorio: false
    },
    {
      disabled: false,
      data: "",
      medicacao: "",
      via: "",
      posologia: "",
      horario: "",
      relatorio: false
    },
    {
      disabled: false,
      data: "",
      medicacao: "",
      via: "",
      posologia: "",
      horario: "",
      relatorio: false
    }
  ];

  var prescMedicaRelatorioRegExp = [
    {
      relatorio: ""
    },
    {
      relatorio: ""
    }
  ];

  // TODO: Prescrição de Enfermagem
  var prescEnfermagemStates = {
    "vazio": false,
    "decubito": false,
    "decubito_visual": false,
    "verificar_glicemia": false,
    "verificar_glicemia2": false,
    "verificar_glicemia3": false,
    "levantar_grade": false,
    "encaminhar_paciente_cc": false,
    "check_list_cirurgia": false,
    "placa_neutra": false,
    "placa_neutra2": false,
    "risco_infeccao": false,
    "troca_curativo": false,
    "nutricao_desequilibrada": false,
    "manutencao_sonda_nasogastrica": false,
    "desiquilibrio_eletrolitico": false,
    "desiquilibrio_eletrolitico_fase9": false
  };

  var decubito = [ false, false, false ];

  var verificarGlicemia = false;
  var verificarGlicemia2 = false;
  var levantarGrade = false;
  var encaminharPacienteCc = false;
  var checkListCirurgia = false;
  var placaNeutra = [ false, false, false ];
  var placaNeutra2 = [ false, false, false ];
  var riscoInfeccao = false;
  var trocaCurativo = false;
  var nutricaoDesequilibrada = false;
  var manutencaoSondaNasogastrica = false;

  // Enfermagem: virarDecubito
  var prescEnfermagemTbody = "#prescEnfermagem_tbody";
  var prescEnfermagemVirouDecubito = false;
  var prescEnfermagemCheckSelector = "";


  var ssvvTbodySelector = "#ssvv_tbody";
  "";

  var ssvvDataSelector = ".data";
  var ssvvPressaoArterialSelector = ".pa";
  var ssvvFrequenciaCardiacaSelector = ".fc";
  var ssvvFrequenciaRespiratoriaSelector = ".fr";
  var ssvvSaturacaoSelector = ".sat";
  var ssvvTemperaturaSelector = ".temp";

  var ssvvData = [
    {
      disabled: false,
      data: "",
      pa: "",
      fc: "",
      fr: "",
      sat: "",
      temp: ""
    },
    {
      disabled: false,
      data: "",
      pa: "",
      fc: "",
      fr: "",
      sat: "",
      temp: ""
    }
  ];

  var ssvvRegExps = [
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

  var anotacaoEnfermagemTbodySelector = "#anotacaoEnfermagem_tbody";

  var anotacaoEnfermagemDataSelector = ".data";
  var anotacaoEnfermagemAnotacaoSelector = ".anotacao";

  var anotacaoEnfermagemData = "";
  var anotacaoEnfermagemDataRegExp = "";
  var anotacaoEnfermagemText = "";
  var anotacaoEnfermagemTextRegExp = "";


  function getNome() {
    return nomeText;
  }

  function getDataNascimento() {
    return dataNascimentoText;
  }

  function getIdade() {
    return idadeText;
  }

  function getSexo() {
    return sexoText;
  }

  function getEstadoCivil() {
    return estadoCivilText;
  }

  function getProfissao() {
    return profissaoText;
  }

  function getPai() {
    return paiText;
  }

  function getMae() {
    return maeText;
  }

  function getDataInternacao() {
    return dataInternacaoText;
  }

  function getLeito() {
    return leitoText;
  }

  function getAntecedentes() {
    return antecedentesText;
  }

  function getHipotese() {
    return hipoteseText;
  }

  function getObservacoes() {
    return observacoesText;
  }

  function getPeso() {
    return pesoText;
  }

  function getAltura() {
    return alturaText;
  }

  function getCircunferenciaAbdominal() {
    return circunferenciaAbdominalText;
  }

  function getPrescEnfermagemState() {
    return prescEnfermagemState;
  }


  function setNome( _nomeText ) {
    nomeText = _nomeText;
    $( nomeDisplaySelector ).text( nomeText );
  }

  function setDataNascimento( _dataText ) {
    dataNascimentoText = _dataText;
    $( dataNascimentoDisplaySelector ).text( dataNascimentoText );
  }

  function setIdade( _idadeText ) {
    idadeText = _idadeText;
    $( idadeDisplaySelector ).text( idadeText );
  }

  function setSexo( _sexoText ) {
    sexoText = _sexoText;
    $( sexoDisplaySelector ).text( sexoText );
  }

  function setEstadoCivil( _estadoCivilText ) {
    estadoCivilText = _estadoCivilText;
    $( estadoCivilDisplaySelector ).text( estadoCivilText );
  }

  function setProfissao( _profissaoText ) {
    profissaoText = _profissaoText;
    $( profissaoDisplaySelector ).text( profissaoText );
  }

  function setPai( _paiText ) {
    paiText = _paiText;
    $( paiDisplaySelector ).text( paiText );
  }

  function setMae( _maeText ) {
    maeText = _maeText;
    $( maeDisplaySelector ).text( maeText );
  }

  function setDataInternacao( _dataInternacaoText ) {
    dataInternacaoText = _dataInternacaoText;
    $( dataInternacaoDisplaySelector ).text( dataInternacaoText );
  }

  function setLeito( _leitoText ) {
    leitoText = _leitoText;
    $( leitoDisplaySelector ).text( leitoText );
  }

  function setAntecedentes( _antecedentesText ) {
    antecedentesText = _antecedentesText;
    $( antecedentesHospitalaresDisplaySelector ).text( antecedentesText );
  }

  function setHipotese( _hipoteseText ) {
    hipoteseText = _hipoteseText;
    $( hipoteseDiagnosticaDisplaySelector ).text( hipoteseText );
  }

  function setObservacoes( _observacoesText ) {
    observacoesText = _observacoesText;
    $( observacoesDisplaySelector ).text( observacoesText );
  }

  function setAlergiaMedicamentosa( status, text ) {
    alergiaMedicamentosaStatus = status;

    if ( status ) {
      $( alergiaMedicamentosaSpanSim ).text( alergiaMedicamentosaStatusX );
      $( alergiaMedicamentosaSpanNao ).text( alergiaMedicamentosaStatusEmpty );

      alergiaMedicamentosaText = text;
      $( alergiaMedicamentosaTextSelector ).val( text );
      $( alergiaMedicamentosaTextSelector ).show();
    } else {
      $( alergiaMedicamentosaSpanSim ).text( alergiaMedicamentosaStatusEmpty );
      $( alergiaMedicamentosaSpanNao ).text( alergiaMedicamentosaStatusX );

      $( alergiaMedicamentosaTextSelector ).hide();
    }
  }

  function setAlergiaMedicamentosaCorrection( _correctStatus, _regExp ) {
    alergiaMedicamentosaRegExp = _regExp;
    alergiaMedicamentosaCorrectStatus = _correctStatus;
  }

  function setDisableAlergiaMedicamentosa( status ) {
    alergiaMedicamentosaDisabled = status;
    $( alergiaMedicamentosaTextSelector ).prop("disabled", alergiaMedicamentosaDisabled );
  }

  function setPeso( _pesoText ) {
    pesoText = _pesoText;
    $( pesoDisplaySelector ).text( pesoText );
  }

  function setAltura( _alturaText ) {
    alturaText = _alturaText;
    $( alturaDisplaySelector ).text( alturaText );
  }

  function setCircunferenciaAbdominal( _circunferenciaAbdominalText ) {
    circunferenciaAbdominalText = _circunferenciaAbdominalText;
    $( circunferenciaAbdominalSelector ).text( circunferenciaAbdominalText );
  }

  function setSsvvRowData( _row, _data, _pa, _fc, _fr, _sat, _temp, _disabled ) {
    // in case _disabled is null
    _disabled = _disabled || false;

    if ( _row < 0 || _row > ssvvData.length ) {
      throw new Error("Invalid row index");
    }

    ssvvData[ _row ].disabled = _disabled;
    ssvvData[ _row ].data = _data;
    ssvvData[ _row ].pa = _pa;
    ssvvData[ _row ].fc = _fc;
    ssvvData[ _row ].fr = _fr;
    ssvvData[ _row ].sat = _sat;
    ssvvData[ _row ].temp = _temp;

    $( $( ssvvDataSelector, ssvvTbodySelector )[ _row ] ).text( _data );
    $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ _row ] ).val( _pa );
    $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ _row ] ).val( _fc );
    $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ _row ] ).val( _fr );
    $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ _row ] ).val( _sat );
    $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ _row ] ).val( _temp );


    // $($(ssvvDataSelector, ssvvTbodySelector)[_row]).text(_data);
    $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ _row ] ).prop("disabled", _disabled );
    $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ _row ] ).prop("disabled", _disabled );
    $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ _row ] ).prop("disabled", _disabled );
    $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ _row ] ).prop("disabled", _disabled );
    $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ _row ] ).prop("disabled", _disabled );

  }

  function setSsvvRowRegExp( _row, _data, _pa, _fc, _fr, _sat, _temp ) {
    if ( _row < 0 || _row > ssvvData.length ) {
      throw new Error("Invalid row index");
    }

    // ssvvRegExps[_row].data = _data;
    ssvvRegExps[ _row ].pa = _pa;
    ssvvRegExps[ _row ].fc = _fc;
    ssvvRegExps[ _row ].fr = _fr;
    ssvvRegExps[ _row ].sat = _sat;
    ssvvRegExps[ _row ].temp = _temp;
  }

  function setAnotacaoEnfermagemRowData( _data, _anotacao ) {

    anotacaoEnfermagemData = _data;
    anotacaoEnfermagemText = _anotacao;

    $( $( anotacaoEnfermagemDataSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).val( _data );
    $( $( anotacaoEnfermagemAnotacaoSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).text( _anotacao );
  }

  function addToRelatorio( _anotacao ) {

    var actualText = $( $( anotacaoEnfermagemAnotacaoSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).text();


    $( $( anotacaoEnfermagemAnotacaoSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).text( actualText + _anotacao );
  }

  function setAnotacaoEnfermagemRowRegExp( _data, _anotacao ) {

    anotacaoEnfermagemDataRegExp = _data;
    anotacaoEnfermagemTextRegExp = _anotacao;

  }

  function setPrescMedicaRowData( _row, _data, _medicacao, _via, _posologia, _horario, _relatorio, _disabled ) {
    if ( _row < 0 || _row > prescMedicaData.length ) {
      throw new Error("Invalid row index");
    }

    prescMedicaData[ _row ].disabled = _disabled;
    prescMedicaData[ _row ].data = _data;
    prescMedicaData[ _row ].medicacao = _medicacao;
    prescMedicaData[ _row ].via = _via;
    prescMedicaData[ _row ].posologia = _posologia;
    prescMedicaData[ _row ].horario = _horario;
    prescMedicaData[ _row ].relatorio = _relatorio;

    $( $( prescMedicaDataSelector, prescMedicaTbodySelector )[ _row ] ).text( _data );
    $( $( prescMedicaMedicacaoSelector, prescMedicaTbodySelector )[ _row ] ).text( _medicacao );
    $( $( prescMedicaViaSelector, prescMedicaTbodySelector )[ _row ] ).text( _via );
    $( $( prescMedicaPosologiaSelector, prescMedicaTbodySelector )[ _row ] ).text( _posologia );
    $( $( prescMedicaHorarioSelector, prescMedicaTbodySelector )[ _row ] ).text( _horario );
    // $($(prescMedicaRelatorioSelector, prescMedicaTbodySelector)[_row]).val(_relatorio);

    if ( prescMedicaData[ _row ].relatorio ) {
      $( $( prescMedicaRelatorioSelector, prescMedicaTbodySelector )[ _row ] ).text("(x)");
    } else {
      $( $( prescMedicaRelatorioSelector, prescMedicaTbodySelector )[ _row ] ).text("( )");
    }

    if ( _disabled ) {
      $( $( prescMedicaRelatorioSelector, prescMedicaTbodySelector )[ _row ] ).addClass("disabled");
    }

    // $("tr", prescEnfermagemTbody ).hide();
    // $("." + prescEnfermagemState, prescEnfermagemTbody ).show();
  }

  function setPrescMedicaRowRegExp( _row, _relatorio ) {
    if ( _row < 0 || _row > prescMedicaData.length ) {
      throw new Error("Invalid row index");
    }

    prescMedicaRelatorioRegExp[ _row ] = _relatorio;
  }

  function setPrescEnfermagemState( _prescEnfermagemStates ) {
    // Limpa tudo o que estiver no prontuario por meio de esconder tudo o que estiver em tags tr
    $("tr", prescEnfermagemTbody ).hide();
    // prescEnfermagemState = _prescEnfermagemState;
    var container;

    // Torna todas as classes presentes no prescEnfermagemStates false, menos as que foram passadas como parametro
    $.each( prescEnfermagemStates, function( index, value ) {
      prescEnfermagemStates[ index ] = false;
    });

    _prescEnfermagemStates.forEach(function( el ) {
      prescEnfermagemState = el;
      prescEnfermagemStates[ prescEnfermagemState ] = true;
      $("." + prescEnfermagemState, prescEnfermagemTbody ).show();
    });

    /*
     Essa parte do código cria a funcionalidade dos estados da prescrição de Enfermagem
     e também reseta os estados ao seu valor inicial
     */

    // decubito
    container = $(".decubito", prescEnfermagemTbody );

    // Reset
    decubito = [ false, false, false ];
    $(".check", container ).text("( )");

    // Adiciona funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.decubito ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        var i = $(".opcao", container ).index( this );
        decubito = [ false, false, false ];
        decubito[ i ] = true;
        $(".check", container ).text("( )");
        $( $(".check", container )[ i ] ).text("(X)");
      });
    }

    // verificar glicemia
    container = $(".verificar_glicemia", prescEnfermagemTbody );

    // Reset
    verificarGlicemia = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.verificar_glicemia ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        verificarGlicemia = !verificarGlicemia;
        if ( verificarGlicemia ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }

    // verificar glicemia2
    container = $(".verificar_glicemia2", prescEnfermagemTbody );

    // Reset
    verificarGlicemia2 = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.verificar_glicemia2 ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        verificarGlicemia2 = !verificarGlicemia2;
        if ( verificarGlicemia2 ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }

    // levantar grade
    container = $(".levantar_grade", prescEnfermagemTbody );

    // Reset
    levantarGrade = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.levantar_grade ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        levantarGrade = !levantarGrade;
        if ( levantarGrade ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }

    // encaminhar_paciente_cc
    container = $(".encaminhar_paciente_cc", prescEnfermagemTbody );

    // Reset
    encaminharPacienteCc = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.encaminhar_paciente_cc ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        encaminharPacienteCc = !encaminharPacienteCc;
        if ( encaminharPacienteCc ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }
    // check_list_cirurgia
    container = $(".check_list_cirurgia", prescEnfermagemTbody );

    // Reset
    checkListCirurgia = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.check_list_cirurgia ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        checkListCirurgia = !checkListCirurgia;
        if ( checkListCirurgia ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }
    // placa_neutra
    container = $(".placa_neutra", prescEnfermagemTbody );

    // Reset
    placaNeutra = [ false, false, false ];
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.placa_neutra ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        var i = $(".opcao", container ).index( this );
        placaNeutra = [ false, false, false ];
        placaNeutra[ i ] = true;
        $(".check", container ).text("( )");
        $( $(".check", container )[ i ] ).text("(X)");
      });
    }

    // placa_neutra2
    container = $(".placa_neutra2", prescEnfermagemTbody );

    // Reset
    placaNeutra2 = [ false, false, false ];
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.placa_neutra2 ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        var i = $(".opcao", container ).index( this );
        placaNeutra2 = [ false, false, false ];
        placaNeutra2[ i ] = true;
        $(".check", container ).text("( )");
        $( $(".check", container )[ i ] ).text("(X)");
      });
    }

    // riscoInfeccao
    container = $(".risco_infeccao", prescEnfermagemTbody );

    // Reset
    riscoInfeccao = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.risco_infeccao ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        riscoInfeccao = !riscoInfeccao;
        if ( riscoInfeccao ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }

    // riscoInfeccao
    container = $(".troca_curativo", prescEnfermagemTbody );

    // Reset
    trocaCurativo = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.troca_curativo ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        trocaCurativo = !trocaCurativo;
        if ( trocaCurativo ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }

    // nutricaoDesequilibrada
    container = $(".nutricao_desequilibrada", prescEnfermagemTbody );

    // Reset
    nutricaoDesequilibrada = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.nutricao_desequilibrada ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        nutricaoDesequilibrada = !nutricaoDesequilibrada;
        if ( nutricaoDesequilibrada ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }
    // manutencaoSondaNasogastrica
    container = $(".manutencao_sonda_nasogastrica", prescEnfermagemTbody );

    // Reset
    manutencaoSondaNasogastrica = false;
    $(".check", container ).text("( )");

    // Adiciona Funcionalidade
    $(".opcao", container ).unbind("click");
    if ( prescEnfermagemStates.manutencao_sonda_nasogastrica ) {
      $(".opcao", container ).click({ container: container }, function( e ) {
        container = e.data.container;
        manutencaoSondaNasogastrica = !manutencaoSondaNasogastrica;
        if ( manutencaoSondaNasogastrica ) {
          $(".check", container ).text("(X)");
        } else {
          $(".check", container ).text("( )");
        }
      });
    }
  }


  function init( selector ) {
    $( selector ).append( html );

    $( alergiaMedicamentosaDivSim ).click(function() {
      if ( !alergiaMedicamentosaDisabled ) {
        alergiaMedicamentosaStatus = true;

        $( alergiaMedicamentosaSpanSim ).text("X");
        $( alergiaMedicamentosaSpanNao ).text("   ");

        $( alergiaMedicamentosaTextSelector ).show();
      }
    });

    $( alergiaMedicamentosaDivNao ).click(function() {
      if ( !alergiaMedicamentosaDisabled ) {
        alergiaMedicamentosaStatus = false;

        $( alergiaMedicamentosaSpanNao ).text("X");
        $( alergiaMedicamentosaSpanSim ).text("   ");

        $( alergiaMedicamentosaTextSelector ).hide();
      }
    });

    $( prescMedicaRelatorioSelector, prescMedicaTbodySelector ).click(function() {
      // console.log(this);
      var row = $( prescMedicaRelatorioSelector, prescMedicaTbodySelector ).index( this );
      if ( !prescMedicaData[ row ].disabled ) {
        prescMedicaData[ row ].relatorio = !prescMedicaData[ row ].relatorio;

        if ( prescMedicaData[ row ].relatorio ) {
          $( this ).text("(x)");
        } else {
          $( this ).text("( )");
        }
      }
    });


    $(".content").tabs();
  }

  /**
   * Description
   * @method prontuarioSweepScreen
   * @memberOf module:Prontuario_Controller
   */
  function prontuarioSweepScreen() {

    if ( !$("#pauseMenu").is(":visible") ) {
      if ( $("#commandBar").is(":visible") ) {
        navigationList = $.merge(
          $("#prontuario .outerBlock:visible input:enabled"),
          $("#commandBar .action_button[class!='disabled']:visible")
        );
        return "inputsAndActions";
      } else {
        navigationList = $("#prontuario .outerBlock:visible input:enabled");
        return "inputsOnly";
      }
    } else {
      navigationList = $("#pauseMenu .button");
      return "pause";
    }
  }

  /**
   * Description
   * @method prontuarioNavigation
   * @param {} _keycode
   * @memberOf module:Prontuario_Controller
   */
  function prontuarioNavigation( _keycode ) {

    op = prontuarioSweepScreen();
    var tabsList = $("#prontuario li.ui-state-default:visible a");

    if ( _keycode == KEYCODE_ARROW_DOWN ) {
      if ( i >= navigationList.length - 1 ) {
        i = 0;
      } else {
        i++;
      }
      $( navigationList[ i ] ).focus();
      return false;
    } else if ( _keycode == KEYCODE_ARROW_UP ) {
      if ( i > 0 ) {
        i--;
      } else {
        i = navigationList.length - 1;
      }
      $( navigationList[ i ] ).focus();
      return false;
    } else if ( _keycode == KEYCODE_ARROW_RIGHT ) {
      if ( j >= tabsList.length - 1 ) {
        j = 0;
      } else {
        j++;
      }
      $( tabsList[ j ] ).click();
      i = 0;
      return false;
    } else if ( _keycode == KEYCODE_ARROW_LEFT ) {
      if ( j > 0 ) {
        j--;
      } else {
        j = tabsList.length - 1;
      }
      $( tabsList[ j ] ).click();
      i = 0;
      return false;
    } else if ( _keycode == KEYCODE_ENTER ) {
      if ( i != -1 ) {
        $( navigationList[ i ] ).click();
        return false;
      }
    } else if ( $("#pauseButton").is(":visible") && _keycode == KEYCODE_P ) {
      $("#pauseButton").click();
      return false;
    }
  }

  /**
   * Description
   * @method startAccessibleProntuarioNavigation
   * @memberOf module:Prontuario_Controller
   */

  var i = 0;
  var j = 0;

  function startAccessibleProntuarioNavigation() {

    $( window ).off("keydown");

    $( window ).on("keydown", function( e ) {

      if ( $("#dialogBar").is(":visible") && !$("#pauseMenu").is(":visible") ) {

        if ( e.which == KEYCODE_ARROW_UP && $(".dialog_reread").is(":visible") ) {
          $(".dialog_reread").click();
          return false;
        } else if ( e.which == KEYCODE_ARROW_DOWN && $(".dialog_right").is(":visible") ) {
          $(".dialog_right").click();
          return false;
        } else if ( e.which == KEYCODE_ONE && $(".dialog_button[value='1']").is(":visible") ) {
          $(".dialog_button[value='1']").click();
          return false;
        } else if ( e.which == KEYCODE_TWO && $(".dialog_button[value='2']").is(":visible") ) {
          $(".dialog_button[value='2']").click();
          return false;
        } else if ( e.which == KEYCODE_THREE && $(".dialog_button[value='3']").is(":visible") ) {
          $(".dialog_button[value='3']").click();
          return false;
        } else if ( $("#pauseButton").is(":visible") && e.which == KEYCODE_P ) {
          $("#pauseButton").click();
          return false;
        }

      } else {
        return prontuarioNavigation( e.which );
      }
    });
  }

  function open( _tab ) {
    $( prontuarioSelector ).show();

    for ( row = 0; row < ssvvData.length; row++ ) {
      var _disabled = ssvvData[ row ].disabled;

      $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ row ] ).mask("000x000");
      $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ row ] ).mask("000");
      $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ row ] ).mask("000");
      $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ row ] ).mask("000");
      $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ row ] ).mask("00.0");
    }
    updateData();

    var iTab = 0;
    switch ( _tab ) {
      case "internacao":
        iTab = 1;
        break;
      case "prescMedica":
        iTab = 2;
        break;
      case "prescEnfermagem":
        iTab = 3;
        break;
      case "sinaisVitais":
        iTab = 4;
        break;
      case "anotacoes":
        iTab = 5;
        break;
      case "paciente":
      default:
        iTab = 0;
        break;
    }

    $(".content").tabs("option", "active", iTab );

    startAccessibleProntuarioNavigation();
  }

  function updateData() {
    $( nomeDisplaySelector ).text( nomeText );
    $( dataNascimentoDisplaySelector ).text( dataNascimentoText );
    $( idadeDisplaySelector ).text( idadeText );
    $( sexoDisplaySelector ).text( sexoText );
    $( estadoCivilDisplaySelector ).text( estadoCivilText );
    $( profissaoDisplaySelector ).text( profissaoText );
    $( paiDisplaySelector ).text( paiText );
    $( maeDisplaySelector ).text( maeText );
    $( dataInternacaoDisplaySelector ).text( dataInternacaoText );
    $( leitoDisplaySelector ).text( leitoText );
    $( antecedentesHospitalaresDisplaySelector ).text( antecedentesText );
    $( hipoteseDiagnosticaDisplaySelector ).text( hipoteseText );
    $( observacoesDisplaySelector ).text( observacoesText );
    $( pesoDisplaySelector ).text( pesoText );
    $( alturaDisplaySelector ).text( alturaText );
    $( circunferenciaAbdominalSelector ).text( circunferenciaAbdominalText );

    $( alergiaMedicamentosaTextSelector ).prop("disabled", alergiaMedicamentosaDisabled );

    if ( alergiaMedicamentosaStatus ) {
      $( alergiaMedicamentosaSpanSim ).text( alergiaMedicamentosaStatusX );
      $( alergiaMedicamentosaSpanNao ).text( alergiaMedicamentosaStatusEmpty );

      $( alergiaMedicamentosaTextSelector ).val( alergiaMedicamentosaText );
      $( alergiaMedicamentosaTextSelector ).show();
    } else {
      $( alergiaMedicamentosaSpanSim ).text( alergiaMedicamentosaStatusEmpty );
      $( alergiaMedicamentosaSpanNao ).text( alergiaMedicamentosaStatusX );

      $( alergiaMedicamentosaTextSelector ).hide();
    }

    for ( row = 0; row < prescMedicaData.length; row++ ) {
      $( $( prescMedicaDataSelector, prescMedicaTbodySelector )[ row ] ).text( prescMedicaData[ row ].data );
      $( $( prescMedicaMedicacaoSelector, prescMedicaTbodySelector )[ row ] ).text( prescMedicaData[ row ].medicacao );
      $( $( prescMedicaViaSelector, prescMedicaTbodySelector )[ row ] ).text( prescMedicaData[ row ].via );
      $( $( prescMedicaPosologiaSelector, prescMedicaTbodySelector )[ row ] ).text( prescMedicaData[ row ].posologia );
      $( $( prescMedicaHorarioSelector, prescMedicaTbodySelector )[ row ] ).text( prescMedicaData[ row ].horario );
      // $($(prescMedicaRelatorioSelector, prescMedicaTbodySelector)[row]).val(prescMedicaData[row].relatorio);
      if ( prescMedicaData[ row ].relatorio ) {
        $( $( prescMedicaRelatorioSelector, prescMedicaTbodySelector )[ row ] ).text("(x)");
      } else {
        $( $( prescMedicaRelatorioSelector, prescMedicaTbodySelector )[ row ] ).text("( )");
      }

    }

    for ( row = 0; row < ssvvData.length; row++ ) {
      var _disabled = ssvvData[ row ].disabled;

      $( $( ssvvDataSelector, ssvvTbodySelector )[ row ] ).text( ssvvData[ row ].data );
      $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ row ] ).val( ssvvData[ row ].pa );
      $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ row ] ).val( ssvvData[ row ].fc );
      $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ row ] ).val( ssvvData[ row ].fr );
      $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ row ] ).val( ssvvData[ row ].sat );
      $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ row ] ).val( ssvvData[ row ].temp );

      // $($(ssvvDataSelector, ssvvTbodySelector)[_row]).text(_data);
      $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ row ] ).prop("disabled", _disabled );
      $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ row ] ).prop("disabled", _disabled );
      $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ row ] ).prop("disabled", _disabled );
      $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ row ] ).prop("disabled", _disabled );
      $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ row ] ).prop("disabled", _disabled );
    }


    $( $( anotacaoEnfermagemDataSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).val( anotacaoEnfermagemData );
    $( $( anotacaoEnfermagemAnotacaoSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).val( anotacaoEnfermagemText );

  }

  function updateValues() {
    nomeText = $( nomeDisplaySelector ).text();
    dataNascimentoText = $( dataNascimentoDisplaySelector ).text();
    idadeText = $( idadeDisplaySelector ).text();
    sexoText = $( sexoDisplaySelector ).text();
    estadoCivilText = $( estadoCivilDisplaySelector ).text();
    profissaoText = $( profissaoDisplaySelector ).text();
    paiText = $( paiDisplaySelector ).text();
    maeText = $( maeDisplaySelector ).text();
    dataInternacaoText = $( dataInternacaoDisplaySelector ).text();
    leitoText = $( leitoDisplaySelector ).text();
    antecedentesText = $( antecedentesHospitalaresDisplaySelector ).text();
    hipoteseText = $( hipoteseDiagnosticaDisplaySelector ).text();
    observacoesText = $( observacoesDisplaySelector ).text();
    pesoText = $( pesoDisplaySelector ).text();
    alturaText = $( alturaDisplaySelector ).text();
    circunferenciaAbdominalText = $( circunferenciaAbdominalSelector ).text();

    // alergiaMedicamentosaDisabled = $(alergiaMedicamentosaTextSelector).prop('disabled', );

    // if(alergiaMedicamentosaStatus){
    //     alergiaMedicamentosaStatusX = $(alergiaMedicamentosaSpanSim).text();
    //     alergiaMedicamentosaStatusEmpty = $(alergiaMedicamentosaSpanNao).text();

    //     alergiaMedicamentosaText = $(alergiaMedicamentosaTextSelector).val();
    //     $(alergiaMedicamentosaTextSelector).show();
    // }else{
    //     alergiaMedicamentosaStatusEmpty = $(alergiaMedicamentosaSpanSim).text();
    //     alergiaMedicamentosaStatusX = $(alergiaMedicamentosaSpanNao).text();

    //     $(alergiaMedicamentosaTextSelector).hide();
    // }

    for ( row = 0; row < prescMedicaData.length; row++ ) {
      prescMedicaData[ row ].data = $( $( prescMedicaDataSelector, prescMedicaTbodySelector )[ row ] ).text();
      prescMedicaData[ row ].medicacao = $( $( prescMedicaMedicacaoSelector, prescMedicaTbodySelector )[ row ] ).text();
      prescMedicaData[ row ].via = $( $( prescMedicaViaSelector, prescMedicaTbodySelector )[ row ] ).text();
      prescMedicaData[ row ].posologia = $( $( prescMedicaPosologiaSelector, prescMedicaTbodySelector )[ row ] ).text();
      prescMedicaData[ row ].horario = $( $( prescMedicaHorarioSelector, prescMedicaTbodySelector )[ row ] ).text();
    }

    for ( row = 0; row < ssvvData.length; row++ ) {
      var _disabled = ssvvData[ row ].disabled;

      ssvvData[ row ].data = $( $( ssvvDataSelector, ssvvTbodySelector )[ row ] ).text();
      ssvvData[ row ].pa = $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ row ] ).val();
      ssvvData[ row ].fc = $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ row ] ).val();
      ssvvData[ row ].fr = $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ row ] ).val();
      ssvvData[ row ].sat = $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ row ] ).val();
      ssvvData[ row ].temp = $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ row ] ).val();
    }


    anotacaoEnfermagemData = $( $( anotacaoEnfermagemDataSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).val();
    anotacaoEnfermagemText = $( $( anotacaoEnfermagemAnotacaoSelector, anotacaoEnfermagemTbodySelector )[ 0 ] ).val();
  }

  function close() {
    updateValues();
    $( prontuarioSelector ).hide();
  }

  function isDataValid() {
    var row;

    // Internação

    if ( !alergiaMedicamentosaDisabled ) {
      if ( alergiaMedicamentosaCorrectStatus == alergiaMedicamentosaStatus ) {
        if ( alergiaMedicamentosaStatus ) {
          if ( !alergiaMedicamentosaRegExp.test( alergiaMedicamentosaText ) ) {
            return false;
          }
        }
      } else {
        return false;
      }

    }


    // Precrição Médica
    for ( row = 0; row < prescMedicaData.length; row++ ) {

      if ( !prescMedicaData[ row ].disabled ) {
        if ( !prescMedicaData[ row ].relatorio ) {
          return false;
        }
      }
    }

    // TODO prescrição da Enfermagem
    if ( prescEnfermagemStates.decubito ) {
      if ( !decubito[ 1 ] ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.verificar_glicemia ) {
      if ( !verificarGlicemia ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.verificar_glicemia2 ) {
      if ( !verificarGlicemia2 ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.levantar_grade ) {
      if ( !levantarGrade ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.encaminhar_paciente_cc ) {
      if ( !encaminharPacienteCc ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.check_list_cirurgia ) {
      if ( !checkListCirurgia ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.placa_neutra ) {
      if ( !placaNeutra[ 1 ] ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.placa_neutra2 ) {
      if ( !placaNeutra2[ 0 ] ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.risco_infeccao ) {
      if ( !riscoInfeccao ) {
        return false;
      }
    }

    if ( prescEnfermagemStates.troca_curativo ) {
      if ( !trocaCurativo ) {
        return false;
      }
    }
    if ( prescEnfermagemStates.nutricao_desequilibrada ) {
      if ( !nutricaoDesequilibrada ) {
        return false;
      }
    }
    if ( prescEnfermagemStates.manutencao_sonda_nasogastrica ) {
      if ( !manutencaoSondaNasogastrica ) {
        return false;
      }
    }

    for ( row = 0; row < ssvvData.length; row++ ) {
      // if row is not enabled, dont check if vars are valid
      if ( !ssvvData[ row ].disabled ) {
        // data = $($(ssvvDataSelector, ssvvTbodySelector)[row]).text();
        pa = $( $( ssvvPressaoArterialSelector, ssvvTbodySelector )[ row ] ).val();
        fc = $( $( ssvvFrequenciaCardiacaSelector, ssvvTbodySelector )[ row ] ).val();
        fr = $( $( ssvvFrequenciaRespiratoriaSelector, ssvvTbodySelector )[ row ] ).val();
        sat = $( $( ssvvSaturacaoSelector, ssvvTbodySelector )[ row ] ).val();
        temp = $( $( ssvvTemperaturaSelector, ssvvTbodySelector )[ row ] ).val();

        // if(!ssvvRegExps[row].data.test(data))
        //     return false;
        if ( !ssvvRegExps[ row ].pa.test( pa ) ) {
          return false;
        }
        if ( !ssvvRegExps[ row ].fc.test( fc ) ) {
          return false;
        }
        if ( !ssvvRegExps[ row ].fr.test( fr ) ) {
          return false;
        }
        if ( !ssvvRegExps[ row ].sat.test( sat ) ) {
          return false;
        }
        if ( !ssvvRegExps[ row ].temp.test( temp ) ) {
          return false;
        }
      }
    }
    return true;
  }


  // Public Interface

  window.Prontuario = {
    open: open,
    close: close,
    isDataValid: isDataValid
  };
  return {
    init: init,

    open: open,
    close: close,
    isDataValid: isDataValid,
    updateData: updateData,

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
    setAlergiaMedicamentosa: setAlergiaMedicamentosa,
    setDisableAlergiaMedicamentosa: setDisableAlergiaMedicamentosa,
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

    setPrescEnfermagemState: setPrescEnfermagemState,

    addToRelatorio: addToRelatorio,

    setSsvvRowData: setSsvvRowData,
    setSsvvRowRegExp: setSsvvRowRegExp,

    setAnotacaoEnfermagemRowData: setAnotacaoEnfermagemRowData,
    setAnotacaoEnfermagemRowRegExp: setAnotacaoEnfermagemRowRegExp,

    setPrescMedicaRowData: setPrescMedicaRowData,
    setPrescMedicaRowRegExp: setPrescMedicaRowRegExp
  };

});
