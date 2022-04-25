
//находим раздел с выбранными товарами
let shopForm = document.querySelector('.shop-calc__title');

let idTotal = 0;
let numCoffin, numWreath;


document.addEventListener('click', function (e){
    const element = e.target;
    //console.log('клик по:',element);
    
    //= гроб 
    if(element.closest('.coffin__tim')){
        const elementParent = element.closest('.coffin');
        const coffinItems = elementParent.querySelectorAll('.coffin__item, .coffin__img, .coffin__label');
        for(let i of coffinItems){
            i.classList.toggle('active');
        }
    }
    // клик на выбор гроба
    if(element.closest('.coffin__item')){
        //новое значение id
        idTotal++;

        //получение главного родителя 
        const mainParent = element.closest('.coffin');

        //получение текушего значения data-total
        let dataTotal = mainParent.dataset.total;

        //проверка на сушествование id
        if(!dataTotal){
            console.log('not');
            numCoffin = idTotal;
        }

        //новое значение data-total
        mainParent.dataset.total = numCoffin;

        const textParent = element.closest('.coffin__item');
        const imgCoffinElement = textParent.querySelector('.coffin__img');
        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
        const textCoffin = textParent.querySelector('.coffin__label').innerHTML;
        const cashCoffin = textParent.querySelector('.coffin__label').dataset.cash;
        const title = mainParent.querySelector('.coffin__tim-title');
        //mainParent.querySelector('.coffin__tim-title').dataset.all = cashCoffin;
        mainParent.querySelector('.coffin__img-tim').setAttribute('src', imgCoffinSrc);
        title.innerHTML = textCoffin;

        //возврат эл магазин
        const shopForm = document.querySelector('.shop-calc');

        //возврат последнего эл в магазине
        let lastElementShop = shopForm.lastElementChild;

        //удаляем товар если уже есть в списке
        //поиск совпадения в выборе и магазине
        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
            //возврат эл магазина
            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
            //возврат эл перед 
            const shopElementPrevious = shopElement.previousSibling;
            //удаление элемента
            shopElement.remove();
            //замена эл после которого будет вставлен новый эл
            lastElementShop = shopElementPrevious;
            numCoffin = dataTotal;
        }

        //добавляем новый элемент в выбранные товары
        lastElementShop.insertAdjacentHTML(
            'afterend',
            `<div class="shop-calc__list" data-shop="${numCoffin}" data-shop-cash = "${cashCoffin}">
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
    // клик на выборе венка
    if(element.closest('.wreath__item')){
        //новое значение id
        idTotal++;
        console.log('idTotal:',idTotal);

        //получение главного родителя 
        const mainParent = element.closest('.wreath');

        //получение текушего значения data-total
        let dataTotal = mainParent.dataset.total;
        console.log('dataTotal:',dataTotal);

        //проверка на сушествование id
        if(!dataTotal){
            console.log('not');
            //новое значение data-total
            mainParent.dataset.total =  idTotal;
            dataTotal = mainParent.dataset.total;
        }

        const textParent = element.closest('.wreath__item');
        const imgCoffinElement = textParent.querySelector('.wreath__img');
        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
        const textCoffin = textParent.querySelector('.wreath__label').innerHTML;
        const cashCoffin = textParent.querySelector('.wreath__label').dataset.cash;
        const title = mainParent.querySelector('.wreath__tim-title');
        //mainParent.querySelector('.wreath__tim-title').dataset.all = cashCoffin;
        mainParent.querySelector('.wreath__img-tim').setAttribute('src', imgCoffinSrc);
        title.innerHTML = textCoffin;

        const elementParent = element.closest('.wreath');
        const coffinItems = elementParent.querySelectorAll('.wreath__item, .wreath__img, .wreath__label');
        for(let i of coffinItems){
            i.classList.remove('active');
        }

        //возврат эл магазин
        const shopForm = document.querySelector('.shop-calc');

        //возврат последнего эл в магазине
        let lastElementShop = shopForm.lastElementChild;
        console.log('lastElementShop',lastElementShop);

         //удаляем товар если уже есть в списке
        //поиск совпадения в выборе и магазине
        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
            //возврат эл магазина
            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
            //возврат эл перед 
            const shopElementPrevious = shopElement.previousSibling;
            //удаление элемента
            shopElement.remove();
            //замена эл после которого будет вставлен новый эл
            lastElementShop = shopElementPrevious;

            console.log('shopElementPrevious:',shopElementPrevious);
            console.log('search Yes');
        }

        //добавление эл в магазин
        lastElementShop.insertAdjacentHTML(
            'afterend',
            `<div class="shop-calc__list" data-shop="${dataTotal}" data-shop-cash = "${cashCoffin}">
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
    }

    //= Одежда 
    if(element.closest('.dress__tim')){
        const elementParent = element.closest('.dress');
        const coffinItems = elementParent.querySelectorAll('.dress__item, .dress__img, .dress__label');
        for(let i of coffinItems){
            i.classList.toggle('active');
        }
    }
    // клик на выборе одежды 
    if(element.closest('.dress__item')){
        //новое значение id
        idTotal++;
        console.log('idTotal:',idTotal);

        //получение главного родителя 
        const mainParent = element.closest('.dress');

        //получение текушего значения data-total
        let dataTotal = mainParent.dataset.total;
        console.log('dataTotal:',dataTotal);

        //проверка на сушествование id
        if(!dataTotal){
            console.log('not');
            //новое значение data-total
            mainParent.dataset.total =  idTotal;
            dataTotal = mainParent.dataset.total;
        }

        const textParent = element.closest('.dress__item');
        const imgCoffinElement = textParent.querySelector('.dress__img');
        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
        const textCoffin = textParent.querySelector('.dress__label').innerHTML;
        const cashCoffin = textParent.querySelector('.dress__label').dataset.cash;
        const title = mainParent.querySelector('.dress__tim-title');
        //mainParent.querySelector('.dress__tim-title').dataset.all = cashCoffin;
        mainParent.querySelector('.dress__img-tim').setAttribute('src', imgCoffinSrc);
        title.innerHTML = textCoffin;

        const elementParent = element.closest('.dress');
        const coffinItems = elementParent.querySelectorAll('.dress__item, .dress__img, .dress__label');
        for(let i of coffinItems){
            i.classList.remove('active');
        }

        //возврат эл магазин
        const shopForm = document.querySelector('.shop-calc');

        //возврат последнего эл в магазине
        let lastElementShop = shopForm.lastElementChild;
        console.log('lastElementShop',lastElementShop);

         //удаляем товар если уже есть в списке
        //поиск совпадения в выборе и магазине
        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
            //возврат эл магазина
            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
            //возврат эл перед 
            const shopElementPrevious = shopElement.previousSibling;
            //удаление элемента
            shopElement.remove();
            //замена эл после которого будет вставлен новый эл
            lastElementShop = shopElementPrevious;

            console.log('shopElementPrevious:',shopElementPrevious);
            console.log('search Yes');
        }

        //добавление эл в магазин(не меняем переменные внутри)
        lastElementShop.insertAdjacentHTML(
            'afterend',
            `<div class="shop-calc__list" data-shop="${dataTotal}" data-shop-cash = "${cashCoffin}">
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
    }//end 

    //= Крест 
    if(element.closest('.cross__tim')){
        const elementParent = element.closest('.cross');
        const coffinItems = elementParent.querySelectorAll('.cross__item, .cross__img, .cross__label');
        for(let i of coffinItems){
            i.classList.toggle('active');
        }
    }
    // клик на выборе креста 
    if(element.closest('.cross__item')){
        //новое значение id
        idTotal++;
        console.log('idTotal:',idTotal);

        //получение главного родителя 
        const mainParent = element.closest('.cross');

        //получение текушего значения data-total
        let dataTotal = mainParent.dataset.total;
        console.log('dataTotal:',dataTotal);

        //проверка на сушествование id
        if(!dataTotal){
            console.log('not');
            //новое значение data-total
            mainParent.dataset.total =  idTotal;
            dataTotal = mainParent.dataset.total;
        }

        const textParent = element.closest('.cross__item');
        const imgCoffinElement = textParent.querySelector('.cross__img');
        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
        const textCoffin = textParent.querySelector('.cross__label').innerHTML;
        const cashCoffin = textParent.querySelector('.cross__label').dataset.cash;
        const title = mainParent.querySelector('.cross__tim-title');
        //mainParent.querySelector('.dress__tim-title').dataset.all = cashCoffin;
        mainParent.querySelector('.cross__img-tim').setAttribute('src', imgCoffinSrc);
        title.innerHTML = textCoffin;

        const elementParent = element.closest('.cross');
        const coffinItems = elementParent.querySelectorAll('.cross__item, .cross__img, .cross__label');
        for(let i of coffinItems){
            i.classList.remove('active');
        }

        //возврат эл магазин
        const shopForm = document.querySelector('.shop-calc');

        //возврат последнего эл в магазине
        let lastElementShop = shopForm.lastElementChild;
        console.log('lastElementShop',lastElementShop);

         //удаляем товар если уже есть в списке
        //поиск совпадения в выборе и магазине
        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
            //возврат эл магазина
            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
            //возврат эл перед 
            const shopElementPrevious = shopElement.previousSibling;
            //удаление элемента
            shopElement.remove();
            //замена эл после которого будет вставлен новый эл
            lastElementShop = shopElementPrevious;

            console.log('shopElementPrevious:',shopElementPrevious);
            console.log('search Yes');
        }

        //добавление эл в магазин(не меняем переменные внутри)
        lastElementShop.insertAdjacentHTML(
            'afterend',
            `<div class="shop-calc__list" data-shop="${dataTotal}" data-shop-cash = "${cashCoffin}">
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
    }

    //= click delete select 
    if(element.closest('.shop-calc__delete')){
        console.log('click delete');

        //возврат эл в магазине
        const searchElementShop = element.closest('.shop-calc__list');

        //возврат значения атрибута который удаляем
        let idSearch = searchElementShop.dataset.shop;

        //удаление эл
        searchElementShop.remove();

        //возврат элемента по значению атрибута
        const searchTotalElement = document.querySelector(`[data-total = "${idSearch}"]`);
        console.log('searchTotalElement:',searchTotalElement);

        //возврат элементов по атрибуту
        const searchImgDefault = searchTotalElement.querySelector('[data-img]');
        const searchTitleDefault = searchTotalElement.querySelector('[data-title]');

        //возврат значений атрибутов
        let titleData = searchTitleDefault.dataset.title;
        let imgData = searchImgDefault.dataset.img;

        //присвоение значений атрибутам по умолчанию
        searchImgDefault.setAttribute('src', `${imgData}`);
        searchTitleDefault.textContent = `${titleData}`;

    }

    //= кнопка еще 
    if(element.closest('.more')){
        console.log('добавить еще');
        //возврат элемента перед кнопкой
        const previous = element.previousElementSibling;

        //возврат класса элемента
        const classMy = previous.classList.value;
        idTotal++;
        console.log('idTotal for:',idTotal);

        //если венки добавляем эл венки
        if(classMy === 'wreath'){
            const parent = document.querySelectorAll('.wreath');
            parent[parent.length - 1].insertAdjacentHTML('afterend',`<div class="title-coffin">Ваш выбор ритуального венка:</div>
            <div class="wreath" data-total="${idTotal}">
                <div class="wreath__tim">
                    <img class="wreath__img-tim" src="/img/__calc/wreath/icon.png" alt="#" data-img="/img/__calc/wreath/icon.png">
                    <span class="wreath__tim-title" data-all="0" data-title="Выбор венка">Выбор венка</span>
                </div>
                <div class="wreath__item">
                    <img class="wreath__img" src="/img/__calc/wreath/1.png" alt="#">
                    <div class="wreath__label" data-cash="70">Венок ритуальный (1.7 метра)</div>
                </div>
                <div class="wreath__item">
                    <img class="wreath__img" src="/img/__calc/wreath/2.png" alt="#">
                    <div class="wreath__label" data-cash="50">Венок ритуальный (1.5 метра)</div>
                </div>
                <div class="wreath__item">
                    <img class="wreath__img" src="/img/__calc/wreath/3.png" alt="#">
                    <div class="wreath__label" data-cash="30">Венок ритуальный (1.3 метра)</div>
                </div>
            </div>`);
        }

        //если одужда добавляем эл одежда
        if(classMy === 'dress'){
            const parent = document.querySelectorAll('.dress');
            parent[parent.length - 1].insertAdjacentHTML('afterend',`<div class="title-coffin">Комплект одежды для усопшего:</div>
            <div class="dress" data-total="${idTotal}">
                <div class="dress__tim">
                    <img class="dress__img-tim" src="/img/__calc/dress/dress-icon.png" alt="#" data-img="/img/__calc/dress/dress-icon.png">
                    <span class="dress__tim-title" data-all="0" data-title="Выбор одежды">Выбор одежды</span>
                </div>
                <div class="dress__item">
                    <img class="dress__img" src="/img/__calc/dress/1.jpg" alt="#">
                    <div class="dress__label" data-cash="53">Костюм женский</div>
                </div>
                <div class="dress__item">
                    <img class="dress__img" src="/img/__calc/dress/2.jpg" alt="#">
                    <div class="dress__label" data-cash="35">Обувь женская</div>
                </div>
                <div class="dress__item">
                    <img class="dress__img" src="/img/__calc/dress/3.jpg" alt="#">
                    <div class="dress__label" data-cash="46">Костюм мужской</div>
                </div>
                <div class="dress__item">
                    <img class="dress__img" src="/img/__calc/dress/4.jpg" alt="#">
                    <div class="dress__label" data-cash="37">Туфли мужские</div>
                </div>
            </div>`);
        }

    }

    //= подсчет итога 
    let cash = 0;
    const allCoffinCashElements = document.querySelectorAll('[data-shop-cash]');
    for(let i of allCoffinCashElements){
        const iCash = i.dataset.shopCash;
        cash = cash + iCash*1;
    } 
    document.querySelector('.praice').innerHTML = `Всего: ${cash} руб.`;

});

//= check box 
//получение формы calc
const formCalc = document.forms.calc;


document.addEventListener('click', function (e) {
    const elementCheck = e.target;

    console.log('',elementCheck);

    if(!elementCheck.closest('.stop')){
        let divParent = elementCheck.parentElement;
        let divInput = divParent.querySelector('input');
        
        if(divInput){
            if(formCalc.loader.checked){
                console.log('чек отмечен',);
            }else{
                console.log('чек не отмечен',);
            }
        }

    }


        
    
});



//= прилипание praice 
//возврат эл прайс для крепления в слушателе  и высоты экрана
const praiceEl = document.querySelector('.praice');
const footerEl = document.querySelector('.footer');
window.addEventListener('scroll', function (){
    if(footerEl.getBoundingClientRect().top - document.documentElement.clientHeight <= 0){
        praiceEl.classList.add('stiki');
    }else{
        praiceEl.classList.remove('stiki'); 
    }
});


