import template from './todo-template.html';
import './todo.less';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$tdCtrl',
    bindToController: true,
    scope: {
      todo: '=',
      index: '='
    },
    require: {
      CardController: '^^card'
    }
  };
};
