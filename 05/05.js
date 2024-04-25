/* up down 게임 만들기

1. DOM에서 제어할 노드를 가져오기
2. 확인 버튼 클릭이 되면
   -랜덤수(1~100)를 생성 => 다시 하기 전까지 숫자는 변경되면 안됨
   -INPUT 박스 값이 없으면 '숫자를 입력하세요' 메시지 출력
   -INPUT 박스 값이 1에서 100사이의 숫자가 아니면 '입력 오류' 메시지 출력
   -INPUT 박스 값이 랜덤수 보다 작으면 UP 이미지
   -INPUT 박스 값이 랜덤수 보다 크면 DOWN 이미지
   -INPUT 박스 값이 랜덤수가 같으면 GOOD 이미지
    -INPUT 보이지 않아야 함
    -버튼의 캡션을 '숫자를 생성해 주세요'라고 변경
  [숫자를 생성해 주세요 버튼일 때]
   -초기화 : 랜덤수 새로 생성, INPUT 박스 보이기
*/

document.addEventListener('DOMContentLoaded', () => {

  const comImg = document.querySelector('.img_wrap img');
  const input = document.querySelector('input');
  const userBtn = document.querySelector('.input button');
  // 내가 원하는 시점에만 랜덤수를 생성하기 위해서 flag 사용
  let n;
  let flag = true;
  const resultBtn = document.querySelector('.result button');

  userBtn.addEventListener('click', (e) => {
    // form 태그 사용시
    e.preventDefault();    

    // 랜덤수 생성
    if (flag) {
      flag = false
      n = Math.floor(Math.random() * 100) + 1
      console.log(n, 'ss')
    };

    // 입력값 체크
    if (input.value == ''){
      alert('숫자를 입력하세요');
      input.focus();
      return;
    }

    if (input.value < 1 || input.value > 100){
      alert('1부터 100 사이의 숫자를 입력하세요');
      return;
    }

  });

});