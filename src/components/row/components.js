import template from './row-template.html';
import './row.less';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$rCtrl',
    bindToController: true,
  };
};
