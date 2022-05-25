function Inizializza () {
	try {
		for (var i in nodoTesti) {
			console.log(i);
			var testo = nodoTesti[i];
			testo.setAttribute('style', 'display : none');
	
		}		
	} catch ( e  ) {
		alert("Inizializza" + e);
	}
}

function On () {
	try{
		nodoTesti[this.id].setAttribute('style', 'display : display');
	

	} catch ( e ) {
		alert("On" + e);
	}
}



var nodoTesti = new Array;
function gestoreLoad () {
	try {
		
		nodoTesti["Titolo1"] = document.getElementById ("Overlay1");
		nodoTesti["Titolo2"] = document.getElementById ("Overlay2");
		nodoTesti["Titolo3"] = document.getElementById ("Overlay3");
		nodoTesti["Titolo4"] = document.getElementById ("Overlay4");
		nodoTesti["Titolo5"] = document.getElementById ("Overlay5");
		nodoTesti["Titolo6"] = document.getElementById ("Overlay6");

		document.getElementById ("Titolo1").onclick = On;
		document.getElementById ("Titolo2").onclick = On; 
		document.getElementById ("Titolo3").onclick = On;
		document.getElementById ("Titolo4").onclick = On; 
		document.getElementById ("Titolo5").onclick = On;
		document.getElementById ("Titolo6").onclick = On; 
	
		document.getElementById ("chiudi").onclick = Inizializza; 
		document.getElementById ("chiudi2").onclick = Inizializza; 
		document.getElementById ("chiudi3").onclick = Inizializza; 
		document.getElementById ("chiudi4").onclick = Inizializza; 
		document.getElementById ("chiudi5").onclick = Inizializza; 
		document.getElementById ("chiudi6").onclick = Inizializza; 	

		Inizializza();  

	} catch (e) {
		alert("GestoreLoad "+ e);
	}
}

window.onload = gestoreLoad;
//window.document.getElementsByClassName ("chiudi").onclick = Inizializza; 


