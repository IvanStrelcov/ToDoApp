import template from './emptywell-template.html';
import './emptywell.less';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
