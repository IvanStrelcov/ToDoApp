import template from './addRow-template.html';
import './addRow.less';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
