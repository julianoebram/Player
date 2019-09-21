var i = 0;
    var musicas =   [
            { mp3:"audio/audio2.mp3"},
            { mp3:"audio/audio3.mp3"},
            { mp3:"audio/audio.mp3"},
             		]; 

audio = document.getElementById("audio");

function pause(){ 
	if(!audio.paused && !audio.ended){
	 audio.pause(); 
	}else{
		audio.play();
	}
}

function playlist(){
	proxima();
}

function proxima(){
	if(audio.canPlayType("audio/mp3") !=""){
		audio.src= musicas[i].mp3;
	}
	audio.play()
	i++;
    if( i >= musicas.length ) i = 0;
}