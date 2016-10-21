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

define([],function(){var e="images/",t={others:["actionButtons/semImagem.jpg","actionButtons/anotarProntuario.jpg","actionButtons/prontuario.jpg","actionButtons/pulseira.jpg","actionButtons/leitoChar01.jpg","actionButtons/leitoChar02.jpg","actionButtons/posicionarCoxim.jpg","actionButtons/mudarPosicaoPaciente.jpg","actionButtons/irCorredor.jpg","actionButtons/irPostoDeEnfermagem.jpg","actionButtons/irRecepcao.jpg","actionButtons/irSalaDeLeitos.jpg","actionButtons/abrirDialogo.jpg","actionButtons/examinarPaciente.jpg","actionButtons/lavarMaos.jpg","actionButtons/lavarMaosEscova.png","actionButtons/gaveta.jpg","actionButtons/termometro.jpg","actionButtons/pressao.jpg","actionButtons/oximetro.jpg","actionButtons/relogio.jpg","actionButtons/agulhas.jpg","actionButtons/elevarCama.jpg","actionButtons/elevarGrade.jpg","actionButtons/agulha40x12.jpg","actionButtons/algodaoSeco.jpg","actionButtons/carrinhoAnestesico.jpg","actionButtons/cloretoSodio10_10ml.jpg","actionButtons/cloretoSodio20_10ml.jpg","actionButtons/clorpromazinaMedicamento.jpg","actionButtons/clorpropamidaMedicamento.jpg","actionButtons/copoDescartavel.jpg","actionButtons/equipo.jpg","actionButtons/equipoDeInfusaoAlimentos.jpg","actionButtons/fitaAdesivaHipoalergica.jpg","actionButtons/frascoDieta.jpg","actionButtons/garrafaAguaPotavel.jpg","actionButtons/gazeEsteril.jpg","actionButtons/glicose30_10ml.jpg","actionButtons/irLeito.jpg","actionButtons/keflinMedicamento.jpg","actionButtons/luvasDeProcedimento.jpg","actionButtons/luvasEstereis.jpg","actionButtons/glicosimetro.jpg","actionButtons/mentor.jpg","actionButtons/midazolamMedicamento.jpg","actionButtons/paciente1.jpg","actionButtons/paciente2.jpg","actionButtons/paciente3.jpg","actionButtons/paciente4.jpg","actionButtons/paciente5.jpg","actionButtons/paciente6.jpg","actionButtons/paciente7.jpg","actionButtons/paciente8.jpg","actionButtons/paciente9.jpg","actionButtons/placaNeutra.jpg","actionButtons/prepararMedicacao.jpg","actionButtons/recepcionista.jpg","actionButtons/seringa10ml.jpg","actionButtons/seringa5ml.jpg","actionButtons/seringa20ml.jpg","actionButtons/soroFisiologico1000ml.jpg","actionButtons/soroFisiologico100ml.jpg","actionButtons/soroFisiologico250ml.jpg","actionButtons/soroGlicofisiologico1000ml.jpg","actionButtons/agulha40x12.jpg","actionButtons/lixo_comum.jpg","actionButtons/lixo_infectante.jpg","actionButtons/lixo_perfuro_cortante.jpg","actionButtons/administrarMedicamento.jpg","actionButtons/fazerCurativo.jpg","actionButtons/colocarSoro.jpg","actionButtons/colocarDieta.jpg","actionButtons/pegarSuporte.jpg","actionButtons/voltarRecepcao.jpg","actionButtons/9certos.jpg","actionButtons/indentificarMedicacao.jpg","actionButtons/irCentroCirurgico.jpg","characters/recepcionista.png","characters/mentor.png","characters/farmaceutico.png","characters/circulanteDeLeito.png","characters/paciente1.png","characters/paciente2.png","characters/paciente3.png","characters/paciente4.png","characters/paciente5.png","characters/paciente6.png","characters/paciente7.png","characters/paciente8.png","characters/paciente9.png","interactiveObjects/termometro.png","interactiveObjects/pressao.png","interactiveObjects/oximetro.png","interactiveObjects/char-mentor.png","interactiveObjects/circulanteDeLeito.png","interactiveObjects/coxim.png","interactiveObjects/pulseira01.png","interactiveObjects/pulseira02.png","interactiveObjects/pulseira02_virado.png","interactiveObjects/pulseira03.png","interactiveObjects/pulseira04.png","interactiveObjects/pulseira05.png","interactiveObjects/pulseira06.png","interactiveObjects/pulseira07.png","interactiveObjects/pulseira08.png","interactiveObjects/pulseira09.png","interactiveObjects/pulseira05.png","interactiveObjects/relogio.png","interactiveObjects/copo_descartavel.png","interactiveObjects/garrafa_agua_potavel.png","interactiveObjects/9certos.png","interactiveObjects/algodao_seco.png","interactiveObjects/algodao_seco.png","interactiveObjects/algodao_seco.png","interactiveObjects/glicosimetro.png","interactiveObjects/algodao_seco.png","interactiveObjects/agulhas.png","interactiveObjects/agulha_40x12.png","interactiveObjects/algodao_seco.png","interactiveObjects/aparelhodepressao_frontal.png","interactiveObjects/aparelhodepressao_lateral.png","interactiveObjects/bandeja.png","interactiveObjects/carrinho_anestesico.png","interactiveObjects/cloreto_de_sodio_10__10_ml_.png","interactiveObjects/cloreto_de_sodio_20__10_ml_.png","interactiveObjects/clorpromazina_medicamento.png","interactiveObjects/clorpropamida_medicamento.png","interactiveObjects/copo_descartavel.png","interactiveObjects/coxim.png","interactiveObjects/equipo_de_infusao_de_dieta.png","interactiveObjects/equipo_de_soro.png","interactiveObjects/equipo_de_soro.png","interactiveObjects/fita_adesiva_hipoalergenica_micropore.png","interactiveObjects/frasco_de_alcool.png","interactiveObjects/frasco_de_dieta.png","interactiveObjects/garrafa_agua_potavel.png","interactiveObjects/gaveta.png","interactiveObjects/gaze_esteril.png","interactiveObjects/glicose_30__10_ml.png","interactiveObjects/keflin_medicamento.png","interactiveObjects/lixo_comum.png","interactiveObjects/lixo_infectante.png","interactiveObjects/lixo_perfuro_cortante.png","interactiveObjects/luvas_de_procedimento.png","interactiveObjects/luvas_de_procedimento.png","interactiveObjects/luvas_estereis.png","interactiveObjects/midazolam_medicamento.png","interactiveObjects/oximetro_frontal.png","interactiveObjects/oximetro_lateral.png","interactiveObjects/placa_neutra.png","interactiveObjects/prancheta.png","interactiveObjects/prancheta_horizontal.png","interactiveObjects/prontuario.png","interactiveObjects/relogiodigital.png","interactiveObjects/relogiodigital_lateral.png","interactiveObjects/seringa_5_ml.png","interactiveObjects/seringa_20_ml.png","interactiveObjects/seringa_de_10_ml.png","interactiveObjects/seringa_de_10_ml.png","interactiveObjects/soro_fisiologico_100_ml.png","interactiveObjects/soro_fisiologico_250_ml.png","interactiveObjects/soro_fisiologico_1000_ml.png","interactiveObjects/soro_glicofisiologico_1000_ml.png","interactiveObjects/termometro_frontal.png","interactiveObjects/glicose30_10ml.png","misc/arrow-icon_button.png","misc/arrow-icon_button-hover.png","misc/button-bg.png","misc/shattered.png","misc/muteButtonAtivo.png","misc/muteButtonDesativado.png","misc/locker.png","misc/pauseButton.png","misc/cruz.png","misc/textoCuidandoBem.png","modalScenes/gaveta.png","modalScenes/pulseira.png","modalScenes/termometro.png","modalScenes/medidorPressao.png","modalScenes/relogioDigital.png","modalScenes/oximetro.png","modalScenes/zoom-char-02.png","modalScenes/glicosimetro.png","modalScenes/glicosimetroComSangue.png","modalScenes/prontuario.png","modalScenes/cloreto_de_sodio_20__10_ml_.png","modalScenes/clorpromazina_medicamento.png","modalScenes/clorpropamida_medicamento.png","modalScenes/frasco_de_dieta.png","modalScenes/keflin_medicamento.png","modalScenes/midazolam_medicamento.png","modalScenes/soro_glicofisiologico_1000_ml.png","modalScenes/soro/controleGotejadorSoro.png","modalScenes/dieta/controleGotejadorDieta.png","modalScenes/soro/sliderSoro.png","modalScenes/dieta/sliderDieta.png","modalScenes/9_certos_da_medicacao.png","screens/tela_inicial.jpg","screens/tela_carregarFundo.jpg","screens/tela_levelSelect.jpg","screens/credits.jpg","screens/config.jpg","screens/conteudo.jpg","screens/vitoria.jpg","misc/telaInicialPrancheta.png","misc/prontuario.png","misc/logo.png","scenes/recepcao.jpg","scenes/postoDeEnfermagem.jpg","scenes/alaMasculina.jpg","scenes/alaMasculinaPacienteVirado.jpg","scenes/alaFeminina.png","scenes/centroCirurgico.jpg","scenes/centroCirurgicoRegina.jpg","scenes/centroCirurgicoReginaComPlaca.jpg","scenes/centroCirurgicoYuri.jpg","scenes/centroCirurgicoYuriComPlaca.jpg","scenes/fimLevel.jpg","scenes/corredor.jpg","scenes/farmacia.jpg","scenes/leitoChar01.jpg","scenes/leitoChar02.jpg","scenes/leitoChar02Virado.jpg","scenes/leitoChar02Coxim.jpg","scenes/leitoChar03.jpg","scenes/leitoChar03-01.jpg","scenes/leitoChar04.jpg","scenes/leitoChar05.jpg","scenes/leitoChar05b.jpg","scenes/leitoChar05c.jpg","scenes/leitoChar06.jpg","scenes/leitoChar06Grade.jpg","scenes/leitoChar07.jpg","scenes/leitoChar07b.jpg","scenes/leitoChar07c.jpg","scenes/leitoChar07d.jpg","scenes/leitoChar08.jpg","scenes/leitoChar09.jpg","scenes/leitoChar10.jpg","scenes/leitoChar10B.jpg","scenes/leitoChar10C.jpg","scenes/leitoChar01Grade.jpg","scenes/leitoChar02Grade.jpg","scenes/leitoChar02ViradoGrade.jpg","scenes/leitoChar02CoximGrade.jpg","scenes/leitoChar03Grade.jpg","scenes/leitoChar04Grade.jpg","scenes/leitoChar06Grade.jpg","scenes/leitoChar05Grade.jpg","scenes/leitoChar08Grade.jpg","scenes/leitoChar09Grade.jpg","scenes/leitoChar10Grade.jpg","animation/02_fundo.png","animation/02_porta.png","animation/03_fundo.png","animation/03_mentor_A00.png","animation/03_mentor_B00.png","animation/03_mentor_B01.png","animation/03_mentor_B02.png"]};return{paths:t,baseDir:e}});