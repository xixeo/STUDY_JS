
//  06. 함수 생성
const btnCreate = (btn, idText, captionNode, parentNode) => {
  btn.setAttribute('id', idText);
  btn.appendChild(captionNode);
  parentNode.append(btn);
};

// addEventListener 이벤트가 감지되면
//() => {} 콜백 함수, 익명 함수

// 01. DOMContentLoaded = 돔이 다 그려졌다면 이벤트를 부여하겠다 !
document.addEventListener("DOMContentLoaded", () => {

  // 05. 상수 btnDiv에 html id 'btnDiv' 찾아와서 할당
  const btnDiv = document.getElementById('btnDiv');

  // 02. const = 상수. 안에 내용을 바꿀 수 없음
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');

  // 03. <button> 버튼11 </button> 텍스트
  const btn1Text = document.createTextNode('버튼11');
  const btn2Text = document.createTextNode('버튼21');

  // 04. msg 상수 선언해서 사용하기
  const msg = document.querySelector('#msg');

  // 07. 함수 사용해서 btn 생성
  btnCreate(btn1, 'btn11', btn1Text, btnDiv);
  btnCreate(btn2, 'btn21', btn2Text, btnDiv);

  // 08. btn1 생성후 클릭시 h1 태그 생성
  btn1.addEventListener('click', () => {
    document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>';
  });

  // 09. btn2 생성후 클릭시 h1 태그 삭제
  btn2.addEventListener('click', () => {
    document.querySelector('#msg').innerHTML = ''
  });


});