(function() {
  'use strict';

  angular
    .module('yoProcessbar')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1480750228371;
    vm.showToastr = showToastr;
    vm.colorpicker = {
      options: {
        orientation: 'horizontal',
        min: -100,
        max: 100,
        range: 'min'
      }
    };
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

    $("#ex6").slider();
    $("#ex6").on("slide", function(slideEvt) {
      $("#ex6SliderVal").text(slideEvt.value);
      $("#formText").attr("value",slideEvt.value);
    });

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
