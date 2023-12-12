'use strict';

import userManager from './user.manager';
import bookManager from './book.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getBookManager: getter(bookManager)
};
