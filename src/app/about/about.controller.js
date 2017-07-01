(function() {
  'use strict';

  angular
    .module('yoProcessbar')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($log, BASE_URL, qService, environmentRes) {
    var vm = this;
    vm.lisite="空气质量AQI数值预测";
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
    $log.log(BASE_URL + '123');

    var airQualityGetParams = {};
    var airQualityGetHeaders = {};
    var airQualityGetPromise = qService.httpGetWithToken(environmentRes.getAirQuality, airQualityGetParams, airQualityGetHeaders);
    airQualityGetPromise.then(function(data){
      $log.log(data.data);
      vm.today1=data.data[2];
      vm.so2=data.data[4].so2;
      vm.no2=data.data[4].no2;
      vm.pm25=data.data[4].pm25;
      vm.pm10=data.data[4].pm10;
      vm.o3=data.data[4].o3;
    }, function(error){
      $log.log('发送失败' + error);
    });

    var airPollutionGetParams = {};
    var airPollutionGetHeaders = {};
    var airPollutionGetPromise = qService.httpGetWithToken(environmentRes.getAirPollution, airPollutionGetParams, airPollutionGetHeaders);
    airPollutionGetPromise.then(function(data){
      $log.log(data.data);
    }, function(error){
      $log.log('发送失败' + error);
    });

    var airModelGetParams = {test: "参数传过来了，我们自豪", test1: "第二个参数，我们骄傲"};
    var airModelGetHeaders = {};
    var airModelGetPromise = qService.httpGetWithToken(environmentRes.getAirModel, airModelGetParams, airModelGetHeaders);
    airModelGetPromise.then(function(data){
      $log.log(data.data);
    }, function(error){
      $log.log('发送失败' + error);
    });
  }
})();
