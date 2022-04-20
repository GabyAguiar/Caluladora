alert('Faça seu cálculo aqui!')
function somar(){
	let n1 = parseFloat( document.getElementById("n1").value)
	let n2 = parseFloat( document.getElementById("n2").value)
	alert("Resultado "+(n1+n2))
}
function subtracao(){
	let n3 = parseFloat( document.getElementById("n3").value)
	let n4 = parseFloat( document.getElementById("n4").value)
	alert("Resultado "+(n3-n4))
}
function multiplicacao(){
	let n5 = parseFloat( document.getElementById("n5").value)
	let n6 = parseFloat( document.getElementById("n6").value)
	alert("Resultado "+(n5*n6))
}
function divisao(){
	let n7 = parseFloat( document.getElementById("n7").value)
	let n8 = parseFloat( document.getElementById("n8").value)
	alert("Resultado "+(n7/n8))
}
function percentual(){
	let n9 = parseFloat( document.getElementById("n9").value)
	let n10 = parseFloat( document.getElementById("n10").value)
	alert("Resultado "+(n9*n10/100))
}