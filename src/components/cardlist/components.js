import template from './cardlist-template.html';
import controller from './controllers';
import './cardlist.less';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {
      index: '=',
      cardlist: '=',
      id: '='
    },
    require: {
      MainController: '^^appMain'
    },
    controllerAs: '$clCtrl',
    bindToController: true,
  };
};
