import template from './header-template.html';

export default () => {
  return {
    template,
    restrict: 'E',
    replace: true
  };
};
