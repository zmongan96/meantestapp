(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Oils',
      state: 'articles',
      type: 'dropdown',
      roles: ['user', 'admin']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'articles', {
      title: 'List Articles',
      state: 'articles.list',
      roles: ['user', 'admin']
    });
  }
}());
