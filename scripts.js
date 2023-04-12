document.querySelector('.play-button').addEventListener('click', function() {
  const blackOverlay = document.getElementById('blackOverlay');
  const playButton = document.querySelector('.play-button');

  // 이미지 변경
  playButton.querySelector('img').src = 'icons/button_2.png';

  // 오버레이 작동
  blackOverlay.style.display = 'block';
  setTimeout(function() {
    blackOverlay.style.visibility = 'visible';
    blackOverlay.style.opacity = 1;
  }, 10);

  // 페이지 이동
  const nextPageUrl = 'Interactive/I_1.html';
  setTimeout(function() {
    window.location.href = nextPageUrl;
  }, 1000);
});
