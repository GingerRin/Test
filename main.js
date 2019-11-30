var seq = 0
var idols = new Array()
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

var imgSet = new Array(
	'resources/Haruka.png',
	'resources/Chihaya.png',
	'resources/Makoto.png',
	'resources/Yukiho.png',
	'resources/Iori.png',
	'resources/Yayoi.png',
	'resources/Ritsuko.png',
	'resources/AmiMami.png',
	'resources/Azusa.png',
	'resources/Miki.png',
	'resources/Takane.png',
	'resources/Hibiki.png'
	)


function loadStuffs(){	

	for (var i=0; i<imgSet.length; i++) {
		idols[i] = new Image()
		idols[i].src = imgSet[i]
		console.log('image '+i+' loaded')
	}

/*	for (var i=0; i<playlist.length; i++) {
		audio.src = playlist[i]
		audio.load()
		console.log('audio '+i+' loaded')
	}*/
}


function preloadAudio(track){
	var audio = new Audio()
	audio.addEventListener('canplaythrough', loadedAudio, false)
	audio.src = track
}

var loaded = 0
function loadedAudio(){
	loaded++
	if(loaded==playlist.length){
		init();
	}
}

for (var i in playlist){
	preloadAudio(playlist[i])
}

var player = document.getElementById('player')

function play(){
	switch(seq){
	case 4:
		document.getElementById("leftImg").src = idols[2].src
		document.getElementById("rightImg").src = idols[3].src
		break
	case 8:
		document.getElementById("leftImg").src = idols[4].src
		document.getElementById("rightImg").src = idols[5].src
		break
	case 13:
		document.getElementById("leftImg").src = idols[6].src
		document.getElementById("rightImg").src = idols[7].src
		break
	case 19:
		document.getElementById("leftImg").src = idols[8].src
		document.getElementById("rightImg").src = idols[9].src
		break
	case 21:
		document.getElementById("leftImg").src = idols[10].src
		document.getElementById("rightImg").src = idols[11].src
	}

	if(seq<=23){
	player.src = playlist[seq]
	player.play();
	seq ++;}
}

function init(){
	console.log('audio loaded')
}

document.getElementById("screen").addEventListener("click", play)