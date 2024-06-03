
//コース目的
const bt1=document.getElementById('btn1');
const bt2=document.getElementById('btn2');
const apply=document.getElementById('apply');
const purpose=document.getElementById('purpose');
const slide=document.querySelector('#slide');

bt2.addEventListener('click',function(){
  apply.classList.add('hidden');
  purpose.classList.remove('hidden');
  bt2.classList.add('active');
  bt1.classList.remove('active');
});
bt1.addEventListener('click',function(){
  slide.classList.remove('to_right');
  purpose.classList.add('hidden');
  apply.classList.remove('hidden');
  bt1.classList.add('active');
  bt2.classList.remove('active');
});
// ハンバーガーメニュー　ドロワー
const hamb=document.querySelector('.hamberg');
// const slide=document.querySelector('#slide');

hamb.addEventListener('click',function(){
  slide.classList.toggle('on');
  hamb.classList.toggle('active');
});
slide.addEventListener('click',function () {
  this.classList.toggle('on');
  hamb.classList.remove('active');
});

