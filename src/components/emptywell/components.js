import template from './emptywell-template.html';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
