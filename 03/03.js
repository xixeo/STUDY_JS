// 주사위 게임 만들기 random
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector('#btnDiv > button');
  const img = document.querySelector('#btnDiv > img');
  
  btn.addEventListener('click', () => {
    // 정수인 난수 생성
    //console.log(random, 'random;;')
    const random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute('src', `./img/${random}.png`)
    img.setAttribute('art', `${random}`)
  });
});