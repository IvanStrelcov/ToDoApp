import template from './cardlist-template.html';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$clCtrl',
    bindToController: true,
  };
};
