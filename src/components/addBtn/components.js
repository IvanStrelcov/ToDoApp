import template from './addBtn-template.html';
import './addBtn.less';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
