


function afficher_pop_up(recyc_question_icon){
    const button = document.getElementById('recyc-question_icon');
    var pop_up = document.getElementById('pop-up_box');

    button.addEventListener('click', event => { pop_up.style.display = "block"; });
}



function cacher_pop_up(){
    var pop_up =document.getElementById('pop-up_box');

    pop_up.style.display = 'none';
}