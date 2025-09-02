
var popupsToggle = document.querySelectorAll('.open-popup'),
	popupsClose = document.querySelectorAll('.close'),
	button = document.querySelectorAll('#want'),
	details = document.querySelectorAll('#detail');  
	popupsToggle.forEach(function(item){
		item.addEventListener('click',function(){
			var popupName = item.getAttribute('data-popup');
			document.getElementById(popupName).style.display = "block";
		})
	})
		popupsClose.forEach(function(item){
		item.addEventListener('click',function(){
			var popup = item.closest('.popup');
			popup.style.display = "none";
		})
	})
		button.forEach(function(item){
			item.addEventListener('click',function(){
				var popup = item.closest('.popup');
				popup.style.display = "none";
				event.preventDefault();
				var id = $(this).attr('href'),
				top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 500);
      })
	})		
	window.onclick = function(e) {
		if (e.target.classList.contains('popup')) {
			e.target.style.display = "none";
		}
 };
 function docircle() {
 	var tel = document.querySelector('.contact__number');
 	 tel.onmouseover = function(){
 		var img = document.querySelector('.contact__imgblock');
 		img.style.background = "#343434";
 	}
 	tel.onmouseout = function(){
 		var img = document.querySelector('.contact__imgblock');
 		img.style.background = "none";	
 	}
 }
docircle();
	var song = document.querySelector('#track');
	var fillBar = document.getElementById("fill");
	var bar = document.getElementById("seek-bar");
	var lens = document.getElementById("lensr");
	var barSize=1;
	if (document.documentElement.clientWidth < 740) {
		 barSize =(30.2/100) * document.documentElement.clientWidth ;
		}
		 else { 	
		  barSize =(5.2/100) * document.documentElement.clientWidth ;
		 	 		 }
	var currentTime = document.getElementById("currentTime");
	// var song = new Audio();
	var currentSong = 0;
	var duration = document.getElementById("Totaltime");
	function PlayOrPauseSong() {
		if (song.paused) {
			song.play();
			$("#play img").attr("src","pause.png");
		}
		else {
			song.pause();
			$("#play img").attr("src","play.png");
		}
	}
		// window.onclick = function(e) {
		// if (e.target.classList.contains('style-audiojs')) {
		// 	song.pause();
		// 	$("#play img").attr("src","play.png");
		// }

	song.addEventListener('timeupdate',function(){
		var position = song.currentTime / song.duration;
		fillBar.style.width = position * 100+'%';
		convertTime(Math.round(song.currentTime));
	});
	function convertTime(seconds){
		var min = Math.floor(seconds/60);
		var sec= seconds % 60;
		min = (min < 10) ? "0" + min : min;
		sec = (sec < 10) ? "0"  + sec : sec;
		currentTime.textContent = min + ":" + sec;
		totalTime(Math.round(song.duration));
	}
	function totalTime(seconds) {
		var min = Math.floor(seconds/60);
		var sec= seconds % 60;
	}
	bar.addEventListener('click',function(e){
			if(!song.ended){
				var mouseX = e.pageX - bar.offsetLeft - lens.offsetLeft;
				var newtime = mouseX * song.duration/barSize;
				song.currentTime = newtime;
				fillBar.style.width = mouseX + 'px';	
			}		
	});
		var song1 = document.querySelector('#track1');
	var fillBar1 = document.getElementById("fill1");
	var bar1 = document.getElementById("seek-bar1");
	var lens1 = document.getElementById("lensr1");
	var barSize1=1;
	if (document.documentElement.clientWidth < 740) {
		 barSize1 =(30.2/100) * document.documentElement.clientWidth ;
		}
		 else { 	
		  barSize1 =(5.2/100) * document.documentElement.clientWidth ;
		 	 		 }
	var currentTime1 = document.getElementById("currentTime1");
	var currentSong1 = 0;
	var duration1 = document.getElementById("Totaltime1");
	function PlayOrPauseSong1() {
		if (song1.paused) {
			song1.play();
			$("#play1 img").attr("src","pause.png");
		}
		else {
			song1.pause();
			$("#play1 img").attr("src","play.png");
		}
	}
	song1.addEventListener('timeupdate',function(){
		var position1 = song1.currentTime / song1.duration;
		fillBar1.style.width = position1 * 100+'%';
		convertTime1(Math.round(song1.currentTime));
	});
	function convertTime1(seconds){
		var min1 = Math.floor(seconds/60);
		var sec1= seconds % 60;
		min1 = (min1 < 10) ? "0" + min1 : min1;
		sec1 = (sec1 < 10) ? "0"  + sec1 : sec1;
		currentTime1.textContent = min1 + ":" + sec1;
		totalTime1(Math.round(song1.duration));
	}
	function totalTime1(seconds) {
		var min1 = Math.floor(seconds/60);
		var sec1= seconds % 60;
	}
	bar1.addEventListener('click',function(e){
			if(!song1.ended){
				var mouseX1 = e.pageX - bar1.offsetLeft - lens1.offsetLeft;
				var newtime1 = mouseX1 * song1.duration/barSize1;
				song1.currentTime = newtime1;
				fillBar1.style.width = mouseX1 + 'px';	
			}		
	});


	var song2 = document.querySelector('#track2');
	var fillBar2 = document.getElementById("fill2");
	var bar2 = document.getElementById("seek-bar2");
	var lens2 = document.getElementById("lensr2");
	var barSize2=1;
	if (document.documentElement.clientWidth < 740) {
		 barSize2 =(30.2/100) * document.documentElement.clientWidth ;
		}
		 else { 	
		  barSize2 =(5.2/100) * document.documentElement.clientWidth ;
		 	 		 }
	var currentTime2 = document.getElementById("currentTime2");
	var currentSong2 = 0;
	var duration2 = document.getElementById("Totaltime2");
	function PlayOrPauseSong2() {
		if (song2.paused) {
			song2.play();
			$("#play2 img").attr("src","pause.png");
		}
		else {
			song2.pause();
			$("#play2 img").attr("src","play.png");
		}
	}
	song2.addEventListener('timeupdate',function(){
		var position2 = song2.currentTime / song2.duration;
		fillBar2.style.width = position2 * 100+'%';
		convertTime2(Math.round(song2.currentTime));
	});
	function convertTime2(seconds){
		var min2 = Math.floor(seconds/60);
		var sec2= seconds % 60;
		min2 = (min2 < 10) ? "0" + min2 : min2;
		sec2 = (sec2 < 10) ? "0"  + sec2 : sec2;
		currentTime2.textContent = min2 + ":" + sec2;
		totalTime2(Math.round(song2.duration));
	}
	function totalTime2(seconds) {
		var min2 = Math.floor(seconds/60);
		var sec2= seconds % 60;
	}
	bar2.addEventListener('click',function(e){
			if(!song2.ended){
				var mouseX2 = e.pageX - bar2.offsetLeft - lens2.offsetLeft;
				var newtime2 = mouseX2 * song2.duration/barSize2;
				song2.currentTime = newtime2;
				fillBar2.style.width = mouseX2 + 'px';	
			}		
	});

var song3 = document.querySelector('#track3');
	var fillBar3 = document.getElementById("fill3");
	var bar3 = document.getElementById("seek-bar3");
	var lens3 = document.getElementById("lensr3");
	var barSize3=1;
	if (document.documentElement.clientWidth < 740) {
		 barSize3 =(30.2/100) * document.documentElement.clientWidth ;
		}
		 else { 	
		  barSize3 =(5.2/100) * document.documentElement.clientWidth ;
		 	 		 }
	var currentTime3 = document.getElementById("currentTime3");
	var currentSong3 = 0;
	var duration3 = document.getElementById("Totaltime3");
	function PlayOrPauseSong3() {
		if (song3.paused) {
			song3.play();
			$("#play3 img").attr("src","pause.png");
		}
		else {
			song3.pause();
			$("#play3 img").attr("src","play.png");
		}
	}
	song3.addEventListener('timeupdate',function(){
		var position3 = song3.currentTime / song3.duration;
		fillBar3.style.width = position3 * 100+'%';
		convertTime3(Math.round(song3.currentTime));
	});
	function convertTime3(seconds){
		var min3 = Math.floor(seconds/60);
		var sec3= seconds % 60;
		min3 = (min3 < 10) ? "0" + min3 : min3;
		sec3 = (sec3 < 10) ? "0"  + sec3 : sec3;
		currentTime3.textContent = min3 + ":" + sec3;
		totalTime3(Math.round(song3.duration));
	}
	function totalTime3(seconds) {
		var min3 = Math.floor(seconds/60);
		var sec3= seconds % 60;
	}
	bar3.addEventListener('click',function(e){
			if(!song3.ended){
				var mouseX3 = e.pageX - bar3.offsetLeft - lens3.offsetLeft;
				var newtime3 = mouseX3 * song3.duration/barSize3;
				song3.currentTime = newtime3;
				fillBar3.style.width = mouseX3 + 'px';	
			}		
	});








