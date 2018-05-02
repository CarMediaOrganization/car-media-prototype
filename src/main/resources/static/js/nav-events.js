$(function () {

  let mainContent = $('#content');

  let newsBtn = $("button[name='news']");
  let feedBtn = $("button[name='feed']");
  let carsBtn = $("button[name='cars']");
  let othersBtn = $("button[name='sthElse']");

  let h1 = $('<h1 class="display-2">');

  newsBtn.on('click', function (e) {
     e.preventDefault();

     mainContent.empty();
     h1.empty();

     h1.append('News');
     h1.appendTo(mainContent);
  });

  feedBtn.on('click', function (e) {
     e.preventDefault();

     mainContent.empty();
     h1.empty();

     h1.append('Feed');
     h1.appendTo(mainContent);
  });

  carsBtn.on('click', function (e) {
     e.preventDefault();

     mainContent.empty();
     h1.empty();

     h1.append('Cars');
     h1.appendTo(mainContent);
  });

  othersBtn.on('click', function (e) {
     e.preventDefault();

     mainContent.empty();
     h1.empty();

     h1.append('Something else');
     h1.appendTo(mainContent);
  });
  // addWidgetBtn.on('click', function(e) {});

});
