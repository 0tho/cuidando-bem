/*

This module register which files to load. Each of these files should contain a Level.

@author Otho - Marcelo Lopes Lotufo
 */
define([], function () {
    console.info("GameConfig - module loaded");
    var generalPath = "./game/scripts/levels/";
    var filePaths = [

        "Tutorial",
        "Fase8"

    ];

    for (i = 0; i < filePaths.length; i++) {
        console.log("\tRequiring Level module: ", filePaths[i]);
        require([generalPath + filePaths[i]]);
    }
});