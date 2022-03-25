const cardList = [    
    {
        title: "Orange",
        image: "images/orange_cut.png",
        link: "About Orange",
        description: "An orange is a fruit of various citrus species in the family Rutaceae."
     },
    {
       title: "Lime",
       image: "images/lime_cut.png",
       link: "About Lime",
       description: "A lime is a citrus fruit, which is typically round, green in color and contains acidic juice vesicles."
    },
    {
        title: "Lemon",
        image: "images/lemon_cut.png",
        link: "About Lemon",
        description: "A lemon is a species of small evergreen trees in the flowering plant family Rutaceae."
    }
]

const clickMe = function() {
    alert("Thanks for clicking me. Hope you have a nice day!")
    }

const addCards = function(items) {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
        '</div><div class="card-content">'+ 
            '<span class="card=title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+'<div class="card-reveal">'+
            '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
            '<p class="card-text grey-text text-darken-4">'+item.description+'</p>'+
            '</div><div></div>';
        $("#card-section").append(itemToAppend)
    });
}

$(document).ready(function(){
        $('.materialboxed').materialbox();
        $('#clickMeButton').click(()=>{
            clickMe();
        })
        addCards(cardList);
    });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
    });

    // Or with jQuery

    $(document).ready(function(){
    $('.modal').modal();
    });