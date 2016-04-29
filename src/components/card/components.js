import template from './card-template.html';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: '$cardCtrl',
    bindToController: true,
    scope: {
      card: '=',
      index: '='
    },
    require: {
      CardListController: '^^cardList',
      MainController: '^^appMain',
    }
  };
};
