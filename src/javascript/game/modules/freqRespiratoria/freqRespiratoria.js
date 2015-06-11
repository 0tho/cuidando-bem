define(function(require){

	var html = require('text!../assets/html/freqRespiratoria/freqRespiratoria.html');

	var canvasSelector = "#freqRespiratoria";

	var STATES = {
		playing: 0,
		stopped: 1
	}

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
		x: 700,
		y: 300,
		radius: 60,
		angle: 0,
		line: 20,
		img: undefined,

		accumulator: 0,
		time: 1
	}
	tick.time = 1000/tick.rate;

	function Animation (){
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


		this.update = function(){

			this.accumulator += tick.time;

			while(this.accumulator >= this.frameTime){

				this.frameCounter++;
				this.frameCounter = this.frameCounter % this.frameTotal;
				this.hasToDraw = true;

				this.accumulator -= this.frameTime;
			}
		}

		this.draw = function(canvas){
			if(this.hasToDraw){
				var ctx = canvas.getContext('2d');

				var fx = this.frameCounter * this.width; 

				var img = this.img[this.frameCounter];

				ctx.drawImage(img, 0, 0, this.srWidth, this.srHeight, this.x, this.y, this.width, this.height);
			}
		}
	}

	var breathing = new Animation();
	breathing.x = 50;
	breathing.y = 180;
	breathing.width = 400;
	breathing.height = 240;
	breathing.srWidth = 1920;
	breathing.srHeight = 1152;
	breathing.frameTotal = 12;
	breathing.cyclesPerMinute = 18;
	breathing.frameTime = 1000*60/breathing.cyclesPerMinute/breathing.frameTotal;

	var imgsLoaded = 0;
	for(i=0; i<breathing.frameTotal; i++){
		breathing.img.push(new Image());

		breathing.img[i].onload = function(){ 
			console.log("Image "+i+" loaded");
			imgsLoaded++;
			// if(imgsLoaded==coin.frameTotal){
			// 	gameLoop();
			// }
		};

		var img = breathing.img[i];

		if(i<10){
			i = "0"+i;
		}

		img.src = "./assets/images/modalScenes/01_"+i+".png";
	}

	clock.img = new Image();

	clock.img.src = "./assets/images/modalScenes/relogioDigital.png";

	clock.img.onLoad = function(){
		console.log("Clock ('watch') image loaded");
	}



	function init(selector){
		$(selector).append(html);

		var canvas = $(canvasSelector)[0];
		canvas.setAttribute("width", 800);
		canvas.setAttribute("height", 600);

		console.info("FreqRespiratoria added to stage");
	}

	function open(){
		$(canvasSelector).show();

		clock.angle = -Math.PI/2;
		clock.accumulator = 0;

		breathing.frameCounter = 0;

		tick.accumulator = 0;
		tick.last = new Date().getTime();
		state = STATES.playing;
		
		animationLoop();
	}

	function close(){
		$(canvasSelector).hide();

		state = STATES.stopped;
	}



	function update(){
		breathing.update();

		clock.accumulator += tick.time;
		while(clock.accumulator >= clock.time){
			clock.angle += Math.PI*2/1000/60;

			clock.accumulator -= clock.time;
		}
	}

	function draw(canvas){
		ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, 800, 600);

		breathing.draw(canvas);

		ctx.drawImage(clock.img, 0, 0, 350, 600, 601, 135, 200, 330);

		ctx.beginPath();
		ctx.moveTo(clock.x, clock.y-clock.radius);
		ctx.lineTo(clock.x, clock.y-clock.radius+clock.line);

		ctx.moveTo(clock.x, clock.y+clock.radius);
		ctx.lineTo(clock.x, clock.y+clock.radius-clock.line);
		
		ctx.moveTo(clock.x-clock.radius, clock.y);
		ctx.lineTo(clock.x-clock.radius+clock.line, clock.y);
		
		ctx.moveTo(clock.x+clock.radius, clock.y);
		ctx.lineTo(clock.x+clock.radius-clock.line, clock.y);
		
		//ctx.arc(clock.x, clock.y, clock.radius, 0, Math.PI*2);
		ctx.lineWidth = 2;
		ctx.strokeStyle = "rgba(0,0,0,130)";
		ctx.stroke();

		ctx.beginPath();
		px = Math.cos(clock.angle)*clock.radius + clock.x;
		py = Math.sin(clock.angle)*clock.radius + clock.y;

		ctx.moveTo(clock.x, clock.y);
		ctx.lineTo(px, py);

		ctx.lineWidth = 5;
		ctx.strokeStyle = "rgba(0,0,0,255)";
		ctx.stroke();
	}

	function animationLoop(){
		tick.now = new Date().getTime();
		tick.passed = tick.now - tick.last;
		tick.last = tick.now;

		tick.accumulator += tick.passed;

		while(tick.accumulator >= tick.time){
			update();

			tick.accumulator -= tick.time;
		}

		draw($(canvasSelector)[0]);

		if(state == STATES.playing)
			window.requestAnimationFrame(animationLoop);	
	}

	return{
		init:init,

		open:open,
		close:close
	}
});