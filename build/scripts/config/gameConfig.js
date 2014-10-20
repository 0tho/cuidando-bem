define(["stateMachineInterface","Scene","Action","Level","Dialog","InteractiveObject","Flag","core"],function(e,t,n,r,i,s,o,u){function f(){}function l(){}var a=new r("Level 1",f,l);a.registerScene(new t("recepcao","scene-recepcao")),a.registerScene(new t("corredor","scene-corredor")),a.registerScene(new t("sala_de_leitos","scene-sala_de_leitos")),a.registerScene(new t("leito","scene-leito")),a.registerScene(new t("posto_de_enfermagem","scene-posto_de_enfermagem")),a.setInitialScene(0),a.registerFlag(new o("conversar_paciente",!1),3),a.registerFlag(new o("pulseira_paciente",!1),3),a.registerFlag(new o("confirmar_paciente",!1),3),a.registerFlag(new o("conversar_mentor",!1),3),a.registerFlag(new o("termometro",!1),4),a.registerFlag(new o("medidor_pressao",!1),4),a.registerFlag(new o("oximetro",!1),4),a.registerFlag(new o("lavar_maos",!1),3),a.registerFlag(new o("medir_temperatura",!1),3),a.registerFlag(new o("medir_pulso",!1),3),a.registerFlag(new o("medir_freq_respiratoria",!1),3),a.registerFlag(new o("mentor_finaliza",!1),3);var c=new i("recepcionista","char-recepcionista","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus dui, dapibus in faucibus in, congue id erat. In sit amet mi facilisis, cursus urna interdum, dapibus felis. Aliquam dapibus libero lacus, in sollicitudin leo fermentum vitae. Duis purus augue, feugiat ut felis quis, lobortis auctor tellus. Sed lobortis ante malesuada, iaculis justo vel, tristique dolor. Praesent nec molestie odio. Nunc efficitur nisl sed leo elementum iaculis. Sed placerat feugiat eros at tempor. Donec suscipit orci quam, non mattis turpis feugiat id. Ut fringilla interdum enim ac porta.");c.registerOption({text:"Essa será a primeira opção do dialogo",actionFunction:function(){}}),c.registerOption({text:"Fechar diálogo",actionFunction:function(){u.closeDialog()}}),a.registerDialog(c,0),a.registerDialog(new i("mentor","char-mentor","Mentor: Fala numero 1"),1),a.registerDialog(new i("mentor","char-mentor","Mentor: Fala numero 2"),3),a.registerDialog(new i("paciente","char-paciente","Paciente: Fala numero 1"),3),a.registerAction(new n("Ir ao corredor","action-ir_corredor",function(){u.changeScene(1),u.closeDialog(0,0)}),0),a.registerAction(new n("Fechar dialogo","action-fechar_dialogo",function(){u.openDialog(0,0)}),0),a.registerAction(new n("ir_sala_de_leitos","action-ir_sala_de_leitos",function(){u.changeScene(2)}),1),a.registerAction(new n("ir_posto_de_enfermagem","action-ir_posto_de_enfermagem",function(){u.changeScene(4)}),1),a.registerAction(new n("Ir ao corredor","action-ir_corredor",function(){u.changeScene(1)}),2),a.registerAction(new n("ir_leito","action-ir_leito",function(){u.changeScene(3)}),2),a.registerAction(new n("Ir para sala de leitos","action-ir_sala_de_leitos",function(){u.changeScene(2)}),3),a.registerAction(new n("conversar_paciente","action-conversar_paciente",function(){a.getFlags()[0]=!0}),3),a.registerAction(new n("pulseira_paciente","action-pulseira_paciente",function(){a.getFlags()[1]=!0}),3),a.registerAction(new n("confirmar_paciente","action-confirmar_paciente",function(){a.getFlags()[0]==1&&a.getFlags()[1]==1&&(a.getFlags()[2]=!0)}),3),a.registerAction(new n("fechar_pulseira","action-fechar_pulseira",function(){}),3),a.registerAction(new n("conversar_mentor","action-conversar_mentor",function(){a.getFlags()[2]==1&&(a.getFlags()[3]=!0),a.getFlags()[8]==1&&a.getFlags()[9]==1&&a.getFlags()[10]==1&&a.getFlags()[11]==1}),3),a.registerAction(new n("lavar_maos","action-lavar_maos",function(){a.getFlags()[7]=!0}),3),a.registerAction(new n("medir_temperatura","action-medir_temperatura",function(){a.getFlags()[4]==1&&a.getFlags()[7]==1&&(a.getFlags()[8]=!0)}),3),a.registerAction(new n("medir_pulso","action-medir_pulso",function(){a.getFlags()[5]==1&&a.getFlags()[7]==1&&(a.getFlags()[9]=!0)}),3),a.registerAction(new n("medir_freq_respiratoria","action-medir_freq_respiratoria",function(){a.getFlags()[6]==1&&a.getFlags()[7]==1&&(a.getFlags()[10]=!0)}),3),a.registerAction(new n("Ir ao corredor","action-ir_corredor",function(){u.changeScene(1)}),4),a.registerAction(new n("abrir_gaveta","action-abrir_gaveta",function(){}),4),a.registerAction(new n("pegar_termometro","action-pegar_termometro",function(){a.getFlags()[3]==1&&(a.getFlags()[4]=!0,a.getFlags()[7]=!1)}),4),a.registerAction(new n("pegar_medidor_pressao","action-pegar_medidor_pressao",function(){a.getFlags()[3]==1&&(a.getFlags()[5]=!0,a.getFlags()[7]=!1)}),4),a.registerAction(new n("pegar_oximetro","action-pegar_oximetro",function(){a.getFlags()[3]==1&&(a.getFlags()[6]=!0,a.getFlags()[7]=!1)}),4),a.registerAction(new n("fechar_gaveta","action-fechar_gaveta",function(){}),4),a.registerInteractiveObject(new s("Falar com recepcionista","intObj-falar_com_recepcionista",function(){u.openDialog(0,0)}),0),a.registerInteractiveObject(new s("Ir para o corredor","intObj-ir_corredor_esq",function(){u.changeScene(1)}),0),a.registerInteractiveObject(new s("Ir para o corredor","intObj-ir_corredor_dir",function(){u.changeScene(1)}),0),a.registerInteractiveObject(new s("Ir para o posto de enfermagem","intObj-ir_posto_de_enfermagem",function(){u.changeScene(4)}),1),a.registerInteractiveObject(new s("Ir para a sala de leitos","intObj-ir_sala_de_leitos",function(){u.changeScene(2)}),1),e.registerLevel(a)});