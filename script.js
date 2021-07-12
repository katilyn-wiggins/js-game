var character = document.getElementById('character');
var block = document.getElementById('block');

function jump() {
  //only add class if it hasn't already been added
  if (character.classList != 'animate') {
    character.classList.add('animate');
  }
  //problem - could only use clickhandler once, the below solves problem by removing the class every time
  setTimeout(function () {
    character.classList.remove('animate');
  }, 500);
}

//collision checking!
var checkDead = setInterval(function () {
  //get top position of character - parse int b/c only want the number
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );

  //get left position of block
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = 'none';
    block.style.display = 'none';
    alert('u losttttt.');
  }
}, 10);
