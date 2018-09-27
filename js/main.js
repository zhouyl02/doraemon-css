!function (){
    let flag = true;
    let player = document.querySelector('.music');
    player.addEventListener('click',function () {
        if (flag) {
            document.querySelector('audio').pause();
            player.classList.remove('play');
            player.classList.add('pause');
            flag = false;
        } else {
            document.querySelector('audio').play();
            player.classList.remove('pause');
            player.classList.add('play');
            flag = true;
        }
    })
}();
!function(){
   var duration = 10
  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 50
        break
      case 'normal':
        duration = 25
        break
      case 'fast':
        duration = 1
        break
    }
  })
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=4
      container.innerHTML = Prism.highlight(code.substring(0,n), Prism.languages.css)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  writeCode('',code)
}.call()