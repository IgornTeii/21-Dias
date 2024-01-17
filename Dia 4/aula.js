//escopo global
let idade = Number(prompt('Qual sua idade ?'))
let nome = prompt('Qual seu nome ?')
//  == comparação | != diferente | > maior que | < menor que | <= menor igual que | >= maior igual que
// === é igual o valor e o tipo | !== é diferente o valor e o tipo

//escopo 
if(idade === 19 && nome === 'Igor' ){
  console.log('Seu nome é Igor e tem 19 anos')
}else if(idade === 19 || nome == 'Igor'){
  console.log('Seu nome é Igor OU tem 19 anos')
}else{
  console.log('Seu nome não é Igor e você não tem 19 anos')
}