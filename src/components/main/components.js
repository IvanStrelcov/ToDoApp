import template from './main-template.html';
import './main.less';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
