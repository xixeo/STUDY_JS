// 문자열 다루기
document.addEventListener('DOMContentLoaded', () => {
  const userText = document.querySelector('#txt1');
  const checkTxt = document.querySelector('#txt2');
  const btn = document.querySelectorAll('.btnBox button');


  // 회문 확인
  btn[0].addEventListener('click', (e) => {
    //form을 썼기때문에 선언해줌
    e.preventDefault();


    // 문자열을 활용한 비교 방법
    // let t1 = userText.value; //공백제거 없이
    // let t2 = userText.value.split('').reverse().join('');
    let t1 = userText.value.replaceAll(' ', ''); //공백 제거
    let t2 = userText.value.replaceAll(' ', '').split('').reverse().join('');
    if (t1 === t2) {checkTxt.value = '회문입니다.'; checkTxt.style.color = 'rgb(37, 48, 206)'; }
    else {checkTxt.value = '회문이 아닙니다.'; checkTxt.style.color = 'red';}

    //   // 배열: for문을 활용한 비교 방법    
    //   // 전개연산자
    //   let t1 = [...userText.value];
    //   // 이렇게도 쓸 수 있다 .let t1 = userText.value.split("");
    //   let t2 = [];
    //   for(let i = t1.length-1; i >= 0;  i--){
    //     t2.push(t1[i]);
    //   }

    //   for(let i = 0; i < t1.length; i++){
    //     if(t1[i] != t2[i]){
    //       checkTxt.value = '회문이 아닙니다.'
    //       break;
    //     }
    //     else{
    //       checkTxt.value = '회문 입니다.'
    //     }
    //   }
  });


  btn[1].addEventListener('click', (e) => {
    //form을 썼기때문에 선언해줌
    e.preventDefault();
    
    let total = 0;
    // 문자열을 활용한 비교 방법
    // 문자열을 추출
    for(let c of userText.value){
      console.log(c)
    // 0~9와 같으면 숫자=>정수로변환=>sum = sum +i
      // if(c >= '0' && c <= '9'){
      //   total = total + parseInt(c)
      // }
      if(!isNaN(c)){ //숫자라면
        total = total + parseInt(c)
      }
    }

    checkTxt.value = total;
    checkTxt.style.color = '#222';
  });
});