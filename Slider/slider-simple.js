let gallery = document.querySelectorAll('.slider img');

let btnNext=document.querySelector('.btn-next');
let btnPrev=document.querySelector('.btn-prev');
console.log(gallery);
let i=0;
btnNext.addEventListener('click', function(){
    gallery[i].style.display = 'none';
    i++;
    if(i == gallery.length){
        i = 0;
    }
    gallery[i].style.display = 'inline-block';
});
btnPrev.addEventListener('click',function()
{
    gallery[i].style.display='none';   
    if(i==0){
        i=gallery.length;
    }    
    i--;
    gallery[i].style.display='inline-block';
    
});