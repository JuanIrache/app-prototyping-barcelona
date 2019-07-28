//Source: https://stackoverflow.com/a/23230280/3362074

module.exports = (target, actionLeft, actionRight) => {
  document.querySelector(target).addEventListener('touchstart', handleTouchStart, false);
  document.querySelector(target).addEventListener('touchmove', e => handleTouchMove(e, actionLeft, actionRight), false);
};

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt, actionLeft, actionRight) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    console.log('swiping');

    /*most significant*/
    if (xDiff > 0) {
      actionLeft();
    } else {
      actionRight();
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
