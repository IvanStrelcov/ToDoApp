import template from './todocomp-template.html';
import './todocomp.less';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$tdcCtrl',
    bindToController: true,
    require: {
      listCtrl: '^^appTodolist'
    }
  };
};
