define(["Stage"],function(e){console.groupCollapsed("Stage Config:"),e.setHtmlPath("../html/screens/"),e.setControllersPath("./menu/"),e.setStartingScreenId(0),e.registerScreen("mainMenu","mainMenu.html","screenMainMenuController"),e.registerScreen("game","gameContainer.html","screenGameController"),e.registerScreen("loadGame","loadGame.html","screenLoadGameController"),e.registerScreen("credits","credits.html","screenCreditsController"),e.registerScreen("configuration","configuration.html","screenConfigurationController"),e.registerScreen("newGameSlotSelect","newGameSlotSelect.html","screenNewGameSlotSelectController"),e.registerScreen("levelSelect","levelSelect.html","screenLevelSelectController"),e.registerScreen("conteudo","conteudo.html","screenConteudoController"),console.groupEnd()});