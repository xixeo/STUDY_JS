// 로또 번호 생성기
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const numberBox = document.querySelector('.numberBox');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    let arr = []; //btn 누를때마다 번호 생성하여 저장할 배열
    //  let arr = [0, 0, 0, 0, 0, 0, 0]


    // 반복문의 끝이 정해져있을때
    // for(let i = 0; i < 7; i++){ //1부터 45까지의 랜덤 숫자 7개 추출 (*중복되는 숫자 발생)
    //   let n = Math.floor(Math.random() * 45) + 1;
    //   arr.push(n)
    // }

    // 반복문의 끝이 정해져있지 않을때
    while (arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if(!arr.includes(n)) arr.push(n) //중복되는 숫자가 없을 시 배열에 푸쉬
    }

    // let tags = arr.map((item) => {
    //   return `<div class="ball${Math.floor(item / 10)}">${item}</div>`;
    // });

    //배열에 태그 추가
    let tags = arr.map(item => `<div class="ball${Math.floor(item / 10)}">${item}</div>`)

    //배열 중간에 태그 추가 편집
    tags.splice(6, 0, '<div class="plus">+</div>');
    // console.log(arr, tags);

    //배열 문자열 만들기
    tags = tags.join('');

    //출력
    numberBox.innerHTML = tags;

  });
})