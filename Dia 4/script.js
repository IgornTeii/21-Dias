let nome = prompt('Qual seu nome?')
let idade = Number(prompt('Qual sua idade?'))
let carta = prompt('Você possui carta?')
let carro = prompt('Você possui carro?')

if(idade < 18 || carta === "nao"){
  console.log(nome + ', você não pode dirigir')
}else if(carta == 'sim' && carro === 'nao'){
  console.log(nome + ', você pode dirigir mas não tem um carro')
}else{
  console.log(nome + ', você será o motorista!')
}

  