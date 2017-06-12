(function() {
  'use strict';

  angular
    .module('yoProcessbar')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController() {
    var vm = this;
    vm.lisite="李思特1234";

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

// (function() {
//   'use strict';
//
//   angular
//     .module('yoProcessbar')
//     .controller('AboutController', AboutController);
//
//   /** @ngInject */
//   function AboutController(ResTool, EnvironmentRes, $log) {
//     var vm = this;
//     vm.lisite="李思特1234";
//
//     var RGBChange = function() {
//       angular.element(document).find('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
//     };
//
//     var r = angular.element(document).find('#R').slider()
//       .on('slide', RGBChange)
//       .data('slider');
//     var g = angular.element(document).find('#G').slider()
//       .on('slide', RGBChange)
//       .data('slider');
//     var b = angular.element(document).find('#B').slider()
//       .on('slide', RGBChange)
//       .data('slider');
//     var airQualityGetParams = {};
//     var airQualityGetHeaders = {};
//     var airQualityGetPromise = ResTool.httpGetWithWorkspace(EnvironmentRes.getAirQuality, airQualityGetParams, airQualityGetHeaders);
//     airQualityGetPromise.then(function(data){
//       $log.log(data.data);
//     }, function(error){
//       $log.log('发送失败' + error);
//     });
//     var airPollutionGetParams = {};
//     var airPollutionGetHeaders = {};
//     var airPollutionGetPromise = ResTool.httpGetWithWorkspace(EnvironmentRes.getAirPollution, airPollutionGetParams, airPollutionGetHeaders);
//     airPollutionGetPromise.then(function(data){
//       $log.log(data.data);
//     }, function(error){
//       $log.log('发送失败' + error);
//     });
//   }
// })();

// app.controller('AirCtrl', ['$scope','ResTool','EnvironmentRes','$timeout',function($scope,ResTool,EnvironmentRes,$timeout) {
//   var airQualityGetParams = {};
//   var airQualityGetHeaders = {};
//   var airQualityGetPromise = ResTool.httpGetWithWorkspace(EnvironmentRes.getAirQuality, airQualityGetParams, airQualityGetHeaders);
//   airQualityGetPromise.then(function(data){
//     console.log(data.data);
//   }, function(error){
//     console.log('发送失败');
//   });
//   var airPollutionGetParams = {};
//   var airPollutionGetHeaders = {};
//   var airPollutionGetPromise = ResTool.httpGetWithWorkspace(EnvironmentRes.getAirPollution, airPollutionGetParams, airPollutionGetHeaders);
//   airPollutionGetPromise.then(function(data){
//     console.log(data.data);
//   }, function(error){
//     console.log('发送失败');
//   });
// }]);
