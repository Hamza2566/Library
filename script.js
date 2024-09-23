// const cards = document.getElementsByClassName('.cards')
const dialog = document.getElementById('myDialog'); 
const openDialogButton = document.getElementById('openDialog');
const closeDialogButton = document.getElementById('closeDialog');
const Add = document.getElementById('Add');
openDialogButton.addEventListener('click', () => {
    dialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
    dialog.close();
});
openDialogButton.addEventListener('mouseover', () => {
    openDialogButton.style.transform = 'rotate(100deg)';
    openDialogButton.style.width = '80px';
    openDialogButton.style.height = '80px';
});

openDialogButton.addEventListener('mouseout', () => {
    openDialogButton.style.transform = 'rotate(0deg)';
    openDialogButton.style.width = '70px';
    openDialogButton.style.height = '70px';
});
let myLibrary = [];
let clickCount = 0;

Add.addEventListener('click', (handleClick) => {

function handleClick() {
    clickCount++;
    console.log(`Button clicked ${clickCount} times.`);
}
handleClick()

    title = document.querySelector('.input').value,
    author = document.querySelector('.input1').value,
    pages = document.querySelector('.input2').value
    checked = document.querySelector('.input3').checked
   
      const book = { title, author, pages,checked};
      myLibrary.push(book);
      console.log(myLibrary);
    dialog.close();

    function displayBooks() {
        const cardsContainer = document.querySelector('.cards');
        const dialog = document.getElementById('myDialog'); 
        
      
        if (title === '') {
          alert('Please fill the required fields.');
        } else {
          myLibrary.forEach((book) => {
            const card = document.createElement('div');
            cardsContainer.appendChild(card);
            card.classList.add('card',`card${clickCount}`);
            card.innerHTML = `
              <h2>${book.title}</h2>
              <p>Author: ${book.author}</p>
              <p>Pages: ${book.pages}</p>
              <p>Read: ${book.checked ? 'Yes' : 'No'}</p>
              <button class="delete">Delete</button>
            `;
            const deleteButton = card.querySelector('.delete');
            deleteButton.addEventListener('click', (event) => {
                console.log(event.target);
                const card = event.target.parentNode;
                cardsContainer.removeChild(card);


                 
               
                
            });
          });
        }

    
      
      }
displayBooks();
myLibrary.length = 0;

    });
   





    

  
  
    
    
   

