	(function(){
		var presentationwrapper = document.createElement("div");
		var presentationclose = document.createElement("div");
		var presentationcontainer = document.createElement("div");
		presentationwrapper.id = "presentation-wrapper";
		presentationclose.id = "presentation-close";
		presentationclose.innerHTML = "X";
		presentationcontainer.id = "presentation-container";
		presentationwrapper.appendChild(presentationclose);
		presentationwrapper.appendChild(presentationcontainer);
		document.getElementsByTagName("BODY")[0].appendChild(presentationwrapper);
		document.getElementById("presentation-container").addEventListener('click', function(e){
			if(e.target.tagName.toLowerCase() != "img"){
				presentationClose();
			}else{
				e.stopPropagation();
			}
		});
		document.getElementById("presentation-close").addEventListener('click', function(){
			presentationClose();
		});
		var allimgs = document.getElementsByTagName("img");
		for(var i = 0; i < allimgs.length; i++){
			if(allimgs[i].getAttribute("nopresent") == null){
				allimgs[i].addEventListener('click', function(){
					presentationMode(this);
				});
			}
		}
		window.addEventListener("resize", function(){
			if(document.getElementById("presentation-wrapper").classList.contains("presentation-show")){
				var elem = document.getElementById("presentation-container").childNodes[0];
				changePresentSize(elem);
			}
		});
	})();
	
	function presentationClose(){
		document.getElementsByTagName("BODY")[0].style.overflow = "auto";
		document.getElementById("presentation-wrapper").classList.remove("presentation-show");
		document.getElementById("presentation-container").innerHTML = "";
	}
	function presentationMode(img){
		var viewwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var viewheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var showimg = document.createElement("img");
		showimg.src = img.src;
		showimg.style.maxWidth = viewwidth;
		showimg.style.maxHeight = viewheight;
		showimg.classList.add("presentation-image");
		document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
		document.getElementById("presentation-wrapper").classList.add("presentation-show");
		document.getElementById("presentation-container").appendChild(showimg);	
	}
	function changePresentSize(img){
		var viewwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var viewheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		img.style.maxWidth = viewwidth;
		img.style.maxHeight = viewheight;
	}