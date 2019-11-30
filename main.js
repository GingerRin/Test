var seq = 0
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

function preloadAudio(track){
	var audio = new Audio()
	audio.addEventListener('canplaythrough', loadedAudio, false)
	audio.src = track
}

function preloadImage(image){
	var images = new Image()
	images.addEventListener('load', loadedImage, false)
	images.src = image
}

var loaded = 0
function loadedAudio(){
	loaded++
	if(loaded==playlist.length){
		init();
	}
}

var loaded2 = 0
function loadedImage(){
	loaded2++
	if(loaded2==imgSet.length){
		init2();
	}
}

for (var i in playlist){
	preloadAudio(playlist[i])
}

for (var i in imgSet){
	preloadImage(imgSet[i])
}

var player = document.getElementById('player')

function play(){
	switch(seq){
	case 4:
		document.getElementById("leftImg").src = imgSet[2]
		document.getElementById("rightImg").src = imgSet[3]
		break
	case 8:
		document.getElementById("leftImg").src = imgSet[4]
		document.getElementById("rightImg").src = imgSet[5]
		break
	case 13:
		document.getElementById("leftImg").src = imgSet[6]
		document.getElementById("rightImg").src = imgSet[7]
		break
	case 19:
		document.getElementById("leftImg").src = imgSet[8]
		document.getElementById("rightImg").src = imgSet[9]
		break
	case 21:
		document.getElementById("leftImg").src = imgSet[10]
		document.getElementById("rightImg").src = imgSet[11]
	}

	if(seq<=23){
	player.src = playlist[seq]
	player.play();
	seq ++;}
}

function init(){
	console.log('audio loaded i think')
}

function init2(){
	console.log('images loaded i think')
}

document.getElementById("screen").addEventListener("click", play)