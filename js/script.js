document.addEventListener('click', listenerClick);
window.addEventListener('scroll', listenerScroll);

// при клике на меню(логика) -----------------------------------------------------------------  
function listenerClick (odject) {
    const clickOdject = odject.target;
    
    if(clickOdject.closest('.header__button')){
        document.querySelector('body').classList.toggle('active');

        const clickOdjectParent = clickOdject.closest('.header__button');
        clickOdjectParent.classList.toggle('active');

        clickOdjectParent.closest('.header__burger').classList.toggle('active');

        const lineAll = document.querySelectorAll('.header__line');
        lineAll.forEach(function (line){
            line.classList.toggle('active');
        });

        const linkAll = document.querySelectorAll('.header__link');
        linkAll.forEach(function (link){
            link.classList.toggle('active');
        });

        if(!clickOdject.classList.contains('active')){
            const activeSub = document.querySelectorAll('.active-sub');
            activeSub.forEach(function(activeSubItem){
                activeSubItem.classList.remove('active-sub');
            });
        }
    }

    if(clickOdject.closest('.header__line') && window.innerWidth <= 1020){

        const headerLine = clickOdject.closest('.header__line');
        const headerLink = headerLine.querySelector('.header__link');

        if(headerLink.classList.contains('_sub')){
            headerLine.classList.toggle('active-sub');
        }
        
        const listSubAll = headerLine.querySelectorAll('.header__list-sub');
        listSubAll.forEach(function (listSub){
            listSub.classList.toggle('active-sub');
        });

        const lineSubAll = headerLine.querySelectorAll('.header__line-sub');
        lineSubAll.forEach(function (lineSub){
            lineSub.classList.toggle('active-sub');
        });

        const linkSubAll = headerLine.querySelectorAll('.header__link-sub');
        linkSubAll.forEach(function (linkSub){
            linkSub.classList.toggle('active-sub');
        });

    }

}

// hover ----------------------------------------------------------------------------------------
const hoverAll = document.querySelectorAll('._sub');

hoverAll.forEach(function (hover){
hover.addEventListener('mouseover', hoverOver);
hover.addEventListener('mouseout', hoverOut);
console.log(hover);
});

function hoverOver (hover){
    const width = window.innerWidth;
    console.log('оно= ', width);

    //оно=1
    if(width > 1020){
        console.log('оно=1');
    const over = hover.target;

    const overParent = over.closest('.header__line');

    const overListSub = overParent.querySelector('.header__list-sub');
    overListSub.classList.add('hover-sub');

    overListSub.addEventListener('mouseover', hoverOverSub);
    overListSub.addEventListener('mouseout', hoverOutSub);


    function hoverOverSub (e){
        console.log('оно=2');
        const overLineSub = overParent.querySelectorAll('.header__line-sub');
        overListSub.classList.add('hover-sub');
        overLineSub.forEach(function(e){
            e.classList.add('hover-sub');
        });
    
        const overLinkSub = overParent.querySelectorAll('.header__link-sub');
        overLinkSub.forEach(function(e){
        e.classList.add('hover-sub');
        });
    }

    function hoverOutSub (e){
        const overLineSub = overParent.querySelectorAll('.header__line-sub');
        overListSub.classList.remove('hover-sub');
        overLineSub.forEach(function(e){
            e.classList.remove('hover-sub');
        });
    
        const overLinkSub = overParent.querySelectorAll('.header__link-sub');
        overLinkSub.forEach(function(e){
        e.classList.remove('hover-sub');
        });
    }

    const overLineSub = overParent.querySelectorAll('.header__line-sub');
    overLineSub.forEach(function(e){
        e.classList.add('hover-sub');
    });

    const overLinkSub = overParent.querySelectorAll('.header__link-sub');
    overLinkSub.forEach(function(e){
    e.classList.add('hover-sub');
    });
    }
}

function hoverOut (hover){
    console.log('оно=3');
    const out = hover.target;
    const outParent = out.closest('.header__line');

    const outListSub = outParent.querySelector('.header__list-sub');
    outListSub.classList.remove('hover-sub');

    const outLineSub = outParent.querySelectorAll('.header__line-sub');
    outLineSub.forEach(function(e){
        e.classList.remove('hover-sub');
    });

    const outLinkSub = outParent.querySelectorAll('.header__link-sub');
    outLinkSub.forEach(function(e){
        e.classList.remove('hover-sub');
    });  
    
}

// крепеж бургера ---------------------------------------------------------------------
const burger = document.querySelector('.header__burger');
const burgerPxTop = burger.getBoundingClientRect().top;
const headerList = document.querySelector('.header__list');

function listenerScroll () {
    console.log('top= ', burgerPxTop);
    console.log('sclollY= ', window.scrollY);

    if(burgerPxTop <= window.scrollY){
        burger.classList.add('fix-burger');
        headerList.classList.add('fix-burger');

    }else{
        burger.classList.remove('fix-burger');
        headerList.classList.remove('fix-burger');
    }
}

