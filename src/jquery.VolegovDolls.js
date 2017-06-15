/*
 * VolegovDolls
 * https://github.com/redstardeveloper/VolegovDolls
 *
 * Copyright (c) 2017 <PabloSpaniard>
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.VolegovDolls = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.VolegovDolls = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.VolegovDolls.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.VolegovDolls.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].VolegovDolls = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
