function preprocesa()
{
	var entrada = document.getElementById("entrada").value;
	entrada=entrada.split("\n");
	var demanda=entrada[entrada.length-1];
	demanda=demanda.split(",");
	entrada.pop();
	var oferta = new Array();
	var costos= new Array();
	for(var i=0; i<entrada.length;i++)
	{
		entrada[i]=entrada[i].split("|");
		oferta.push(entrada[i][1]);
		costos.push(entrada[i][0]);
		entrada[i].pop()
	}
	for(i=0;i<costos.length;i++)
	costos[i]=costos[i].split(",");

	var sumOferta=sumDemanda=0;
	for(var i=0; i<oferta.length;i++)
		sumOferta+= parseInt(oferta[i]);
		
	for(var i=0; i<demanda.length;i++)
		sumDemanda+= parseInt(demanda[i]);	
		
	alert (sumOferta+" "+ sumDemanda);
	
	var equilibrio= sumOferta - sumDemanda

	if(equilibrio==0)
	{
		alert("problema equilibrado")
	}
	else
	{
		if(equilibrio>0){
		
				for(i=0;i<costos.length;i++)
					costos[i].push(0);
				demanda.push(equilibrio);
				alert("oferta excedente")
		} else{
		var ceros= new Array();
		while(ceros.length<costos.length)
		ceros.push(0);
		costos.push(ceros)
		alert("demanda excedente")
		}
	}
	return(costos,oferta,demanda)
}
