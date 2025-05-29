function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  if(idade > 1){
    return true
  }else if(porte == "M"){
    return true
  }
  else{
    return false
  }
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300
}

function decidirTipoDeAtividadePorPorte(porte) {
  if(porte == "pequeno"){
    return "brincar dentro de casa"
  }
  else if(porte == "medio"){
    return "caminhada no quarteirão"
  }
  else if(porte == "grande"){
    return "correr no parque"
  }
  else {
    return "porte inválido"
  }
}

async function buscarDadoAsync() {
  return 'Pipoca';
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};