/*
 This file loads all modules that are required for the game to work.

 @authro Otho - Marcelo Lopes Lotufo
 */

// Load requireConfig
require([ "requireConfig" ], function() {
    console.group("Cuidando Bem Log:");

    // Load imageLoader and ImagesUrls
    require([ "ImageLoader", "ImagesUrls" ], function( imageLoader, images ) {

        // Load all the images in Image_urls
        imageLoader.load( images.baseDir, images.paths, function() {

            // Load Storage module
            // TODO: use storage module to set if the game was muted or not
            require([ "Storage" ], function( storage ) {

                // Load Sound Player and SoundsUrls
                require([ "Player", "SoundsUrls" ], function( player, sounds ) {

                    // Set SoundPlayer master volume
                    player.setMasterVolumeTo( sounds.masterVolume );
                    // Load all sound files ind SoundsUrls
                    player.load( sounds.baseDir, sounds.paths );

                    if ( storage.isSfxMuted() ) {
                        player.setVolumeToCategory( player.audios.sfx, 0 );
                    } else {
                        player.setVolumeToCategory( player.audios.sfx, storage.getSfxVolume() );
                    }

                    if ( storage.isMusicMuted() ) {
                        player.setVolumeToCategory( player.audios.musics, 0 );
                    } else {
                        player.setVolumeToCategory( player.audios.musics, storage.getMusicVolume() );
                    }


                    // Load jquery and less libs
                    require([ "jquery" ], function( $ ) {
                        window.$ = $;

                        // Load jqueryui
                        require([ "jqueryui", "jquerymask" ], function() {

                            // Load Stage module, stage configuration, game main Module, game configuration and all dialogs that will be used in game
                            require([ "Stage", "stageConfig", "CuidandoBem", "gameConfig", "DialogsData" ],
                                function( Stage ) {
                                    $("document").ready(function() {
                                        // As soon as the html has been loaded, set the container for the Stage module and start it
                                        // The game will only be initiated when a level is selected

                                        Stage.setContainer("#stage");
                                        Stage.start();


                                        var width = $("#stage").width(),
                                            fontSize =  width / 100 ;

                                        fontSize = +fontSize.toFixed( 2 );

                                        $("html").css("font-size", fontSize + "px");
                                        $( window ).resize(function() {
                                            var width = $("#stage").width(),
                                                fontSize =  width / 100 ;

                                            fontSize = +fontSize.toFixed( 2 );

                                            $("html").css("font-size", fontSize + "px");
                                        });
                                    });
                                });
                        });
                    });
                });
            });
        });

    });
});
