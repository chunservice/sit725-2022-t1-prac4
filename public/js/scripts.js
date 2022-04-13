const clickMe = function() {
    alert("Thanks for clicking me. Hope you have a nice day!")
    }

// jQuery function of getProjects. if the statusCode returning 200, use response.data into addCards. else print on console what the error is.
const getProjects = () => {
    $.get('/api/projects',(response) => {
        if(response.statusCode==200){
            console.log(response)
            addCards(response.data);
        }
        else {
            console.log(response)
        }
    })
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