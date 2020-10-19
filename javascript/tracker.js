const getfloatIcon = document.getElementsByClassName('float-icon');

getfloatIcon[0].addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

const getClosebtn = document.getElementsByClassName('close');

getClosebtn[0].addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

var form = document.getElementById('diaryForm');
function handleForm(event) { 
    if(document.getElementById('diary-content').value.length < 20){
        alert('Not Enough');
        event.preventDefault(); 
    }else{
        alert(currentToDateString.textContent + document.getElementById('diary-content').value);
    }
    
} 
form.addEventListener('submit', handleForm);

setInterval(() => {
    console.log(document.getElementById('diary-content').value.length);
}, 1000);