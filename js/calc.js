//возврат текстом объекта венки
const wreathForm = document.querySelector('.wreath');
const wreathText = wreathForm.outerHTML;

//находим раздел с выбранными товарами
let shopForm = document.querySelector('.shop-calc__title');

let idTotal = 0; 


document.addEventListener('click', function (e){
    const element = e.target;
    console.log('клик по:',element);
    
    //= гроб
    if(element.closest('.coffin__tim')){
        const elementParent = element.closest('.coffin');
        const coffinItems = elementParent.querySelectorAll('.coffin__item, .coffin__img, .coffin__label');
        for(let i of coffinItems){
            i.classList.toggle('active');
        }
    }

    //клик на выбор гроба
    if(element.closest('.coffin__item')){
        
        const mainParent = element.closest('.coffin');
        mainParent.dataset.total = idTotal;
        const textParent = element.closest('.coffin__item');

        const imgCoffinElement = textParent.querySelector('.coffin__img');

        const imgCoffinSrc = imgCoffinElement.getAttribute('src');

        const textCoffin = textParent.querySelector('.coffin__label').innerHTML;

        const cashCoffin = textParent.querySelector('.coffin__label').dataset.cash;

        const title = mainParent.querySelector('.coffin__tim-title');

        mainParent.querySelector('.coffin__tim-title').dataset.all = cashCoffin;

        mainParent.querySelector('.coffin__img-tim').setAttribute('src', imgCoffinSrc);

        title.innerHTML = textCoffin;


        //удаляем товар если уже есть в списке
        const shopFormNew = document.querySelector('.shop-calc__list');
        if(shopFormNew){
            const shopFormNewPrevious = shopFormNew.previousElementSibling;
            shopForm = shopFormNewPrevious;
            shopFormNew.remove();
        }
    

        //добавляем новый элемент в выбранные товары
        shopForm.insertAdjacentHTML(
            'afterend',
            `<div class="shop-calc__list" data-total="${idTotal}">
            <div class="shop-calc__img-box">
                <img src="${imgCoffinSrc}" alt="#">
            </div>
            <div class="shop-calc__info">
                <div class="shop-calc__text">${textCoffin}</div>
                <div class="shop-calc__cash">стоимость: ${cashCoffin} byn</div>
            </div>
            <div class="shop-calc__delete">
                <img src="/img/__calc/delete_icon.png" alt="#">
            </div>
        </div>`
        );


        //удаляем классы active
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

    //клик на выбор венка
    if(element.closest('.wreath__item')){
        idTotal++;
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


    //= кнопка еще 
    if(element.closest('.more')){

        const previous = element.previousElementSibling;
        const classMy = previous.classList;
        classMy.value
        if(classMy.value === 'wreath'){
            const parent = document.querySelectorAll('.wreath');
        parent[parent.length - 1].insertAdjacentHTML('afterend',wreathText);
        }
        idTotal++;
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



































































