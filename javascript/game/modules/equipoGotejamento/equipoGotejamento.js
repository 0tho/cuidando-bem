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
define(function( require ) {

    var html = require("text!../html/equipoGotejamento/equipoGotejamento.html");

    var equipoSelector = "#equipo";
    var canvasSelector = "#equipoGotejamento";

    var STATES = {
        playing: 0,
        stopped: 1
    };

    var state = STATES.stopped;

    var tick = {
        last: undefined,
        passed: undefined,
        now: undefined,
        accumulator: 0,

        time: undefined,

        rate: 60
    };

    var clock = {
        x: 375,
        y: 300,
        radius: 60,
        angle: 0,
        line: 20,
        img: undefined,

        accumulator: 0,
        time: 1
    };

    var minRate = 0;
    var maxRate = 120;
    var rightRate = 60;
    var mode = "soro";
    var currentAnimation;

    var margem = 1;

    tick.time = 1000 / tick.rate;

    function Animation() {
        this.x;
        this.y;

        this.frameTime;
        this.accumulator = 0;
        this.frameTotal;
        this.frameCounter = 0;
        this.cyclesPerMinute;

        this.img = [];
        this.hasToDraw = false;

        this.width;
        this.height;

        this.srWidth;
        this.srHeight;


        this.update = function() {

            this.accumulator += tick.time;

            while ( this.accumulator >= this.frameTime ) {

                this.frameCounter++;
                this.frameCounter = this.frameCounter % this.frameTotal;
                this.hasToDraw = true;

                this.accumulator -= this.frameTime;
            }
        };

        this.draw = function( canvas ) {
            if ( this.hasToDraw ) {
                var ctx = canvas.getContext("2d");

                var fx = this.frameCounter * this.width;

                var img = this.img[ this.frameCounter ];

                ctx.drawImage( img, 0, 0, this.srWidth, this.srHeight, this.x, this.y, this.width, this.height );
            }
        };
    }

    var soroAnimation = new Animation();
    soroAnimation.x = 120;
    soroAnimation.y = 0;
    soroAnimation.width = 140;
    soroAnimation.height = 610;
    soroAnimation.srWidth = 314;
    soroAnimation.srHeight = 1426;
    soroAnimation.frameTotal = 20;
    soroAnimation.cyclesPerMinute = 60;
    soroAnimation.frameTime = 1000 * 60 / soroAnimation.cyclesPerMinute / soroAnimation.frameTotal;

    var soroImgsLoaded = 0;
    for ( i = 0; i < soroAnimation.frameTotal; i++ ) {
        soroAnimation.img.push( new Image() );

        soroAnimation.img[ i ].onload = function() {

            soroImgsLoaded++;
        };

        var img = soroAnimation.img[ i ];

        if ( i < 10 ) {
            i = "0" + i;
        }

        img.src = "./images/modalScenes/soro/gotas_0" + i + ".png";
    }

    var dietaAnimation = new Animation();
    dietaAnimation.x = 120;
    dietaAnimation.y = 0;
    dietaAnimation.width = 140;
    dietaAnimation.height = 610;
    dietaAnimation.srWidth = 314;
    dietaAnimation.srHeight = 1426;
    dietaAnimation.frameTotal = 20;
    dietaAnimation.cyclesPerMinute = 60;
    dietaAnimation.frameTime = 1000 * 60 / dietaAnimation.cyclesPerMinute / dietaAnimation.frameTotal;

    var dietaImgsLoaded = 0;
    for ( i = 0; i < dietaAnimation.frameTotal; i++ ) {
        dietaAnimation.img.push( new Image() );

        dietaAnimation.img[ i ].onload = function() {

            dietaImgsLoaded++;
        };

        var img = dietaAnimation.img[ i ];

        if ( i < 10 ) {
            i = "0" + i;
        }

        img.src = "./images/modalScenes/dieta/gotaDieta_0" + i + ".png";
    }

    clock.img = new Image();

    clock.img.src = "./images/modalScenes/relogioDigital.png";

    clock.img.onLoad = function() {
 image loaded");
    };

    function init( selector ) {
        $( selector ).append( html );

        var canvas = $( canvasSelector )[ 0 ];
        canvas.setAttribute("width", 800 );
        canvas.setAttribute("height", 600 );

        $( ".less" ).click(function() {

            slower();
        });

        $( ".plus" ).click(function() {

            faster();
        });

        $( ".sliderFront" ).slider({
            orientation: "vertical",
            min: minRate,
            max: maxRate,
            value: 60,
            slide: function( event, ui ) {
                setCyclesPerMinute( ui.value );
            }
        });

        setMode( mode );


    }

    function open() {
        $( equipoSelector ).show();

        currentAnimation.frameCounter = 0;

        tick.accumulator = 0;
        tick.last = new Date().getTime();
        state = STATES.playing;

        resetClock();

        animationLoop();
    }

    function close() {
        $( equipoSelector ).hide();

        state = STATES.stopped;
    }


    function update() {
        currentAnimation.update();

        clock.accumulator += tick.time;
        while ( clock.accumulator >= clock.time ) {
            clock.angle += Math.PI * 2 / 1000 / 60;

            clock.accumulator -= clock.time;
        }
    }

    function draw( canvas ) {
        ctx = canvas.getContext("2d");
        ctx.clearRect( 0, 0, 800, 600 );

        currentAnimation.draw( canvas );

        ctx.drawImage( clock.img, 0, 0, 350, 600, clock.x - 99, clock.y - 165, 200, 330 );

        ctx.beginPath();
        ctx.moveTo( clock.x, clock.y - clock.radius );
        ctx.lineTo( clock.x, clock.y - clock.radius + clock.line );

        ctx.moveTo( clock.x, clock.y + clock.radius );
        ctx.lineTo( clock.x, clock.y + clock.radius - clock.line );

        ctx.moveTo( clock.x - clock.radius, clock.y );
        ctx.lineTo( clock.x - clock.radius + clock.line, clock.y );

        ctx.moveTo( clock.x + clock.radius, clock.y );
        ctx.lineTo( clock.x + clock.radius - clock.line, clock.y );

        // ctx.arc(clock.x, clock.y, clock.radius, 0, Math.PI*2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(0,0,0,130)";
        ctx.stroke();

        ctx.beginPath();
        px = Math.cos( clock.angle ) * clock.radius + clock.x;
        py = Math.sin( clock.angle ) * clock.radius + clock.y;

        ctx.moveTo( clock.x, clock.y );
        ctx.lineTo( px, py );

        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgba(0,0,0,255)";
        ctx.stroke();
    }

    function resetClock() {
      clock.angle = -Math.PI / 2;
      clock.accumulator = 0;
    }

    function animationLoop() {
        tick.now = new Date().getTime();
        tick.passed = tick.now - tick.last;
        tick.last = tick.now;

        tick.accumulator += tick.passed;

        while ( tick.accumulator >= tick.time ) {
            update();

            tick.accumulator -= tick.time;
        }

        draw( $( canvasSelector )[ 0 ] );

        if ( state == STATES.playing ) {
            window.requestAnimationFrame( animationLoop );
        }
    }

    function faster() {
        if ( currentAnimation.cyclesPerMinute + 1 <= maxRate ) {
            resetClock();
            currentAnimation.cyclesPerMinute += 1;
            currentAnimation.frameTime = 1000 * 60 / currentAnimation.cyclesPerMinute / currentAnimation.frameTotal;
            currentAnimation.frameCounter = 0;
            $( ".sliderFront" ).slider("value", currentAnimation.cyclesPerMinute );
        }
    }

    function slower() {
        if ( currentAnimation.cyclesPerMinute - 1 >= minRate ) {
            resetClock();
            currentAnimation.cyclesPerMinute -= 1;
            currentAnimation.frameTime = 1000 * 60 / currentAnimation.cyclesPerMinute / currentAnimation.frameTotal;
            currentAnimation.frameCounter = 0;
            $( ".sliderFront" ).slider("value", currentAnimation.cyclesPerMinute );
        }
    }

    function setCyclesPerMinute( _cpm ) {
        resetClock();

        currentAnimation.cyclesPerMinute = _cpm;
        currentAnimation.frameTime = 1000 * 60 / currentAnimation.cyclesPerMinute / currentAnimation.frameTotal;
        currentAnimation.frameCounter = 0;

    }

    function setRightValue( value ) {
        rightRate = value;
    }

    function isValueRight() {
        return currentAnimation.cyclesPerMinute >= rightRate - margem && currentAnimation.cyclesPerMinute <= rightRate + margem;
    }

    function setMode( mode ) {
        if ( mode == "soro" ) {
            $( ".slider" ).removeClass( "dieta" );
            $( ".slider" ).addClass( "soro" );
            currentAnimation = soroAnimation;
        } else {
            $( ".slider" ).removeClass( "soro" );
            $( ".slider" ).addClass( "dieta" );
            currentAnimation = dietaAnimation;
        }
    }

    return {
        init: init,
        setCyclesPerMinute: setCyclesPerMinute,

        setMode: setMode,

        isValueRight: isValueRight,
        setRightValue: setRightValue,

        open: open,
        close: close
    };
});
