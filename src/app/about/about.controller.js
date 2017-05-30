(function() {
  'use strict';

  angular
    .module('yoProcessbar')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;
    vm.lisite="李思特123";

    var RGBChange = function() {
      // $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
      angular.element(document).find('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
    };


    // var r = $('#R').slider()
    //   .on('slide', RGBChange)
    //   .data('slider');
    var r = angular.element(document).find('#R').slider()
      .on('slide', RGBChange)
      .data('slider');
    var g = angular.element(document).find('#G').slider()
      .on('slide', RGBChange)
      .data('slider');
    var b = angular.element(document).find('#B').slider()
      .on('slide', RGBChange)
      .data('slider');
  }
})();
