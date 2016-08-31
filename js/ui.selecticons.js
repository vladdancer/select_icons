(function($) {
  $.widget('custom.selecticons', $.ui.selectmenu, {
    _renderItem: function( ul, item ) {
      var li = $( "<li>", { text: item.label } );

      if ( item.disabled ) {
        li.addClass('ui-state-disabled');
      }

      $( "<span>", {
        style: item.element.attr('data-style'),
        "class": item.element.attr('data-class')
      })
        .appendTo( li );

      return li.appendTo( ul );
    }
  });

  $('.selecticons').selecticons({
    create: function( event, ui ) {
      // Get classes of currently selected option.
      var currentClasses = $(this).find('option:selected').attr('data-class');
      var button = $('#' + this.id + '-button');

      // Create element for current selection's icon.
      button.prepend('<span class="ui-current-item-icon ' + currentClasses + '"></span>')
    },
    select: function( event, ui ) {
      // Get current option's icon element.
      var currentIcon = $('#' + this.id + '-button > .ui-current-item-icon');

      // Get selected option's classes.
      var classes = ui.item.element.attr('data-class');

      // Set new classes for current option's icon element.
      currentIcon.removeClass();
      currentIcon.addClass(classes + ' ui-current-item-icon');
    },
    change: function() {
      $(this).trigger('change');
    }
  });
})(jQuery);
