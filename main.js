function preprocesa()
{
	var entrada = document.getElementById("entrada").value;
	entrada=entrada.split("\n");
	for(var i=0;i<entrada.length;i++){
	  entrada[i]=entrada[i].split(" ")
	}
	//entrada=parseInt(entrada)
	var oferta=demanda=0;
	for(i=0;i<entrada.length-1;i++)
		oferta+=parseInt(entrada[i][entrada[i].length-1])
	alert(oferta)
	for(i=0;i<entrada[entrada.length-1].length;i++)
		demanda+=parseInt(entrada[entrada.length-1][i])
	alert(demanda)	
	if(oferta<demanda)
	alert("ola k ase")
	else 
	alert("k ase ola")
}
