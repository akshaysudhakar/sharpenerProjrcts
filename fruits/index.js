const frm = document.querySelector('form');
const fruit = document.querySelector('.fruits');

//add input element for fruit description
const fruitDescription = document.createElement('input');
const addBtn = document.querySelector('button[type="submit"]');
frm.insertBefore(fruitDescription,addBtn);




// Show the fruit description in italics on the next line




const listItems = fruit.querySelectorAll('li'); 
listItems.forEach((item) => {
    // Create a new button element
    const editButton = document.createElement('button');
    
    // Set the button's text content to 'Edit'
    editButton.textContent = 'Edit';
    
    // Append the button to the list item
    item.appendChild(editButton);
  });

frm.addEventListener('submit',function (event){
    event.preventDefault();
    const newLi = document.createElement('li');
    const fruitToAdd = document.getElementById('fruit-to-add');
    newLi.innerHTML = fruitToAdd.value  + '<button class="delete-btn">x</button></li>' + '<button>edit</button' ;
    fruit.appendChild(newLi);
    const descriptionText = document.createTextNode(fruitDescription.value);
    const fruitDescriptionPara = document.createElement('p');
    fruitDescriptionPara.appendChild(descriptionText);
    fruitDescriptionPara.style.textAlign = 'center';
    fruitDescriptionPara.style.fontStyle = 'italic'


    newLi.appendChild(fruitDescriptionPara);

    console.log(event.target)
    console.log(fruitDescriptionPara);
})

fruit.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete  = event.target.parentElement;
        fruit.removeChild(fruitToDelete);
    }
})


// adding filter functionality
const filter = document.getElementById('filter');

filter.addEventListener( 'keyup' , function(event){
    searchText = event.target.value.toLowerCase();
    fruitsList = document.getElementsByClassName('fruit');
    for(let i = 0; i<fruitsList.length; i++){
        const currentFruitText = fruitsList[i].firstChild.textContent.toLowerCase();
        if (currentFruitText.indexOf(searchText)=== -1){
            fruitsList[i].style.display = 'none';
        }
        else{
            fruitsList[i].style.display = 'flex';
        }
    }
});




