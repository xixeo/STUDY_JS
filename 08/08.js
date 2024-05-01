// 문자열 다루기
document.addEventListener('DOMContentLoaded', () => {
  const txt1 = document.querySelector('#txt1');
  const addBtns = document.querySelectorAll('.addBox button');
  const deleteBtns = document.querySelectorAll('.deleteBox button');

  let arr = [];

  // 1-1. 배열 추가 if문 활용 
  //  for(let btn of addBtns){
  //   // let btn이라고 안하고 그냥 btn으로 하면 마지막 값인 수박만 출력됨
  //   btn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     console.log(btn.textContent);

  //     if(btn.textContent == '사과') arr.push('🍎');
  //     else if(btn.textContent == '바나나') arr.push('🍌');
  //     else if(btn.textContent == '오렌지') arr.push('🍊');
  //     else if(btn.textContent == '수박') arr.push('🍉');

  //     // txt1.value = arr; 이렇게 넣으면 이모지 사이로 쉼표도 들어감
  //     txt1.value = arr.join(' ')
  //   });
  // }


  // 1-2. 배열 추가 object 활용
  let obj = {
    '사과': '🍎',
    '바나나': '🍌',
    '오렌지': '🍊',
    '수박': '🍉'
  }

  for (let btn of addBtns) {
    // let btn이라고 안하고 그냥 btn으로 하면 마지막 값인 수박만 출력됨
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(btn.textContent);

      //배열에 입력
      arr.push(obj[btn.textContent]);

      // 배열 출력
      txt1.value = arr.join(' ');
    });
  }

  // 2. 배열 삭제
  for(let btn of deleteBtns){
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(arr)
      // console.log(obj[btn.textContent.replace('- ', '')]);

      //배열 필터링
      const k = obj[btn.textContent.replace('- ', '')]
      // arr = arr.filter((item) => {return item != k});  //filter()안에는 콜백함수가 들어감 filter(() => {})
      // arr = arr.filter((item) => item != k); // 콜백함수 특성 상 return 생략 가능 (return문)
      arr = arr.filter(item => item != k); // 매개변수가 item하나 밖에 없으니 중괄호 생략가능

      // 필터링 된 배열 다시 출력
      txt1.value = arr.join(' ');
    });
  }
});