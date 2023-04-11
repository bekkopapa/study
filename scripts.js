// scripts.js 파일
document.querySelector('.play-button').addEventListener('click', function () {
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.visibility = 'visible';
    blackOverlay.style.opacity = 1;
  
    const nextPageUrl = 'Interactive/I_1.html';
  
    // 암전이 끝난 후 페이지 이동을 실행합니다.
    setTimeout(function () {
      window.location.href = nextPageUrl;
    }, 1000); // 여기에서 1000ms는 1초를 의미하며, 암전 시간과 동일한 시간을 사용해야 합니다.
  });
  