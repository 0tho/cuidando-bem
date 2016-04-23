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

define([ "levelsData", "Scene", "Action", "Level", "Dialog", "InteractiveObject", "Flag", "CuidandoBem", "Commons", "Pulseira", "Prontuario", "FreqRespiratoria", "ScoresData" ],
    function( game, Scene, Action, Level, Dialog, InteractiveObject, Flag, core, lib, Pulseira, Prontuario, FreqRespiratoria, Scores ) {

        var Dialogs = require("DialogsData").fase1;
        var Alertas = require("DialogsData").alertas;
        var Player = require("Player");
        Scores = Scores.level1;

        var level = new Level("Level 1");
        console.groupCollapsed( level.getName() );

        // Scenes

        var recepcao,
            corredor,
            alaMasculina,
            salaDeLeitos,
            leito,
            postoDeEnfermagem,
            gaveta,
            pulseira,
            prontuario,
            zoom;


        function recepcaoIrCorredor() {
            console.log("Funcao: recepcao_ir_corredor");
            if ( core.flag("conversar_recepcionista") == true ) {
                core.closeDialog();
                core.changeScene( 1 );
                console.log("Ir para o corredor");
            } else {
                console.log("Necessita ação: conversar com a recepcionista");
            }
        }

        function conversarRecepcionista() {
            console.log("Action: Conversar com a recepcionista");
            core.openDialog( 0 );
        }

        recepcao = lib.scenes.recepcao.getClone()
            .onLoad(function() {
                console.log("Load scene: " + recepcao.getName() );
                core.openDialog( 0 );
            });

        recepcao.registerDialogs([
            new Dialog( lib.characters.recepcionista )
                .setText( Dialogs.recepcao[ 0 ] )
                .registerOption("", function() {
                    core.flag("conversar_recepcionista",  true );
                    core.openDialog( 1 );
                }),
            new Dialog( lib.characters.jogador )
                .setText( Dialogs.recepcao[ 1 ] )
                .registerOption("", function() {
                    core.closeDialog();
                })
        ]);

        recepcao.registerInteractiveObjects([
            new InteractiveObject("intObj-conversar_recepcionista", "Conversar com a Recepcionista")
                .setCssClass("intObj-talkToReceptionist")
                .setVisibility( true )
                .onClick( conversarRecepcionista ),


            new InteractiveObject("io-ir_corredor_esquerda", "Ir ao corredor")
                .setCssClass("intObj-lobbyToHallway-left no-glow")
                .onClick( recepcaoIrCorredor )
                .setVisibility( true ),


            new InteractiveObject("io-ir_corredor_direita", "Ir ao corredor")
                .setCssClass("intObj-lobbyToHallway-right no-glow")
                .onClick( recepcaoIrCorredor )
                .setVisibility( true )
        ]);

        // Corredor
        corredor = lib.scenes.corredor.getClone()
            .onLoad(function() {
                console.log("Entrando no corredor");
                Player.stopAll();
                Player.playInLoop( Player.audios.loops.recepcao );
                if ( core.flag("conversar_mentor") == false ) {
                    core.flag("conversar_mentor",  true );
                    core.openDialog( 0 );
                } else if ( core.flag("examinar_paciente").getValue() == true && core.getFlag("conversar_mentor2") == false ) {
                    core.openDialog( 2 );
                }
            })
            .onUnload(function() {
                console.log("Saindo do corredor");
                Player.stopAll();
                Player.playInRange( Player.audios.musics.inGame );
            });

        corredor.registerDialogs([
            // Primeira passada pelo corredor
            // 0
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala1[ 0 ] )
                .registerOption("", function() {
                    core.flag("conversar_mentor",  true );
                    core.openDialog( 1 );
                }),
            // 1
            new Dialog( lib.characters.jogador )
                .setText( Dialogs.corredor.fala1[ 1 ] )
                .registerOption("", function() {
                    core.closeDialog();
                }),
            // Segunda passada pelo corredor
            // 2 Mentor fala
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala2[ 0 ] )
                .registerOption("", function() {
                    core.openDialog( 3 );
                }),
            // 3 Jogador responde
            new Dialog( lib.characters.jogador )
                .setText("")
                .registerOption( Dialogs.corredor.fala2[ 1 ], function() {
                    core.openDialog( 6 );
                })
                .registerOption( Dialogs.corredor.fala2[ 2 ], function() {
                    core.openDialog( 4 );
                })
                .registerOption( Dialogs.corredor.fala2[ 4 ], function() {
                    core.openDialog( 5 );
                })
                .setRandomize( true ),
            // 4 Mentor Corrige
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala2[ 3 ] )
                .registerOption("", function() {
                    core.openDialog( 3 );
                }),
            // 5 Mentor Corrige
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala2[ 5 ] )
                .registerOption("", function() {
                    core.openDialog( 3 );
                }),
            // 6 Mentor fala
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala2[ 6 ] )
                .registerOption("", function() {
                    core.openDialog( 7 );
                }),
            // 7 Jogador responde
            new Dialog( lib.characters.jogador )
                .setText("")
                .registerOption( Dialogs.corredor.fala2[ 7 ], function() {
                    core.closeDialog();
                    core.openCommandBar();
                    core.flag("conversar_mentor2",  true );

                    if ( core.flag("score_falar_com_mentor") == false ) {
                        core.registerScoreItem( Scores.falarComMentorApos );
                        core.flag("score_falar_com_mentor",  true );
                    }
                })
                .registerOption( Dialogs.corredor.fala2[ 8 ], function() {
                    core.openDialog( 8 );
                })
                .registerOption( Dialogs.corredor.fala2[ 10 ], function() {
                    core.openDialog( 9 );
                })
                .setRandomize( true ),
            // 8 Mentor Corrige
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala2[ 9 ] )
                .registerOption("", function() {
                    core.openDialog( 7 );
                }),
            // 9 Mentor Corrige
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.corredor.fala2[ 11 ] )
                .registerOption("", function() {
                    core.openDialog( 7 );
                }),
            // 10 Mentor Ação errada: Ir ao posto de enfermagem
            new Dialog( lib.characters.mentor )
                .setText( Alertas.enfermariaMasculina )
                .registerOption("", function() {
                    core.closeDialog();
                }),
            // 11 - Mentor Ação errada "Você deveria estar indo para o posto de enfermagem"
            new Dialog( lib.characters.mentor )
                .setText( Alertas.perdido.enfermagem[ 0 ] )
                .registerOption("", function() {
                    core.closeDialog();
                })
        ]);

        function corredorIrPostoEnfermagem() {
            console.log("Action: corredorIrPostoEnfermagem");
            if ( core.flag("examinar_paciente") == false ) {
                // aviso de caminho errado
                core.openDialog( 10 );
                if ( core.flag("score_ir_posto_hora_errada") == false ) {
                    core.registerScoreItem( Scores.irPostoEnfermagemHoraErrada );
                    core.flag("score_ir_posto_hora_errada",  true );
                }
            } else {
                // va para posto de enfermagem
                core.changeScene( 4 );
            }
        }

        function corredorIrSalaLeitos() {
            if ( core.flag("conversar_mentor") == true ) {
                if ( core.flag("examinar_paciente") == false ) {
                    core.changeScene( 2 );
                } else {
                    if ( core.flag("coxim") == true ) {
                        core.changeScene( 2 );
                    } else {
                        core.openDialog( 11 );
                    }
                }
                console.log("Action: corredorIrSalaLeitos");
            } else {
                console.log("Necessita ação: falar com mentor");
            }
        }

        corredor.registerInteractiveObjects([
            new InteractiveObject("io-ir_sala_leitos", "Ir para a sala de Leitos Masculino")
                .setCssClass("intObj-goToBedroom")
                .onClick( corredorIrSalaLeitos )
                .setVisibility( true ),

            new InteractiveObject("io-ir_posto_enfermagem", "Ir para o Posto de Enfermagem")
                .setCssClass("intObj-goToNursingStation")
                .onClick( corredorIrPostoEnfermagem )
                .setVisibility( true ),

            new InteractiveObject("io-conversar_mentor", "Conversar com Mentor")
                .setCssClass("intObj-talkToMentor")
                .onClick(function() {
                    core.closeCommandBar();
                    console.log("Abrir diálogo com o mentor");
                    if ( core.flag("examinar_paciente") == false ) {
                        core.flag("conversar_mentor",  true );
                        core.openDialog( 0 );
                    } else if ( core.flag("examinar_paciente") == true ) {
                        core.openDialog( 2 );
                    }
                })
                .setVisibility( true )
        ]);

        // Sala de leitos
        salaDeLeitos = new Scene("salaDeLeitos", "scene-salaDeLeitos")
            .setCssClass("scene-bedroom-level1")
            .onLoad(function() {
                console.log("Entrando na sala de leitos");
                if ( core.flag("colocou_coxim") == true ) {
                    core.setActionVisible("btn-ler_prontuario", true );
                }
                core.openCommandBar();
            })
            .onUnload(function() {
                console.log("Saindo da sala de leitos");
                core.closeCommandBar();
            });

        salaDeLeitos.registerInteractiveObjects([
            new InteractiveObject("io-ir_leito", "Ir ao leito")
                .setCssClass("intObj-ir_leito-fase1")
                .onClick(function() {
                    if ( core.flag("lavarMaos") == false ) {
                        // Mentor corrige
                        core.openDialog( 0 );
                    } else {
                        // Va para leito
                        core.changeScene( 3 );
                    }
                })
                .setVisibility( true ),

            new InteractiveObject("io-ir_corredor", "Ir ao Corredor")
                .setCssClass("intObj-bedroomToHallway")
                .onClick(function() {
                    if ( core.flag("foi_ao_leito") == false ) {
                        core.changeScene( 1 );
                    } else {
                        if ( core.flag("lavar_maos2") == true ) {
                            core.changeScene( 1 );
                        } else {
                            core.openDialog( 1 );
                        }
                    }
                })
                .setVisibility( true )
        ]);

        salaDeLeitos.registerActions([
            new Action("btn-lavarMaos", "Lavar as mãos")
                .setCssClass("action-lavarMaos")
                .onClick(function() {
                    // Som
                    Player.play( Player.audios.sfx.lavarMaos );
                    if ( core.flag("lavarMaos") == false ) {
                        console.log("Action: lavarMaos");
                        core.flag("lavarMaos",  true );

                        if ( core.flag("score_lavar_maos_antes_exame") == false ) {
                            core.registerScoreItem( Scores.lavarMaosAntes );
                            core.flag("score_lavar_maos_antes_exame",  true );
                        }
                        // core.setInteractiveObjectVisible("io-ir_leito", true);
                    } else if ( core.flag("lavar_maos2").getValue() == false && core.getFlag("examinar_paciente") == true ) {
                        console.log("Action: lavar_maos2");
                        core.flag("lavar_maos2",  true );

                        if ( core.flag("score_lavar_maos_depois_exame") == false ) {
                            core.registerScoreItem( Scores.lavarMaosDepois );
                            core.flag("score_lavar_maos_depois_exame",  true );
                        }
                        // core.setActionVisible("ir_corredor", true);
                    } else if ( core.flag("lavar_maos3").getValue() == false && core.getFlag("colocou_coxim") == true ) {
                        console.log("Action: lavar_maos3");
                        core.flag("lavar_maos3",  true );

                        if ( core.flag("score_lavar_maos_prontuario") == false ) {
                            core.registerScoreItem( Scores.lavarMaosProntuario );
                            core.flag("score_lavar_maos_prontuario",  true );
                        }
                    }
                })
                .setVisibility( true ),
            new Action("btn-ler_prontuario", "Ler prontuario")
                .setCssClass("action-ler_prontuario")
                .onClick(function() {
                    if ( core.flag("lavar_maos3") == false ) {
                        core.openDialog( 2 );
                    } else {
                        console.log("Action: ler prontuario");
                        Prontuario.open();
                        core.openModalScene("Prontuario");
                    }
                })
                .setVisibility( false )
        ]);

        salaDeLeitos.registerDialogs([
            // 0 - Mentor
            new Dialog( lib.characters.mentor )
                .setText( Alertas.lavarMaos.tipo1 )
                .registerOption("", function() {
                    core.closeDialog();
                }),
            // 1 - Mentor
            new Dialog( lib.characters.mentor )
                .setText( Alertas.lavarMaos.tipo2 )
                .registerOption("", function() {
                    core.closeDialog();
                }),
            // 2 - Mentor: Não lavou mãos antes de pegar no prontuário
            new Dialog( lib.characters.mentor )
                .setText( Alertas.lavarMaos.tipo3 )
                .registerOption("", function() {
                    core.closeDialog();
                })
        ]);

        leito = lib.scenes.leitos.carlos.getClone()
            .onLoad(function() {
                core.openCommandBar();
                console.log("Leito: Onload");
                if ( core.flag("examinar_paciente") == false ) {
                    core.setInteractiveObjectVisible("io-pulseira_paciente", true );
                }
                if ( core.flag("conversar_mentor2") == true ) {
                    core.setActionVisible("btn-examinar_paciente", false );

                    if ( core.flag("coxim") == true ) {
                        if ( core.flag("mudar_posicao_paciente") == false ) {
                            core.setActionVisible("btn-mudar_posicao", true );
                        } else {
                            if ( core.flag("colocou_coxim") == false ) {
                                core.setActionVisible("btn-mudar_posicao", false );
                                core.setInteractiveObjectVisible("io-pulseira_paciente", false );
                                core.setActionVisible("btn-posicionar_coxim_e_travesseiro", true );
                            } else {

                            }
                        }
                    }
                }
            })
            .onUnload(function() {
                console.log("Leito: OnUnload");
                core.closeCommandBar();
            });

        leito.registerInteractiveObjects([

            new InteractiveObject("io-pulseira_paciente", "Checar pulseira do paciente")
                .setCssClass("intObj-paciente_02-checar_pulseira")
                .onClick(function() {
                    console.log("IO: pulseira_paciente");
                    core.openModalScene("pulseira");
                    Pulseira.open();
                    core.openCommandBar();
                })
                .setVisibility( true )
                .setEnable( false ),

               new InteractiveObject("io-conversar_paciente02", "Falar com o paciente")
                .setCssClass("intObj-conversar_paciente")
                .onClick(function() {

                      if ( core.flag("score_falar_paciente") == false ) {
                        core.registerScoreItem( Scores.falarComPaciente );
                        core.flag("score_falar_paciente",  true );
                    }

                    core.openDialog( 0 );
                    core.closeCommandBar();

                })
                .setVisibility( true )

        ]);


        leito.registerDialogs([
            // 0 Jogador escolhe fala
            new Dialog( lib.characters.jogador )
                .setText("")
                .registerOption( Dialogs.enfermaria[ 0 ], function() {
                    core.openDialog( 3 );
                })
                .registerOption( Dialogs.enfermaria[ 1 ], function() {
                    core.openDialog( 1 );
                })
                .registerOption( Dialogs.enfermaria[ 3 ], function() {
                    core.openDialog( 2 );
                })
                .setRandomize( true ),
            // 1 Mentor corrige
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.enfermaria[ 2 ] )
                .registerOption("", function() {
                    core.openDialog( 0 );
                }),
            // 2
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.enfermaria[ 4 ] )
                .registerOption("", function() {
                    core.openDialog( 0 );
                }),
            // 3 Paciente Fala
            new Dialog( lib.characters.pacientes.carlos )
                .setText( Dialogs.enfermaria[ 5 ] )
                .registerOption("", function() {
                    core.openDialog( 4 );
                }),
            // 4 Jogador responde
            new Dialog( lib.characters.jogador )
                .setText("")
                .registerOption( Dialogs.enfermaria[ 6 ], function() {
                    core.openDialog( 7 );
                })
                .registerOption( Dialogs.enfermaria[ 7 ], function() {
                    core.openDialog( 5 );
                })
                .registerOption( Dialogs.enfermaria[ 9 ], function() {
                    core.openDialog( 6 );
                })
                .setRandomize( true ),
            // 5 Mentor Corrige
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.enfermaria[ 8 ] )
                .registerOption("", function() {
                    core.openDialog( 4 );
                }),
            // 6
            new Dialog( lib.characters.mentor )
                .setText( Dialogs.enfermaria[ 10 ] )
                .registerOption("", function() {
                    core.openDialog( 4 );
                }),
            // 7
            new Dialog( lib.characters.pacientes.carlos )
                .setText( Dialogs.enfermaria[ 11 ] )
                .registerOption("", function() {
                    core.openDialog( 10 );
                }),
            // 8
            new Dialog( lib.characters.jogador )
                .setText( Dialogs.perguntarNome )
                .registerOption("", function() {
                    core.openDialog( 9 );
                }),
            // 9
            new Dialog( lib.characters.pacientes.carlos )
                .setText( Dialogs.enfermaria[ 11 ] )
                .registerOption("", function() {
                    core.openCommandBar();
                    core.closeDialog();
                }),
            // 10
            new Dialog( lib.characters.jogador )
                .setText( Dialogs.enfermaria[ 12 ] )
                .registerOption("", function() {
                    core.openCommandBar();
                    core.closeDialog();
                    // debugger;
                    // core.setActionVisible("btn-examinar_paciente", true);
                    level.getFlag("conversarPaciente").setValue( true );
                    core.enableInteractiveObject("io-pulseira_paciente", true );
                    core.setActionVisible("btn-ir_sala_leitos", true );
                    // core.setActionVisible("btn-perguntar_nome", true);
                    // core.setActionVisible("btn-falarPaciente", false );
                })
        ]);

        leito.registerActions([
            new Action("btn-examinar_paciente", "Inspecionar Pele")
                .setCssClass("action-examinar_paciente")
                .onClick(function() {
                    console.log("Action: btn-examinar_paciente");
                    Player.play( Player.audios.sfx.objeto );
                    core.openModalScene("zoomChar2");
                    core.flag("examinar_paciente",  true );
                    core.setActionVisible("btn-ir_sala_leitos", true );
                })
                .setVisibility( false ),

         /*
            new Action("btn-falarPaciente", "Conversar com Paciente")
                .setCssClass("action-leito-char-02")
                .onClick(function() {
                    console.log("Action: btn-conversarPaciente");


                })
                .setVisibility( true ),

            */


            new Action("btn-perguntar_nome", "Perguntar nome do paciente")
                .setCssClass("action-leito-char-02")
                .onClick(function() {
                    console.log("Action: btn-perguntar_nome");
                    core.closeCommandBar();
                    core.openDialog( 8 );
                })
                .setVisibility( false ),
            new Action("btn-ir_sala_leitos", "Ir para sala de leitos")
                .setCssClass("action-ir_sala_de_leitos")
                .onClick(function() {
                    if ( core.flag("examinar_paciente") ) {
                        core.disableInteractiveObject("io-pulseira_paciente");
                    }
                    core.changeScene( 2 );
                })
                .setVisibility( false ),
            new Action("btn-mudar_posicao", "Mudar posição do paciente")
                .setCssClass("action-mudar_posicao_paciente")
                .onClick(function() {
                    core.changeSceneCssClassTo("scene-bedChar02-turned");
                    core.setActionVisible("btn-mudar_posicao", false );
                    core.setInteractiveObjectVisible("io-pulseira_paciente", false );
                    core.setActionVisible("btn-posicionar_coxim_e_travesseiro", true );
                    core.flag("mudar_posicao_paciente",  true );
                })
                .setVisibility( false ),
            new Action("btn-posicionar_coxim_e_travesseiro", "Posicionar coxim e travesseiro")
                .setCssClass("action-posicionar_coxim")
                .onClick(function() {
                    core.changeSceneCssClassTo("scene-bedChar02-cushion");
                    core.setActionVisible("btn-posicionar_coxim_e_travesseiro", false );
                    core.flag("colocou_coxim",  true );
                })
                .setVisibility( false )
        ]);

        postoDeEnfermagem = lib.scenes.postoDeEnfermagem.getClone()
            .onLoad(function() {
                core.openCommandBar();
            })
            .onUnload(function() {
                core.closeCommandBar();
            });

        postoDeEnfermagem.registerActions([
            new Action("btn-ir_corredor", "Ir ao corredor")
                .setCssClass("action-ir_corredor")
                .onClick(function() {
                    console.log("Action: ir_corredor");
                    if ( core.flag("coxim") == true ) {
                        core.changeScene( 1 );
                    } else {
                        core.openDialog( 0 );
                    }
                })
                .setVisibility( true )
        ]);

        postoDeEnfermagem.registerInteractiveObjects([
            new InteractiveObject("io-abrirGaveta", "Abrir gaveta")
                .setCssClass("intObj-openDrawer")
                .onClick(function() {
                    if ( level.getFlag("pegou_bandeja").getValue() != true ) {
                        core.openDialog( 1 );
                    } else {
                        console.log("Action: abrirGaveta");
                        // Som
                        Player.play( Player.audios.sfx.abrirGaveta );
                        core.openModalScene("gaveta");
                        core.openCommandBar();

                        core.setInteractiveObjectVisible("io-coxim", !(core.flag("coxim")) );
                    }
                })
                .setVisibility( true ),

            // Bandeja
            new InteractiveObject("io-pegar_bandeja", "Pegar bandeja")
                .setCssClass("intObj-bandeja")
                .onClick(function() {
                    console.log("Action: Pegar bandeja");
                    // Som
                    Player.play( Player.audios.sfx.pegarObjeto );
                    core.flag("pegou_bandeja",  true );
                    core.setInteractiveObjectVisible("io-pegar_bandeja", false );
                })
                .setVisibility( true )
        ]);

        postoDeEnfermagem.registerDialogs([
            // 0 - Mentor: Esqueceu coxim
            new Dialog( lib.characters.mentor )
                .setText( Alertas.esqueceu.coxim )
                .registerOption("", function() {
                    core.closeDialog();
                }),
            // Dialog 1 - Não pegou bandeja
            new Dialog( lib.characters.mentor )
                .setText( Alertas.esqueceu.pegarBandeja )
                .registerOption("", function() {
                    core.closeDialog();
                })
        ]);


        // Modal scenes

        zoom = new Scene("zoomChar2", "Examinando paciente")
            .setCssClass("modalScene-zoom-char2");

        zoom.registerActions([
            new Action("btn-fechar_zoom", "Finalizar Inspeção")
                .setCssClass("action-terminar_exame")
                .onClick(function() {
                    console.log("Action: Terminar Exame");
                    core.closeModalScene("zoomChar2");
                    core.setActionVisible("btn-ir_sala_leitos", true );

                    if ( core.flag("score_examinar_paciente") == false ) {
                        core.registerScoreItem( Scores.examinarPaciente );
                        core.flag("score_examinar_paciente",  true );
                    }
                })
        ]);

        pulseira = new Scene("pulseira", "pulseira");

        pulseira.registerInteractiveObjects([]);

        pulseira.registerActions([
            new Action("btn-largar_pulseira", "Fechar pulseira")
                .setCssClass("action-pulseira_paciente")
                .onClick(function() {
                    console.log("Ação: Fechar modal pulseira");
                    core.closeModalScene("Pulseira");
                    if ( core.flag("confirmou_pulseira").getValue() == false && core.getFlag("conversarPaciente") == true ) {
                        core.flag("confirmou_pulseira",  true );
                        core.setActionVisible("btn-examinar_paciente", true );

                        if ( core.flag("score_verificar_pulseira") == false ) {
                            core.registerScoreItem( Scores.verificarPulseira );
                            core.flag("score_verificar_pulseira",  true );
                        }
                    }

                    Pulseira.close();
                })
                .setVisibility( true )
        ]);

        gaveta = new Scene("gaveta", "Gaveta")
            .setCssClass("modalScene-drawer");

        gaveta.registerActions([
            new Action("btn-fecharGaveta", "Fechar gaveta")
                .setCssClass("action-fecharGaveta")
                .onClick(function() {
                    console.log("Action: fecharGaveta");
                    // Som
                    Player.play( Player.audios.sfx.fecharGaveta );
                    core.closeModalScene("Gaveta");
                })
                .setVisibility( true )
        ]);

        gaveta.registerInteractiveObjects([
            new InteractiveObject("io-coxim", "Coxim")
                .setCssClass("intObj-cushion")
                .onClick(function() {
                    console.log("IntObj: io-coxim");
                    core.flag("coxim",  true );
                    // Som
                    Player.play( Player.audios.sfx.pegarObjeto );
                    core.setInteractiveObjectVisible("io-coxim", false );

                    if ( core.flag("score_pegar_coxim") == false ) {
                        core.registerScoreItem( Scores.pegarCoxim );
                        core.flag("score_pegar_coxim",  true );
                    }
                })
                .setVisibility( true )
        ]);

        prontuario = new Scene("Prontuario", "Prontuario");

        prontuario.registerActions([
            new Action("btn-fechar_prontuario", "Fechar prontuário")
                .setCssClass("action-ler_prontuario")
                .onClick(function() {
                    console.log("Action: Fechar prontuario");
                    Prontuario.close();
                    core.closeModalScene("Prontuario");
                    // Retirar esse if após consertar o problema no prontuário
                    if ( level.getFlag("colocou_coxim").getValue() == true ) {
                        core.registerScoreItem( Scores.anotarNoProntuario );
                        core.unlockLevel( 2 );
                        core.closeCommandBar();
                        core.showEndOfLevel();
                    }
                })

            /*new Action("btn-terminar_fase", "Conversar com Mentor")
                .setCssClass("action-abrir_dialogo")
                .onClick(function() {
                    console.log("Action: Fechar prontuario");
                    // TODO Verificar se prontuario está preenchido
                    core.registerScoreItem( Scores.anotarNoProntuario );
                    Prontuario.close();
                    core.unlockLevel( 2 );
                    core.closeCommandBar();
                    core.showEndOfLevel();
                })*/
        ]);

        // Register in level
        level.registerScene( recepcao );
        level.registerScene( corredor );
        level.registerScene( salaDeLeitos );
        level.registerScene( leito );
        level.registerScene( postoDeEnfermagem );

        level.registerModalScene( pulseira );
        level.registerModalScene( gaveta );
        level.registerModalScene( prontuario );
        level.registerModalScene( zoom );
        // level init script
        level.setSetupScript(function() {

            Pulseira.setNameRegExp( /Carlos Esme Gouv(e|ê)a/ );
            Pulseira.setLeitoRegExp( /0*3/ );
            Pulseira.setDataRegExp( /01\/12\/1945/ );

            Pulseira.setName("Carlos Esme Gouvêa");
            Pulseira.setLeito("03");
            Pulseira.setData("01/12/1945");
            Pulseira.disable();

            Prontuario.setNome("Carlos Esme Gouvêa");
            Prontuario.setSexo("M");
            Prontuario.setEstadoCivil("Casado");
            Prontuario.setDataNascimento("01/12/1945");
            Prontuario.setIdade("69 anos");
            Prontuario.setProfissao("Aposentado (advogado)");
            Prontuario.setPai("Leonardo Gouvêa");
            Prontuario.setMae("Maria Clara Esme Gouvêa");

            Prontuario.setAlergiaMedicamentosa( false, "");
            Prontuario.setDisableAlergiaMedicamentosa( true );
            Prontuario.setDataInternacao("15/06/2015");
            Prontuario.setLeito("02 - Enfermaria Masculina");
            Prontuario.setAntecedentes("Nenhum");
            Prontuario.setHipotese("Pneumonia brônquica, insuficiência respiratória e anemia ferropriva.");
            Prontuario.setObservacoes("Possui incontinência urinária, acamado.");

            Prontuario.clearPrescEnfermagemState( );
            Prontuario.setPrescEnfermagemState("decubito");

            Prontuario.setPeso("72");
            Prontuario.setAltura("1,68");
            Prontuario.setCircunferenciaAbdominal("135");

            Prontuario.setPrescMedicaRowData( 0, "", "Sulfato ferroso", "Oral", "drágea 250 mg", "2x dia", true, true );
            Prontuario.setPrescMedicaRowData( 1, "", "Azitromicina", "Oral", "comp 500 mg", "1x dia", true, true );
            // Necessário para evitar que valores antigos apareçam no prontuário
            Prontuario.setPrescMedicaRowData( 2, "", "", "", "", "", false, true );
            Prontuario.setPrescMedicaRowData( 3, "", "", "", "", "", false, true );


            Prontuario.setSsvvRowData( 0, "", "130x80", "65", "14", "94", "36", true );
            // Disable 2 row
            Prontuario.setSsvvRowData( 1, "", "", "", "", "", "", true );

            Prontuario.setAnotacaoEnfermagemRowData("", "");
        });

        // Flags

        level.registerFlag( new Flag("conversar_recepcionista"), false );
        level.registerFlag( new Flag("conversar_mentor"), false );
        level.registerFlag( new Flag("conversar_mentor2"), false );
        level.registerFlag( new Flag("foi_ao_leito"), false );
        level.registerFlag( new Flag("conversarPaciente"), false );
        level.registerFlag( new Flag("confirmou_pulseira"), false );
        level.registerFlag( new Flag("examinar_paciente"), false );
        level.registerFlag( new Flag("mudar_posicao_paciente"), false );
        level.registerFlag( new Flag("lavarMaos"), false );
        level.registerFlag( new Flag("lavar_maos2"), false );
        level.registerFlag( new Flag("lavar_maos3"), false );
        level.registerFlag( new Flag("coxim"), false );
        level.registerFlag( new Flag("colocou_coxim"), false );
        level.registerFlag( new Flag("score_lavar_maos_antes_exame"), false );
        level.registerFlag( new Flag("score_lavar_maos_depois_exame"), false );
        level.registerFlag( new Flag("score_lavar_maos_prontuario"), false );
        level.registerFlag( new Flag("score_ir_posto_hora_errada"), false );
        level.registerFlag( new Flag("score_falar_paciente"), false );
        level.registerFlag( new Flag("score_verificar_pulseira"), false );
        level.registerFlag( new Flag("score_examinar_paciente"), false );
        level.registerFlag( new Flag("score_falar_com_mentor"), false );
        level.registerFlag( new Flag("score_pegar_coxim"), false );
        level.registerFlag( new Flag("score_anotar_prontuario"), false );
        level.registerFlag( new Flag("score_nao_lavar_maos_prontuario"), false );
        level.registerFlag( new Flag("pegou_bandeja"), false );


        level.setInitialScene( 0 );

        game.registerLevel( level, 1 );

        console.groupEnd();


    }
);
