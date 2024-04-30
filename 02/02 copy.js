// addEventListener 이벤트가 감지되면
//() => {} 콜백 함수, 익명 함수

// 01. DOMContentLoaded = 돔이 다 그려졌다면 이벤트를 부여하겠다 !
document.addEventListener("DOMContentLoaded", () => {

  // 06. 상수 btnDiv에 html id 'btnDiv' 찾아와서 할당
  const btnDiv = document.getElementById('btnDiv');

  // 02. const = 상수. 안에 내용을 바꿀 수 없음
  const btn1 = document.createElement('button');
  // 03. <button> 버튼11 </button> 텍스트
  const btn1Text = document.createTextNode('버튼11');

  //10-1. msg 상수 선언해서 사용하기
  const msg = document.querySelector('#msg');


  // 04. btn1에 속성 부여 (id 속성을 btn11이라고 부여)
  btn1.setAttribute('id', 'btn11');

  // 05. btn1에 자식 노드로 btn1Text를 부여
  btn1.appendChild(btn1Text);

  // 07. btnDiv에 btn1 달아주기
  btnDiv.append(btn1);


  // 08. btn1에 클릭 이벤트 부여 
  btn1.addEventListener('click', () => {

    if (msg.innerHTML == '')
      // 09. id msg를 찾아 html 부여
      document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>';

    else
      //10. msg 상수 선언해서 사용하기
      msg.innerHTML = '';
  });



});