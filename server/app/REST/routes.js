import userEndpoint from './user.endpoint';
import bookEndpoint from './book.endpoint';

const routes = function (router) {
    userEndpoint(router);
    bookEndpoint(router);
};

export default routes;
