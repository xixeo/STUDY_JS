/* COMPUTER VS USER 주사위 게임 만들기

1. DOM에서 제어할 노드를 가져오기
2. 6개 버튼 클릭을 확인
3. 버튼 클릭이 되면
   -해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(USER) => 이미지변경
   -랜덤수를 생성 => 컴퓨터 숫자(COM)
   -USER가 선택한 숫자와 컴퓨터의 랜덤수를 비교
   -결과 출력
*/

document.addEventListener('DOMContentLoaded', ()=>{
  const comImg = document.querySelector('.computer img');
  const userImg = document.querySelector('.user img');
  const result = document.querySelector('.result');

  const btnList = document.querySelectorAll('button');

  // 반복문 1
  // -var는 요즘 안 씀
  // -const는 정해 놓으면 변하지 않음
  // -let을 쓰는 이유 i값이 계속 바뀌니까
  // for(let i = 0; i < btnList.length; i++){
    // console.log(btnList[i]);
  //}

  // 반복문 2
  // -필요없는 내용까지 많이 따라옴
  //for(let i in btnList){
    // console.log(btnList[i]);
  //}

  // 반복문 3
  //btnList.forEach(btn => {
    // console.log(btn);
  //});

  // 반복문 4
  //for (let btn of btnList){
    // console.log(btn);
  //}

  // 반복문 4 + index 가져오기
  //for (let [i, btn] of btnList.entries()){
  //  console.log(i, btn);
  //}

  for (let btn of btnList){
    //btnList안에 있는 button들을 btn이란 이름으로 하나씩 불러온다 !
    btn.addEventListener('click', ()=>{
      // console.log(btn.textContent)
      // innerHtml : 태그까지 가져오기
      // textContent : button안의 텍스트 가져오기

      const user = parseInt(btn.textContent.slice(0, 1));
      userImg.setAttribute('src', `./img/${user}.png`)
      userImg.setAttribute('art', `${user}`)

      // btn.textContent.slice(0, 1) : html에 <button>1선택</button>에서 1선택 text 중 제일 앞글자 따와서 정수로 타입변경
      const com = Math.floor(Math.random() * 6) +1;
      comImg.setAttribute('src', `./img/${com}.png`);
      comImg.setAttribute('art', `${com}`)

      if(user == com){
        document.querySelector('.result').innerHTML = '⭕'
      }
      else {
        document.querySelector('.result').innerHTML = '❌'
      }
    });
  }
});