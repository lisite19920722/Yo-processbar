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
      vm.wind=3;
      vm.rainfall=0;
      vm.discharge=757*10;
      vm.aqi=data.data[4].aqi;
    }, function(error){
      $log.log('发送失败' + error);
    });

    var airPollutionGetParams = {};
    var airPollutionGetHeaders = {};
    var airPollutionGetPromise = qService.httpGetWithToken(environmentRes.getAirPollution, airPollutionGetParams, airPollutionGetHeaders);
    airPollutionGetPromise.then(function (data) {
      $log.log(data.data);
    }, function (error) {
      $log.log('发送失败' + error);
    });

    vm.clickPredict = function (){
      if(vm.so2In != angular.isNullOrUndefined && vm.no2In != angular.isNullOrUndefined && vm.pm25In != angular.isNullOrUndefined && vm.pm10In != angular.isNullOrUndefined && vm.o3In != angular.isNullOrUndefined && vm.windIn != angular.isNullOrUndefined && vm.rainfallIn != angular.isNullOrUndefined && vm.dischargeIn != angular.isNullOrUndefined){
        if (isNaN(parseFloat(vm.so2In)) || isNaN(parseFloat(vm.no2In)) || isNaN(parseFloat(vm.pm25In)) || isNaN(parseFloat(vm.pm10In)) || isNaN(parseFloat(vm.o3In)) || isNaN(parseFloat(vm.windIn)) || isNaN(parseFloat(vm.rainfallIn)) || isNaN(parseFloat(vm.dischargeIn)))
          alert("输入值不是数字");
        else{
          var outTest1 = vm.so2In + "," + vm.no2In + "," + vm.pm25In + "," + vm.pm10In + "," + vm.o3In + ",3,0,757";//最后三项为风力风向、降雨和工业废气排放量
          var airModelGetParams = {test: "参数传过来了，我们自豪", test1: outTest1};
          var airModelGetHeaders = {};
          var airModelGetPromise = qService.httpGetWithToken(environmentRes.getAirModel, airModelGetParams, airModelGetHeaders);
          airModelGetPromise.then(function (data) {
            $log.log(data.data);
            vm.modelOutput = data.data[5];
          }, function (error) {
            $log.log('发送失败' + error);
          });
        }
      }
      else
        alert("输入值为空");
    }

    vm.clickPlan = function (){
      vm.model_first = parseInt(vm.limit_first) + parseInt(vm.limit_second);
      vm.model_second = parseInt(vm.limit_second) + parseInt(vm.limit_third);
      vm.model_third = parseInt(vm.limit_third) + parseInt(vm.limit_fourth);
      vm.model_fourth = parseInt(vm.limit_fourth) + parseInt(vm.limit_fifth);
    }
  }
})();
