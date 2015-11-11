

define(['levelsData', 'Scene', 'Action', 'Level', 'Dialog', 'InteractiveObject', 'Flag', 'CuidandoBem', 'Commons', 'Pulseira', 'Prontuario', 'FreqRespiratoria', 'Scores_data'],
    function (game, Scene, Action, Level, Dialog, InteractiveObject, Flag, core, lib, Pulseira, Prontuario, FreqRespiratoria, Scores) {

        //region Imports
        var Dialogs = require("Dialogs_data").fase3;
        // var Scores = require("Scores_data").fase3;
        //endregion

        var level = new Level("Level 3");
        console.groupCollapsed(level.getName());
    
    
        var
        recepcao,
        corredor,
        alaFeminina,
        centroCirurgico,
        sala_de_leitos,
        leito,
        posto_de_enfermagem,
        farmacia,
        gaveta,
        pulseira,
        prontuario,
        zoom;
    


        //region Scenes

        //region Recepcao
    
    
          var recepcao = lib.scenes.recepcao.getClone()
            .onLoad(function () {
                console.log("Load scene: " + recepcao.getName());
                core.openDialog(0);
                level.getFlag("conversar_recepcionista").setValue(true);
            });
    
         function recepcaoIrCorredor() {
            console.log("Funcao: recepcao_ir_corredor");
            if ( level.getFlag("conversar_recepcionista").getValue() == true ) {  // wont check for flags
                core.closeDialog();
                core.changeScene(1);
                console.log("Ir para o corredor");
            } else {
                console.log("Necessita ação: conversar com a recepcionista");
            }
        }
    
    
        function conversarRecepcionista() {
            console.log("Action: Conversar com a recepcionista");
            core.openDialog(0);
        }
    

      

        recepcao.registerDialogs([
            // Dialog 0
            new Dialog(lib.characters.recepcionista)
                .setText(Dialogs.recepcao[0])
                .registerOption("", function(){
                    core.closeDialog();
                })
        ]);
    
    
         recepcao.registerInteractiveObjects([
            new InteractiveObject("intObj-conversar_recepcionista", "Conversar com a Recepcionista")
                .setCssClass("intObj-talkToReceptionist")
                .setVisibility(true)
                .onClick(conversarRecepcionista),


            new InteractiveObject("io-ir_corredor_esquerda", "Ir ao corredor")
                .setCssClass("intObj-lobbyToHallway-left")
                .onClick(recepcaoIrCorredor)
                .setVisibility(true),


            new InteractiveObject("io-ir_corredor_direita", "Ir ao corredor")
                .setCssClass("intObj-lobbyToHallway-right")
                .onClick(recepcaoIrCorredor)
                .setVisibility(true)
        ]);
    
    
       //Corredor
    
    
        corredor = lib.scenes.corredor.getClone()
            .onLoad(function () {
                console.log("Entrando no corredor");
                if(level.getFlag("conversar_mentor").getValue() == false){
                    level.getFlag("conversar_mentor").setValue(true);
                    core.openDialog(0);
                }else if(level.getFlag("testar_equipamentos").getValue() == true && level.getFlag("conversar_mentor2").getValue() == false){
                    core.openDialog(5);
                }
            })
            .onUnload(function (){
                console.log("Saindo do corredor");
            });
    
    
            // DIALOGOS
    
        corredor.registerDialogs([
            //Primeira passada pelo corredor
            
            // 0
            new Dialog(lib.characters.mentor)
                .setText(Dialogs.corredor.fala1[0])
                .registerOption("", function(){
                    level.getFlag("conversar_mentor").setValue(true);
                    core.openDialog(1);
                }),
            
            //1 
             new Dialog(lib.characters.jogador)
                .setText("")
                .registerOption(Dialogs.corredor.fala1[1], function(){
                    core.openDialog(4);
                })
                .registerOption(Dialogs.corredor.fala1[2], function(){
                    core.openDialog(3);
                })
                .registerOption(Dialogs.corredor.fala1[3], function(){
                    core.openDialog(2);
                })
                .setRandomize(true),
                        
                        
            // 2 Mentor Corrige
            new Dialog(lib.characters.mentor)
                .setText(Dialogs.corredor.fala1[6])
                .registerOption("", function(){
                    core.openDialog(1);
                }),
            // 3 Mentor Corrige
            new Dialog(lib.characters.mentor)
                .setText(Dialogs.corredor.fala1[5])
                .registerOption("", function(){
                    core.openDialog(1);
                }),
            // 4 Mentor fala
            new Dialog(lib.characters.mentor)
                .setText(Dialogs.corredor.fala1[4])
                .registerOption("", function(){
                    core.closeDialog();
                }),
                    
            
            //Segunda passada pelo corredor
                     
                        
                //5       
              new Dialog(lib.characters.jogador)
                .setText(Dialogs.corredor.fala2[0])
                .registerOption("", function(){
                    level.getFlag("conversar_mentor2").setValue(true);
                    core.closeDialog();
                }),
                        
                        
            //6 
                new Dialog(lib.characters.mentor)
                    .setText(Dialogs.corredor.fala2[1])
                    .registerOption("", function(){
                        level.getFlag("conversar_mentor2").setValue(true);
                        core.closeDialog();
                    })
                      
             ]);
    
    
           
      //FUNCOES
    
    
      function corredorIrCentroCirurgico() {
            console.log("Action: corredorIrCentroCirurgico");
            if(level.getFlag("ir_corredor_centro_cirurgico").getValue() == false){
                 level.getFlag("ir_corredor_centro_cirurgico").setValue(true);
                 core.changeScene(2);
                 
            }
          else {
                 //core.registerScoreItem(Scores.irPostoEnfermagem_horaErrada);
                   // core.changeScene(2);  corrigir
                   }          
            }
        
    
       function corredorIrAlaFeminina() {
            console.log("Action: corredorIrAlaFeminina");
            if(level.getFlag("testar_equipamentos").getValue() == false){
                   // level.getFlag("ir_corredor_ala_feminina").setValue(true);
                     //core.registerScoreItem(Scores.irPostoEnfermagem_horaErrada);
                    core.changeScene(3);
            }
            else  {
                    level.getFlag("ir_corredor_ala_feminina").setValue(true);
                     core.changeScene(3);
            }
        }
    
    
          function corredorIrFarmacia() {
            console.log("Action: corredorIrFarmaciaHoraErrada");
            if(level.getFlag("ir_corredor_farmacia_hora_errada").getValue() == false){
                //    level.getFlag("ir_corredor_farmacia_hora_errada").setValue(true);
                    //core.registerScoreItem(Scores.irPostoEnfermagem_horaErrada);
                    core.changeScene(5);
                
            }
       
        }
    
    
          function corredorIrPostoEnfermagem() {
            console.log("Action: corredorIrPostoEnfermagem");
            if(level.getFlag("ir_corredor_posto_enfermagem_hora_errada").getValue() == false){
                //level.getFlag("ir_corredor_posto_enfermagem_hora_errada").setValue(true);
                  //core.registerScoreItem(Scores.irPostoEnfermagem_horaErrada);
                 core.changeScene(6);             
            } //,
                
          }
    
    
    
    // FALTA CHECAR FUNCOES E SCORES
    
    
    
    //OBJETOS INTERATIVOS
    
          corredor.registerInteractiveObjects([
            new InteractiveObject("io-ir_centro_cirurgico","Ir para o Centro Cirurgico")
                .setCssClass("intObj-goToBedroom")   //arrumar
                .onClick(corredorIrCentroCirurgico)      
                .setVisibility(true),
              
                ]);
              
    
               corredor.registerInteractiveObjects([
            new InteractiveObject("io-ir_farmacia","Ir para a Farmacia")
                .setCssClass("intObj-goToBedroom")   //arrumar
                .onClick(corredorIrFarmacia)        
                .setVisibility(true),
                   
                     ]);
                   
    
    
                    corredor.registerInteractiveObjects([
            new InteractiveObject("io-ir_posto_enfermagem","Ir para o Posto de Enfermagem")
                .setCssClass("intObj-goToBedroom")   //arrumar
                .onClick(corredorIrPostoEnfermagem)    
                .setVisibility(true),
                          ]);
                        
    
    
                    corredor.registerInteractiveObjects([
            new InteractiveObject("io-ir_ala_feminina","Ir para a ala Feminina")
                .setCssClass("intObj-goToBedroom")   //arrumar
                .onClick(corredorIrAlaFeminina)
                .setVisibility(true)
                        
    ]);
    
    
    
    // Centro Cirurgico
                        
                        
 var centroCirurgico = lib.scenes.centroCirurgico.getClone()  //corrigir imagem
        .onLoad(function () {
            console.log("Load scene: " + centroCirurgico.getName());
            core.openDialog(0);
        });
    /*
    
    
        centroCirurgico.registerDialogs([
            
            
            //primeira passada pelo centro cirurgico
            
            // 0 - Aline fala
            new Dialog(lib.characters.mentor)
                .setText(Dialogs.centroCirurgico.fala1[0])
                .registerOption("", function(){
                    level.getFlag("conversar_aline").setValue(true);
                    core.openDialog(1);
                }),
            
              // 1 Jogador responde
            new Dialog(lib.characters.jogador)
                .setText("")
                .registerOption(Dialogs.centroCirurgico.fala1[1], function(){
                    core.closeDialog(); 
                })
                .registerOption(Dialogs.centroCirurgico.fala1[2], function(){
                    core.openDialog(2);
                })
                .registerOption(Dialogs.centroCirurgico.fala1[3], function(){
                    core.openDialog(3);
                })
                .setRandomize(true),
            
            // 2 op errada1
                new Dialog(lib.characters.mentor)
                .setText(Dialogs.centroCirurgico.fala1[5])
                .registerOption("", function(){
                    core.openDialog(1);
                }),
            
            //3 op errada2
            
                 new Dialog(lib.characters.mentor)
                    .setText(Dialogs.centroCirurgico.fala1[6])
                     .registerOption("", function(){
                        core.openDialog(1);
                }),
            
            // 4  jogador
            
                new Dialog(lib.characters.jogador)
                      .setText(Dialogs.centroCirurgico.fala1[6])
                      .registerOption("", function(){
                        core.closeDialog();
                }),
                           
                // segunda passada pelo centro cirurgico
                           
            // 5
                           
                 new Dialog(lib.characters.mentor)
                    .setText(Dialogs.centroCirurgico.fala2[0])
                    .registerOption("", function(){
                        core.openDialog(1);
                }),
                            
            // 6 jogador escolhe
                            
                 new Dialog(lib.characters.jogador)
                .setText("")
                .registerOption(Dialogs.centroCirurgico.fala2[1], function(){
                    core.closeDialog(); 
                })
                .registerOption(Dialogs.centroCirurgico.fala2[2], function(){
                    core.openDialog(20);
                })
                .registerOption(Dialogs.centroCirurgico.fala2[3], function(){
                    core.openDialog(21);
                })
                .setRandomize(true),
                            
            
                            
            //7  jogador
                            
                 new Dialog(lib.characters.jogador)
                    .setText(Dialogs.centroCirurgico.fala2[4])
                    .registerOption("", function(){
                        core.openDialog(8);
                         }),
                           
            
            // 8  paciente
                
                new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[5])
                    .registerOption("", function(){
                        core.openDialog(9);
                     }),
                    
             //9  jogador
                            
                 new Dialog(lib.characters.jogador)
                    .setText(Dialogs.centroCirurgico.fala2[6])
                    .registerOption("", function(){
                        core.openDialog(10);
                      }),
                           
            
            //10  paciente
                
                new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[7])
                    .registerOption("", function(){
                        core.openDialog(11);
                     }),
                    
            //11  jogador
                            
                 new Dialog(lib.characters.jogador)
                    .setText(Dialogs.centroCirurgico.fala2[8])
                    .registerOption("", function(){
                        core.openDialog(12);
                      }),
                           
            
            //12  paciente
                
                new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[9])
                    .registerOption("", function(){
                        core.openDialog(13);
                     }),
    
                    
            //13  jogador
                            
                 new Dialog(lib.characters.jogador)
                    .setText(Dialogs.centroCirurgico.fala2[10])
                    .registerOption("", function(){
                        core.openDialog(14);
                      }),
                           
            
            //14  paciente
                
                new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[11])
                    .registerOption("", function(){
                        core.openDialog(15);
                     }),
    
                    
             //15  jogador
                            
                 new Dialog(lib.characters.jogador)
                    .setText(Dialogs.centroCirurgico.fala2[12])
                    .registerOption("", function(){
                        core.openDialog(16);
                      }),
                           
            
            //16  paciente
                
                new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[13])
                    .registerOption("", function(){
                        core.openDialog(17);
                     }),
                    
             //17  jogador
                            
                 new Dialog(lib.characters.jogador)
                    .setText(Dialogs.centroCirurgico.fala2[14])
                    .registerOption("", function(){
                        core.openDialog(18);
                      }),
                           
            
            //18  paciente
                
                new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[15])
                    .registerOption("", function(){
                        core.openDialog(19);
                     }),
                    
            // 19 jogador op
                                                   
                 new Dialog(lib.characters.jogador)
                     .setText("")
                .registerOption(Dialogs.centroCirurgico.fala2[1], function(){
                    core.closeDialog(); 
                })
                .registerOption(Dialogs.centroCirurgico.fala2[2], function(){
                    core.openDialog(5);
                })
                .registerOption(Dialogs.centroCirurgico.fala2[3], function(){
                    core.openDialog(5);
                })
                .setRandomize(true),
                     
                     
            //20 op2 - primeira parte
                 new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[19])
                    .registerOption("", function(){
                        core.openDialog(6);   
                      }),
                     
            //21 op3 - primeira parte
                     //20 op2 - primeira parte
                 new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[20])
                    .registerOption("", function(){
                        core.openDialog(6); 
                      }),
                     
            //22 op2 - segunda parte
                 new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[21])
                    .registerOption("", function(){
                        core.openDialog(19); 
                      }),
                     
            //23 op3 - segunda parte
                 new Dialog(lib.characters.paciente)
                    .setText(Dialogs.centroCirurgico.fala2[22])
                    .registerOption("", function(){
                        core.openDialog(19); 
                      }),
                    
    
       ]);
                   
                   
            // FUNCOES
                   
                    function centroCirurgicoIrCorredor() {
            console.log("Action: centroCirurgicoIrCorredor");
            if(level.getFlag("testar_equipamentos").getValue() == false){
                //aviso de caminho errado
               // core.openDialog(10);
                if(level.getFlag("score_ir_corredor_hora_errada").getValue() == false) {
                //    core.registerScoreItem(Scores.irPostoEnfermagem_horaErrada);
                    level.getFlag("score_ir_corredor_hora_errada").setValue(true);
                }
            }else{
                //va para o corredor
                core.changeScene(1);
            }
        }
         
                   
       // OBJETOS INTERATIVOS
             
             
                
                  */ 
                   
        // ala feminina    
   
            var alaFeminina = lib.scenes.alaFeminina.getClone()
            .onLoad(function () {
                console.log("Load scene: " + alaFeminina.getName());
                //
            });
    
           
    
         var farmacia = lib.scenes.farmacia.getClone()
            .onLoad(function () {
                console.log("Load scene: " + farmacia.getName());
                //
            });
    
    
         var posto_de_enfermagem = lib.scenes.postoDeEnfermagem.getClone()
            .onLoad(function () {
                console.log("Load scene: " + posto_de_enfermagem.getName());
                //
            });
     
     
    
      var leito = lib.scenes.leitos.char2.getClone()
            .onLoad(function () {
                console.log("Load scene: " + leito.getName());
                //
            });
    
    
     
     

    

        //endregion

        //endregion

        //region ModalScenes

        //endregion

        //region Level

        //region Register Scenes

        level.registerScene(recepcao);  // id 0
        level.registerScene(corredor);  // id 1
        level.registerScene(centroCirurgico); // id 2
        level.registerScene(alaFeminina); // id 3
        level.registerScene(leito); // id 4
        level.registerScene(farmacia); // id 5
        level.registerScene(posto_de_enfermagem); // id 6

        // endregion

        //region Register Modal Scenes

        //endregion

        //region Flags
    
    
    
    
       level.setSetupScript(function(){

            level.getFlag("conversar_recepcionista").setValue(false);
           
            });
    
    
    
    
     level.registerFlag(new Flag("conversar_recepcionista"), false);

        //endregion

        level.setSetupScript(function () {
            //Script that runs once when the level is loaded or reloaded
        });

        level.setInitialScene(0);
        //endregion

        game.registerLevel(level, 3);

        console.groupEnd();

              
              
}
     );