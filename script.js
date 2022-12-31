const tabLinks = document.getElementsByClassName('tab-links');
const tabcontents =  document.getElementsByClassName('tab-contents');

function opentab(tabname){
    
    for( let tablink of tabLinks){
        tablink.classList.remove('active-link');
    }

    for ( let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');

    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
    

}

const message = document.getElementById('message');

form.addEventListener('submit',()=>{
    message.innerText = 'message sent sucessfully';
    setTimeout(function(){
        message.innerText = '';
    },5000);
    form.reset();
})

