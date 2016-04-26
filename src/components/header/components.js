import template from './header-template.html';
import './header.less';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
