const fields = document.querySelectorAll('[required]');
console.log(fields);

for(field of fields){
  field.addEventListener('invalid',e =>{
    console.log('campo inválido');
    

    function verifyErrors(){
      let foundError = false;

      for(const error in field.validity){
        //se não for customError
        //Então verifica se tem erro
        if(error != "customError" && field.validity[error]){
          foundError = error;
        }
      }
      return foundError;
    }
    const error = verifyErrors();
    console.log(error);

    if(error){
      //trocar mensagem do required
      e.target.setCustomValidity('Esse campo é obrigatório!');
    }else{
      field.setCustomValidity("");
    }
  })
}









document.querySelector('form').addEventListener('submit', e =>{
  //formulário não será enviado
  e.preventDefault();
})