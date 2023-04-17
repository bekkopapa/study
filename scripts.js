document.querySelector('.play-button').addEventListener('click', function() {
    const playButton = document.querySelector('.play-button');
    const blackOverlay = document.getElementById('blackOverlay');
    
    // 이미지 변경
    playButton.querySelector('img').src = 'icons/button_2.png';
  
    // 오버레이 작동
    blackOverlay.style.display = 'block';
    setTimeout(function() {
      blackOverlay.style.visibility = 'visible';
      blackOverlay.style.opacity = 1;
    }, 10);
  
    setTimeout(function() {
      blackOverlay.style.opacity = 0;
      setTimeout(function() {
        blackOverlay.style.visibility = 'hidden';
        blackOverlay.style.display = 'none';
      }, 1500);
    }, 1500);
  
    // 페이지 이동
    const nextPageUrl = 'Interactive/ir_1.html';
    setTimeout(function() {
      window.location.href = nextPageUrl;
    }, 1000);
  });
function loadTable(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  document.getElementById("SOHYUNSOO").addEventListener("change", function(event) {
    var tableContainer = document.getElementById("table-container");

    if (event.target.value === "novelist") {
      loadTable("novelist_table.html", function(responseText) {
        tableContainer.innerHTML = responseText;
      });
    } else {
      tableContainer.innerHTML = "";
    }
    if (event.target.value === "screenwriter") {
      loadTable("screenwriter_table.html", function(responseText) {
        tableContainer.innerHTML = responseText;
      });
    } else {
      tableContainer.innerHTML = "";
    }
    if (event.target.value === "stereographer") {
      loadTable("stereographer_table.html", function(responseText) {
        tableContainer.innerHTML = responseText;
      });
    } else {
      tableContainer.innerHTML = "";
    }
  });
