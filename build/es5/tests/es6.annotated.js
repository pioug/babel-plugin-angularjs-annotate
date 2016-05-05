module.exports = {'test': 'name'}

import angular from 'angular'

angular.module(module.exports.test, ['deps']).factory('Example', ["CustomService", function (CustomService) {
}])

function es6DefaultArg(firstarg = "defaultValue"){}

const {destruc, turing} = {a:1, b:2}
