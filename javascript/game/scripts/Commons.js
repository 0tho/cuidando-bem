define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Character"],function(e,t,n,r,i,s,o,u,a){var f={scenes:{recepcao:(new t("recepcao","scene-recepcao")).setCssClass("scene-lobby"),corredor:(new t("corredor","scene-corredor")).setCssClass("scene-hallway"),alaMasculina:(new t("alaMasculina","Ala Masculina")).setCssClass("scene-maleRoom"),alaFeminina:(new t("alaFeminina","Ala Feminina")).setCssClass("scene-femaleRoom"),postoDeEnfermagem:(new t("postoDeEnfermagem","Posto de Enfermagem")).setCssClass("scene-nursingStation"),centroCirurgico:(new t("centroCirurgico","Centro Cirúrgico")).setCssClass("scene-surgeryCenter"),farmacia:(new t("farmacia","Farmácia")).setCssClass("scene-none"),finalDeFase:(new t("Fim da fase","scene-fim-level")).setCssClass("scene-fim-level"),leitos:{joao:(new t("leito","scene-leito-char-01")).setCssClass("scene-bedChar01"),char2:(new t("leito","scene-leito-char-02")).setCssClass("scene-bedChar02")}},modalScenes:{},actions:{irCorredor:(new n("btn-ir_corredor","Ir ao corredor")).setCssClass("action-ir_corredor").onClick(function(){u.changeScene(1)})},objects:{},characters:{recepcionista_unknow:new a("Recepcionista","char-receptionist"),recepcionista:new a("Clarice","char-receptionist"),mentor:new a("Mentor","char-mentor"),jogador:new a("Jogador","char-player"),pacientes:{joao:new a("Sr. João","char-paciente_01"),carlos:new a("Paciente Carlos","char-paciente-02"),raul_unknow:new a("Paciente","char-paciente-03"),raul:new a("Paciente Raul","char-paciente-03")}}};return f});