(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"cards_atlas_", frames: [[3285,728,500,726],[1506,1456,500,726],[2510,4368,500,726],[3514,2184,500,726],[2008,3640,500,726],[2008,4368,500,726],[3012,2184,500,726],[2008,1456,500,726],[1004,4368,500,726],[3514,2912,500,726],[502,2184,500,726],[3012,2912,500,726],[2281,0,500,726],[2281,728,500,726],[3012,1456,500,726],[1277,0,500,726],[1277,728,500,726],[2783,728,500,726],[502,1456,500,726],[2510,1456,500,726],[2510,2912,500,726],[775,728,500,726],[1506,2912,500,726],[1004,2912,500,726],[1004,2184,500,726],[502,4368,500,726],[2783,0,500,726],[3514,1456,500,726],[1506,4368,500,726],[2510,3640,500,726],[1506,2184,500,726],[1506,3640,500,726],[3012,4368,500,726],[2008,2912,500,726],[0,2571,500,726],[0,1843,500,726],[0,4027,500,726],[3514,3640,500,726],[1779,0,500,726],[0,0,773,1113],[1004,3640,500,726],[1779,728,500,726],[0,1115,500,726],[1004,1456,500,726],[2008,2184,500,726],[0,3299,500,726],[502,2912,500,726],[3012,3640,500,726],[775,0,500,726],[502,3640,500,726],[3285,0,500,726],[2510,2184,500,726]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._10_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._10_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._10_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._10_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._2_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._3_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._3_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._4_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._4_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._4_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._4_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._5_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._5_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._5_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._5_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._6_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._6_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._6_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._6_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._7_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._7_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._7_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._7_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._8_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._8_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._8_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._8_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._9_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._9_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._9_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib._9_of_spades = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.ace_of_clubs = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.ace_of_diamonds = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.ace_of_hearts = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.ace_of_spades2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CardBoxTuckCaseT0423 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.jack_of_clubs2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.jack_of_diamonds2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.jack_of_hearts2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.jack_of_spades2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.king_of_clubs2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.king_of_diamonds2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.king_of_hearts2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.king_of_spades2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.queen_of_clubs2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.queen_of_diamonds2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.queen_of_hearts2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.queen_of_spades2 = function() {
	this.spriteSheet = ss["cards_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CardBoxTuckCaseT0423();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.134,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol54, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol53, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,103.4,150), null);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol51, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._9_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._9_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol49, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.queen_of_hearts2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol46, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._10_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._7_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ace_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._10_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king_of_clubs2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._7_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.queen_of_clubs2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king_of_diamonds2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ace_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._9_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jack_of_diamonds2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.queen_of_spades2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jack_of_hearts2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._10_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ace_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jack_of_clubs2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.queen_of_diamonds2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ace_of_spades2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._10_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._7_of_clubs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king_of_spades2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._9_of_spades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.king_of_hearts2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4_of_hearts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._7_of_diamonds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,103.3,150), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jack_of_spades2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,103.3,150), null);


// stage content:
(lib.cards = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// left
	this.instance = new lib.Symbol54();
	this.instance.parent = this;
	this.instance.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.7,x:51.7},0).wait(101).to({alpha:0.975},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0},0).wait(74));

	// Symbol 54
	this.instance_1 = new lib.Symbol54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1228.3,75,1,1,0,0,0,51.6,75);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:51.7,x:1228.4},0).wait(171).to({alpha:0.025},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.275},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.45},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.525},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.65},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.825},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.95},0).wait(1).to({alpha:0.975},0).wait(1).to({alpha:1},0).wait(4));

	// jack_of_spades2.png
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:51.7,x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(145));

	// 7_of_diamonds.png
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:51.7,x:51.7},0).wait(2).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(143));

	// 4hrts
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:51.7,x:51.7},0).wait(4).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(141));

	// king_of_hearts2.png
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:51.7,x:51.7},0).wait(6).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(139));

	// 9_of_spades.png
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:51.7,x:51.7},0).wait(8).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(137));

	// 2_of_hearts.png
	this.instance_7 = new lib.Symbol7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:51.7,x:51.7},0).wait(10).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(135));

	// 8_of_hearts.png
	this.instance_8 = new lib.Symbol8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:51.7,x:51.7},0).wait(12).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(133));

	// king_of_spades2.png
	this.instance_9 = new lib.Symbol9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:51.7,x:51.7},0).wait(14).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(131));

	// 7_of_clubs.png
	this.instance_10 = new lib.Symbol10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:51.7,x:51.7},0).wait(16).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(129));

	// 3_of_diamonds.png
	this.instance_11 = new lib.Symbol11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:51.7,x:51.7},0).wait(18).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(127));

	// 10_of_diamonds.png
	this.instance_12 = new lib.Symbol12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:51.7,x:51.7},0).wait(20).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(125));

	// ace_of_spades2.png
	this.instance_13 = new lib.Symbol13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:51.7,x:51.7},0).wait(22).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(123));

	// 6_of_clubs.png
	this.instance_14 = new lib.Symbol15();
	this.instance_14.parent = this;
	this.instance_14.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:51.7,x:51.7},0).wait(24).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(121));

	// 5_of_spades.png
	this.instance_15 = new lib.Symbol16();
	this.instance_15.parent = this;
	this.instance_15.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:51.7,x:51.7},0).wait(26).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(119));

	// queen_of_diamonds2.png
	this.instance_16 = new lib.Symbol17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:51.7,x:51.7},0).wait(28).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(117));

	// jack_of_clubs2.png
	this.instance_17 = new lib.Symbol18();
	this.instance_17.parent = this;
	this.instance_17.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:51.7,x:51.7},0).wait(30).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(115));

	// ace_of_diamonds.png
	this.instance_18 = new lib.Symbol19();
	this.instance_18.parent = this;
	this.instance_18.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:51.7,x:51.7},0).wait(32).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(113));

	// 6_of_diamonds.png
	this.instance_19 = new lib.Symbol20();
	this.instance_19.parent = this;
	this.instance_19.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:51.7,x:51.7},0).wait(34).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(111));

	// 4_of_spades.png
	this.instance_20 = new lib.Symbol21();
	this.instance_20.parent = this;
	this.instance_20.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:51.7,x:51.7},0).wait(36).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(109));

	// 3_of_spades.png
	this.instance_21 = new lib.Symbol22();
	this.instance_21.parent = this;
	this.instance_21.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({regX:51.7,x:51.7},0).wait(38).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(107));

	// 10_of_clubs.png
	this.instance_22 = new lib.Symbol23();
	this.instance_22.parent = this;
	this.instance_22.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({regX:51.7,x:51.7},0).wait(40).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(105));

	// jack_of_hearts2.png
	this.instance_23 = new lib.Symbol24();
	this.instance_23.parent = this;
	this.instance_23.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1).to({regX:51.7,x:51.7},0).wait(42).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(103));

	// 5_of_hearts.png
	this.instance_24 = new lib.Symbol25();
	this.instance_24.parent = this;
	this.instance_24.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({regX:51.7,x:51.7},0).wait(44).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(101));

	// 3_of_clubs.png
	this.instance_25 = new lib.Symbol26();
	this.instance_25.parent = this;
	this.instance_25.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({regX:51.7,x:51.7},0).wait(46).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(99));

	// 2_of_clubs.png
	this.instance_26 = new lib.Symbol27();
	this.instance_26.parent = this;
	this.instance_26.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({regX:51.7,x:51.7},0).wait(48).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(97));

	// queen_of_spades2.png
	this.instance_27 = new lib.Symbol28();
	this.instance_27.parent = this;
	this.instance_27.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({regX:51.7,x:51.7},0).wait(50).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(95));

	// 8_of_clubs.png
	this.instance_28 = new lib.Symbol29();
	this.instance_28.parent = this;
	this.instance_28.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({regX:51.7,x:51.7},0).wait(52).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(93));

	// jack_of_diamonds2.png
	this.instance_29 = new lib.Symbol30();
	this.instance_29.parent = this;
	this.instance_29.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({regX:51.7,x:51.7},0).wait(54).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(91));

	// 9_of_diamonds.png
	this.instance_30 = new lib.Symbol31();
	this.instance_30.parent = this;
	this.instance_30.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({regX:51.7,x:51.7},0).wait(56).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(89));

	// 5_of_diamonds.png
	this.instance_31 = new lib.Symbol32();
	this.instance_31.parent = this;
	this.instance_31.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({regX:51.7,x:51.7},0).wait(58).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(87));

	// ace_of_clubs.png
	this.instance_32 = new lib.Symbol33();
	this.instance_32.parent = this;
	this.instance_32.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({regX:51.7,x:51.7},0).wait(60).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(85));

	// king_of_diamonds2.png
	this.instance_33 = new lib.Symbol34();
	this.instance_33.parent = this;
	this.instance_33.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({regX:51.7,x:51.7},0).wait(62).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(83));

	// 8_of_spades.png
	this.instance_34 = new lib.Symbol35();
	this.instance_34.parent = this;
	this.instance_34.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({regX:51.7,x:51.7},0).wait(64).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(81));

	// queen_of_clubs2.png
	this.instance_35 = new lib.Symbol36();
	this.instance_35.parent = this;
	this.instance_35.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({regX:51.7,x:51.7},0).wait(66).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(79));

	// 7_of_hearts.png
	this.instance_36 = new lib.Symbol37();
	this.instance_36.parent = this;
	this.instance_36.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({regX:51.7,x:51.7},0).wait(68).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(77));

	// king_of_clubs2.png
	this.instance_37 = new lib.Symbol38();
	this.instance_37.parent = this;
	this.instance_37.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({regX:51.7,x:51.7},0).wait(70).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.7},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.8},0).wait(1).to({x:320.6},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:471.9},0).wait(1).to({x:488.7},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640},0).wait(1).to({x:656.8},0).wait(1).to({x:673.6},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.1},0).wait(1).to({x:824.9},0).wait(1).to({x:841.7},0).wait(1).to({x:858.5},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.2},0).wait(1).to({x:993},0).wait(1).to({x:1009.8},0).wait(1).to({x:1026.6},0).wait(1).to({x:1043.4},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.3},0).wait(1).to({x:1161.1},0).wait(1).to({x:1177.9},0).wait(1).to({x:1194.7},0).wait(1).to({x:1211.5},0).wait(1).to({x:1228.4},0).wait(75));

	// 10_of_hearts.png
	this.instance_38 = new lib.Symbol39();
	this.instance_38.parent = this;
	this.instance_38.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({regX:51.7,x:51.7},0).wait(72).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(73));

	// ace_of_hearts.png
	this.instance_39 = new lib.Symbol40();
	this.instance_39.parent = this;
	this.instance_39.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({regX:51.7,x:51.7},0).wait(74).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.7},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.8},0).wait(1).to({x:320.6},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:471.9},0).wait(1).to({x:488.7},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640},0).wait(1).to({x:656.8},0).wait(1).to({x:673.6},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.1},0).wait(1).to({x:824.9},0).wait(1).to({x:841.7},0).wait(1).to({x:858.5},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.2},0).wait(1).to({x:993},0).wait(1).to({x:1009.8},0).wait(1).to({x:1026.6},0).wait(1).to({x:1043.4},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.3},0).wait(1).to({x:1161.1},0).wait(1).to({x:1177.9},0).wait(1).to({x:1194.7},0).wait(1).to({x:1211.5},0).wait(1).to({x:1228.4},0).wait(71));

	// 5_of_clubs.png
	this.instance_40 = new lib.Symbol41();
	this.instance_40.parent = this;
	this.instance_40.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({regX:51.7,x:51.7},0).wait(76).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(69));

	// 7_of_spades.png
	this.instance_41 = new lib.Symbol42();
	this.instance_41.parent = this;
	this.instance_41.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({regX:51.7,x:51.7},0).wait(78).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(67));

	// 10_of_spades.png
	this.instance_42 = new lib.Symbol43();
	this.instance_42.parent = this;
	this.instance_42.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({regX:51.7,x:51.7},0).wait(80).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(65));

	// 4_of_diamonds.png
	this.instance_43 = new lib.Symbol44();
	this.instance_43.parent = this;
	this.instance_43.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({regX:51.7,x:51.7},0).wait(82).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(63));

	// 8_of_diamonds.png
	this.instance_44 = new lib.Symbol45();
	this.instance_44.parent = this;
	this.instance_44.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({regX:51.7,x:51.7},0).wait(84).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(61));

	// 6_of_spades.png
	this.instance_45 = new lib.Symbol46();
	this.instance_45.parent = this;
	this.instance_45.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({regX:51.7,x:51.7},0).wait(86).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(59));

	// 2_of_spades.png
	this.instance_46 = new lib.Symbol47();
	this.instance_46.parent = this;
	this.instance_46.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1).to({regX:51.7,x:51.7},0).wait(88).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(57));

	// queen_of_hearts2.png
	this.instance_47 = new lib.Symbol48();
	this.instance_47.parent = this;
	this.instance_47.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1).to({regX:51.7,x:51.7},0).wait(90).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(55));

	// 9_of_clubs.png
	this.instance_48 = new lib.Symbol49();
	this.instance_48.parent = this;
	this.instance_48.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1).to({regX:51.7,x:51.7},0).wait(92).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(53));

	// 9_of_hearts.png
	this.instance_49 = new lib.Symbol50();
	this.instance_49.parent = this;
	this.instance_49.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1).to({regX:51.7,x:51.7},0).wait(94).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(51));

	// 2_of_diamonds.png
	this.instance_50 = new lib.Symbol51();
	this.instance_50.parent = this;
	this.instance_50.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1).to({regX:51.7,x:51.7},0).wait(96).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(49));

	// 6_of_hearts.png
	this.instance_51 = new lib.Symbol52();
	this.instance_51.parent = this;
	this.instance_51.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(1).to({regX:51.7,x:51.7},0).wait(98).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.1},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.4},0).wait(1).to({x:623.2},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.7},0).wait(1).to({x:774.5},0).wait(1).to({x:791.3},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.8},0).wait(1).to({x:942.6},0).wait(1).to({x:959.4},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.1},0).wait(1).to({x:1093.9},0).wait(1).to({x:1110.7},0).wait(1).to({x:1127.5},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.4},0).wait(47));

	// 4_of_clubs.png
	this.instance_52 = new lib.Symbol53();
	this.instance_52.parent = this;
	this.instance_52.setTransform(51.6,75,1,1,0,0,0,51.6,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(1).to({regX:51.7,x:51.7},0).wait(100).to({x:68.5},0).wait(1).to({x:85.3},0).wait(1).to({x:102.1},0).wait(1).to({x:118.9},0).wait(1).to({x:135.8},0).wait(1).to({x:152.6},0).wait(1).to({x:169.4},0).wait(1).to({x:186.2},0).wait(1).to({x:203},0).wait(1).to({x:219.8},0).wait(1).to({x:236.6},0).wait(1).to({x:253.4},0).wait(1).to({x:270.2},0).wait(1).to({x:287.1},0).wait(1).to({x:303.9},0).wait(1).to({x:320.7},0).wait(1).to({x:337.5},0).wait(1).to({x:354.3},0).wait(1).to({x:371.1},0).wait(1).to({x:387.9},0).wait(1).to({x:404.7},0).wait(1).to({x:421.5},0).wait(1).to({x:438.3},0).wait(1).to({x:455.2},0).wait(1).to({x:472},0).wait(1).to({x:488.8},0).wait(1).to({x:505.6},0).wait(1).to({x:522.4},0).wait(1).to({x:539.2},0).wait(1).to({x:556},0).wait(1).to({x:572.8},0).wait(1).to({x:589.6},0).wait(1).to({x:606.5},0).wait(1).to({x:623.3},0).wait(1).to({x:640.1},0).wait(1).to({x:656.9},0).wait(1).to({x:673.7},0).wait(1).to({x:690.5},0).wait(1).to({x:707.3},0).wait(1).to({x:724.1},0).wait(1).to({x:740.9},0).wait(1).to({x:757.8},0).wait(1).to({x:774.6},0).wait(1).to({x:791.4},0).wait(1).to({x:808.2},0).wait(1).to({x:825},0).wait(1).to({x:841.8},0).wait(1).to({x:858.6},0).wait(1).to({x:875.4},0).wait(1).to({x:892.2},0).wait(1).to({x:909},0).wait(1).to({x:925.9},0).wait(1).to({x:942.7},0).wait(1).to({x:959.5},0).wait(1).to({x:976.3},0).wait(1).to({x:993.1},0).wait(1).to({x:1009.9},0).wait(1).to({x:1026.7},0).wait(1).to({x:1043.5},0).wait(1).to({x:1060.3},0).wait(1).to({x:1077.2},0).wait(1).to({x:1094},0).wait(1).to({x:1110.8},0).wait(1).to({x:1127.6},0).wait(1).to({x:1144.4},0).wait(1).to({x:1161.2},0).wait(1).to({x:1178},0).wait(1).to({x:1194.8},0).wait(1).to({x:1211.6},0).wait(1).to({x:1228.5},0).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,75.5,1280,150);
// library properties:
lib.properties = {
	width: 1280,
	height: 151,
	fps: 60,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"/images/cards_atlas_.png", id:"cards_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;