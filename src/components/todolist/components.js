import template from './todolist-template.html';
import './todolist.less';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: false,
    controllerAs: '$tdlctrl',
    bindToController: true,
  };
};
