const $itemAdder = document.querySelector("[data-js='add-item']");
const $sendButton = document.querySelector("[data-js='send-button']");
const $list = document.querySelector("[data-js='list']");
const $item = document.getElementsByTagName("li");




$sendButton.addEventListener('click',addItem);


function addItem(){
  
    let newItem = document.createElement('li');
    
    if($itemAdder.value){
      
      newItem.innerText = $itemAdder.value;
      $itemAdder.value = '';
  
      let rmImage = document.createElement('img');
      rmImage.srcset = 'assets/Lixo.png';
      
      $list.appendChild(newItem);
      newItem.appendChild(rmImage);
      
      function removeItem(){
        newItem.remove();
      };
      
      function doneItem(){
        newItem.classList.toggle('done');
      };
      
      
      newItem.addEventListener('dblclick',doneItem);
      
      return rmImage.addEventListener('click', removeItem);
    };
    
    window.alert('O item não pode estar em branco, por favor insira um item válido!');
};

