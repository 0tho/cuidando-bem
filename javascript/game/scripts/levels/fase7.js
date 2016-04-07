define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function y(){console.log("Funcao: recepcao_ir_corredor"),m.getFlag("conversar_recepcionista").getValue()==1?(u.closeDialog(),u.changeScene(1),console.log("Ir para o corredor")):console.log("Necessita ação: conversar com a recepcionista")}function b(){console.log("Action: Conversar com a recepcionista"),u.openDialog(0)}function w(){console.log("Action: corredorIrFarmaciaHoraErrada"),u.changeScene(4)}function E(){console.log("Action: corredorIrPostoEnfermagem"),m.getFlag("ir_postoEnfermagem_horaErrada").getValue()==0?(u.registerScoreItem(h.irPostoEnfermagemHoraErrada),m.getFlag("ir_postoEnfermagem_horaErrada").setValue(!0),u.changeScene(5)):u.changeScene(5)}function S(){console.log("Action: corredorIrAlaFeminina"),u.changeScene(2)}function x(){console.log("Action: corredorIrCentroCirurgicoHoraErrada"),m.getFlag("ir_centroCirurgico_horaErrada").getValue()==0?(u.registerScoreItem(h.irCentroCirurgicoHoraErrada),m.getFlag("ir_centroCirurgico_horaErrada").setValue(!0),u.changeScene(7)):u.changeScene(7)}function T(){console.log("Action: corredorIrAlaMasculinaHoraErrada"),m.getFlag("ir_AlaMasculina_horaErrada").getValue()==0?(u.registerScoreItem(h.irAlaMasculinaHoraErrada),m.getFlag("ir_AlaMasculina_horaErrada").setValue(!0),u.changeScene(6)):u.changeScene(6)}function M(){console.log("Action: centroCirurgicoIrCorredor"),u.changeScene(1)}var p=require("DialogsData").fase7,d=require("DialogsData").alertas,v=require("Player"),m=new r("Level 7");console.groupCollapsed(m.getName());var g=a.scenes.recepcao.getClone().onLoad(function(){console.log("Load scene: "+g.getName()),m.getFlag("conversar_recepcionista").setValue(!0),u.openDialog(0)});g.registerDialogs([(new i(a.characters.jogador)).setText(p.recepcao[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.recepcionista)).setText(p.recepcao[1]).registerOption("",function(){u.closeDialog()})]),g.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(b),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left no-glow").onClick(y).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right no-glow").onClick(y).setVisibility(!0)]),corredor=a.scenes.corredor.getClone().onLoad(function(){console.log("Entrando no corredor")}).onUnload(function(){console.log("Saindo do corredor")}),corredor.registerInteractiveObjects([(new s("io-ir_centro_cirurgico","Ir para o Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(x).setVisibility(!0),(new s("io-ir_farmacia","Ir para a Farmacia")).setCssClass("intObj-goToFarmacia").onClick(w).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")).setCssClass("intObj-goToPostoEnfermagem").onClick(E).setVisibility(!0),(new s("io-ir_ala_feminina","Ir para a Ala Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(S).setVisibility(!0),(new s("io-ir_alaMasculina","Ir para a Ala Masculina")).setCssClass("intObj-goToAlaMasculina").onClick(T).setVisibility(!0)]);var N=a.scenes.alaFeminina.getClone().onLoad(function(){m.getFlag("ir_ala_feminina_primeira_vez").setValue(!0),console.log("Load scene: "+N.getName())});N.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(p.enfermariaFeminina[0],function(){u.openDialog(1)}).registerOption(p.enfermariaFeminina[1],function(){u.openDialog(5)}).setRandomize(!0),(new i(a.characters.pacientes.ana)).setText(p.enfermariaFeminina[2]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.enfermariaFeminina[3]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.ana)).setText(p.enfermariaFeminina[4]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(p.enfermariaFeminina[5]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.enfermariaFeminina[6]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.mentor)).setText(d.esqueceu.conversarPaciente).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarMedicamento).registerOption("",function(){u.closeDialog()})]),N.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){m.getFlag("conversarPaciente").getValue()!=0&&(m.getFlag("ler_prontuario").getValue()==0?(m.getFlag("ler_prontuario").setValue(!0),console.log("Action: ler prontuario"),l.open(),u.openModalScene("Prontuario"),u.registerScoreItem(h.verProntuario)):(console.log("Action: ler prontuario"),l.open(),u.openModalScene("Prontuario")))}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("lavarMaos").getValue()==0&&(m.getFlag("lavarMaos").setValue(!0),u.registerScoreItem(h.lavarMaos),m.getFlag("score_lavar_maos").setValue(!0))}).setVisibility(!0)]),N.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaFeminina_corredor").onClick(function(){m.getFlag("conversarPaciente").getValue()==0?u.openDialog(6):(console.log("voltando para corredor"),u.changeScene(1))}),(new s("io-conversar_paciente2","Ir ao leito")).setCssClass("intObj-irLeitoEsquerda").onClick(function(){m.getFlag("lavarMaos").getValue()==0?u.openDialog(7):m.getFlag("conversarPaciente").getValue()==0?(m.getFlag("conversarPaciente").setValue(!0),u.registerScoreItem(h.falarComPaciente),u.openDialog(0)):m.getFlag("pegarMedicamento").getValue()==0?u.openDialog(8):u.changeScene(3)}).setVisibility(!0)]);var C=a.scenes.farmacia.getClone().onLoad(function(){m.getFlag("ir_ala_feminina_primeira_vez").getValue()==1?(console.log("Load scene: "+C.getName()),console.log("Abrindo dialogo com farmaceutico"),u.openDialog(0)):(console.log("Hora Errada!"),m.getFlag("ir_farmacia_horaErrada").getValue()==0&&u.registerScoreItem(h.irFarmaciaHoraErrada),m.getFlag("ir_farmacia_horaErrada").setValue(!0),u.openDialog(9),u.changeScene(1))});C.registerDialogs([(new i(a.characters.jogador)).setText(p.farmacia[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.paulo)).setText(p.farmacia[1]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.jogador)).setText("").registerOption(p.farmacia[2],function(){u.openDialog(3)}).registerOption(p.farmacia[3],function(){u.openDialog(5)}).setRandomize(!0),(new i(a.characters.paulo)).setText(p.farmacia[4]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText("").registerOption(p.farmacia[5],function(){u.openDialog(6)}).registerOption(p.farmacia[6],function(){u.registerScoreItem(h.trocarMedicamento),u.closeDialog()}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.farmacia[7]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.mentor)).setText(p.farmacia[8]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.mentor)).setText(d.esqueceu.verificarMedicamento).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarMedicamento).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),C.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){m.getFlag("pegarMedicamento").getValue()==0?u.openDialog(8):m.getFlag("conferir_medicamento_correto").getValue()==0?u.openDialog(7):u.changeScene(1)}),(new n("btn-pegarMedicamento","Pegar Medicamento")).setCssClass("action-pegarMedicamento").onClick(function(){v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegarMedicamento").setValue(!0),u.registerScoreItem(h.pegarMedicamento)}),(new n("btn-conferirMedicamento","Conferir Medicamento")).setCssClass("action-conferir_medicamento").onClick(function(){m.getFlag("pegarMedicamento").getValue()!=0&&(m.getFlag("conferir_medicamento_errado").getValue()==0?(m.getFlag("conferir_medicamento_errado").setValue(!0),u.registerScoreItem(h.conferirMedicamentoErrado),u.openDialog(2)):(m.getFlag("conferir_medicamento_correto").setValue(!0),u.registerScoreItem(h.conferirMedicamentoCorreto)))})]);var k=a.scenes.leitos.ana.getClone().onLoad(function(){u.openDialog(0)});k.registerDialogs([(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.jogador)).setText("").registerOption(p.leitoPaciente[3],function(){u.openDialog(4)}).registerOption(p.leitoPaciente[4],function(){u.openDialog(7)}).setRandomize(!0),(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[5]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[6]).registerOption("",function(){u.openDialog(6)}),(new i(a.characters.pacientes.ana)).setText(p.leitoPaciente[7]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.leitoPaciente[8]).registerOption("",function(){u.openDialog(3)})]);var L=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){m.getFlag("ir_ala_feminina_primeira_vez").getValue()==1?console.log("Load scene: "+L.getName()):(console.log("Hora Errada!"),m.getFlag("ir_postoEnfermagem_horaErrada").getValue()==0&&u.registerScoreItem(h.irFarmaciaHoraErrada),m.getFlag("ir_postoEnfermagem_horaErrada").setValue(!0),u.openDialog(2),u.changeScene(1))});L.registerDialogs([(new i(a.characters.mentor)).setText(d.esqueceu.pegarObjetosGaveta).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),L.registerInteractiveObjects([(new s("io-abrirGaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){m.getFlag("pegou_bandeja").getValue()!=1?u.openDialog(1):(console.log("Action: abrirGaveta"),v.play(v.audios.sfx.abrirGaveta),u.openModalScene("gaveta"),u.openCommandBar())}).setVisibility(!0),(new s("io-pegar_bandeja","Pegar bandeja")).setCssClass("intObj-bandeja").onClick(function(){console.log("Action: Pegar bandeja"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegou_bandeja").setValue(!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)}).setVisibility(!0)]),L.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){m.getFlag("pegar_copo_descartavel").getValue()==0||m.getFlag("pegar_agua_potavel").getValue()==0?u.openDialog(0):u.changeScene(1)})]);var A=a.scenes.alaMasculina.getClone().onLoad(function(){console.log("Load scene: "+A.getName())});A.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaMasculina_corredor").onClick(function(){console.log("voltando para corredor"),u.changeScene(1)})]);var O=a.scenes.centroCirurgico.getClone().onLoad(function(){console.log("Load scene: "+O.getName())});O.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){M()})]),prontuario=new t("Prontuario","Prontuario"),prontuario.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){console.log("Action: Fechar prontuario"),l.close(),u.closeModalScene("Prontuario")}).setVisibility(!0)]),gaveta=(new t("gaveta","Gaveta")).setCssClass("modalScene-drawer"),gaveta.registerActions([(new n("btn-fecharGaveta","Fechar gaveta")).setCssClass("action-fecharGaveta").onClick(function(){console.log("Action: fecharGaveta"),v.play(v.audios.sfx.fecharGaveta),u.closeModalScene("Gaveta")}).setVisibility(!0)]),gaveta.registerInteractiveObjects([(new s("io-copo_descartavel","Copo Descartável")).setCssClass("intObj-copoDescartavel").onClick(function(){console.log("IntObj: io-copo_descartavel"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_copo_descartavel").setValue(!0),u.setInteractiveObjectVisible("io-copo_descartavel",!1),m.getFlag("score_pegar_copo_descartavel").getValue()==0&&(u.registerScoreItem(h.pegarCopoDescartavel),m.getFlag("score_pegar_copo_descartavel").setValue(!0))}).setVisibility(!0),(new s("io-agua_potavel","Água Potável")).setCssClass("intObj-aguaPotavel").onClick(function(){console.log("IntObj: io-agua_potavel"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_agua_potavel").setValue(!0),u.setInteractiveObjectVisible("io-agua_potavel",!1),m.getFlag("score_pegar_agua_potavel").getValue()==0&&(u.registerScoreItem(h.pegarAguaPotavel),m.getFlag("score_pegar_agua_potavel").setValue(!0))}).setVisibility(!0)]),m.registerModalScene(prontuario),m.registerModalScene(gaveta),m.registerScene(g),m.registerScene(corredor),m.registerScene(N),m.registerScene(k),m.registerScene(C),m.registerScene(L),m.registerScene(A),m.registerScene(O),m.registerScene(prontuario),m.registerScene(gaveta),m.setSetupScript(function(){m.getFlag("conversar_recepcionista").setValue(!1),m.getFlag("conversar_mentor").setValue(!1),m.getFlag("ir_farmacia_horaErrada").setValue(!1),m.getFlag("ir_postoEnfermagem_horaErrada").setValue(!1),m.getFlag("ir_centroCirurgico_horaErrada").setValue(!1),m.getFlag("ir_AlaMasculina_horaErrada").setValue(!1),m.getFlag("ir_AlaFeminina_horaErrada").setValue(!1),m.getFlag("ir_postoEnfermagem_horaErrada").setValue(!1),m.getFlag("conversarPaciente").setValue(!1),m.getFlag("ler_prontuario").setValue(!1),m.getFlag("conferir_medicamento_errado").setValue(!1),m.getFlag("pegarMedicamento").setValue(!1),m.getFlag("conferir_medicamento_correto").setValue(!1),m.getFlag("pegar_copo_descartavel").setValue(!1),m.getFlag("pegar_agua_potavel").setValue(!1),m.getFlag("pegou_bandeja").setValue(!1),m.getFlag("score_pegar_agua_potavel").setValue(!1),m.getFlag("score_pegar_copo_descartavel").setValue(!1),m.getFlag("ir_ala_feminina_primeira_vez").setValue(!1),m.getFlag("lavarMaos").setValue(!1),l.setNome("Ana Beatriz Galvão"),l.setSexo("F"),l.setEstadoCivil("Solteira"),l.setDataNascimento("19/07/1979"),l.setIdade("36 anos"),l.setProfissao("Publicitária"),l.setPai("Antônio Bueno Galvão"),l.setMae("Isabela Romeira Galvão"),l.setAlergiaMedicamentosa(!1,""),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("23/08/2015"),l.setLeito("01 - Enfermaria Feminina"),l.setAntecedentes(""),l.setHipotese("Cirurgia de fratura de fêmur"),l.setObservacoes("Diabetes Mellitus tipo II, sofreu queda em degrau de uma escada, devido à instabilidade glicêmica."),l.setPeso("50"),l.setAltura("1,65"),l.setCircunferenciaAbdominal("78"),l.setPrescMedicaRowData(0,"","Clorpropamida","Oral","250mg/1x/dia","07:00h",!1,!1),l.setPrescMedicaRowData(1,"","","","","",!1,!1),l.setSsvvRowData(0,"","120X70","60","18","96","35",!0),l.setSsvvRowData(1,"","130X70","68","20","96","36.4",!0),l.setAnotacaoEnfermagemRowData("","")}),m.registerFlag(new o("conversar_recepcionista"),!1),m.registerFlag(new o("conversar_mentor"),!1),m.registerFlag(new o("ir_farmacia_horaErrada"),!1),m.registerFlag(new o("ir_postoEnfermagem_horaErrada"),!1),m.registerFlag(new o("ir_centroCirurgico_horaErrada"),!1),m.registerFlag(new o("ir_AlaMasculina_horaErrada"),!1),m.registerFlag(new o("ir_AlaFeminina_horaErrada"),!1),m.registerFlag(new o("ir_postoEnfermagem_horaErrada"),!1),m.registerFlag(new o("conversarPaciente"),!1),m.registerFlag(new o("ler_prontuario"),!1),m.registerFlag(new o("conferir_medicamento_errado"),!1),m.registerFlag(new o("pegarMedicamento"),!1),m.registerFlag(new o("conferir_medicamento_correto"),!1),m.registerFlag(new o("pegar_copo_descartavel"),!1),m.registerFlag(new o("pegar_agua_potavel"),!1),m.registerFlag(new o("pegou_bandeja"),!1),m.registerFlag(new o("score_pegar_agua_potavel"),!1),m.registerFlag(new o("score_pegar_copo_descartavel"),!1),m.registerFlag(new o("ir_ala_feminina_primeira_vez"),!1),m.registerFlag(new o("lavarMaos"),!1),m.setInitialScene(0),e.registerLevel(m,7),console.groupEnd()});