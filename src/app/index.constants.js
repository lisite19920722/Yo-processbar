/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('yoProcessbar')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    // .constant('BASE_URL', 'http://localhost:8080/api');
  .constant('BASE_URL', '/api'); // 发布
})();
