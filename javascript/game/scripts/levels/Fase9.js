define(["levelsData","Scene","Action","Level","Dialog","InteractiveObject","Flag","CuidandoBem","Commons","Pulseira","Prontuario","FreqRespiratoria","Scores_data"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){var p=require("Dialogs_data").fase3,d=new r("Level 9");console.groupCollapsed(d.getName());var v=a.scenes.recepcao.getClone().onLoad(function(){console.log("Load scene: "+v.getName()),u.openDialog(0)});v.registerDialogs([(new i(a.characters.recepcionista)).setText("Essa fase ainda está em construção, por favor volte mais tarde.").registerOption("",function(){u.goBackToMenu()})]),d.registerScene(v),d.setSetupScript(function(){}),d.setInitialScene(0),e.registerLevel(d,9),console.groupEnd()});