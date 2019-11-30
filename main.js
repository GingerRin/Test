var seq = 0;
var audio = new Audio()
var i = 0;
var playlist = new Array(
	'resources/audio/1 Are.mp3',
	'resources/audio/2 You.mp3',
	'resources/audio/3 Rea.mp3',
	'resources/audio/4 dy.mp3',
	'resources/audio/5 Im.mp3',
	'resources/audio/6 a.mp3',
	'resources/audio/7 La.mp3',
	'resources/audio/8 dy.mp3',
	'resources/audio/9 Ha.mp3',
	'resources/audio/10 ji.mp3',
	'resources/audio/11 me.mp3',
	'resources/audio/12 yo.mp3',
	'resources/audio/13 u.mp3',
	'resources/audio/14 Ya.mp3',
	'resources/audio/15 re.mp3',
	'resources/audio/16 ba.mp3',
	'resources/audio/17 De.mp3',
	'resources/audio/18 ki.mp3',
	'resources/audio/19 ru.mp3',
	'resources/audio/20 Kit.mp3',
	'resources/audio/21 to.mp3',
	'resources/audio/22 Zet.mp3',
	'resources/audio/23 ta.mp3',
	'resources/audio/24 i.mp3',
	)

function loadAudio(){	
	for (i; i<playlist.length; i++) {
		audio.src = playlist[i]
		audio.load()
	}
}

audio.oncanplaythrough = function(){
	console.log('audio loaded')
	document.getElementById("loadMessage").innerHTML = "Audio loaded"
};

document.getElementById("screen").addEventListener("click", playSeq)

function playSeq(){
	
	switch(seq){
	case 4:
		document.getElementById("leftImg").src = "resources/Makoto.png"
		document.getElementById("rightImg").src = "resources/Yukiho.png"
		break
	case 8:
		document.getElementById("leftImg").src = "resources/Iori.png"
		document.getElementById("rightImg").src = "resources/Yayoi.png"
		break
	case 13:
		document.getElementById("leftImg").src = "resources/Ritsuko.png"
		document.getElementById("rightImg").src = "resources/AmiMami.png"
		break
	case 19:
		document.getElementById("leftImg").src = "resources/Miki.png"
		document.getElementById("rightImg").src = "resources/Azusa.png"
		break
	case 21:
		document.getElementById("leftImg").src = "resources/Takane.png"
		document.getElementById("rightImg").src = "resources/Hibiki.png"
		break
	}

	if(seq<=23){
	audio.src = playlist[seq]
	audio.play();
	seq ++;}
}