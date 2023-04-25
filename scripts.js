$('.play-button').on('click', function() {
  const playButton = $('.play-button');
  const blackOverlay = $('#blackOverlay');
  
  // 이미지 변경
  playButton.find('img').attr('src', 'icons/button_2.png');

  // 오버레이 작동
  blackOverlay.css('display', 'block');
  setTimeout(function() {
    blackOverlay.css('visibility', 'visible');
    blackOverlay.css('opacity', 1);
  }, 10);

  setTimeout(function() {
    blackOverlay.css('opacity', 0);
    setTimeout(function() {
      blackOverlay.css('visibility', 'hidden');
      blackOverlay.css('display', 'none');
    }, 1500);
  }, 1500);

  // 페이지 이동
  const nextPageUrl = 'Interactive/ir_1.html';
  setTimeout(function() {
    window.location.href = nextPageUrl;
  }, 1000);
});

function loadTable(url, callback) {
  $.ajax({
      url: url,
      success: function(responseText) {
          callback(responseText);
      }
  });
}

$('#SOHYUNSOO').on('change', function(event) {
  var tableContainer = $('#table-container');

  if (event.target.value === 'novelist') {
      loadTable('novelist_table.html', function(responseText) {
          tableContainer
          .html(responseText);
        });
    } else if (event.target.value === 'screenwriter') {
        loadTable('screenwriter_table.html', function(responseText) {
            tableContainer.html(responseText);
        });
    } else if (event.target.value === 'stereographer') {
        loadTable('stereographer_table.html', function(responseText) {
            tableContainer.html(responseText);
        });
    } else {
        tableContainer.html('');
    }
    });
