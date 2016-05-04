import template from './addCard-template.html';
import './addCard.less';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
