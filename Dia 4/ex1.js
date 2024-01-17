let fome = prompt('Você esta com fome?')
let dinheiro = prompt('Você tem dinheiro?')
let restaurante = prompt('Seu restaurante preferido esta aberto?')

if(fome === 'não' || dinheiro === 'não'){
  console.log('Hoje a janta será em casa')
}else if(dinheiro == 'sim' && restaurante === 'sim'){
  console.log('Hoje o jantar será no seu restaurante preferido!')
}else{
  console.log('Peça um delivery')
}