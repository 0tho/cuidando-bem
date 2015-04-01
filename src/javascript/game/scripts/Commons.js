/*
 This module has every wrold variable from each game level so it can be easily loaded inside the game.
 New levels can easily be made by adding new game levels.

 @author Otho - Marcelo Lopes Lotufo
 */

define(['levelsData', 'Scene', 'Action', 'Level', 'Dialog', 'InteractiveObject', 'Flag', 'CuidandoBem', 'Character'],
    function (game, Scene, Action, Level, Dialog, InteractiveObject, Flag, core, Character) {
        console.groupCollapsed("Commons:");

        //TODO: Set css classes ("leito", "farmacia")
        var lib = {
            //region Scenes
            scenes : {
                //Default object of "recepcao"
                recepcao: new Scene("recepcao", "scene-recepcao")
                    .setCssClass("scene-lobby"),

                //Default object of "corredor"
                corredor: new Scene("corredor", "scene-corredor")
                    .setCssClass("scene-hallway"),

                //Default object of "alaMasculina"
                alaMasculina: new Scene("alaMasculina", "Ala Masculina")
                    .setCssClass("scene-maleRoom"),

                //Default object of "alaFeminina"
                alaFeminina: new Scene("alaFeminina", "Ala Feminina")
                    .setCssClass("scene-femaleRoom"),

                //Default object of "postoDeEnfermagem"
                postoDeEnfermagem: new Scene("postoDeEnfermagem", "Posto de Enfermagem")
                    .setCssClass("scene-nursingStation"),

                //Default object of "centroCirurgico"
                centroCirurgico: new Scene("centroCirurgico", "Centro Cirúrgico")
                    .setCssClass("scene-surgeryCenter"),

                //Default object of "farmacia"
                farmacia: new Scene("farmacia", "Farmácia")
                    .setCssClass("scene-none"),

                finalDeFase: new Scene("Fim da fase", "scene-fim-level")
                    .setCssClass("scene-fim-level"),

                //Default object of "leito"
                leitos:{
                    joao: new Scene("leito", "scene-leito-char-01")
                        .setCssClass("scene-bedChar01")
                }
            },
            //endregion
            modalScenes : {

            },
            actions: {
                irCorredor: new Action("btn-ir_corredor", "Ir ao corredor")
                    .setCssClass("action-ir_corredor")
                    .onClick(function(){
                        console.log("Action: 'Ir ao corredor'");
                        core.changeScene(1);
                    })
            },
            objects: {

            },

            characters: {
                recepcionista_unknow: new Character("Recepcionista", "char-receptionist"),
                recepcionista: new Character("Clarice", "char-receptionist"),
                mentor: new Character("Mentor", "char-mentor"),
                jogador: new Character("Jogador", "char-player"),

                pacientes: {
                    joao: new Character("Sr. João", "char-paciente_01"),
                    carlos : new Character("Paciente Carlos", "char-paciente-02")
                }


            }
        };
        console.groupEnd();
        return lib;
    });