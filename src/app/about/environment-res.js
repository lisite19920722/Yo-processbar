(function() {
  'use strict';
  angular.module('yoProcessbar')
    .factory('environmentRes', environmentRes);

  /** @ngInject */
  function environmentRes($resource, BASE_URL) {
    return {
      getAirQuality: function (headers) {
        return $resource(BASE_URL + '/environment/air/air_quality', {}, {
          get: {
            method: 'GET',
            headers: headers
          }
        });
      },
      getAirPollution: function(headers){
        return $resource(BASE_URL+'/environment/air/air_pollution', {}, {
          get: {
            method: 'GET',
            headers: headers
          }
        });
      },
      getAirModel: function(headers){
        return $resource(BASE_URL+'/environment/air/air_model/1', {}, {
          get: {
            method: 'GET',
            headers: headers
          }
        });
      }
    };
  }
})();
