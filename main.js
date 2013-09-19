function preprocesa()
{
	var entrada = document.getElementById("entrada").value;
	entrada=entrada.split("\n");
	for(var i=0;i<entrada.length;i++){
	  entrada[i]=entrada[i].split(" ")
	}
	
	var oferta= new Array(),demanda= new Array(),ofertaSum=0, demandaSum=0;
	for(i=0;i<entrada.length-1;i++)
	{
		oferta.push(parseInt(entrada[i][entrada[i].length-1]));
		ofertaSum+=parseInt(entrada[i][entrada[i].length-1]);
		entrada[i].pop();
	}
	alert(ofertaSum)
	var tam= entrada.length;
	for(i=0;i<tam;i++)
	{
		demanda.push(parseInt(entrada[tam-1][i]));
		demandaSum+=parseInt(entrada[tam-1][i]);
		entrada.pop();
	}
	alert(demandaSum)
	
/*
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
		}
	}
	else
	{
		print("ola");
	}
*/	
	for(i=0;i<entrada.length;i++)
	alert(entrada[i])
	
}
