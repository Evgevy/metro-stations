const prodBt = document.querySelectorAll('.metro__btn');
const tabsIn = document.querySelectorAll('.metro__tab-item');


for (let item of prodBt) {

    item.addEventListener('click', function() {
        

        for (let element of tabsIn) {
            element.classList.remove('metro__tab-item--active')
        }

        const conter = document.querySelector('#' + item.dataset.tab);
        conter.classList.add('metro__tab-item--active') 
    })
}

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.metro__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('metro__btn--active'));
          btn.classList.add('metro__btn--active');
        });
 
    });

});
const prodBtn = document.querySelectorAll('.districts__btn');
const tabsInfo = document.querySelectorAll('.districts__tab-item');


for (let item of prodBtn) {

    item.addEventListener('click', function() {
        

        for (let element of tabsInfo) {
            element.classList.remove('districts__tab-item--active')
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('districts__tab-item--active') 
        
    })
}

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.districts__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('districts__btn--active'));
          btn.classList.add('districts__btn--active');
        });
 
    });

});