function converter(){
	var galeao = document.getElementById ('entrada').value
	var real = 137.50
	var result1 = galeao * real
	document.getElementById ('saida').value = result1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}