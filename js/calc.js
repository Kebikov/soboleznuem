//возврат текстом объекта венки
const wreathForm = document.querySelector('.wreath');
const wreathText = wreathForm.outerHTML;

document.addEventListener('click', function (e){
    const element = e.target;
    console.log(element);
    
    //= гроб
    if(element.closest('.coffin__tim')){
        const elementParent = element.closest('.coffin');
        const coffinItems = elementParent.querySelectorAll('.coffin__item, .coffin__img, .coffin__label');
        for(let i of coffinItems){
            i.classList.toggle('active');
        }
    }

    if(element.closest('.coffin__item')){
        //lll
        const mainParent = element.closest('.coffin');
        const textParent = element.closest('.coffin__item');

        const imgCoffinElement = textParent.querySelector('.coffin__img');
        const imgCoffinSrc = imgCoffinElement.getAttribute('src');

        const textCoffin = textParent.querySelector('.coffin__label').innerHTML;
        const cashCoffin = textParent.querySelector('.coffin__label').dataset.cash;
        const title = mainParent.querySelector('.coffin__tim-title');
        mainParent.querySelector('.coffin__tim-title').dataset.all = cashCoffin;
        mainParent.querySelector('.coffin__img-tim').setAttribute('src', imgCoffinSrc);
        title.innerHTML = textCoffin;

        const elementParent = element.closest('.coffin');
        const coffinItems = elementParent.querySelectorAll('.coffin__item, .coffin__img, .coffin__label');
        for(let i of coffinItems){
            i.classList.remove('active');
        }
    }

    //= Венки
    if(element.closest('.wreath__tim')){
        const elementParent = element.closest('.wreath');
        const coffinItems = elementParent.querySelectorAll('.wreath__item, .wreath__img, .wreath__label');
        for(let i of coffinItems){
            i.classList.toggle('active');
        }
    }

    if(element.closest('.wreath__item')){
        //lll
        const mainParent = element.closest('.wreath');
        const textParent = element.closest('.wreath__item');

        const imgCoffinElement = textParent.querySelector('.wreath__img');
        const imgCoffinSrc = imgCoffinElement.getAttribute('src');

        const textCoffin = textParent.querySelector('.wreath__label').innerHTML;
        const cashCoffin = textParent.querySelector('.wreath__label').dataset.cash;
        const title = mainParent.querySelector('.wreath__tim-title');
        mainParent.querySelector('.wreath__tim-title').dataset.all = cashCoffin;
        mainParent.querySelector('.wreath__img-tim').setAttribute('src', imgCoffinSrc);
        title.innerHTML = textCoffin;

        const elementParent = element.closest('.wreath');
        const coffinItems = elementParent.querySelectorAll('.wreath__item, .wreath__img, .wreath__label');
        for(let i of coffinItems){
            i.classList.remove('active');
        }
    }


    if(element.closest('.more')){
        //начало дороботки
        const pered = element.previousElementSibling;
        const class = pered.parentElement;
        console.log(class);
        //конец 
        const parent = document.querySelectorAll('.wreath');
        parent[parent.length - 1].insertAdjacentHTML('afterend',wreathText);
    }



    //= подсчет 
    let cash = 0;
    const allCoffinCashElements = document.querySelectorAll('[data-all]');
    for(let i of allCoffinCashElements){
        const iCash = i.dataset.all;
        cash = cash + iCash*1;
    } 
    
    document.querySelector('.praice').innerHTML = `Итого: ${cash}`;
    

    
});



































































