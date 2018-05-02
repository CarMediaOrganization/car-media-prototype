$(function () {

  var widgetCounter = 1;

  let widgetsDiv = $('#innerWidgets');

  let addWidgetBtn = $('#addWidgetBtn');

  addWidgetBtn.on('click', function(e) {
      e.preventDefault();

      let row = $('<div class="row">');

      let widget = $('<div class="widget text-center mt-2 mb-2">');

      widget.append('Widget: ' + widgetCounter);

      widget.appendTo(row);
      row.appendTo(widgetsDiv);

      widgetCounter += 1;
  });
});
