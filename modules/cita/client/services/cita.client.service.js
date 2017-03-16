// Cita service used to communicate Cita REST endpoints
(function () {
  'use strict';

  angular
    .module('cita')
    .factory('CitaService', CitaService);

  CitaService.$inject = ['$resource'];

  function CitaService($resource) {
    return $resource('api/cita/:citaId', {
      citaId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
