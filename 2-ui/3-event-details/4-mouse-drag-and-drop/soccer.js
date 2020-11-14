//UNFINISHED

document.onmousedown = function(event) {
  if (!event.target.classList.contains('draggable')) return;

  let hero = event.target;

  hero.ondragstart = function() {
    return false;
  };

  let shiftX = event.clientX - hero.getBoundingClientRect().left;
  let shiftY = event.clientY - hero.getBoundingClientRect().top;

  hero.style.position = 'absolute';
  hero.style.zIndex = 100;
  document.body.append(hero);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    hero.style.left = pageX - shiftX + 'px';
    hero.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  };
};