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

define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData","EquipoGotejamento"],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p){function H(){u.changeScene(6),u.flag("score_irCentroCirurgico_horaErrada")==0&&(u.flag("score_irCentroCirurgico_horaErrada",!0),u.registerScoreItem(h.irCentroCirurgico_horaErrada))}function B(){u.changeScene(7),u.flag("score_iralaFeminina_horaErrada")==0&&(u.flag("score_iralaFeminina_horaErrada",!0),u.registerScoreItem(h.irAlaFeminina_horaErrada))}function j(){u.changeScene(1)}function F(){u.openDialog(0)}function I(){u.changeScene(4)}function q(){u.changeScene(5)}function R(){u.flag("pegou_tudo_postoEnfermagem")==1&&u.flag("trocou_de_leito")==0?u.changeScene(9):(u.flag("trocou_de_leito")==1||u.flag("conversar_paciente")==0||u.flag("conferirMedicamento")==1)&&u.changeScene(2)}function U(){f.setNameRegExp(/Pedro Alcides Mendonça/),f.setLeitoRegExp(/0*1/),f.setDataRegExp(/03\/06\/1962/),f.setName("Pedro Alcides Mendonça"),f.setLeito("01"),f.setData("03/06/1962"),f.disable()}var d=require("DialogsData").fase9,v=require("DialogsData").alertas,h=require("ScoresData").level9,m=require("Player"),g=new r("Level 10");g.setMaxPoints(h._sum);var y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,x=a.scenes.centroCirurgico.getClone().onLoad(function(){u.openCommandBar()});x.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.changeScene(1)}).setVisibility(!0)]);var S=(new t("alaFeminina","Ala Feminina")).setCssClass("scene-bedroom-level7").onLoad(function(){});S.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaMasculina_corredor").onClick(function(){u.changeScene(1)})]);var y=a.scenes.recepcao.getClone().onLoad(function(){u.openDialog(0)});y.registerDialogs([(new i(a.characters.recepcionista)).setText(d.recepcao[0]).registerOption("",function(){u.closeDialog()})]),y.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(F),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left no-glow").onClick(j).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right no-glow").onClick(j).setVisibility(!0)]),b=a.scenes.corredor.getClone().onLoad(function(){m.stopAll(),m.play(m.audios.sfx.abrirPorta),m.playInLoop(m.audios.loops.recepcao)}).onUnload(function(){m.stopAll(),m.play(m.audios.sfx.abrirPorta),m.playInRange(m.audios.musics.inGame)}),b.registerDialogs([]),b.registerInteractiveObjects([(new s("io-ir_centro_cirurgico","Ir ao Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(H).setVisibility(!0),(new s("io-ir_farmacia","Ir à Farmacia")).setCssClass("intObj-goToFarmacia").onClick(I).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir ao Posto de Enfermagem")).setCssClass("intObj-goToPostoEnfermagem").onClick(q).setVisibility(!0),(new s("io-ir_ala_feminina","Ir à Enfermaria Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(B).setVisibility(!0),(new s("io-ir_ala_masculina","Ir à Enfermaria Masculina")).setCssClass("intObj-goToAlaMasculina").onClick(R).setVisibility(!0)]);var E=a.scenes.alaMasculina.getClone().setCssClass("scene-bedroom-level9").onLoad(function(){u.setInteractiveObjectVisible("io-ir_ao_leito",!0),u.setActionVisible("btn-lavarMaos",!0)});E.registerInteractiveObjects([(new s("io-ir_ao_leito","Ir ao leito")).setCssClass("intObj-irLeitoEsquerda").onClick(function(){u.flag("lavar_maos")==1?u.changeScene(3):u.openDialog(0)}).setVisibility(!1)]),E.registerActions([(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){m.play(m.audios.sfx.lavarMaos),u.flag("lavar_maos")==0&&(u.flag("lavar_maos",!0),u.registerScoreItem(h.lavarMaos))}).setVisibility(!1)]),E.registerDialogs([(new i(a.characters.mentor)).setText(v.lavarMaos.tipo1).registerOption("",function(){u.closeDialog()})]);var w=a.scenes.alaMasculina.getClone().setCssClass("scene-bedroom-level9-trocado").onLoad(function(){u.flag("conversar_paciente")==0?(u.openDialog(0),u.flag("conversar_paciente",!0)):u.flag("trocou_de_leito")==1&&(u.setInteractiveObjectVisible("io-ir_ao_leito1",!0),u.setActionVisible("btn-ler_prontuario",!1))});w.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(d.alaMasculina[0],function(){u.openDialog(1)}).registerOption(d.alaMasculina[1],function(){u.openDialog(4)}).setRandomize(!0),(new i(a.characters.pacientes.francisco)).setText(d.alaMasculina[2]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(d.alaMasculina[3]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.francisco)).setText(d.alaMasculina[4]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.alaMasculina[5]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.mentor)).setText(d.alaMasculina[6]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.lavarMaos.tipo1).registerOption("",function(){u.closeDialog()})]),w.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaMasculina_corredor").onClick(function(){u.flag("pegar_prescricao_medica")==0?u.openDialog(5):u.changeScene(1)}),(new s("io-ir_ao_leito1","Ir ao leito")).setCssClass("intObj-irLeitoEsquerda").onClick(function(){u.changeScene(8)}).setVisibility(!1)]),w.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){u.flag("ler_prontuario")==0&&(u.flag("ler_prontuario",!0),u.registerScoreItem(h.lerProntuario)),u.flag("pegar_prescricao_medica")==0&&(u.flag("pegar_prescricao_medica",!0),u.registerScoreItem(h.pegarPrescricaoMedica)),l.open("prescMedica"),u.openModalScene("Prontuario")}).setVisibility(!0)]);var L=a.scenes.farmacia.getClone().onLoad(function(){u.flag("pegar_prescricao_medica")==0?(u.openDialog(4),u.setInteractiveObjectVisible("io-pegarFrascoDieta",!1),u.setInteractiveObjectVisible("io-cloretoSodio_20_10ml",!1),u.flag("score_ir_farmacia_horaErrada")==0&&(u.flag("score_ir_farmacia_horaErrada",!0),u.registerScoreItem(h.irFarmaciaHoraErrada))):u.flag("pegou_tudo_postoEnfermagem")==1||u.flag("trocou_de_leito")==1||u.flag("conferirMedicamento")==1?(u.setInteractiveObjectVisible("io-pegarFrascoDieta",!1),u.setInteractiveObjectVisible("io-cloretoSodio_20_10ml",!1)):u.openDialog(0)});L.registerDialogs([(new i(a.characters.paulo)).setText(d.farmacia[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(d.farmacia[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.paulo)).setText(d.farmacia[2]).registerOption("",function(){u.closeDialog(),u.setInteractiveObjectVisible("io-pegarFrascoDieta",!0),u.setInteractiveObjectVisible("io-cloretoSodio_20_10ml",!0)}),(new i(a.characters.mentor)).setText(d.farmacia[3]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.perdido.farmacia).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.esqueceu.verificarMedicamento3).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.farmacia[4]).registerOption("",function(){u.closeDialog()})]),L.registerInteractiveObjects([(new s("io-pegarFrascoDieta","Pegar Frasco de SG 5%")).setCssClass("intObj-soro_glicofisiologico_1000_ml").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegarFrascoSG",!0),u.registerScoreItem(h.pegarFrascoSG),u.setInteractiveObjectVisible("io-pegarFrascoDieta",!1),u.setActionVisible("btn-conferirSoro",!0)}).setVisibility(!1),(new s("io-cloretoSodio_20_10ml","Pegar NaCL 20%")).setCssClass("intObj-cloreto_de_sodio_10__10_ml_").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegarNACL")==0&&(u.flag("pegarNACL",!0),u.registerScoreItem(h.pegarNACL),u.setInteractiveObjectVisible("io-cloretoSodio_20_10ml",!1),u.setActionVisible("btn-conferirCloreto",!0))}).setVisibility(!1)]),L.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.flag("pegar_prescricao_medica")==0?u.changeScene(1):(u.flag("pegarNACL")==0||u.flag("pegarFrascoSG")==0)&&u.openDialog(6),u.flag("pegarNACL")==1&&u.flag("pegarFrascoSG")==1&&(u.flag("conferirNACL")==1||u.flag("conferirFrascoSG")==1?(u.registerScoreItem(h.conferirDieta),u.flag("conferirMedicamento",!0),u.changeScene(1)):(u.flag("conferirMedicamento",!0),u.changeScene(1)))}).setVisibility(!0),(new n("btn-conferirSoro","Conferir Soro Glicofisiológico")).setCssClass("action-soro_glicofisiologico_1000ml").onClick(function(){u.openModalScene("conferirSoroGlicofisiologico1000"),u.openModalScene("conferirSoroGlicofisiologico1000")}).setVisibility(!1),(new n("btn-conferirCloreto","Conferir Cloreto de Sodio")).setCssClass("action-cloreto_sodio_20_10ml").onClick(function(){u.openModalScene("conferirCloretoSodio")}).setVisibility(!1)]);var k=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){u.flag("conferirMedicamento")==0?(u.setInteractiveObjectVisible("io-abrir_gaveta",!1),u.setInteractiveObjectVisible("io-pegar_bandeja",!1),u.openDialog(2),u.flag("score_irPosto_horaErrada")==0&&(u.flag("score_irPosto_horaErrada",!0),u.registerScoreItem(h.irPosto_horaErrada))):u.flag("pegou_tudo_postoEnfermagem")==1?(u.setInteractiveObjectVisible("io-abrir_gaveta",!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)):u.setInteractiveObjectVisible("io-abrir_gaveta",!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!0)});k.registerDialogs([(new i(a.characters.mentor)).setText(v.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.postoDeEnfermagem[0]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.esqueceu.pegarMedicamento).registerOption("",function(){u.closeDialog()})]),k.registerInteractiveObjects([(new s("io-abrir_gaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){m.play(m.audios.sfx.abrirGaveta),u.flag("pegar_bandeja")==0?u.openDialog(0):(u.openModalScene("gaveta"),u.openCommandBar())}).setVisibility(!0),(new s("io-pegar_bandeja","Pegar Bandeja")).setCssClass("intObj-bandeja").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.flag("pegar_bandeja",!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)}).setVisibility(!0)]),k.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.flag("pegar_prescricao_medica")==0&&u.changeScene(1),u.flag("pegou_tudo_postoEnfermagem")==1&&u.changeScene(1)}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){m.play(m.audios.sfx.lavarMaos),u.flag("score_lavarMaos1")==0&&(u.flag("score_lavarMaos1",!0),u.registerScoreItem(h.lavarMaos1))}).setVisibility(!0)]),N=a.scenes.leitos.raul_leito01.getClone().onLoad(function(){}).onUnload(function(){}),N.registerActions([(new n("btn-ir_ala_masculina","Voltar a Ala Masculina")).setCssClass("action-ir_sala_de_leitos").onClick(function(){u.flag("trocou_de_leito")==1?u.changeScene(2):u.openDialog(7)}).setVisibility(!1)]),N.registerInteractiveObjects([(new s("io-falar_paciente","Falar com o paciente")).setCssClass("intObj-conversar_paciente").onClick(function(){u.flag("trocou_de_leito")==0&&(u.openDialog(0),u.flag("trocou_de_leito",!0),u.setActionVisible("btn-ir_ala_masculina",!0))}).setVisibility(!0),(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_03-checar_pulseira").onClick(function(){u.openModalScene("Pulseira"),f.open(),u.openCommandBar()}).setVisibility(!0)]),N.registerDialogs([(new i(a.characters.jogador)).setText(d.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.francisco)).setText(d.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(d.leitoPaciente[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.francisco)).setText(d.leitoPaciente[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText("").registerOption(d.leitoPaciente[4],function(){u.closeDialog()}).registerOption(d.leitoPaciente[5],function(){u.openDialog(5)}).setRandomize(!0),(new i(a.characters.mentor)).setText(d.leitoPaciente[6]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.mentor)).setText(d.leitoPaciente[7]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.esqueceu.falarPaciente).registerOption("",function(){u.closeDialog()})]),C=a.scenes.leitos.francisco.getClone().onLoad(function(){}).onUnload(function(){}),C.registerDialogs([(new i(a.characters.jogador)).setText(d.leitoPaciente1[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.francisco)).setText(d.leitoPaciente1[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(d.leitoPaciente1[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.francisco)).setText(d.leitoPaciente1[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(d.leitoPaciente1[4]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(v.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()})]),C.registerInteractiveObjects([(new s("io-falar_paciente","Falar com o paciente")).setCssClass("intObj-conversar_paciente").onClick(function(){u.openDialog(0),u.flag("falar_paciente_correto")==0&&(u.flag("falar_paciente_correto",!0),u.registerScoreItem(h.conversarPacienteLeito)),u.setActionVisible("btn-pegar_suporte_soro",!0),u.setActionVisible("btn-administrar_medicamente",!0),u.setActionVisible("btn-realizar_gotejamento",!0),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-anotar_prontuario",!0)}).setVisibility(!0),(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_05-checar_pulseira").onClick(function(){U(),u.flag("score_verPulseira")==0&&(u.flag("score_verPulseira",!0),u.registerScoreItem(h.verPulseira)),u.openModalScene("Pulseira"),f.open(),u.openCommandBar()}).setVisibility(!0)]),C.registerActions([(new n("btn-pegar_suporte_soro","Pegar Suporte de Soro")).setCssClass("action-pegar-soro").onClick(function(){u.flag("pegar_suporte_soro")==0&&(u.flag("pegar_suporte_soro",!0),u.registerScoreItem(h.pegarSuporteSoro))}).setVisibility(!1),(new n("btn-administrar_medicamente","Administrar Medicamento")).setCssClass("action-administrar-medicamento").onClick(function(){u.flag("administrar_medicamento")==0&&(u.flag("administrar_medicamento",!0),u.registerScoreItem(h.administrarMedicamento))}).setVisibility(!1),(new n("btn-realizar_gotejamento","Realizar Gotejamento de Soro")).setCssClass("action-realizar-gotejamento").onClick(function(){u.flag("realizar_gotejamento")==0&&(u.flag("realizar_gotejamento",!0),u.registerScoreItem(h.realizarGotejamento)),p.open(),u.openModalScene("equipoSoro")}).setVisibility(!1),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){m.play(m.audios.sfx.lavarMaos),u.flag("lavar_maos3")==0&&(u.flag("lavar_maos3",!0),u.registerScoreItem(h.lavarMaos3))}).setVisibility(!1),(new n("btn-anotar_prontuario","Anotar prontuario")).setCssClass("action-anotar_prontuario").onClick(function(){u.flag("lavar_maos3")==0?u.openDialog(5):(l.open(),u.openModalScene("Prontuario"),u.flag("score_anotar_prontuario")==0&&(u.registerScoreItem(h.anotarNoProntuario),u.flag("score_anotar_prontuario",!0)))}).setVisibility(!1)]),O=new t("Pulseira","Pulseira"),O.registerInteractiveObjects([]),O.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){u.closeModalScene("Pulseira"),f.close()}).setVisibility(!0)]),M=new t("Prontuario","Prontuario"),M.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){u.flag("score_anotar_prontuario")==1?(l.close(),u.closeModalScene("Prontuario"),u.setActionVisible("btn-pegar_suporte_soro",!1),u.setActionVisible("btn-administrar_medicamente",!1),u.setActionVisible("btn-realizar_gotejamento",!1),u.setActionVisible("btn-lavarMaos",!1),u.setActionVisible("btn-anotar_prontuario",!1),u.closeCommandBar(),u.showEndOfLevel(),m.stopAll(),m.play(m.audios.sfx.missaoCumprida)):l.close(),u.closeModalScene("Prontuario")}).setVisibility(!0)]),equipoSoro=new t("equipoSoro","EquipamentoSoro"),equipoSoro.registerActions([(new n("btn-fecharEquipoSoro","Fechar Equipamento de Soro")).setCssClass("action-fecharEquipoSoro").onClick(function(){p.close(),u.closeModalScene("equipoSoro")}).setVisibility(!0)]),A=(new t("gaveta","Gaveta")).setCssClass("modalScene-drawer"),A.registerActions([(new n("btn-fechar_gaveta","Fechar gaveta")).setCssClass("action-fecharGaveta").onClick(function(){m.play(m.audios.sfx.fecharGaveta),u.closeModalScene("Gaveta"),u.flag("pegar_seringa")==1&&u.flag("pegar_agulha")==1&&u.flag("pegar_ampola")==1&&u.flag("pegar_equipoSoro")==1&&(u.setActionVisible("btn-lavarMaos",!1),u.flag("pegou_tudo_postoEnfermagem",!0))}).setVisibility(!0)]),A.registerInteractiveObjects([(new s("io-seringa","Seringa")).setCssClass("intObj-seringa_de_10_ml").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarSeringa),u.flag("pegar_seringa",!0),u.setInteractiveObjectVisible("io-seringa",!1)}).setVisibility(!0),(new s("io-agulha","Agulha 40X12")).setCssClass("intObj-agulha_40x12").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarAgulha),u.flag("pegar_agulha",!0),u.setInteractiveObjectVisible("io-agulha",!1)}).setVisibility(!0),(new s("io-ampola","Ampola de Glicose 50%")).setCssClass("intObj-ampola_glicose_50").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarGlicose),u.flag("pegar_ampola",!0),u.setInteractiveObjectVisible("io-ampola",!1)}).setVisibility(!0),(new s("io-equipoSoro","Equipamento de Soro Macrogotas")).setCssClass("intObj-equipo_de_soro").onClick(function(){m.play(m.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarSoro),u.flag("pegar_equipoSoro",!0),u.setInteractiveObjectVisible("io-equipoSoro",!1)}).setVisibility(!0)]),D=(new t("conferirSoroGlicofisiologico1000","Conferir Soro Glicofisiologico")).setCssClass("modalScene-soroGlicofisiologico1000"),D.registerActions([(new n("btn-fechar_zoom","Finalizar conferição")).setCssClass("action-soro_glicofisiologico_1000ml").onClick(function(){u.flag("conferirFrascoSG",!0),u.closeModalScene("conferirSoroGlicofisiologico1000")})]),P=(new t("conferirCloretoSodio","Conferir Cloreto de Sodio")).setCssClass("modalScene-cloretoSodio20"),P.registerActions([(new n("btn-fechar_zoom","Finalizar conferição")).setCssClass("action-cloreto_sodio_20_10ml").onClick(function(){u.flag("conferirNACL",!0),u.closeModalScene("conferirCloretoSodio")})]),g.registerModalScene(M),g.registerModalScene(A),g.registerModalScene(O),g.registerModalScene(equipoSoro),g.registerModalScene(D),g.registerModalScene(P),g.registerScene(y),g.registerScene(b),g.registerScene(w),g.registerScene(N),g.registerScene(L),g.registerScene(k),g.registerScene(x),g.registerScene(S),g.registerScene(C),g.registerScene(E),g.setSetupScript(function(){l.setNome("Pedro Alcides Mendonça"),l.setSexo("M"),l.setEstadoCivil("Solteiro"),l.setDataNascimento("03/06/1962"),l.setIdade("52 anos"),l.setProfissao("Professor"),l.setPai("Aldair Mendonça"),l.setMae("Ana Laura Alcídes Mendonça"),l.setAlergiaMedicamentosa(!1,""),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("27/12/2015"),l.setLeito("01 - Enfermaria Masculina"),l.setAntecedentes("Ocorrência de internação por Infecção no trato respiratório por Streptococcus sp.  e desconforto respiratório no mês de outubro"),l.setHipotese("Desidratação de grau moderado"),l.setObservacoes("Grande perda de eletrólitos"),l.setPeso("62"),l.setAltura("1,77"),l.setCircunferenciaAbdominal("91"),l.setPrescMedicaRowData(0,"","Soro Glicosado 5%","Endovenosa","800ml","",!1,!0),l.setPrescMedicaRowData(1,"","NaCL 20%","Endovenosa","20ml","",!1,!0),l.setPrescMedicaRowData(2,"","Glicose 50%","Endovenosa","30ml","","(X) Administrado a infusão de  solução de  reposição  hidroeletrolítica  conforme  prescrição  médica, sem  intercorrências.",!1),l.setPrescMedicaRowData(3,"","","","","",!1,!0),l.clearPrescEnfermagemState(),l.setPrescEnfermagemState("desiquilibrio_eletrolitico_fase9"),l.setSsvvRowData(0,"","130X70","82","19","96","35.9",!0),l.setSsvvRowData(1,"","","","","","",!0),f.setNameRegExp(/Raul Gonzales Rodrigues/),f.setLeitoRegExp(/0*3/),f.setDataRegExp(/24\/07\/1937/),f.setName("Raul Gonzales Rodrigues"),f.setLeito("03"),f.setData("24/07/1937"),f.disable()}),g.registerFlag(new o("score_iralaFeminina_horaErrada",!1)),g.registerFlag(new o("score_irCentroCirurgico_horaErrada",!1)),g.registerFlag(new o("conversar_paciente",!1)),g.registerFlag(new o("score_ir_farmacia_horaErrada",!1)),g.registerFlag(new o("score_irPosto_horaErrada",!1)),g.registerFlag(new o("pegar_prescricao_medica",!1)),g.registerFlag(new o("ler_prontuario",!1)),g.registerFlag(new o("pegarFrascoSG",!1)),g.registerFlag(new o("pegarNACL",!1)),g.registerFlag(new o("conferirMedicamento",!1)),g.registerFlag(new o("pegar_bandeja",!1)),g.registerFlag(new o("pegar_seringa",!1)),g.registerFlag(new o("pegar_agulha",!1)),g.registerFlag(new o("pegar_ampola",!1)),g.registerFlag(new o("pegar_equipoSoro",!1)),g.registerFlag(new o("pegou_tudo_postoEnfermagem",!1)),g.registerFlag(new o("lavar_maos",!1)),g.registerFlag(new o("trocou_de_leito",!1)),g.registerFlag(new o("falar_paciente_correto",!1)),g.registerFlag(new o("lavar_maos2",!1)),g.registerFlag(new o("realizar_gotejamento",!1)),g.registerFlag(new o("pegar_suporte_soro",!1)),g.registerFlag(new o("administrar_medicamento",!1)),g.registerFlag(new o("lavar_maos3",!1)),g.registerFlag(new o("score_anotar_prontuario",!1)),g.registerFlag(new o("irCentroCirurgicoHoraErrada",!1)),g.registerFlag(new o("score_lavarMaos1",!1)),g.registerFlag(new o("conferirFrascoSG",!1)),g.registerFlag(new o("conferirNACL",!1)),g.registerFlag(new o("score_verPulseira",!1)),g.setInitialScene(0),e.registerLevel(g,10)});