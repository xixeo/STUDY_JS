/*
  1. DOM에서 제어할 노드를 가져 오기 
  2. 버튼이 눌러지면 
   [확인버튼일때]
    - 랜덤수를 생성 => 랜덤수(1~100)는 다시 하기 전까지 변경되면 안됨
    - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
    - input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
    - input 박스 값이 랜덤수 보다 작으면 up이미지 
    - input 박스 값이 랜덤수 보다 크면 down이미지 
    - input 박스 값이 랜덤수가 같으면 good이미지 
      - input 보이지 않아야 함
      - 버튼의 캡션을 '숫자를 생성해 주세요' 변경
   [숫자를 생성해 주세요 버튼일때]
    - 초기화 : 랜덤수 새로 생성, input 박스 보이기 ..
*/

//화면 이미지 
const showImg = (imgName) => {
  const updownimg = document.querySelector('.img_wrap img') ;
  
  updownimg.setAttribute('src', `./img/${imgName}.png`) ;
  updownimg.setAttribute('alt', `${imgName}`) ;
}


document.addEventListener('DOMContentLoaded', ()=>{
  //1. DOM에서 제어할 노드를 가져 오기 
  const input = document.querySelector('input') ;
  const bt = document.querySelector('.input button') ;

  //랜덤수 
  let n ;
  let flag = true ;
  let imgName ;
  let flag1 = false;

  bt.addEventListener('click', (e)=>{
    //form 태그사용시 다시 호출되지 않도록
    e.preventDefault();

    //랜덤수 생성 : flag가 true일때만 생성
    if (flag) {
      flag = false
      n = Math.floor(Math.random() * 100) + 1 ; //1 ~ 100
      console.log('n=', n, flag)

      showImg('what') ;
      input.style.display = 'inline' ;
      bt.textContent = '확인';
    }

    // // 숫자 맞췄을때 알림창 다시 띄우는거 없애기 !
    // if (flag1) {
    //   window.alert = function(){};
    //   flag1 = false;
    // }
    
    //입력값 체크
    if (input.value == '') {
      alert('값을 입력하세요.');
      input.focus();
      return ;
    }

    //입력값 체크 : 1 ~ 100
    const user = parseInt(input.value) ;
    console.log(user)
    if ( user < 1 || user > 100) {
      alert('[입력오류] 1~100사이의 숫자를 입력하세요.');
      input.focus();
      return ;
    }

    //input 박스 값이 랜덤수 보다 작으면 up이미지 
    //input 박스 값이 랜덤수 보다 크면 down이미지 
    //input 박스 값이 랜덤수가 같으면 good이미지

    if (user < n ) imgName = 'up' ;
    else if (user > n) imgName = 'down' ;
    else {
      imgName = 'good';
      
      input.style.display = 'none' ;
      bt.textContent = '숫자를 다시 생성해 주세요.';
      flag = true ;
      flag1 = true;
     }


    if (imgName === 'up' || imgName === 'down') {
      input.focus();
    }

    input.value = '' ; 
    showImg(imgName) ;
  });
});