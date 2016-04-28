import template from './main-template.html';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$mainCtrl',
    bindToController: true,
  };
};
