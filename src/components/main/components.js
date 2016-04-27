import template from './main-template.html';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
