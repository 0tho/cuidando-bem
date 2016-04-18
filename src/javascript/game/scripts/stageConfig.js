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
/*
 This module is responsible to register every screen used in this application, in this case a game.

 @author Otho - Marcelo Lopes Lotufo
 */
define([ "Stage" ], function( Stage ) {
    console.groupCollapsed("Stage Config:");

    Stage.setHtmlPath("../html/screens/");
    Stage.setControllersPath("./menu/");
    Stage.setStartingScreenId( 0 );

// 0 - mainMenu
    Stage.registerScreen("mainMenu", "mainMenu.html", "screenMainMenuController");
// 1 - game
    Stage.registerScreen("game", "gameContainer.html", "screenGameController");
// 2 - loadGame
    Stage.registerScreen("loadGame", "loadGame.html", "screenLoadGameController");
// 3 - credits
    Stage.registerScreen("credits", "credits.html", "screenCreditsController");
// 4 - configuration
    Stage.registerScreen("configuration", "configuration.html", "screenConfigurationController");
// 5 - newGameSlotSelect
    Stage.registerScreen("newGameSlotSelect", "newGameSlotSelect.html", "screenNewGameSlotSelectController");
// 6 - levelSelect
    Stage.registerScreen("levelSelect", "levelSelect.html", "screenLevelSelectController");
// 7 - conteudo
    Stage.registerScreen("conteudo", "conteudo.html", "screenConteudoController");

    console.groupEnd();
});
