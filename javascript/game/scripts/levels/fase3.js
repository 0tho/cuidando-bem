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

define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function C(){u.flag("conversar_recepcionista")==1&&u.changeScene(1)}function k(){u.openDialog(0)}function L(){u.flag("pegou_tudo_gaveta")==0?u.openDialog(5):u.changeScene(2)}function A(){u.flag("checar_prontuario")==0?(u.openDialog(2),u.flag("score_ir_posto_hora_errada")==0&&(u.registerScoreItem(h.irPostoEnfermagemHoraErrada),u.flag("score_ir_posto_hora_errada",!0))):u.changeScene(4)}function O(){u.openDialog(3),u.flag("score_ir_ala_feminina_hora_errada")==0&&(u.registerScoreItem(h.irAlaFemininaHoraErrada),u.flag("score_ir_ala_feminina_hora_errada",!0))}function M(){u.openDialog(4),u.flag("score_ir_farmacia_hora_errada")==0&&(u.registerScoreItem(h.irFarmaciaHoraErrada),u.flag("score_ir_farmacia_hora_errada",!0))}var p=require("DialogsData").fase2,d=require("DialogsData").alertas,h=require("ScoresData").level2,v=require("Player"),m=new r("Level 3");m.setMaxPoints(h._sum);var g,y,b,w,E,S,x,T,N;g=a.scenes.recepcao.getClone().onLoad(function(){u.openDialog(0)}),g.registerDialogs([(new i(a.characters.recepcionista)).setText(p.recepcao[0]).registerOption("",function(){u.flag("conversar_recepcionista",!0),u.closeDialog(),u.setInteractiveObjectVisible("io-ir_corredor_esquerda",!0),u.setInteractiveObjectVisible("io-ir_corredor_direita",!0)})]),g.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(k),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left no-glow").onClick(C).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right no-glow").onClick(C).setVisibility(!0)]),y=a.scenes.corredor.getClone().onLoad(function(){v.stopAll(),v.play(v.audios.sfx.abrirPorta),v.playInLoop(v.audios.loops.recepcao),u.flag("score_anotar_prontuario")==1&&u.setInteractiveObjectVisible("io-conversar_mentor",!0)}).onUnload(function(){v.stopAll(),v.play(v.audios.sfx.abrirPorta),v.playInRange(v.audios.musics.inGame)}),y.registerDialogs([(new i(a.characters.jogador)).setText(p.corredor[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.mentor)).setText(p.corredor[1]).registerOption("",function(){u.closeDialog(),u.unlockLevel(3),u.closeCommandBar(),u.showEndOfLevel(),v.stopAll(),v.play(v.audios.sfx.missaoCumprida)}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.alaFeminina).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.enfermagem[1]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.objetoQualquer).registerOption("",function(){u.closeDialog()})]),y.registerInteractiveObjects([(new s("io-ir_sala_leitos","Ir à Enfermaria Masculina")).setCssClass("intObj-goToAlaMasculina").onClick(L).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir ao Posto de Enfermagem")).setCssClass("intObj-goToNursingStation").onClick(A).setVisibility(!0),(new s("io-ir_ala_feminina","Ir à Enfermaria Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(O).setVisibility(!0),(new s("io-ir_farmacia","Ir à Farmácia")).setCssClass("intObj-goToPharmacy").onClick(M).setVisibility(!0),(new s("io-conversar_mentor","Conversar com Mentor")).setCssClass("intObj-talkToMentor").onClick(function(){u.openDialog(0)}).setVisibility(!1)]),b=(new t("salaDeLeitos","scene-salaDeLeitos")).setCssClass("scene-bedroom-level2").onLoad(function(){u.flag("segunda_ida_leito_paciente")==1&&(u.setInteractiveObjectVisible("io-ir_leito",!0),u.flag("tem_fala")==0&&u.openCommandBar()),u.flag("score_explicou_resultado")==1&&(u.setActionVisible("btn-jogar_algodao_lixo",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-ler_prontuario",!1),u.setActionVisible("btn-anotarProntuario",!0),u.openCommandBar()),u.flag("descartar_algodao")==1&&u.setActionVisible("btn-jogar_algodao_lixo",!1),u.flag("descartar_agulha")==1&&u.setActionVisible("btn-jogar_agulha_perfuro",!1)}).onUnload(function(){u.flag("segunda_ida_leito_paciente",!0),u.closeCommandBar()}),b.registerInteractiveObjects([(new s("io-ir_leito","Ir ao leito")).setCssClass("intObj-ir_leito-fase2").onClick(function(){u.flag("segunda_ida_leito_paciente")==0?u.openDialog(0):u.flag("lavar_maos2")==0?u.openDialog(3):u.changeScene(3)}).setVisibility(!0),(new s("io-ir_corredor","Ir ao Corredor")).setCssClass("intObj-bedroomToHallway").onClick(function(){u.flag("checar_prontuario")==1?u.changeScene(1):u.openDialog(8)}).setVisibility(!0)]),b.registerActions([(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),u.flag("segunda_ida_leito_paciente")==0?(u.flag("lavarMaos")==0&&u.flag("lavarMaos",!0),u.flag("score_lavar_maos_antes_do_prontuario")==0&&(u.registerScoreItem(h.lavaMaosAntes),u.flag("score_lavar_maos_antes_do_prontuario",!0))):u.flag("score_explicou_resultado")==0?(u.flag("lavar_maos2")==0&&u.flag("lavar_maos2",!0),u.flag("score_lavar_maos_antes_de_ir_no_leito")==0&&(u.registerScoreItem(h.lavarMaosAntesLeito),u.flag("score_lavar_maos_antes_de_ir_no_leito",!0))):u.flag("score_elevou_grade_cama")==1?(u.flag("lavar_maos_apos_lixo")==0&&u.flag("lavar_maos_apos_lixo",!0),u.flag("score_lavou_maos_apos_lixo")==0&&(u.registerScoreItem(h.lavarMaosAposLixos),u.flag("score_lavou_maos_apos_lixo",!0))):(u.closeCommandBar(),u.openDialog(5))}).setVisibility(!1),(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){u.flag("lavarMaos")==0?(u.closeCommandBar(),u.openDialog(6)):(u.flag("score_checar_prontuario")==0&&(u.registerScoreItem(h.checarProntuario),u.flag("score_checar_prontuario",!0)),l.open(),u.openModalScene("Prontuario"))}).setVisibility(!1),(new n("btn-jogar_agulha_perfuro","Descartar Agulhas")).setCssClass("action-agulhas").onClick(function(){u.flag("descartar_agulha",!0),u.flag("descartar_algodao",!1),u.setActionVisible("btn-lavarMaos",!1),u.setActionVisible("btn-jogar_algodao_lixo",!1),u.setActionVisible("btn-jogar_agulha_perfuro",!1),u.setActionVisible("btn-elevar_grade_cama",!1),u.setActionVisible("btn-ler_prontuario",!1),u.setActionVisible("btn-anotarProntuario",!1),u.setActionVisible("btn-lixoComum",!0),u.setActionVisible("btn-lixoInfectante",!0),u.setActionVisible("btn-perfuroCortante",!0)}).setVisibility(!1),(new n("btn-jogar_algodao_lixo","Descartar Algodão")).setCssClass("action-algodao_seco").onClick(function(){u.flag("descartar_algodao",!0),u.flag("descartar_agulha",!1),u.setActionVisible("btn-lavarMaos",!1),u.setActionVisible("btn-jogar_algodao_lixo",!1),u.setActionVisible("btn-jogar_agulha_perfuro",!1),u.setActionVisible("btn-elevar_grade_cama",!1),u.setActionVisible("btn-ler_prontuario",!1),u.setActionVisible("btn-anotarProntuario",!1),u.setActionVisible("btn-lixoComum",!0),u.setActionVisible("btn-lixoInfectante",!0),u.setActionVisible("btn-perfuroCortante",!0)}).setVisibility(!1),(new n("btn-elevar_grade_cama","Elevar a grade da cama")).setCssClass("action-elevarCama").onClick(function(){u.flag("descartar_agulha")==1?u.flag("score_elevou_grade_cama")==0&&(u.flag("score_elevou_grade_cama",!0),u.registerScoreItem(h.elevarGradeDaCama)):(u.closeCommandBar(),u.openDialog(4))}).setVisibility(!1),(new n("btn-anotarProntuario","Anotar prontuario")).setCssClass("action-anotar_prontuario").onClick(function(){u.flag("lavar_maos_apos_lixo")==0?(u.closeCommandBar(),u.openDialog(6)):(u.flag("score_anotar_prontuario")==0&&(u.registerScoreItem(h.anotarNoProntuario),u.flag("score_anotar_prontuario",!0)),l.open(),u.openModalScene("Prontuario"))}).setVisibility(!1),(new n("btn-lixoComum","Lixo Comum")).setCssClass("action-lixo_comum").onClick(function(){u.flag("descartar_agulha")&&(u.registerScoreItem(h.agulhaLixoErrado),u.setActionVisible("btn-lixoComum",!1),u.setActionVisible("btn-lixoInfectante",!1),u.setActionVisible("btn-perfuroCortante",!1),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-anotarProntuario",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!1),u.setActionVisible("btn-jogar_algodao_lixo",!0),u.flag("descartar_algodao")&&u.setActionVisible("btn-jogar_algodao_lixo",!1)),u.flag("descartar_algodao")&&(u.registerScoreItem(h.algodaoLixoCerto),u.setActionVisible("btn-lixoComum",!1),u.setActionVisible("btn-lixoInfectante",!1),u.setActionVisible("btn-perfuroCortante",!1),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-anotarProntuario",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!0),u.setActionVisible("btn-jogar_algodao_lixo",!1),u.flag("descartar_agulha")&&u.setActionVisible("btn-jogar_agulha_perfuro",!1))}).setVisibility(!1),(new n("btn-lixoInfectante","Lixo Infectante")).setCssClass("action-lixo_infectante").onClick(function(){u.flag("descartar_agulha")&&(u.registerScoreItem(h.agulhaLixoErrado),u.setActionVisible("btn-lixoComum",!1),u.setActionVisible("btn-lixoInfectante",!1),u.setActionVisible("btn-perfuroCortante",!1),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-anotarProntuario",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!1),u.setActionVisible("btn-jogar_algodao_lixo",!0),u.flag("descartar_algodao")&&u.setActionVisible("btn-jogar_algodao_lixo",!1)),u.flag("descartar_algodao")&&(u.registerScoreItem(h.algodaoLixoErrado),u.setActionVisible("btn-lixoComum",!1),u.setActionVisible("btn-lixoInfectante",!1),u.setActionVisible("btn-perfuroCortante",!1),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-anotarProntuario",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!0),u.setActionVisible("btn-jogar_algodao_lixo",!1),u.flag("descartar_agulha")&&u.setActionVisible("btn-jogar_agulha_perfuro",!1))}).setVisibility(!1),(new n("btn-perfuroCortante","Perfuro Cortante")).setCssClass("action-lixo_perfuro_cortante").onClick(function(){u.flag("descartar_agulha")&&(u.registerScoreItem(h.agulhaLixoCerto),u.setActionVisible("btn-lixoComum",!1),u.setActionVisible("btn-lixoInfectante",!1),u.setActionVisible("btn-perfuroCortante",!1),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-anotarProntuario",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!1),u.setActionVisible("btn-jogar_algodao_lixo",!0),u.flag("descartar_algodao")&&u.setActionVisible("btn-jogar_algodao_lixo",!1)),u.flag("descartar_algodao")&&(u.registerScoreItem(h.algodaoLixoErrado),u.setActionVisible("btn-lixoComum",!1),u.setActionVisible("btn-lixoInfectante",!1),u.setActionVisible("btn-perfuroCortante",!1),u.setActionVisible("btn-lavarMaos",!0),u.setActionVisible("btn-elevar_grade_cama",!0),u.setActionVisible("btn-anotarProntuario",!0),u.setActionVisible("btn-jogar_agulha_perfuro",!0),u.setActionVisible("btn-jogar_algodao_lixo",!1),u.flag("descartar_agulha")&&u.setActionVisible("btn-jogar_agulha_perfuro",!1))}).setVisibility(!1)]),b.registerDialogs([(new i(a.characters.jogador)).setText(p.alaMasculina[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.raulUnknow)).setText(p.alaMasculina[1]).registerOption("",function(){u.setInteractiveObjectVisible("io-ir_leito",!1),u.setActionVisible("btn-ler_prontuario",!0),u.setActionVisible("btn-lavarMaos",!0),u.closeDialog(),u.openCommandBar()}),(new i(a.characters.jogador)).setText(p.alaMasculina[2]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.descarte.agulha).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.elevarGrade[0]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.alaMasculina[3]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.alaMasculina[4]).registerOption("",function(){u.closeDialog()})]),w=a.scenes.leitos.raul.getClone().onLoad(function(){u.openCommandBar(),u.setInteractiveObjectVisible("io-pulseira_paciente",!0)}).onUnload(function(){u.closeCommandBar()}),w.registerInteractiveObjects([(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_03-checar_pulseira").onClick(function(){u.flag("score_falar_paciente")==0?(u.closeCommandBar(),u.openDialog(15)):(u.flag("selecionar_bandeja",!0),u.openModalScene("pulseira"),f.open(),u.openCommandBar())}).setVisibility(!0),(new s("io-conversar_paciente03","Falar com o paciente")).setCssClass("intObj-conversar_paciente").onClick(function(){u.flag("conversar_paciente2")==0?(u.flag("score_falar_paciente")==0&&(u.registerScoreItem(h.falarComPaciente),u.flag("score_falar_paciente",!0)),u.closeCommandBar(),u.openDialog(0)):u.flag("score_utilizou_algodao2")==0?(u.flag("score_nao_utilizou_algodao2")==0&&(u.registerScoreItem(h.naoUsarAlgodao2),u.flag("score_nao_utilizou_algodao2",!0)),u.closeCommandBar(),u.openDialog(12)):(u.flag("score_explicou_resultado")==0&&(u.flag("score_explicou_resultado",!0),u.registerScoreItem(h.explicarResultado)),u.openDialog(6),u.flag("tem_fala",!1))}).setVisibility(!0)]),w.registerDialogs([(new i(a.characters.jogador)).setText(p.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.raulUnknow)).setText(p.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.raul)).setText(p.leitoPaciente[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[4]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.pacientes.raul)).setText(p.leitoPaciente[5]).registerOption("",function(){u.closeDialog(),u.setActionVisible("btn-por_luvas",!0),u.setActionVisible("btn-utilizar_algodao",!0),u.setActionVisible("btn-realizar_teste_glicemia",!0),u.setActionVisible("btn-ir_sala_leitos",!0),u.openCommandBar()}),(new i(a.characters.pacientes.raul)).setText(p.leitoPaciente[6]).registerOption("",function(){u.openDialog(7)}),(new i(a.characters.jogador)).setText("").registerOption(p.leitoPaciente[7],function(){u.openDialog(8)}).registerOption(p.leitoPaciente[9],function(){u.closeDialog()}).registerOption(p.leitoPaciente[10],function(){u.openDialog(9)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.leitoPaciente[8]).registerOption("",function(){u.openDialog(7)}),(new i(a.characters.mentor)).setText(p.leitoPaciente[11]).registerOption("",function(){u.openDialog(7)}),(new i(a.characters.mentor)).setText(d.esqueceu.verPulseira).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.luvas).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.algodão).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.teste[0]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.paciente).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.falarPaciente).registerOption("",function(){u.closeDialog()})]),w.registerActions([(new n("btn-por_luvas","Colocar Luvas")).setCssClass("action-luvas_de_procedimento").onClick(function(){v.play(v.audios.sfx.colocarLuvas),u.flag("score_vestiu_luvas")==0&&(u.flag("score_vestiu_luvas",!0),u.registerScoreItem(h.porLuvas))}).setVisibility(!1),(new n("btn-utilizar_algodao","Utilizar Algodão")).setCssClass("action-algodao_seco").onClick(function(){u.flag("utilizar_algodao2")==1?u.flag("score_realizou_teste_glicemia")==0?(u.flag("score_nao_realizou_teste_glicemia")==0&&(u.registerScoreItem(h.naoRealizarTesteGlicemia),u.flag("score_nao_realizou_teste_glicemia",!0)),u.closeCommandBar(),u.openDialog(13)):u.flag("score_utilizou_algodao2")==0&&(u.flag("score_utilizou_algodao2",!0),u.registerScoreItem(h.usarAlgodao2)):u.flag("score_vestiu_luvas")==0?(u.flag("score_nao_vestiu_luvas")==0&&(u.registerScoreItem(h.naoPorLuvas),u.flag("score_nao_vestiu_luvas",!0)),u.closeCommandBar(),u.openDialog(11)):(u.flag("score_utilizou_algodao1")==0&&(u.flag("score_utilizou_algodao1",!0),u.registerScoreItem(h.usarAlgodao)),u.flag("utilizar_algodao2",!0))}).setVisibility(!1),(new n("btn-realizar_teste_glicemia","Realizar teste de glicemia capilar")).setCssClass("action-realizar_teste_glicemia").onClick(function(){v.play(v.audios.sfx.bip),u.flag("score_utilizou_algodao1")==0?(u.flag("score_nao_utilizou_algodao1")==0&&(u.registerScoreItem(h.naoUsarAlgodao),u.flag("score_nao_utilizou_algodao1",!0)),u.closeCommandBar(),u.openDialog(12)):(u.flag("conversar_paciente2",!0),u.flag("score_realizou_teste_glicemia")==0&&(u.flag("score_realizou_teste_glicemia",!0),u.registerScoreItem(h.realizarTesteGlicemia)),u.openModalScene("modalGlicosimetro"))}).setVisibility(!1),(new n("btn-ir_sala_leitos","Ir para sala de leitos")).setCssClass("action-ir_sala_de_leitos").onClick(function(){u.flag("score_explicou_resultado")==0&&(u.flag("tem_fala",!0),u.flag("score_nao_explicou_resultado")==0&&(u.registerScoreItem(h.naoExplicarResultado),u.flag("score_nao_explicou_resultado",!0)),u.closeCommandBar(),u.openDialog(14)),u.changeScene(2)}).setVisibility(!0)]),E=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){u.openCommandBar()}).onUnload(function(){u.closeCommandBar()}),E.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.flag("score_pegou_kit_glicemia")==1&&u.flag("score_pegou_algodao")==1&&u.flag("score_pegou_luvas")==1&&u.flag("pegou_agulhas")==1?(u.flag("pegou_tudo_gaveta",!0),u.changeScene(1)):(u.flag("pegou_tudo_gaveta",!1),u.openDialog(1))}).setVisibility(!0)]),E.registerInteractiveObjects([(new s("io-abrirGaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){u.flag("pegou_bandeja")!=1?u.openDialog(0):(v.play(v.audios.sfx.abrirGaveta),u.openModalScene("gaveta"),u.openCommandBar(),u.setInteractiveObjectVisible("io-kit_glicemia",!u.flag("score_pegou_kit_glicemia")),u.setInteractiveObjectVisible("io-algodao",!u.flag("score_pegou_algodao")),u.setInteractiveObjectVisible("io-luvas",!u.flag("score_pegou_luvas")))}).setVisibility(!0),(new s("io-pegar_bandeja","Pegar bandeja")).setCssClass("intObj-bandeja").onClick(function(){v.play(v.audios.sfx.pegarObjeto),u.flag("pegou_bandeja",!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)}).setVisibility(!0)]),E.registerDialogs([(new i(a.characters.mentor)).setText(d.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.objetosGaveta).registerOption("",function(){u.closeDialog()})]),x=new t("pulseira","pulseira"),x.registerInteractiveObjects([]),x.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){u.closeModalScene("Pulseira"),u.flag("score_verificar_pulseira")==0&&(u.flag("score_verificar_pulseira",!0),u.registerScoreItem(h.verificarPulseira)),f.close()}).setVisibility(!0)]),S=(new t("gaveta","Gaveta")).setCssClass("modalScene-drawer"),S.registerActions([(new n("btn-fecharGaveta","Fechar gaveta")).setCssClass("action-fecharGaveta").onClick(function(){v.play(v.audios.sfx.fecharGaveta),u.closeModalScene("Gaveta"),u.setActionVisible("btn-ir_corredor",!0),u.openCommandBar()}).setVisibility(!0)]),S.registerInteractiveObjects([(new s("io-kit_glicemia","Pegar Kit de glicemia")).setCssClass("intObj-aparelhoGlicemia").onClick(function(){v.play(v.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarKitGlicemia),u.setInteractiveObjectVisible("io-kit_glicemia",!1),u.flag("score_pegou_kit_glicemia",!0)}).setVisibility(!0),(new s("io-agulhas","Pegar Agulhas")).setCssClass("intObj-agulhas").onClick(function(){v.play(v.audios.sfx.pegarObjeto),u.setInteractiveObjectVisible("io-agulhas",!1),u.flag("pegou_agulhas",!0)}).setVisibility(!0),(new s("io-algodao","Pegar algodao")).setCssClass("intObj-algodao_seco").onClick(function(){v.play(v.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarAlgodao),u.setInteractiveObjectVisible("io-algodao",!1),u.flag("score_pegou_algodao",!0)}).setVisibility(!0),(new s("io-luvas","Pegar luvas")).setCssClass("intObj-luvas_de_procedimento").onClick(function(){v.play(v.audios.sfx.pegarObjeto),u.registerScoreItem(h.pegarLuvas),u.setInteractiveObjectVisible("io-luvas",!1),u.flag("score_pegou_luvas",!0)}).setVisibility(!0)]),T=new t("Prontuario","Prontuario"),T.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){l.close(),u.closeModalScene("Prontuario"),u.setInteractiveObjectVisible("io-ir_corredor",!0),u.flag("checar_prontuario",!0),u.flag("score_falar_paciente")==0&&(u.closeCommandBar(),u.flag("frase_apos_prontuario")==0&&(u.flag("frase_apos_prontuario",!0),u.openDialog(2)))}).setVisibility(!0)]),N=(new t("modalGlicosimetro","modalGlicosimetro")).setCssClass("modalScene-glicosimetro").setTemplate("<span class='glicosimetro-text'>180 mg/dl</span>"),N.registerActions([(new n("btn-realizar_teste_glicemia","Terminar teste de glicemia capilar")).setCssClass("action-realizar_teste_glicemia").onClick(function(){u.closeModalScene("modalGlicosimetro")}).setVisibility(!0)]),m.registerScene(g),m.registerScene(y),m.registerScene(b),m.registerScene(w),m.registerScene(E),m.registerModalScene(x),m.registerModalScene(S),m.registerModalScene(T),m.registerModalScene(N),m.setSetupScript(function(){f.setNameRegExp(/Raul Gonzales Rodrigues/),f.setLeitoRegExp(/0*3/),f.setDataRegExp(/24\/07\/1937/),f.setName("Raul Gonzales Rodrigues"),f.setLeito("03"),f.setData("24/07/1937"),f.disable(),l.setNome("Raul Gonzales Rodrigues"),l.setSexo("M"),l.setEstadoCivil("Casado"),l.setDataNascimento("24/07/1937"),l.setIdade("78 anos"),l.setProfissao("Aposentado (operário)"),l.setPai("Roberto Cruz Rodrigues"),l.setMae("Rebeca Gonzales"),l.setAlergiaMedicamentosa(!1,""),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("17/06/2015"),l.setLeito("03 - Enfermaria Masculina"),l.setAntecedentes("Ocorrência de duas internações em 2013 por crise hipertensiva e uma internação em 2014 por hiperglicemia."),l.setHipotese("Acidose metabólica (Glicemia capilar no momento de internação 649 mg/dl)."),l.setObservacoes("Portador de Diabetes Mellitus II há 33 anos e Hipertensão Arterial Sistêmica há 15 anos."),l.setPeso("77"),l.setAltura("1,63"),l.setCircunferenciaAbdominal("147"),l.setPrescMedicaRowData(0,"","Metmorfina","Oral","500 mg (2x ao dia)","07h - 17h",!0,!0),l.setPrescMedicaRowData(1,"","Glibenclamida","Oral","4 mg (2x ao dia)","08h - 18h",!0,!0),l.setPrescMedicaRowData(2,"","Bicarbonato de sódio","Endovenoso","8,4 g + Água destilada 100 ml","Tempo de 4 horas",!0,!0),l.setPrescMedicaRowData(3,"","","","","",!1,!0),l.clearPrescEnfermagemState(),l.setPrescEnfermagemState("decubito"),l.setPrescEnfermagemState("verificar_glicemia"),l.setPrescEnfermagemState("levantar_grade"),l.setSsvvRowData(0,"","130x70","58","28","95","36,2",!0),l.setSsvvRowData(1,"","","","","","",!0),l.setAnotacaoEnfermagemRowData("","")}),m.registerFlag(new o("conversar_recepcionista",!1)),m.registerFlag(new o("conversarPaciente",!0)),m.registerFlag(new o("lavarMaos",!1)),m.registerFlag(new o("checar_prontuario",!1)),m.registerFlag(new o("frase_apos_prontuario",!1)),m.registerFlag(new o("pegou_bandeja",!1)),m.registerFlag(new o("pegou_tudo_gaveta",!0)),m.registerFlag(new o("segunda_ida_leito_paciente",!1)),m.registerFlag(new o("lavar_maos2",!1)),m.registerFlag(new o("conversar_paciente2",!1)),m.registerFlag(new o("selecionar_bandeja",!1)),m.registerFlag(new o("por_luvas",!1)),m.registerFlag(new o("utilizar_algodao1",!1)),m.registerFlag(new o("realizar_teste_glicemia",!1)),m.registerFlag(new o("utilizar_algodao2",!1)),m.registerFlag(new o("explicar_resultado",!1)),m.registerFlag(new o("voltar_alaMasculina",!1)),m.registerFlag(new o("lixo_algodao",!1)),m.registerFlag(new o("lixo_agulha",!1)),m.registerFlag(new o("elevarGrade",!1)),m.registerFlag(new o("lavar_maos_apos_lixo",!1)),m.registerFlag(new o("tem_fala",!1)),m.registerFlag(new o("score_ir_posto_hora_errada",!1)),m.registerFlag(new o("score_ir_farmacia_hora_errada",!1)),m.registerFlag(new o("score_ir_ala_feminina_hora_errada",!1)),m.registerFlag(new o("score_falar_paciente",!1)),m.registerFlag(new o("score_lavar_maos_antes_do_prontuario",!1)),m.registerFlag(new o("score_checar_prontuario",!1)),m.registerFlag(new o("score_pegou_kit_glicemia",!1)),m.registerFlag(new o("score_pegou_algodao",!1)),m.registerFlag(new o("score_pegou_luvas",!1)),m.registerFlag(new o("score_lavar_maos_antes_de_ir_no_leito",!1)),m.registerFlag(new o("score_verificar_pulseira",!1)),m.registerFlag(new o("score_selecionou_bandeja",!1)),m.registerFlag(new o("score_vestiu_luvas",!1)),m.registerFlag(new o("score_utilizou_algodao1",!1)),m.registerFlag(new o("score_realizou_teste_glicemia",!1)),m.registerFlag(new o("score_utilizou_algodao2",!1)),m.registerFlag(new o("score_explicou_resultado",!1)),m.registerFlag(new o("score_nao_verificar_pulseira",!1)),m.registerFlag(new o("score_nao_selecionou_bandeja",!1)),m.registerFlag(new o("score_nao_vestiu_luvas",!1)),m.registerFlag(new o("score_nao_utilizou_algodao1",!1)),m.registerFlag(new o("score_nao_realizou_teste_glicemia",!1)),m.registerFlag(new o("score_nao_utilizou_algodao2",!1)),m.registerFlag(new o("score_nao_explicou_resultado",!1)),m.registerFlag(new o("score_jogou_algodao_lixo",!1)),m.registerFlag(new o("score_jogou_agulha_perfuro",!1)),m.registerFlag(new o("score_elevou_grade_cama",!1)),m.registerFlag(new o("score_lavou_maos_apos_lixo",!1)),m.registerFlag(new o("score_anotar_prontuario",!1)),m.registerFlag(new o("descartar_algodao",!1)),m.registerFlag(new o("descartar_agulha",!1)),m.registerFlag(new o("score_agulha",!1)),m.registerFlag(new o("score_algodao",!1)),m.registerFlag(new o("score_jogou_agulha_errado",!1)),m.registerFlag(new o("score_jogou_algodao_errado",!1)),m.registerFlag(new o("pegou_agulhas",!1)),m.setInitialScene(0),e.registerLevel(m,3)});