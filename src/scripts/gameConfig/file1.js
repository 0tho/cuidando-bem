/*
 This module has every wrold variable from each game level so it can be easily loaded inside the game.
 New levels can easily be made by adding new game levels.
 */

define(['levelsData_interface', 'Scene', 'Action', 'Level', 'Dialog', 'InteractiveObject', 'Flag', 'core'],
    function (game, Scene, Action, Level, Dialog, InteractiveObject, Flag, core) {
        var debug_mode = true;

        var level = new Level("Level 1", isEndOfLevel1, getNextLevel1);
        L.group(level.getName(), debug_mode);

        function isEndOfLevel1() {
        }

        function getNextLevel1() {
        }

        var flags_on = true;    // if false it wont check for flags -- tests purpose

        if (flags_on)
            var visibility = false;
        else
            var visibility = true;

        /*
         Scene:  Recepcao
         */
        var recepcao = new Scene("recepcao", "scene-recepcao",
            recepcaoOnLoad, recepcaoOnUnload);
        // Flags
        level.registerFlag(new Flag("conversar_recepcionista"), false);

        // Dialogs
        var fala_recepcionista = [];
        fala_recepcionista[0] = new Dialog("recepcionista", "char-recepcionista",
            "Bom dia, você parece novo por aqui. Como posso ajudá-lo?");
        fala_recepcionista[0].registerOption({
            text: "Bom dia, sou o novo técnico de enfermagem contratado",
            actionFunction: function () {
                level.getFlag("conversar_recepcionista").setValue(true);
                L.log("Selecionado 1a opção diálogo: " + level.getFlag("conversar_recepcionista").getValue());
                core.closeDialog(0);
                core.openDialog(1);
            }});

        fala_recepcionista[1] = new Dialog("recepcionista", "char-recepcionista",
            "A sim o funcionário novo! O Enfermeiro mentor está lhe esperando no corredor");
        fala_recepcionista[1].registerOption({
            text: "Obrigado",
            actionFunction: function () {
                L.log("Encerrar o diálogo");
                core.closeDialog(1);
                core.setActionVisible("Ir ao corredor", true);
                core.setActionVisible("Conversar com a recepcionista", true);
                core.setInteractiveObjectVisible("Ir para o corredor esquerda", true);
                core.setInteractiveObjectVisible("Ir para o corredor direita", true);
                core.setInteractiveObjectVisible("Conversar com a recepcionista", true);
            }});

        recepcao.registerDialogs(fala_recepcionista);

        // Functions
        function recepcaoOnLoad() {
            core.openDialog(0)
        }

        function recepcaoOnUnload() {
            core.closeDialog(0);
            core.closeDialog(1);
        }

        function recepcaoIrCorredor() {
            L.log("Funcao: recepcao_ir_corredor");
            if (!flags_on) {  // wont check for flags
                core.closeDialog(0);
                core.closeDialog(1);
                core.changeScene(1);
                L.log("Ir para o corredor");
            }
            else {
                if (level.getFlag("conversar_recepcionista").getValue() == true) {
                    core.closeDialog(0);
                    core.closeDialog(1);
                    core.changeScene(1);
                    L.log("Ir para o corredor");
                }
                else
                    L.log("Necessita ação: conversar com a recepcionista");
            }
        }

        function conversarRecepcionista() {
            L.log("action: Conversar com a recepcionista");
            core.openDialog(0);
        }

        // Actions

        recepcao.registerAction(
            new Action("Ir ao corredor", "action-ir_corredor", recepcaoIrCorredor, visibility));

        recepcao.registerAction(
            new Action("Conversar com a recepcionista", "action-abrir_dialogo", conversarRecepcionista, visibility));

        // Interactive Objects
        // # 3 - Falar com recepcionista
        recepcao.registerInteractiveObject(
            new InteractiveObject("Conversar com a recepcionista", "intObj-falar_com_recepcionista", conversarRecepcionista, visibility));

        recepcao.registerInteractiveObject(
            new InteractiveObject("Ir para o corredor esquerda", "intObj-ir_corredor_esq", recepcaoIrCorredor, visibility));

        recepcao.registerInteractiveObject(
            new InteractiveObject("Ir para o corredor direita", "intObj-ir_corredor_dir", recepcaoIrCorredor, visibility));

        /*
         Scene:  Corredor
         */
        var corredor = new Scene("corredor", "scene-corredor", corredorOnLoad, corredorOnUnLoad);

        // Flags
        level.registerFlag(new Flag("conversar_mentor", false));
        level.registerFlag(new Flag("passagem_corredor", 0));

        // Dialogs
        var fala_mentor = [];
        fala_mentor[0] = new Dialog("mentor", "char-mentor",
                "Bom dia! Seja bem vindo ao Hospital Cuidando Bem! É um prazer tê-lo como parte integrante de nossa " +
                "equipe. Espero que dê tudo certo,  nesta instituição seguimos a missão e filosofia de garantir a " +
                "segurança de nossos clientes, utilizando os protocolos de segurança do paciente");
        fala_mentor[0].registerOption({
            text: "Obrigado! Espero conseguir atender suas expectativas",
            actionFunction: function () {
                level.getFlag("conversar_mentor").setValue(true);
                core.closeDialog(0);
                core.openDialog(1);
            }
        });

        fala_mentor[1] = new Dialog("mentor", "char-mentor",
            "Agora por aqui, me acompanhe até a enfermaria masculina");
        fala_mentor[1].registerOption({
            text: "Encerrar diálogo",
            actionFunction: function () {
                core.closeDialog(1);
                core.setActionVisible("Ir para a sala de leitos masculino", true);
                core.setInteractiveObjectVisible("Ir para a sala de leitos masculino", true);
            }
        });

        corredor.registerDialogs(fala_mentor);

        // Functions
        function corredorOnLoad() {
            switch (level.getFlag("passagem_corredor").getValue()){
                case 0: // first time at 'corredor'
                    core.openDialog(0);
                    break;
                case 1: // second time at 'corredor'
                    core.setActionVisible("Ir para o posto de enfermagem", true);
                    core.setActionVisible("Ir para a sala de leitos masculino", false);
                    break;
                case 2:
                    core.setActionVisible("Ir para o posto de enfermagem", false);
                    core.setActionVisible("Ir para a sala de leitos masculino", true);
                    break;
            }
        }

        function corredorOnUnLoad(){
            switch (level.getFlag("passagem_corredor").getValue()){
                case 0:
                    level.getFlag("passagem_corredor").setValue(1);
                    break;
                case 1:
                    level.getFlag("passagem_corredor").setValue(2);
                    break;
                case 2:
                    level.getFlag("passagem_corredor").setValue(3);
                    break;
            }
        }

        function corredorIrSalaLeitos() {
            if (!flags_on) {
                L.log("Action: corredorIrSalaLeitos");
                core.changeScene(2);
            } else {
                if (level.getFlag("conversar_mentor").getValue() == true) {
                    core.changeScene(2);
                    L.log("Action: corredorIrSalaLeitos");
                } else {
                    L.log("Necessita ação: falar com mentor");
                }
            }
        }

        function corredorIrPostoEnfermagem() {
                L.log("Action: corredorIrPostoEnfermagem");
                core.changeScene(4);
        }

        // Actions
        // # 6 # 21 - Ir para sala de leitos
        corredor.registerAction(
            new Action("Ir para a sala de leitos masculino", "action-ir_sala_de_leitos", corredorIrSalaLeitos, visibility));

        // # 14 - Ir para posto de enfermagem
        corredor.registerAction(
            new Action("Ir para o posto de enfermagem", "action-ir_posto_de_enfermagem", corredorIrPostoEnfermagem, visibility));

        corredor.registerInteractiveObject(
            new InteractiveObject("Ir para a sala de leitos masculino", "intObj-ir_sala_de_leitos", corredorIrSalaLeitos, visibility));

        corredor.registerInteractiveObject(
            new InteractiveObject("Ir para o posto de enfermagem", "intObj-ir_posto_de_enfermagem", corredorIrPostoEnfermagem, visibility));

        /*
         Scene:  Sala de Leitos
         */
        var sala_de_leitos = new Scene("sala_de_leitos", "scene-sala_de_leitos", salaLeitosOnLoad, salaLeitosOnUnload);

        // Flags
        level.registerFlag(new Flag("passagem_sala-de-leitos", 0));

        // Dialogs

        // Functions
        function salaLeitosOnLoad(){
            switch (level.getFlag("passagem_sala-de-leitos").getValue()){
                case 0:
                    core.setActionVisible("Ir ao leito", true);
                    core.setActionVisible("Ir ao corredor", false);
                    break;
                case 1:
                    core.setActionVisible("Ir ao leito", false);
                    core.setActionVisible("Ir ao corredor", true);
                    break;
            }
        }
        function salaLeitosOnUnload(){
            switch (level.getFlag("passagem_sala-de-leitos").getValue()){
                case 0:
                    level.getFlag("passagem_sala-de-leitos").setValue(1);
                    break;
                case 1:
                    level.getFlag("passagem_sala-de-leitos").setValue(0);
                    break;
            }
        }
        function salaLeitosIrCorredor(){
            core.changeScene(1);
        }
        function salaLeitosIrLeito(){
            core.changeScene(3);
        }
        // Actions
        // # 13.2 - Ir para o corredor
        sala_de_leitos.registerAction(
            new Action("Ir ao corredor", "action-ir_corredor", salaLeitosIrCorredor, visibility));
        // # 7 # 22 - Ir para leito
        sala_de_leitos.registerAction(
            new Action("Ir ao leito", "action-ir_leito", salaLeitosIrLeito, visibility));

        /*
         Scene: Leito
         */
        var leito = new Scene("leito", "scene-leito", leitoOnLoad, leitoOnUnload);

        // Dialogs
        var fala_cena3_leito_masculino = [];
        fala_cena3_leito_masculino[0] = new Dialog("mentor", "char-mentor",
            "Este é o Senhor Antônio, seu primeiro paciente. Um dos principais protocolos de segurança é " +
            "se certificar que a identificação dele está correta, ou seja, o paciente certo e também se apresentar");
        fala_cena3_leito_masculino[0].registerOption({
            text: "Olá Senhor Antônio, como você se sente hoje? " +
            "Sou o novo técnico de enfermagem que cuidará do senhor hoje",
            actionFunction: function () {
                core.closeDialog(0);
                core.openDialog(1);
            }
        });

        fala_cena3_leito_masculino[1] = new Dialog("paciente", "char-paciente",
            "Eu me sinto com muita dor de cabeça e passei muito nervoso hoje, acho que minha pressão subiu. " +
            "Estou assustado é a primeira vez que preciso ser internado em um hospital");
        fala_cena3_leito_masculino[1].registerOption({
            text: "Vamos fazer o que for possível para que sua estadia aqui seja rápida e o " +
            "mais confortável possível. Mas primeiro como é o nome completo seu e sua data de nascimento?",
            actionFunction: function () {
                core.closeDialog(1);
                core.openDialog(2);
            }
        });

        fala_cena3_leito_masculino[2] = new Dialog("paciente", "char-paciente",
            "Meu nome é Antônio Moraes Casagrande, nasci no dia 07-06-1956");
        fala_cena3_leito_masculino[2].registerOption({
            text: "Encerrar dialogo",
            actionFunction: function () {
                core.closeDialog(2);
                core.openDialog(3);
            }
        });

        fala_cena3_leito_masculino[3] = new Dialog("mentor", "char-mentor",
            "Está é a sua primeira missão! E você terá que admitir este paciente nesta enfermaria identificando " +
            "ele com a pulseira e aferir o SSVV. Mas antes você terá que ir até o posto de enfermagem retirar " +
            "os instrumentos para aferição dos sinais vitais");
        fala_cena3_leito_masculino[3].registerOption({
            text: "Encerrar dialogo",
            actionFunction: function () {
                core.closeDialog(3);
                core.setActionVisible("Ir para sala de leitos", true);
            }
        });

        leito.registerDialogs(fala_cena3_leito_masculino);

        // Functions
        function leitoOnLoad() {
            core.openDialog(0);
        }
        function leitoOnUnload(){

        }
        function leitoIrCorredor(){
                L.log("Action: action-ir_sala_de_leitos");
                core.changeScene(2);
        }
        /*
        function leitoConversarPaciente(){
            L.log("Action: conversar_paciente");
            level.getFlags()[0] = true;
        }
        function leitoPulseiraPaciente(){
            L.log("Action: pulseira_paciente");
            level.getFlags()[1] = true;
        }
        function leitoConfirmarPaciente(){
            L.log("Action: confirmar_paciente");
            if (level.getFlags()[0] == true && level.getFlags()[1] == true)
                level.getFlags()[2] = true;
        }
        function leitoFecharPulseira(){

        }

        function leitoConversarMentor(){
            L.log("Action: conversar_mentor");
            // get dialog conversar_mentor

            // Acao #12
            // necessita de "confirmar_paciente"
            if (level.getFlags()[2] == true) {
                level.getFlags()[3] = true; // conversar_mentor
            }
            // Acao #27
            if (level.getFlags()[8] == true &&      // medir_temperatura
                level.getFlags()[9] == true &&     // medir_pulso
                level.getFlags()[10] == true) {     // medir_freq_respiratoria
                level.getFlags()[11] == true;  // mentor_finaliza
            }
        }
        function leitoLavarMaos(){
            L.log("Action: lavar_maos");
            level.getFlags()[7] = true;    // lavar_maos
        }

        function leitoMedirTemperatura(){
            L.log("Action: medir_temperatura");
            // precisa de termometro e lavar_maos
            if (level.getFlags()[4] == true && level.getFlags()[7] == true) {
                level.getFlags()[8] = true; // medir_temperatura
            }
        }

        function leitoMedirPulso(){
            L.log("Action: medir_pulso");
            // precisa de medidor pressao e lavar_maos
            if (level.getFlags()[5] == true && level.getFlags()[7] == true) {
                level.getFlags()[9] = true; // medir_pulso
            }
        }

        function leitoMedirFreqRespiratoria(){
            L.log("Action: medir_freq_respiratoria");
            // precisa de oximetro e lavar_maos
            if (level.getFlags()[6] == true && level.getFlags()[7] == true) {
                level.getFlags()[10] = true; // medir_fred_respiratoria
            }
        }
        */

        // Actions

        // # 13.1 - Ir para o corredor --> substituida por ir para sala de leitos
        leito.registerAction(
            new Action("Ir para sala de leitos", "action-ir_sala_de_leitos", leitoIrCorredor, visibility));
        /*
        // # 8 - Conversar paciente
        leito.registerAction(
            new Action("conversar_paciente", "action-conversar_paciente", leitoConversarPaciente));
        // # 9 - Ver pulseira do paciente (exibe interactiveObject)
        leito.registerAction(
            new Action("pulseira_paciente", "action-pulseira_paciente", leitoPulseiraPaciente));
        // # 10 - Confirmar Paciente
        leito.registerAction(
            new Action("confirmar_paciente", "action-confirmar_paciente", leitoConfirmarPaciente));
        // # 11 - Fechar janela da pulseira
        leito.registerAction(
            new Action("fechar_pulseira", "action-fechar_pulseira", leitoFecharPulseira));
        // # 12 # 27 - Conversar com o Mentor
        leito.registerAction(
            new Action("conversar_mentor", "action-conversar_mentor", leitoConversarMentor));
        // # 23 - Lavar as maos
        leito.registerAction(
            new Action("lavar_maos", "action-lavar_maos", leitoLavarMaos));
        // # 24 - Medir temperatura
        leito.registerAction(
            new Action("medir_temperatura", "action-medir_temperatura", leitoMedirTemperatura));
        // # 25 - Medir pulso
        leito.registerAction(
            new Action("medir_pulso", "action-medir_pulso", leitoMedirPulso));
        // # 26 - medir frequencia respiratoria
        leito.registerAction(
            new Action("medir_freq_respiratoria", "action-medir_freq_respiratoria", leitoMedirFreqRespiratoria));
        */
        /*
         Scene: Posto de Enfermagem
         */
        var posto_de_enfermagem = new Scene("posto_de_enfermagem", "scene-posto_de_enfermagem",
            postoEnfermagemOnload, postoEnfermagemOnUnload);

        // Flags

        // Dialogs

        // Functions
        function postoEnfermagemOnload(){

        }

        function postoEnfermagemOnUnload(){

        }

        function postoEnfermagemIrCorredor(){
                L.log("Action: ir_corredor");
                core.changeScene(1);
        }
        function postoEnfermagemAbrirGaveta() {
            L.log("Action: abrir_gaveta");
            // abrir janela de objeto
        }
        function postoEnfermagemPegarTermometro() {
            L.log("Action: pegar_termometro");
            if (level.getFlags()[3] == true) {
                level.getFlags()[4] = true;    // termometro
                level.getFlags()[7] = false;   // nega - lavar_maos
            }
        }
        function postoEnfermagemPegarMedidorPressao() {
            L.log("Action: pegar_medidor_pressao");
            if (level.getFlags()[3] == true) {
                level.getFlags()[5] = true;    // medidor_pressao
                level.getFlags()[7] = false;   // nega - lavar_maos
            }
        }
        function postoEnfermagemPegarOximetro() {
            L.log("Action: pegar_oximetro");
            if (level.getFlags()[3] == true) {
                level.getFlags()[6] = true;    // oximetro
                level.getFlags()[7] = false;   // nega - lavar_maos
            }
        }
        function postoEnfermagemFecharGaveta() {
            L.log("Action: fechar_gaveta");
        }
        // Actions
        posto_de_enfermagem.registerAction(
            new Action("Ir ao corredor", "action-ir_corredor",postoEnfermagemIrCorredor, visibility));

        posto_de_enfermagem.registerAction(
            new Action("Abrir gaveta", "action-abrir_gaveta", postoEnfermagemAbrirGaveta, visibility));

        posto_de_enfermagem.registerAction(
            new Action("Pegar termometro", "action-pegar_termometro", postoEnfermagemPegarTermometro, visibility));

        posto_de_enfermagem.registerAction(
            new Action("Pegar medidor pressao", "action-pegar_medidor_pressao", postoEnfermagemPegarMedidorPressao, visibility));

        posto_de_enfermagem.registerAction(
            new Action("Pegar oximetro", "action-pegar_oximetro", postoEnfermagemPegarOximetro, visibility));

        posto_de_enfermagem.registerAction(
            new Action("Fechar gaveta", "action-fechar_gaveta", postoEnfermagemFecharGaveta, visibility));

        level.registerScene(recepcao);
        level.registerScene(corredor);
        level.registerScene(sala_de_leitos);
        level.registerScene(leito);
        level.registerScene(posto_de_enfermagem);

        level.setInitialScene(0);

        /*
         EXEMPLO DE COMO UTILIZAR MODAL
         var gaveta_teste = new Scene("Gaveta", "modalScene-gavetaTeste");

         gaveta_teste.registerAction(new Action("Fechar Gaveta", "action-fechar_gaveta",
         function(){
         core.closeModalScene();
         }
         ));

         gaveta_teste.registerInteractiveObject(new InteractiveObject("Objeto", "intObj-objeto",
         function (){
         L.log("O objeto foi clicado");
         core.setInteractiveObjectVisible(0, false);
         }
         ));
         level.registerModalScene(gaveta_teste);

         recepcao.registerAction(
         new Action("Fechar modal", "action-fechar_modal", function(){core.openModalScene(0);}));

         */

        game.registerLevel(level, 0);
        L.groupEnd();
    });