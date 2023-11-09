var storiesScroll = document.getElementById("stories");
var buttonScrollR = document.getElementById("stories_scrollR");
var buttonScrollL = document.getElementById("stories_scrollL");


buttonScrollR.addEventListener('click',function (){
    storiesScroll.scrollLeft += 230;
    ButtonVisibleControler();
});


buttonScrollL.addEventListener('click',function (){
    storiesScroll.scrollLeft -= 230;
    ButtonVisibleControler();
});


function ButtonVisibleControler(){
    const maxScrollWidth = storiesScroll.scrollWidth - storiesScroll.clientWidth;
    buttonScrollL.style.display = storiesScroll.scrollLeft >= 5 ? 'block' : 'none';
    buttonScrollR.style.display = storiesScroll.scrollLeft <= maxScrollWidth-5? 'block' : 'none';

}

