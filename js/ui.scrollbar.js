(function ($, Drupal, drupalSettings, window) {

  'use strict';

  Drupal.behaviors.select_icons_scrollbar = {
    selectmenu: {
      options: {}
    },
    attach: function (context) {
      var me = this;

      if (me.selectmenu.options.create == null) {
        var instance = $( ".selecticons").selecticons( "instance" );
        //me.selectmenu.options = instance.options;
        me.selectmenu.options.create = instance.options.create;
        me.selectmenu.options.select = instance.options.select;
      }

      me.selectmenu.options.open = function() {
        if ($().mCustomScrollbar) {
          $(".ui-menu").mCustomScrollbar({
            setHeight:200,
            theme:"dark-3",
            mouseWheel:{ preventDefault:true },
            scrollButtons: { enable: true}
          });
        }
      };
      me.selectmenu.options.close = function() {
        if ($().mCustomScrollbar) {
          $(".ui-menu").mCustomScrollbar("destroy");
        }
      };

      $( ".selecticons").selecticons(me.selectmenu.options);
      $( ".selecticons").selecticons( "option", "width", 200 );
    }
  };
}(jQuery, Drupal, drupalSettings, this));
