function handleClick(n){
  // document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>'
  document.querySelector('#msg').innerHTML = `<h1>안녕하세요 ${n} </h1>`
}

document.addEventListener("DOMContentLoaded", ()=>{
  //DOMContentLoaded : DOM이 렌더링이 된 후 제어
  //document.getElementById('msg').innerHTML = '안녕하세요'
  // document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>'
});