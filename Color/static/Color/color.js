document.addEventListener("DOMContentLoaded", function(){
    function color(op){
        let h= document.querySelector("#hello");

        if(op === 'red'){
            h.style.color= 'red';
        }
        if(op === 'blue'){
            h.style.color= 'blue';
        }
        if(op === 'green'){
            h.style.color= 'green';
        }
    }

    document.querySelector('#redB').addEventListener('click', function(){
        op('red')
    })
    document.querySelector('#blueB').addEventListener('click', function(){
        op('blue')
    })
    document.querySelector('#greenB').addEventListener('click', function(){
        op('green')
    })
})