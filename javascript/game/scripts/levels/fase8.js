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

define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function L(){u.changeScene(1)}function A(){}function O(){u.changeScene(2)}function M(){m.getFlag("score_pegou_medicamento").getValue()==0&&m.getFlag("score_ir_posto_hora_errada").getValue()==0&&(u.registerScoreItem(h.irPostoEnfermagemHoraErrada),m.getFlag("score_ir_posto_hora_errada").setValue(!0)),u.changeScene(5)}function _(){m.getFlag("score_ir_ala_feminina_hora_errada").getValue()==0&&(u.registerScoreItem(h.irAlaFemininaHoraErrada),m.getFlag("score_ir_ala_feminina_hora_errada").setValue(!0)),u.changeScene(7)}function D(){m.getFlag("score_viu_prontuario").getValue()==0&&m.getFlag("score_ir_farmacia_hora_errada").getValue()==0&&(u.registerScoreItem(h.irFarmaciaHoraErrada),m.getFlag("score_ir_farmacia_hora_errada").setValue(!0)),u.changeScene(4)}function P(){m.getFlag("levou_yuri_centro_cirurgico").getValue()==0?(m.getFlag("score_ir_centro_cirurgico_hora_errada").getValue()==0&&(u.registerScoreItem(h.irCentroCirurgicoHoraErrada),m.getFlag("score_ir_centro_cirurgico_hora_errada").setValue(!0)),u.changeScene(6)):(m.getFlag("entrou_centro_cirurgico").setValue(!0),u.changeScene(8))}function H(){m.getFlag("ja_falou_farmaceutico").getValue()==1&&m.getFlag("score_conferiu_medicacao").getValue()==0&&m.getFlag("score_nao_conferiu_medicacao").getValue()==0&&(u.registerScoreItem(h.naoConferirMedicacao),m.getFlag("score_nao_conferiu_medicacao").setValue(!0)),u.changeScene(1)}var p=require("DialogsData").fase8,d=require("DialogsData").alertas,h=require("ScoresData").level8,v=require("Player"),m=new r("Level 8"),g,y,b,w,E,S,x,T,N,C,k;g=a.scenes.recepcao.getClone().onLoad(function(){}),g.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Recepcionista")).setCssClass("intObj-talkToReceptionist").onClick(A).setVisibility(!0),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left no-glow").onClick(L).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right no-glow").onClick(L).setVisibility(!0)]),y=a.scenes.corredor.getClone().onLoad(function(){}).onUnload(function(){}),y.registerInteractiveObjects([(new s("io-ir_sala_leitos","Ir para a sala de Leitos Masculino")).setCssClass("intObj-goToBedroom").onClick(O).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")).setCssClass("intObj-goToNursingStation").onClick(M).setVisibility(!0),(new s("io-ir_ala_feminina","Ir para a Ala Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(_).setVisibility(!0),(new s("io-ir_farmacia","Ir para a Farmácia")).setCssClass("intObj-goToPharmacy").onClick(D).setVisibility(!0),(new s("io-ir_centro_cirurgico","Ir para o Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(P).setVisibility(!0)]),b=(new t("salaDeLeitos","scene-salaDeLeitos")).setCssClass("scene-bedroom-level8").onLoad(function(){m.getFlag("ja_falou_paciente").getValue()==1&&u.openCommandBar(),m.getFlag("ja_falou_paciente").getValue()==0&&(m.getFlag("ja_falou_paciente").setValue(!0),u.openDialog(0)),m.getFlag("ja_falou_farmaceutico").getValue()==1&&m.getFlag("levou_yuri_centro_cirurgico").getValue()==0&&(u.setActionVisible("btn-lavarMaos",!0),u.setInteractiveObjectVisible("io-ir_leito",!0),u.openCommandBar()),m.getFlag("levou_yuri_centro_cirurgico").getValue()==1&&u.setInteractiveObjectVisible("io-ir_leito",!1)}).onUnload(function(){u.closeCommandBar()}),b.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao Corredor")).setCssClass("intObj-bedroomToHallway").onClick(function(){u.changeScene(1)}).setVisibility(!0),(new s("io-ir_leito","Ir ao leito")).setCssClass("intObj-irLeitoEsquerda").onClick(function(){m.getFlag("score_lavar_maos_antes_leito").getValue()==0&&m.getFlag("score_nao_lavar_maos_antes_leito").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosAntesLeito),m.getFlag("score_nao_lavar_maos_antes_leito").setValue(!0)),u.changeScene(3)}).setVisibility(!1)]),b.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){m.getFlag("score_viu_prontuario").getValue()==0&&(u.registerScoreItem(h.verProntuario),m.getFlag("score_viu_prontuario").setValue(!0)),l.open(),u.openModalScene("Prontuario")}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("score_lavar_maos_antes_leito").getValue()==0&&(u.registerScoreItem(h.lavarMaosAntesLeito),m.getFlag("score_lavar_maos_antes_leito").setValue(!0))}).setVisibility(!1)]),b.registerDialogs([(new i(a.characters.jogador)).setText(p.alaMasculina[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.yuri)).setText(p.alaMasculina[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.alaMasculina[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.yuri)).setText(p.alaMasculina[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(p.alaMasculina[4]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.pacientes.yuri)).setText(p.alaMasculina[5]).registerOption("",function(){u.openDialog(6)}),(new i(a.characters.jogador)).setText(p.alaMasculina[6]).registerOption("",function(){u.closeDialog()})]),w=a.scenes.leitos.yuri.getClone().onLoad(function(){u.openCommandBar(),m.getFlag("score_pegou_agua").getValue()==1&&m.getFlag("score_pegou_copo").getValue()==1&&u.setActionVisible("btn-oferecer_copo",!0),m.getFlag("score_pegou_medicamento").getValue()==1&&u.setActionVisible("btn-administrar_medicamento",!0)}).onUnload(function(){u.closeCommandBar()}),w.registerInteractiveObjects([(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_09-checar_pulseira").onClick(function(){m.getFlag("score_verificar_pulseira").getValue()==0&&(m.getFlag("score_verificar_pulseira").setValue(!0),u.registerScoreItem(h.verificarPulseira)),u.openModalScene("pulseira"),f.open()}).setVisibility(!0),(new s("io-conversar_paciente09","Falar com o paciente")).setCssClass("intObjconversar_paciente").onClick(function(){u.openDialog(0),u.closeCommandBar()}).setVisibility(!0)]),w.registerDialogs([(new i(a.characters.jogador)).setText(p.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.yuri)).setText(p.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[2]).registerOption("",function(){u.closeDialog()})]),w.registerActions([(new n("btn-oferecer_copo","Oferecer copo com água para o paciente")).setCssClass("action-copo_descartavel").onClick(function(){m.getFlag("score_ofereceu_copo").getValue()==0&&(u.registerScoreItem(h.oferecerCopo),m.getFlag("score_ofereceu_copo").setValue(!0))}).setVisibility(!1),(new n("btn-administrar_medicamento","Administrar o medicamento")).setCssClass("action-midazolam_medicamento").onClick(function(){m.getFlag("score_ofereceu_copo").getValue()==0&&m.getFlag("score_nao_ofereceu_copo").getValue()==0&&(u.registerScoreItem(h.naoOferecerCopo),m.getFlag("score_nao_ofereceu_copo").setValue(!0)),m.getFlag("score_administrou_medicamento").getValue()==0&&(u.registerScoreItem(h.administrarMedicamento),m.getFlag("score_administrou_medicamento").setValue(!0))}).setVisibility(!1),(new n("btn-anotarProntuario","Anotar prontuario")).setCssClass("action-anotarProntuario").onClick(function(){m.getFlag("score_administrou_medicamento").getValue()==0&&m.getFlag("score_nao_administrou_medicamento").getValue()==0&&(u.registerScoreItem(h.naoAdministrarMedicamento),m.getFlag("score_nao_administrou_medicamento").setValue(!0)),m.getFlag("score_anotar_prontuario").getValue()==0&&(u.registerScoreItem(h.anotarProntuario),m.getFlag("score_anotar_prontuario").setValue(!0)),l.open(),u.openModalScene("Prontuario")}).setVisibility(!0),(new n("btn-levar_yuri_cc","Levar paciente ao Centro Cirurgico")).setCssClass("action-paciente9").onClick(function(){v.play(v.audios.sfx.mesaComRodinha),m.getFlag("score_verificar_pulseira").getValue()==0&&m.getFlag("score_nao_verificar_pulseira").getValue()==0&&(u.registerScoreItem(h.naoVerificarPulseira),m.getFlag("score_nao_verificar_pulseira").setValue(!0)),m.getFlag("score_ofereceu_copo").getValue()==0&&m.getFlag("score_nao_ofereceu_copo").getValue()==0&&(u.registerScoreItem(h.naoOferecerCopo),m.getFlag("score_nao_ofereceu_copo").setValue(!0)),m.getFlag("score_administrou_medicamento").getValue()==0&&m.getFlag("score_nao_administrou_medicamento").getValue()==0&&(u.registerScoreItem(h.naoAdministrarMedicamento),m.getFlag("score_nao_administrou_medicamento").setValue(!0)),m.getFlag("levou_yuri_centro_cirurgico").getValue()==0&&m.getFlag("levou_yuri_centro_cirurgico").setValue(!0),u.setActionVisible("btn-oferecer_copo",!1),u.setActionVisible("btn-administrar_medicamento",!1),u.setActionVisible("btn-levar_yuri_cc",!1)}).setVisibility(!0),(new n("btn-ir_sala_leitos","Ir para sala de leitos")).setCssClass("action-ir_sala_de_leitos").onClick(function(){m.getFlag("score_anotar_prontuario").getValue()==0&&m.getFlag("score_nao_anotar_prontuario").getValue()==0&&(u.registerScoreItem(h.naoAnotarProntuario),m.getFlag("score_nao_anotar_prontuario").setValue(!0)),u.changeScene(2)}).setVisibility(!0)]),E=(new t("farmacia","scene-pharmacy")).setCssClass("scene-pharmacy").onLoad(function(){m.getFlag("ja_falou_farmaceutico").getValue()==1&&(u.setInteractiveObjectVisible("io-midazolam_medicamento",!m.getFlag("score_pegou_medicamento").getValue()),u.setActionVisible("btn-conferir_midazolam",!0),u.openCommandBar()),m.getFlag("score_viu_prontuario").getValue()==1&&m.getFlag("ja_falou_farmaceutico").getValue()==0&&(m.getFlag("ja_falou_farmaceutico").setValue(!0),u.openDialog(0))}).onUnload(function(){u.closeCommandBar()}),E.registerInteractiveObjects([(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left").onClick(H).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right").onClick(H).setVisibility(!0)]),E.registerActions([(new n("btn-conferir_midazolam","Conferir Medicamento")).setCssClass("action-midazolam_medicamento").onClick(function(){m.getFlag("score_pegou_medicamento").getValue()==0&&m.getFlag("score_nao_pegou_medicamento").getValue()==0&&(u.registerScoreItem(h.naoPegarMedicamento),m.getFlag("score_nao_pegou_medicamento").setValue(!0)),m.getFlag("score_conferiu_medicacao").getValue()==0&&(u.registerScoreItem(h.conferirMedicacao),m.getFlag("score_conferiu_medicacao").setValue(!0))}).setVisibility(!1)]),E.registerInteractiveObjects([(new s("io-midazolam_medicamento","Pegar Medicamento")).setCssClass("intObj-midazolam_medicamento").onClick(function(){v.play(v.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarMedicamento),m.getFlag("score_pegou_medicamento").setValue(!0),u.setInteractiveObjectVisible("io-midazolam_medicamento",!1)}).setVisibility(!1)]),E.registerDialogs([(new i(a.characters.paulo)).setText(p.farmacia[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(p.farmacia[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.paulo)).setText(p.farmacia[2]).registerOption("",function(){u.closeDialog(),u.setInteractiveObjectVisible("io-midazolam_medicamento",!0),u.setActionVisible("btn-conferir_midazolam",!0),u.openCommandBar()})]),S=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){u.openCommandBar(),m.getFlag("score_pegou_medicamento").getValue()==1&&(u.setActionVisible("btn-lavarMaos",!0),u.setInteractiveObjectVisible("io-pegar_agua",!m.getFlag("score_pegou_agua").getValue()),u.setInteractiveObjectVisible("io-pegar_copo",!m.getFlag("score_pegou_copo").getValue()),u.setInteractiveObjectVisible("io-pegar_bandeja",!m.getFlag("pegou_bandeja").getValue()),u.openCommandBar())}).onUnload(function(){u.closeCommandBar()}),S.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){m.getFlag("score_pegou_medicamento").getValue()==1&&(m.getFlag("score_pegou_agua").getValue()==0&&m.getFlag("score_nao_pegou_agua").getValue()==0&&(u.registerScoreItem(h.naoPegarAguaPotavel),m.getFlag("score_nao_pegou_agua").setValue(!0)),m.getFlag("score_pegou_copo").getValue()==0&&m.getFlag("score_nao_pegou_copo").getValue()==0&&(u.registerScoreItem(h.naoPegarCopoDescartavel),m.getFlag("score_nao_pegou_copo").setValue(!0))),u.changeScene(1)}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.lavarMaosPostoEnfermagem),m.getFlag("score_lavar_maos_posto_enfermagem").setValue(!0))}).setVisibility(!1)]),S.registerInteractiveObjects([(new s("io-pegar_agua","Pegar água potável")).setCssClass("intObj-garrafa_agua_potavel").onClick(function(){v.play(v.audios.sfx.pegarObjeto),m.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&m.getFlag("score_nao_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosPostoEnfermagem),m.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!0)),m.getFlag("pegou_bandeja").getValue()!=1?u.openDialog(0):(u.registerScoreItem(h.pegarAguaPotavel),m.getFlag("score_pegou_agua").setValue(!0),u.setInteractiveObjectVisible("io-pegar_agua",!1))}).setVisibility(!1),(new s("io-pegar_copo","Pegar copo descartavel")).setCssClass("intObj-copo_descartavel").onClick(function(){v.play(v.audios.sfx.pegarObjeto),m.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&m.getFlag("score_nao_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosPostoEnfermagem),m.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!0)),m.getFlag("pegou_bandeja").getValue()!=1?u.openDialog(0):(u.registerScoreItem(h.pegarCopoDescartavel),m.getFlag("score_pegou_copo").setValue(!0),u.setInteractiveObjectVisible("io-pegar_copo",!1))}).setVisibility(!1),(new s("io-pegar_bandeja","Pegar bandeja")).setCssClass("intObj-bandeja").onClick(function(){v.play(v.audios.sfx.pegarObjeto),m.getFlag("score_lavar_maos_posto_enfermagem").getValue()==0&&m.getFlag("score_nao_lavar_maos_posto_enfermagem").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosPostoEnfermagem),m.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!0)),m.getFlag("pegou_bandeja").setValue(!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)}).setVisibility(!1)]),S.registerDialogs([(new i(a.characters.mentor)).setText(d.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()})]),centroCirurgico=a.scenes.centroCirurgico.getClone().onLoad(function(){v.play(v.audios.sfx.abrirPorta),u.openCommandBar()}).onUnload(function(){u.closeCommandBar()}),centroCirurgico.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.changeScene(1)}).setVisibility(!0)]),T=a.scenes.alaFeminina.getClone().onLoad(function(){}).onUnload(function(){}),T.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao Corredor")).setCssClass("intObj-bedroomToHallway").onClick(function(){u.changeScene(1)}).setVisibility(!0)]),N=a.scenes.centroCirurgicoYuri.getClone().onLoad(function(){v.play(v.audios.sfx.abrirPorta),u.openCommandBar()}).onUnload(function(){u.closeCommandBar()}),N.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.changeScene(1)}).setVisibility(!0),(new n("btn-lavar_maos_cirurgia","Lavar as mãos técnica cirúrgica")).setCssClass("action-lavar_maos_escova").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("score_lavar_maos_tecnica_cirurgica").getValue()==0&&(u.registerScoreItem(h.lavarMaosTecnicaCirurgica),m.getFlag("score_lavar_maos_tecnica_cirurgica").setValue(!0))}).setVisibility(!0),(new n("btn-falar_circulante","Falar com circulante de sala")).setCssClass("action-leito-char-02").onClick(function(){m.getFlag("score_lavar_maos_tecnica_cirurgica").getValue()==0&&m.getFlag("score_nao_lavar_maos_tecnica_cirurgica").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosTecnicaCirurgica),m.getFlag("score_nao_lavar_maos_tecnica_cirurgica").setValue(!0)),u.openDialog(0),u.closeCommandBar()}).setVisibility(!0),(new n("btn-testar_equipamentos","Testar Equipamentos")).setCssClass("action-testar_equipamentos").onClick(function(){m.getFlag("score_testou_equipamentos").getValue()==0&&(u.registerScoreItem(h.testarEquipamentos),m.getFlag("score_testou_equipamentos").setValue(!0))}).setVisibility(!0),(new n("btn-fazer_lista","Fazer lista de verificação")).setCssClass("action-fazer_lista").onClick(function(){m.getFlag("score_testou_equipamentos").getValue()==0&&m.getFlag("score_nao_testou_equipamentos").getValue()==0&&(u.registerScoreItem(h.naoTestarEquipamentos),m.getFlag("score_nao_testou_equipamentos").setValue(!0)),m.getFlag("score_fez_lista_verificacao").getValue()==0&&(u.registerScoreItem(h.fazerListaVerificacao),m.getFlag("score_fez_lista_verificacao").setValue(!0))}).setVisibility(!0),(new n("btn-mudar_posicao_paciente","Mudar posição do paciente")).setCssClass("action-mudar_posicao_paciente").onClick(function(){m.getFlag("score_fez_lista_verificacao").getValue()==0&&m.getFlag("score_nao_fez_lista_verificacao").getValue()==0&&(u.registerScoreItem(h.naoFazerListaVerificacao),m.getFlag("score_nao_fez_lista_verificacao").setValue(!0)),m.getFlag("score_mudou_posicao_paciente").getValue()==0&&(u.registerScoreItem(h.mudarPosicaoPaciente),m.getFlag("score_mudou_posicao_paciente").setValue(!0))}).setVisibility(!0),(new n("btn-colocar_placa","Colocar placa neutra")).setCssClass("action-placa_neutra").onClick(function(){m.getFlag("score_mudou_posicao_paciente").getValue()==0&&m.getFlag("score_nao_mudou_posicao_paciente").getValue()==0&&(u.registerScoreItem(h.naoMudarPosicaoPaciente),m.getFlag("score_nao_mudou_posicao_paciente").setValue(!0)),m.getFlag("score_colocou_placa_neutra").getValue()==0&&(u.registerScoreItem(h.colocarPlacaNeutra),m.getFlag("score_colocou_placa_neutra").setValue(!0))}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("score_colocou_placa_neutra").getValue()==0&&m.getFlag("score_nao_colocou_placa_neutra").getValue()==0&&(u.registerScoreItem(h.naoColocarPlacaNeutra),m.getFlag("score_nao_colocou_placa_neutra").setValue(!0)),m.getFlag("score_lavar_maos_centro_cirurgico").getValue()==0&&(u.registerScoreItem(h.lavarMaosCentroCirurgico),m.getFlag("score_lavar_maos_centro_cirurgico").setValue(!0))}).setVisibility(!0),(new n("btn-anotarProntuario","Anotar prontuario")).setCssClass("action-anotarProntuario").onClick(function(){m.getFlag("score_lavar_maos_centro_cirurgico").getValue()==0&&m.getFlag("score_nao_lavar_maos_centro_cirurgico").getValue()==0&&(u.registerScoreItem(h.naoLavarMaosCentroCirurgico),m.getFlag("score_nao_lavar_maos_centro_cirurgico").setValue(!0)),m.getFlag("score_anotar_prontuario_centro_cirurgico").getValue()==0&&(u.registerScoreItem(h.anotarProntuarioCentroCirurgico),m.getFlag("score_anotar_prontuario_centro_cirurgico").setValue(!0)),l.open(),u.openModalScene("Prontuario")}).setVisibility(!0)]),N.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(p.centroCirurgico[0],function(){u.openDialog(1)}).registerOption(p.centroCirurgico[1],function(){u.openDialog(2)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.centroCirurgico[2]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.circulante)).setText(p.centroCirurgico[3]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[4]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[5]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[6]).registerOption("",function(){u.openDialog(6)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[7]).registerOption("",function(){u.openDialog(7)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[8]).registerOption("",function(){u.openDialog(8)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[9]).registerOption("",function(){u.openDialog(9)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[10]).registerOption("",function(){u.openDialog(10)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[11]).registerOption("",function(){u.openDialog(11)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[12]).registerOption("",function(){u.openDialog(12)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[13]).registerOption("",function(){u.openDialog(13)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[14]).registerOption("",function(){u.openDialog(14)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[15]).registerOption("",function(){u.openDialog(15)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[16]).registerOption("",function(){u.openDialog(16)}),(new i(a.characters.pacientes.yuri)).setText(p.centroCirurgico[17]).registerOption("",function(){u.openDialog(17)}),(new i(a.characters.jogador)).setText(p.centroCirurgico[18]).registerOption("",function(){u.closeDialog(),u.openCommandBar()})]),C=new t("pulseira","pulseira"),C.registerInteractiveObjects([]),C.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){u.closeModalScene("Pulseira"),f.close()}).setVisibility(!0)]),k=new t("Prontuario","Prontuario"),k.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){l.close(),m.getFlag("entrou_centro_cirurgico").getValue()==1?(u.closeCommandBar(),u.showEndOfLevel()):u.closeModalScene("Prontuario")}).setVisibility(!0)]),m.registerScene(g),m.registerScene(y),m.registerScene(b),m.registerScene(w),m.registerScene(E),m.registerScene(S),m.registerScene(centroCirurgico),m.registerScene(T),m.registerScene(N),m.registerModalScene(C),m.registerModalScene(k),m.setSetupScript(function(){m.getFlag("ja_falou_farmaceutico").setValue(!1),m.getFlag("pegou_bandeja").setValue(!1),m.getFlag("ja_falou_paciente").setValue(!1),m.getFlag("ja_falou_paciente_leito").setValue(!1),m.getFlag("levou_yuri_centro_cirurgico").setValue(!1),m.getFlag("entrou_centro_cirurgico").setValue(!1),m.getFlag("score_ir_posto_hora_errada").setValue(!1),m.getFlag("score_ir_farmacia_hora_errada").setValue(!1),m.getFlag("score_ir_ala_feminina_hora_errada").setValue(!1),m.getFlag("score_ir_centro_cirurgico_hora_errada").setValue(!1),m.getFlag("score_viu_prontuario").setValue(!1),m.getFlag("score_nao_viu_prontuario").setValue(!1),m.getFlag("score_pegou_medicamento").setValue(!1),m.getFlag("score_nao_pegou_medicamento").setValue(!1),m.getFlag("score_conferiu_medicacao").setValue(!1),m.getFlag("score_nao_conferiu_medicacao").setValue(!1),m.getFlag("score_lavar_maos_posto_enfermagem").setValue(!1),m.getFlag("score_nao_lavar_maos_posto_enfermagem").setValue(!1),m.getFlag("score_pegou_agua").setValue(!1),m.getFlag("score_nao_pegou_agua").setValue(!1),m.getFlag("score_pegou_copo").setValue(!1),m.getFlag("score_nao_pegou_copo").setValue(!1),m.getFlag("score_lavar_maos_antes_leito").setValue(!1),m.getFlag("score_nao_lavar_maos_antes_leito").setValue(!1),m.getFlag("score_verificar_pulseira").setValue(!1),m.getFlag("score_nao_verificar_pulseira").setValue(!1),m.getFlag("score_ofereceu_copo").setValue(!1),m.getFlag("score_nao_ofereceu_copo").setValue(!1),m.getFlag("score_administrou_medicamento").setValue(!1),m.getFlag("score_nao_administrou_medicamento").setValue(!1),m.getFlag("score_anotar_prontuario").setValue(!1),m.getFlag("score_nao_anotar_prontuario").setValue(!1),m.getFlag("score_lavar_maos_tecnica_cirurgica").setValue(!1),m.getFlag("score_nao_lavar_maos_tecnica_cirurgica").setValue(!1),m.getFlag("score_testou_equipamentos").setValue(!1),m.getFlag("score_nao_testou_equipamentos").setValue(!1),m.getFlag("score_fez_lista_verificacao").setValue(!1),m.getFlag("score_nao_fez_lista_verificacao").setValue(!1),m.getFlag("score_mudou_posicao_paciente").setValue(!1),m.getFlag("score_nao_mudou_posicao_paciente").setValue(!1),m.getFlag("score_colocou_placa_neutra").setValue(!1),m.getFlag("score_nao_colocou_placa_neutra").setValue(!1),m.getFlag("score_lavar_maos_centro_cirurgico").setValue(!1),m.getFlag("score_nao_lavar_maos_centro_cirurgico").setValue(!1),m.getFlag("score_anotar_prontuario_centro_cirurgico").setValue(!1),f.setNameRegExp(/Yuri de Souza Almeida/),f.setLeitoRegExp(/0*1/),f.setDataRegExp(/16\/03\/1993/),f.setName("Yuri de Souza Almeida"),f.setLeito("01"),f.setData("16/03/1993"),f.disable(),l.setNome("Yuri de Souza Almeida"),l.setSexo("M"),l.setEstadoCivil("Solteiro"),l.setDataNascimento("16/03/1993"),l.setIdade("22 anos"),l.setProfissao("Estudante"),l.setPai("Miguel Augusto Briganti Almeida"),l.setMae("Mariana Soares Almeida"),l.setAlergiaMedicamentosa(!0,"Dipirona, sulfa."),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("27/09/2015"),l.setLeito("01 - Enfermaria masculina"),l.setAntecedentes(""),l.setHipotese("Cirurgia de reconstrução do ligamento cruzado anterior (LCA), no MMII direito."),l.setObservacoes("Acidente automobilístico."),l.setPeso("73"),l.setAltura("1,80"),l.setCircunferenciaAbdominal("90"),l.setPrescMedicaRowData(0,"","Midazolam","Oral","15 mg","01x/dia antes do procedimento cirúrgico",!1,!0),l.setPrescMedicaRowData(1,"","","","","",!1,!0),l.setSsvvRowData(0,"","120x70","72","16","96","35,5",!0),l.setSsvvRowData(1,"","","","","","",!0),l.setAnotacaoEnfermagemRowData("","")}),m.registerFlag(new o("ja_falou_farmaceutico"),!1),m.registerFlag(new o("pegou_bandeja"),!1),m.registerFlag(new o("ja_falou_paciente"),!1),m.registerFlag(new o("ja_falou_paciente_leito"),!1),m.registerFlag(new o("levou_yuri_centro_cirurgico"),!1),m.registerFlag(new o("entrou_centro_cirurgico"),!1),m.registerFlag(new o("score_ir_posto_hora_errada"),!1),m.registerFlag(new o("score_ir_farmacia_hora_errada"),!1),m.registerFlag(new o("score_ir_ala_feminina_hora_errada"),!1),m.registerFlag(new o("score_ir_centro_cirurgico_hora_errada"),!1),m.registerFlag(new o("score_viu_prontuario"),!1),m.registerFlag(new o("score_nao_viu_prontuario"),!1),m.registerFlag(new o("score_pegou_medicamento"),!1),m.registerFlag(new o("score_nao_pegou_medicamento"),!1),m.registerFlag(new o("score_conferiu_medicacao"),!1),m.registerFlag(new o("score_nao_conferiu_medicacao"),!1),m.registerFlag(new o("score_lavar_maos_posto_enfermagem"),!1),m.registerFlag(new o("score_nao_lavar_maos_posto_enfermagem"),!1),m.registerFlag(new o("score_pegou_agua"),!1),m.registerFlag(new o("score_nao_pegou_agua"),!1),m.registerFlag(new o("score_pegou_copo"),!1),m.registerFlag(new o("score_nao_pegou_copo"),!1),m.registerFlag(new o("score_lavar_maos_antes_leito"),!1),m.registerFlag(new o("score_nao_lavar_maos_antes_leito"),!1),m.registerFlag(new o("score_verificar_pulseira"),!1),m.registerFlag(new o("score_nao_verificar_pulseira"),!1),m.registerFlag(new o("score_ofereceu_copo"),!1),m.registerFlag(new o("score_nao_ofereceu_copo"),!1),m.registerFlag(new o("score_administrou_medicamento"),!1),m.registerFlag(new o("score_nao_administrou_medicamento"),!1),m.registerFlag(new o("score_anotar_prontuario"),!1),m.registerFlag(new o("score_nao_anotar_prontuario"),!1),m.registerFlag(new o("score_lavar_maos_tecnica_cirurgica"),!1),m.registerFlag(new o("score_nao_lavar_maos_tecnica_cirurgica"),!1),m.registerFlag(new o("score_testou_equipamentos"),!1),m.registerFlag(new o("score_nao_testou_equipamentos"),!1),m.registerFlag(new o("score_fez_lista_verificacao"),!1),m.registerFlag(new o("score_nao_fez_lista_verificacao"),!1),m.registerFlag(new o("score_mudou_posicao_paciente"),!1),m.registerFlag(new o("score_nao_mudou_posicao_paciente"),!1),m.registerFlag(new o("score_colocou_placa_neutra"),!1),m.registerFlag(new o("score_nao_colocou_placa_neutra"),!1),m.registerFlag(new o("score_lavar_maos_centro_cirurgico"),!1),m.registerFlag(new o("score_nao_lavar_maos_centro_cirurgico"),!1),m.registerFlag(new o("score_anotar_prontuario_centro_cirurgico"),!1),m.setInitialScene(0),e.registerLevel(m,8)});