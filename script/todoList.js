let todoList=[];
    displayTODOList();
    function displayTODOList(){
      let htmltodoList='';
      for(let i=0;i<todoList.length;i++){
       let html=`
       <div class="todoList-grid">
        <div>
        ${todoList[i].name}
        </div>
        <div>
        ${todoList[i].date}
        </div>
        <button class="css-delete js-button-delete">Delete</button> 
        </div>
       `;
        htmltodoList+=html;
      }
      document.querySelector('.todolist').innerHTML=htmltodoList;
      const buttonElement=document.querySelectorAll('.js-button-delete');
      buttonElement.forEach((value,index)=>{
        value.addEventListener('click',()=>{
          todoList.splice(index,1);
          displayTODOList();
         })});
    }
    function addToDoList(){
      const htmlElement=document.querySelector('.js-input-value');
      const dateInput=document.querySelector('.js-input-date');
      todoList.push({name:htmlElement.value,date:dateInput.value}); 
      htmlElement.value='';
      displayTODOList();
    }
    