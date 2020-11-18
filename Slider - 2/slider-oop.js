let gallery = document.querySelectorAll('.slider img');

// let btnNext=document.querySelector('.btn-next');
// let btnPrev=document.querySelector('.btn-prev');
console.log(gallery);
let i=0;
let urlsGallery=[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
];
// btnNext.addEventListener('click',function()
// {    
//     slider1.nextStep();
// });

class Slider{
    i = 0;
    constructor(imageElem, images, btnGo, btnBack){
        this.img = document.querySelector(imageElem);
        this.imagesUrls = images;
        this.nextBtn = document.querySelector(btnGo);
        this.prevBtn = document.querySelector(btnBack);
        this.nextBtn.addEventListener('click', ()=>{
            this.nextStep();
        });
        this.prevBtn.addEventListener('click', ()=>{
            this.prevStep();
        });
    }
    nextStep(){
        this.i++;
        if(this.i == this.imagesUrls.length){
            this.i = 0;
        }
        this.img.src = this.imagesUrls[this.i];
    }
    prevStep(){        
        if(this.i == 0){
            this.i = this.imagesUrls.length;
        }
        this.i--;
        this.img.src = this.imagesUrls[this.i];
    }
}

let slider1 = new Slider('.slider img', urlsGallery, '.btn-next', '.btn-prev');
console.log(slider1);
let slider2 = new Slider('.one img', urlsGallery, '.btn-one-next', '.btn-one-prev');
console.log(slider2);
let slider3 = new Slider('.two img', urlsGallery, '.btn-two-next','.btn-two-prev');
console.log(slider3);