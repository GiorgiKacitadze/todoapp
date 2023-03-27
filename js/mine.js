
let form = document.querySelector('form');
let addButton = document.getElementById('add-btn');
let list = document.getElementById('list');

//  ინუთის მნიშვნელობას ვღებულოთ და ამ ინფუთის მნიშვნელობას ვანიჭებთ ახალ ელემენტს რომელიც უნდა შეიქმნას list ში და ვამატებთ სპანს ასევე დამატების მერე სუფთავდება ინფუთის ტექსტი,
addButton.addEventListener('click', add);

function add(){
    
    let newitemvalue = document.getElementById('new-item').value;
    let newitem = document.createElement('li');
    newitem.innerHTML = newitemvalue;

    newitem.classList.add('arn')
    

    let span = document.createElement('span')

    span.innerHTML = '<i class="fa-solid fa-trash"></i>'



    
    
   
    
    
    document.getElementById('new-item').value = "";
    


    list.appendChild(newitem)

    newitem.appendChild(span)


    
// ურნაზე დაკლიკების შედაგად იშლება Li ელემენტი
   span.addEventListener('click', function(){
    list.removeChild(newitem)
   })



// ტექსტზე დაკლიკებით ხაზი გადაესმება ტექსტ
    newitem.addEventListener('click', function() {
        
            newitem.classList.add('remove');
            
        
    });


    


    
}

// ვუთიშავთ ინფუთს გვერდის დარეფრეშების ფუნქციას
form.addEventListener('submit', function(event) { 
    event.preventDefault(); 
});

















