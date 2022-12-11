


function afficher_pop_up(recyc_question_icon){
    const help_recyc = document.getElementById('recyc-question_icon');
    const help_avoir = document.getElementById('avoid-question_icon');
    const help_both = document.getElementById('both-question_icon');
    
    var pop_up1 = document.getElementById('pop-up_box1');
    var pop_up2 = document.getElementById('pop-up_box2');
    var pop_up3 = document.getElementById('pop-up_box3');

    help_recyc.addEventListener('click', event => { pop_up1.style.display = "block" ;
                                                    pop_up2.style.display = "none";
                                                    pop_up3.style.display = "none"});

    help_avoir.addEventListener('click', event => { pop_up2.style.display = "block";
                                                    pop_up1.style.display = "none";
                                                    pop_up3.style.display = "none"});
    help_both.addEventListener('click', event => { pop_up3.style.display = "block";
                                                   pop_up2.style.display = "none";
                                                   pop_up1.style.display = "none"});

}



function cacher_pop_up(){
    var pop_up = document.getElementById('pop-up_box1');
    var pop_up2 = document.getElementById('pop-up_box2');
    var pop_up3 = document.getElementById('pop-up_box3');

    pop_up.style.display = 'none';
    pop_up2.style.display = 'none';
    pop_up3.style.display = 'none';
}