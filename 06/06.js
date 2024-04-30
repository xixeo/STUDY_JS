/*
단위 환산
*/

const show = (s1, s2, l1, l2) => {
  // if(s1.value == '°C'){
  //   s2.value = '°F';
  //   l1.textContent = s1.value;
  //   l2.textContent = s2.value;
  // }
  // else{
  //   s2.value = '°C';
  //   l1.textContent = s1.value;
  //   l2.textContent = s2.value;
  // }

  //줄여쓰는법
  if(s1.value == '°C') s2.value = '°F';
  else s2.value = '°C';

    l1.textContent = s1.value;
    l2.textContent = s2.value;
  
};

document.addEventListener('DOMContentLoaded', () => {
  const sel1 = document.querySelector('.input1');
  const sel2 = document.querySelector('.input2');

  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');

  const label1 = document.querySelector('#label1');
  const label2 = document.querySelector('#label2');

  sel1.addEventListener('change', () => {
    // console.log(sel1.value, sel2.value);
    show(sel1, sel2, label1, label2);

    // if(sel1.value == '°C'){
    //   sel2.value = '°F';
    //   label1.textContent = '°C';
    //   label2.textContent = '°F';
    // }
    // else{
    //   sel2.value = '°C';
    //   label1.textContent = '°F';
    //   label2.textContent = '°C';
    // }
  });

  sel2.addEventListener('change', () => {
    show(sel2, sel1, label2, label1 );
    // console.log(sel1.value, sel2.value);

    // if(sel2.value == '°C'){
    //   sel1.value = '°F';
    //   label2.textContent = '°C';
    //   label1.textContent = '°F';
    // }
    // else{
    //   sel1.value = '°C';
    //   label2.textContent = '°F';
    //   label1.textContent = '°C';
    // }
  });

  txt1.addEventListener('keyup', () =>{
    console.log(txt1.value);

    let c 

    

  });
});