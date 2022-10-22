//delete:


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
        sum()
       
    })
  
}

//changement de couleur 

let hearts=document.getElementsByClassName('fa-heart');
console.log(hearts, 'hearts')

for(let colors of hearts){
    colors.addEventListener('click', function(){
        if(colors.style.color === 'gray'){
            colors.style.color='red'
        }else{
            colors.style.color = 'gray'
        }
    })
}


//add element
//computer ajout +1

let plusBtn = document.getElementsByClassName('btn-plus');

console.log(plusBtn);
for (let plus of plusBtn) {
    plus.addEventListener('click', function() {
        plus.previousElementSibling.innerText++;
        sum()
    })
}

//diminuer -1

let moinsBtn = document.getElementsByClassName('btn-moins');
for (let moins of moinsBtn){
    moins.addEventListener('click', function(){
        
        if (moins.nextElementSibling.innerText > 0){
            moins.nextElementSibling.innerText--;
            sum()
        }})
}

// prix total du panier

function sum(){
let qnt =(Array.from(document.getElementsByClassName('quantity')))

let pr =(Array.from(document.getElementsByClassName('prx')))

let sum = 0;
for (i = 0; i < qnt.length; i++){
sum += qnt[i].innerHTML * pr[i].innerHTML
}
return document.getElementById("prix-total").innerHTML = sum
}




