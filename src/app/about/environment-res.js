(function() {
  'use strict';
  angular.module('yoProcessbar')
    .factory('EnvironmentRes', EnvironmentRes)

  /** @ngInject */
  function EnvironmentRes($resource, BASE_URL) {
    return {
      getAirQuality: function (headers) {
        return $resource(BASE_URL + '/environment/air/air_quality', {}, {
          get: {
            method: 'GET',
            headers: headers
          }
        });
      },
      getAirPollution: function (headers) {
        return $resource(BASE_URL + '/environment/air/air_pollution', {}, {
          get: {
            method: 'GET',
            headers: headers
          }
        });
      }
    };
  }
})();

// angular.module('yoProcessbar')
//   .factory('EnvironmentRes', ['$resource','BASE_URL', function($resource, BASE_URL) {
//     return {
//       getAirQuality: function (headers){
//         return $resource(BASE_URL+'/environment/air/air_quality', {}, {
//           get: {
//             method: 'GET',
//             headers: headers
//           },
//         });
//       },
//       getAirPollution: function (headers){
//         return $resource(BASE_URL+'/environment/air/air_pollution', {
//
//         }, {
//           get: {
//             method: 'GET',
//             headers: headers
//           },
//         });
//       },
//     };
//   }])
