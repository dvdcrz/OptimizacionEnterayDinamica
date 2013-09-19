function preprocesa()
{
	var entrada = document.getElementById("entrada").value;
	entrada=entrada.split("\n");
	for(var i=0;i<entrada.length;i++){
	  entrada[i]=entrada[i].split(" ")
	}
	
	var oferta=demanda=0;
	for(i=0;i<entrada.length-1;i++)
		oferta+=parseInt(entrada[i][entrada[i].length-1])
	alert(oferta)
	for(i=0;i<entrada[entrada.length-1].length;i++)
		demanda+=parseInt(entrada[entrada.length-1][i])
	alert(demanda)

	if(oferta>demanda)
	{
		for(i=0;i<entrada.length;i++)
		{
			entrada[i].splice(entrada.length-1, 0, 0);
		}
		entrada[entrada.length-1][entrada.length-1]=oferta-demanda
	}
	else if (oferta<demanda) {
		entrada.splice(entrada.length-1,0,0);
		entrada[entrada.length-1].push(0)
		/*while(5 > entrada[entrada.length-1].length )
		{
			entrada[entrada.length-2].push(0)
		}*/
	}
	else
	{
		print("ola");
	}
	
	for(i=0;i<entrada.length;i++)
	alert(entrada[i])
	
}
