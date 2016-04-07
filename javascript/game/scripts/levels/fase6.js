define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","ScoresData"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){function A(){u.changeScene(6),m.getFlag("scoreIrCentroCirurgicoHoraErrada").getValue()==0&&(m.getFlag("scoreIrCentroCirurgicoHoraErrada").setValue(!0),u.registerScoreItem(h.irCentroCirurgicoHoraErrada),console.log("PERDEU 25 PONTOS"))}function O(){u.changeScene(7),m.getFlag("scoreIrAlaFemininaHoraErrada").getValue()==0&&(m.getFlag("scoreIrAlaFemininaHoraErrada").setValue(!0),u.registerScoreItem(h.irAlaFemininaHoraErrada),console.log("PERDEU 25 PONTOS"))}function M(){console.log("Ir para o corredor"),u.changeScene(1)}function _(){console.log("Action: Conversar com a recepcionista"),u.openDialog(0)}function D(){m.getFlag("ler_prontuario").getValue()==1&&(u.changeScene(4),u.openDialog(0))}function P(){console.log("Action: corredorIrPostoEnfermagem"),m.getFlag("conferirDieta").getValue()==1&&u.changeScene(5)}function H(){console.log("Action: coredorirAlaMasculina"),u.changeScene(2)}var p=require("DialogsData").fase6,d=require("DialogsData").alertas,h=h.level6,v=require("Player"),m=new r("Level 6");console.groupCollapsed(m.getName());var g,y,b,w,E,S,x,T,N,C,k,L,w=a.scenes.centroCirurgico.getClone().onLoad(function(){console.log("Load scene: "+w.getName())}),b=a.scenes.alaFeminina.getClone().onLoad(function(){}),g=a.scenes.recepcao.getClone().onLoad(function(){console.log("Load scene: "+g.getName()),u.openDialog(0)});g.registerInteractiveObjects([(new s("intObj-conversar_recepcionista","Conversar com a Recepcionista")).setCssClass("intObj-talkToReceptionist").setVisibility(!0).onClick(_),(new s("io-ir_corredor_esquerda","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-left no-glow").onClick(M).setVisibility(!0),(new s("io-ir_corredor_direita","Ir ao corredor")).setCssClass("intObj-lobbyToHallway-right no-glow").onClick(M).setVisibility(!0)]),g.registerDialogs([(new i(a.characters.recepcionista)).setText(p.recepcao[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText(p.recepcao[1]).registerOption("",function(){u.closeDialog()})]),y=a.scenes.corredor.getClone().onLoad(function(){console.log("Entrando no corredor"),m.getFlag("conversar_mentor").getValue()==0&&(m.getFlag("conversar_mentor").setValue(!0),u.openDialog(0))}).onUnload(function(){console.log("Saindo do corredor")}),y.registerDialogs([(new i(a.characters.mentor)).setText(p.corredor[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.jogador)).setText("").registerOption(p.corredor[1],function(){u.openDialog(2)}).registerOption(p.corredor[2],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.corredor[3]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.corredor[4]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),y.registerInteractiveObjects([(new s("io-ir_centro_cirurgico","Ir para o Centro Cirurgico")).setCssClass("intObj-goToCentroCirurgico").onClick(A).setVisibility(!0),(new s("io-ir_farmacia","Ir para a Farmacia")).setCssClass("intObj-goToFarmacia").onClick(D).setVisibility(!0),(new s("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")).setCssClass("intObj-goToPostoEnfermagem").onClick(P).setVisibility(!0),(new s("io-ir_ala_feminina","Ir para a Ala Feminina")).setCssClass("intObj-goToAlaFeminina").onClick(O).setVisibility(!0),(new s("io-ir_alaMasculina","Ir para a Ala Masculina")).setCssClass("intObj-goToAlaMasculina").onClick(H).setVisibility(!0),(new s("io-conversar_mentor","Conversar com Mentor")).setCssClass("intObj-talkToMentor").onClick(function(){u.closeCommandBar(),console.log("Abrir diálogo com o mentor"),m.getFlag("ir_AlaMasculina_primeiraVez").getValue()==0&&u.openDialog(0)}).setVisibility(!0)]);var B=a.scenes.alaMasculina.getClone().onLoad(function(){console.log("Load scene: "+B.getName()),u.setInteractiveObjectVisible("io-conversar_com_paciente",!1),m.getFlag("pegou_tudo_postoEnfermagem").getValue()==1?u.setInteractiveObjectVisible("io-conversar_com_paciente",!0):m.getFlag("ler_prontuario").getValue()!=1&&(m.getFlag("conversar_paciente").setValue(!0),u.openDialog(0))});B.registerDialogs([(new i(a.characters.jogador)).setText(p.alaMasculina[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.josivaldo)).setText(p.alaMasculina[1]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.jogador)).setText("").registerOption(p.alaMasculina[2],function(){m.getFlag("ler_prontuario").setValue(!0),u.closeDialog()}).registerOption(p.alaMasculina[3],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.mentor)).setText(p.alaMasculina[4]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.lavarMaos.tipo3).registerOption("",function(){u.closeDialog()})]),B.registerInteractiveObjects([(new s("io-ir_corredor","Ir ao corredor")).setCssClass("intObj-irAlaMasculina_corredor").onClick(function(){console.log("voltando para corredor"),u.changeScene(1)}),(new s("io-conversar_com_paciente","Ir ao leito")).setCssClass("intObj-ir_leito_fase3").onClick(function(){m.getFlag("ir_leito_paciente").getValue()==0&&(m.getFlag("ir_leito_paciente").setValue(!0),console.log("Abrir diálogo com paciente 6"),u.registerScoreItem(h.irAoLeitoCorreto),u.changeScene(3))}).setVisibility(!0)]),B.registerActions([(new n("btn-ler_prontuario","Ler prontuario")).setCssClass("action-ler_prontuario").onClick(function(){l.open(),u.openModalScene("Prontuario")}).setVisibility(!0)]);var T=a.scenes.farmacia.getClone().onLoad(function(){console.log("Load scene: "+T.getName())});T.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(p.farmacia[0],function(){u.openDialog(1)}).registerOption(p.farmacia[1],function(){u.openDialog(3)}).setRandomize(!0),(new i(a.characters.paulo)).setText(p.farmacia[2]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.farmacia[3]).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.farmacia[4]).registerOption("",function(){u.openDialog(0)}),(new i(a.characters.mentor)).setText(d.esqueceu.pegarDieta).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.esqueceu.conferirDieta).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(d.perdido.farmacia).registerOption("",function(){u.closeDialog()})]),T.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){m.getFlag("pegarDieta").getValue()==0&&u.openDialog(4),m.getFlag("pegarDieta").getValue()==1&&m.getFlag("conferirDieta").getValue()==0&&u.openDialog(5),m.getFlag("pegarDieta").getValue()==1&&m.getFlag("conferirDieta").getValue()==1&&u.changeScene(1)}),(new n("btn-pegarFrascoDieta","Pegar Frasco de Dieta")).setCssClass("action-frasco_dieta").onClick(function(){v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegarDieta").setValue(!0),u.registerScoreItem(h.pegarDieta),console.log("GANHA 50 PONTOS")}),(new n("btn-conferirMedicamento","Conferir Dieta Prescrita")).setCssClass("action-conferirDieta").onClick(function(){m.getFlag("pegarDieta").getValue()!=0&&(m.getFlag("conferirDieta").setValue(!0),u.registerScoreItem(h.conferirDieta),console.log("GANHA 150 PONTOS"),u.openDialog(2))})]);var x=a.scenes.postoDeEnfermagem.getClone().onLoad(function(){console.log("Load scene: "+x.getName())});x.registerDialogs([(new i(a.characters.jogador)).setText("").registerOption(p.postoEnfermagem[0],function(){u.closeDialog(),u.registerScoreItem(h.calcularInfusaoDieta)}).registerOption(p.postoEnfermagem[1],function(){u.openDialog(2)}).registerOption(p.postoEnfermagem[2],function(){u.openDialog(2)}).setRandomize(!0),(new i(a.characters.mentor)).setText(d.esqueceu.pegarBandeja).registerOption("",function(){u.closeDialog()}),(new i(a.characters.mentor)).setText(p.postoEnfermagem[3]).registerOption("",function(){u.openDialog(0)})]),x.registerInteractiveObjects([(new s("io-abrir_gaveta","Abrir gaveta")).setCssClass("intObj-openDrawer").onClick(function(){v.play(v.audios.sfx.abrirGaveta),m.getFlag("pegar_bandeja").getValue()==0?u.openDialog(1):(console.log("Action: abrir_gaveta"),u.openModalScene("gaveta"),u.openCommandBar())}).setVisibility(!0),(new s("io-pegar_bandeja","Pegar Bandeja")).setCssClass("intObj-bandeja").onClick(function(){console.log("Action: Pegar bandeja"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_bandeja").setValue(!0),u.setInteractiveObjectVisible("io-pegar_bandeja",!1)}).setVisibility(!0)]),x.registerActions([(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){m.getFlag("pegou_tudo_postoEnfermagem").getValue()!=0&&u.changeScene(1)}),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("score_lavarMaos1").getValue()==0&&u.registerScoreItem(h.lavarMaos1),m.getFlag("score_lavarMaos1").setValue(!0)}).setVisibility(!0)]);var S=a.scenes.leitos.ana.getClone().onLoad(function(){u.openDialog(0),m.getFlag("score_falarComPaciente").getValue()==0&&(m.getFlag("score_falarComPaciente").setValue(!0),u.registerScoreItem(h.falarComPaciente))});S.registerDialogs([(new i(a.characters.jogador)).setText(p.leitoPaciente[0]).registerOption("",function(){u.openDialog(1)}),(new i(a.characters.pacientes.josivaldo)).setText(p.leitoPaciente[1]).registerOption("",function(){u.openDialog(2)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[2]).registerOption("",function(){u.openDialog(3)}),(new i(a.characters.pacientes.josivaldo)).setText(p.leitoPaciente[3]).registerOption("",function(){u.openDialog(4)}),(new i(a.characters.jogador)).setText(p.leitoPaciente[4]).registerOption("",function(){u.openDialog(5)}),(new i(a.characters.pacientes.josivaldo)).setText(p.leitoPaciente[5]).registerOption("",function(){u.closeDialog()})]),S.registerInteractiveObjects([(new s("io-pulseira_paciente","Checar pulseira do paciente")).setCssClass("intObj-paciente_01-checar_pulseira").onClick(function(){console.log("IO: pulseira_paciente"),u.openModalScene("Pulseira"),C.open(),u.openCommandBar()}).setVisibility(!0).setEnable(!1),(new s("io-conversar_paciente07","Falar com o paciente")).setCssClass("intObj-conversar_paciente").onClick(function(){}).setVisibility(!0)]),S.registerActions([(new n("btn-pegar_suporte_soro","Pegar Suporte de Soro")).setCssClass("action-pegar_suporte_soro").onClick(function(){m.getFlag("score_pegar_suporte_soro").getValue()==0&&u.registerScoreItem(h.pegarSuporteSoro),m.getFlag("score_pegar_suporte_soro").setValue(!0)}).setVisibility(!0),(new n("btn-elevar_cama","Elevar Cabeceira da Cama em 90º")).setCssClass("action-elevar_cama").onClick(function(){m.getFlag("score_elevar_cama").getValue()==0&&u.registerScoreItem(h.elevarCama),m.getFlag("score_elevar_cama").setValue(!0)}).setVisibility(!0),(new n("btn-verificar_sonda","Verificar Local da Sonda")).setCssClass("action-verificar_sonda").onClick(function(){m.getFlag("score_verificar_sonda").getValue()==0&&u.registerScoreItem(h.verificarSonda),m.getFlag("score_verificar_sonda").setValue(!0)}).setVisibility(!0),(new n("btn-administrar_dieta","Administrar Dieta")).setCssClass("action-administrar_dieta").onClick(function(){m.getFlag("score_administrar_dieta").getValue()==0&&u.registerScoreItem(h.administrarDieta),m.getFlag("score_administrar_dieta").setValue(!0)}).setVisibility(!0),(new n("btn-colocar_gotejamento","Colocar Gotejamento")).setCssClass("action-colocar_gotejamento").onClick(function(){m.getFlag("score_colocar_gotejamento").getValue()==0&&u.registerScoreItem(h.colocarGotejamento),m.getFlag("score_colocar_gotejamento").setValue(!0)}).setVisibility(!0),(new n("btn-lavarMaos","Lavar as mãos")).setCssClass("action-lavarMaos").onClick(function(){v.play(v.audios.sfx.lavarMaos),m.getFlag("score_lavarMaos2").getValue()==0&&u.registerScoreItem(h.lavarMaos2),m.getFlag("score_lavarMaos2").setValue(!0)}).setVisibility(!0),(new n("btn-anotar_prontuario","Anotar prontuario")).setCssClass("action-anotar_prontuario").onClick(function(){console.log("Action: Anotar prontuario"),m.getFlag("score_lavarMaos2").getValue()!=0&&(l.open(),u.openModalScene("Prontuario"),m.getFlag("score_anotar_prontuario").getValue()==0&&(u.registerScoreItem(h.anotarNoProntuario),m.getFlag("score_anotar_prontuario").setValue(!0)))}).setVisibility(!0)]),C=new t("Pulseira","Pulseira"),C.registerInteractiveObjects([]),C.registerActions([(new n("btn-largar_pulseira","Fechar pulseira")).setCssClass("action-pulseira_paciente").onClick(function(){console.log("Ação: Fechar modal pulseira"),u.closeModalScene("Pulseira"),m.getFlag("score_verificar_pulseira").getValue()==0&&(u.registerScoreItem(h.verificarPulseira),m.getFlag("score_verificar_pulseira").setValue(!0)),C.close()}).setVisibility(!0)]),k=new t("Prontuario","Prontuario"),k.registerActions([(new n("btn-fechar_prontuario","Fechar prontuário")).setCssClass("action-ler_prontuario").onClick(function(){m.getFlag("pegou_tudo_postoEnfermagem").getValue()==0?u.openDialog(2):(l.close(),u.setActionVisible("btn-fechar_prontuario",!1),u.showEndOfLevel()),console.log("Action: Fechar prontuario"),l.close(),u.closeModalScene("Prontuario")}).setVisibility(!0)]),N=(new t("gaveta","Gaveta")).setCssClass("modalScene-drawer"),N.registerActions([(new n("btn-fechar_gaveta","Fechar gaveta")).setCssClass("action-fechar_gaveta").onClick(function(){console.log("Action: fechar_gaveta"),v.play(v.audios.sfx.fecharGaveta),u.closeModalScene("Gaveta"),m.getFlag("pegar_copo_descartavel").getValue()==1&&m.getFlag("pegar_agua_potavel").getValue()==1&&m.getFlag("pegar_seringa").getValue()==1&&m.getFlag("pegar_equipoCorreto").getValue()==1&&(u.openDialog(0),u.openDialog(0),m.getFlag("pegou_tudo_postoEnfermagem").setValue(!0),m.getFlag("pegou_tudo_postoEnfermagem").setValue(!0))}).setVisibility(!0)]),N.registerInteractiveObjects([(new s("io-copo_descartavel","Copo Descartável")).setCssClass("intObj-copoDescartavel").onClick(function(){console.log("IntObj: io-copo_descartavel"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_copo_descartavel").setValue(!0),u.setInteractiveObjectVisible("io-copo_descartavel",!1),u.registerScoreItem(h.pegarCopoDescartavel)}).setVisibility(!0),(new s("io-agua_potavel","Água Potável")).setCssClass("intObj-aguaPotavel").onClick(function(){console.log("IntObj: io-agua_potavel"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_agua_potavel").setValue(!0),u.setInteractiveObjectVisible("io-agua_potavel",!1),u.registerScoreItem(h.pegarAguaPotavel)}).setVisibility(!0),(new s("io-seringa","Seringa")).setCssClass("intObj-seringa_de_10_ml").onClick(function(){console.log("IntObj: io-seringa"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_seringa").setValue(!0),u.setInteractiveObjectVisible("io-seringa",!1),u.registerScoreItem(h.pegarSeringa)}).setVisibility(!0),(new s("io-infusao","Equipamento de infusão de dieta")).setCssClass("intObj-equipo_de_infusao_de_dieta").onClick(function(){console.log("intObj-equipo_de_infusao_de_dieta"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_equipoCorreto").setValue(!0),u.setInteractiveObjectVisible("io-infusao",!1),u.registerScoreItem(h.pegarEquipoCorreto)}).setVisibility(!0),(new s("io-equipoErrado","Equipamento ??????????????????")).setCssClass("equipo").onClick(function(){console.log("intObj-equipo"),v.play(v.audios.sfx.pegarObjeto),m.getFlag("pegar_equipoErrado").setValue(!0),u.setInteractiveObjectVisible("io-equipoErrado",!1),u.registerScoreItem(h.pegarEquipoErrado)}).setVisibility(!0)]),m.registerModalScene(k),m.registerModalScene(N),m.registerModalScene(C),m.registerScene(g),m.registerScene(y),m.registerScene(B),m.registerScene(S),m.registerScene(T),m.registerScene(x),m.registerScene(w),m.registerScene(b),m.setSetupScript(function(){m.getFlag("conversar_mentor").setValue(!1),m.getFlag("conversar_paciente").setValue(!1),m.getFlag("score_ir_postoEnfermagem_horaErrada").setValue(!1),m.getFlag("scoreIrFarmaciaHoraErrada").setValue(!1),m.getFlag("scoreIrAlaFemininaHoraErrada").setValue(!1),m.getFlag("scoreIrCentroCirurgicoHoraErrada").setValue(!1),m.getFlag("ir_AlaMasculina_primeiraVez").setValue(!1),m.getFlag("ler_prontuario").setValue(!1),m.getFlag("pegarDieta").setValue(!1),m.getFlag("pegar_seringa").setValue(!1),m.getFlag("conferirDieta").setValue(!1),m.getFlag("lavarMaos").setValue(!1),m.getFlag("pegar_bandeja").setValue(!1),m.getFlag("pegou_tudo_posto_enfermagem").setValue(!1),m.getFlag("score_lavarMaos1"),m.getFlag("score_lavarMaos2"),m.getFlag("pegar_equipoCorreto").setValue(!1),m.getFlag("pegar_copo_descartavel").setValue(!1),m.getFlag("pegar_equipoErrado").setValue(!1),m.getFlag("pegou_tudo_postoEnfermagem").setValue(!1),m.getFlag("ir_leito_paciente").setValue(!1),m.getFlag("score_verificar_pulseira").setValue(!1),m.getFlag("score_falarComPaciente").setValue(!1),m.getFlag("score_pegar_suporte_soro").setValue(!1),m.getFlag("score_verificar_sonda").setValue(!1),m.getFlag("score_administrar_dieta").setValue(!1),m.getFlag("score_colocar_gotejamento").setValue(!1),m.getFlag("score_anotar_prontuario").setValue(!1),l.setNome("Josivaldo Silva"),l.setSexo("M"),l.setEstadoCivil("Solteiro"),l.setDataNascimento("02/02/1961"),l.setIdade("54 anos"),l.setProfissao("Pedreiro"),l.setPai("Josué Souza Silva"),l.setMae("Maria das Graças Costa Silva"),l.setAlergiaMedicamentosa(!1,""),l.setDisableAlergiaMedicamentosa(!0),l.setDataInternacao("15/05/2015"),l.setLeito("03 - Enfermaria Masculina"),l.setAntecedentes(""),l.setHipotese("Câncer de esôfago"),l.setObservacoes("Diagnóstico identificado de Câncer (CA) de Esôfago há um ano atrás, encontra-se em cuidados paliativos."),l.setPeso("48"),l.setAltura("1,60"),l.setCircunferenciaAbdominal("70"),l.setPrescMedicaRowData(0,"","Nutrição Enteral (Hipercalórica  0,99 cal/ml)","Sonda Nasogástrica","200 ml/01 hora","06h/06h",!1,!0),l.setPrescMedicaRowData(1,"","Morfina (solução oral/gota)","Oral","40mg/ml","12/12h",!0,!0),l.setSsvvRowData(0,"","100X10","65","16","93","36.5",!0),l.setSsvvRowData(1,"","","","","","",!0),l.setAnotacaoEnfermagemRowData("","")}),m.registerFlag(new o("conversar_mentor"),!1),m.registerFlag(new o("conversar_paciente"),!1),m.registerFlag(new o("score_ir_postoEnfermagem_horaErrada"),!1),m.registerFlag(new o("scoreIrFarmaciaHoraErrada"),!1),m.registerFlag(new o("scoreIrAlaFemininaHoraErrada"),!1),m.registerFlag(new o("scoreIrCentroCirurgicoHoraErrada"),!1),m.registerFlag(new o("ir_AlaMasculina_primeiraVez"),!1),m.registerFlag(new o("ler_prontuario"),!1),m.registerFlag(new o("pegarDieta"),!1),m.registerFlag(new o("pegar_seringa"),!1),m.registerFlag(new o("conferirDieta"),!1),m.registerFlag(new o("lavarMaos"),!1),m.registerFlag(new o("pegar_bandeja"),!1),m.registerFlag(new o("pegou_tudo_posto_enfermagem"),!1),m.registerFlag(new o("score_lavarMaos1"),!1),m.registerFlag(new o("score_lavarMaos2"),!1),m.registerFlag(new o("pegar_copo_descartavel"),!1),m.registerFlag(new o("pegar_agua_potavel"),!1),m.registerFlag(new o("pegar_equipoCorreto"),!1),m.registerFlag(new o("pegar_equipoErrado"),!1),m.registerFlag(new o("pegou_tudo_postoEnfermagem"),!1),m.registerFlag(new o("ir_leito_paciente"),!1),m.registerFlag(new o("score_verificar_pulseira"),!1),m.registerFlag(new o("score_falarComPaciente"),!1),m.registerFlag(new o("score_pegar_suporte_soro"),!1),m.registerFlag(new o("score_verificar_sonda"),!1),m.registerFlag(new o("score_administrar_dieta"),!1),m.registerFlag(new o("score_colocar_gotejamento"),!1),m.registerFlag(new o("score_anotar_prontuario"),!1),m.setInitialScene(0),e.registerLevel(m,6),console.groupEnd()});