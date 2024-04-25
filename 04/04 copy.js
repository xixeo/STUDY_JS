// 주사위 게임 만들기 random
document.addEventListener("DOMContentLoaded", () => {

  const btnList = document.querySelectorAll('button');
  const comImg = document.querySelector('.computer > img');
  const userImg = document.querySelector('.user > img');


  btnList.forEach(function (item, index) {
    // 숫자 버튼 클릭
    item.addEventListener('click', () => {
      // 클릭한 숫자의 주사위 이미지 출력
      userImg.setAttribute('src', `./img/${index + 1}.png`)
      userImg.setAttribute('art', `${index + 1}`)

      const random = Math.floor(Math.random() * 6) + 1;
      comImg.setAttribute('src', `./img/${random}.png`)
      comImg.setAttribute('art', `${random}`)

      if ( (index + 1) == random){
        document.querySelector('.result').innerHTML = '<h1>맞았다~~</h1>'
      }
      else
      document.querySelector('.result').innerHTML = '<h1>틀렸다</h1>'
    });

  });
});