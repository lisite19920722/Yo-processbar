(function() {
  'use strict';

  angular
    .module('yoProcessbar')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($scope) {
    var vm = this;
    vm.lisite="李思特123";

    var RGBChange = function() {
      $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
    };

    var r = $('#R').slider()
      .on('slide', RGBChange)
      .data('slider');
    var g = $('#G').slider()
      .on('slide', RGBChange)
      .data('slider');
    var b = $('#B').slider()
      .on('slide', RGBChange)
      .data('slider');
  }
})();
