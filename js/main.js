const campoCep = document.querySelector('#cep');

async function getCep(cep){
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const responseHTML = await fetch(url);
  
  const data = await responseHTML.json();

  return data;
}

function preencherCep(dado){
  
  const campoRua = document.querySelector('#street');
  const campoNumero = document.querySelector('#number');
  const campoBairro = document.querySelector('#neighborhood');
  const campoEstado = document.querySelector('#state');
  const campoCidade = document.querySelector('#city');
  
  if(dado != null){
    campoRua.value = dado.logradouro;
    campoNumero.value = dado.complemento;
    campoBairro.value = dado.bairro;
    campoEstado.value = dado.uf;
    campoCidade.value = dado.localidade;
  }else{
    campoRua.value = '';
    campoNumero.value = '';
    campoBairro.value = '';
    campoEstado.value = ''
    campoCidade.value = '';
  }
  
}

campoCep.addEventListener('keyup', async(event) => {
  const cep = event.target.value

  if(cep.length === 8){
    const data = await getCep(cep)

    preencherCep(data);
  }else{
    preencherCep(null);
  }
});




