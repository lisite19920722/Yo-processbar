(function() {
  'use strict';

  angular.module('yoProcessbar')
    .service('qService', qService);

  /** @ngInject */
  function qService($q, $state) {
    var tempToken = 'f9d1e1ca4bf5497b97dc5129b648c74e';
    var workspaceId = 1;
    var successHandler = function(value){
      if (value.code == "502") {
        $state.go("home");
      }
    }
    return {
      httpGetWithToken: function(resource, parameters, headers){
        return $q(function(resolve, reject)  {
          // headers['X-Auth-Token'] = $sessionStorage[TOKEN_KEY];
          headers['X-Auth-Token'] = tempToken;
          headers['X-Workspace-Id'] = workspaceId;
          resource(headers).get(parameters,
            function(value, responseHeaders) {
              successHandler(value);
              value.headers = responseHeaders ? responseHeaders() : "";
              resolve(value);
            },
            function(httpResponse) {
              reject(httpResponse);
            });
        });
      }
    };
  }
})();
