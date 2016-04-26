import template from './emptywell-template.html';
import './emptywell.less';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$ewctrl',
    bindToController: true,
  };
};
