import bookDAO from '../DAO/bookDAO';

function create(context) {
    async function query() {
        let result = bookDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await bookDAO.get(id);
        if (result) {
            return result;
        }
    }

    async function createNewOrUpdate(data) {
        let result = await bookDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function deleteBook(id) {
    console.log("book.manager")
        let result = await bookDAO.deleteBookById(id);
        if(result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        createNewOrUpdate: createNewOrUpdate,
        deleteBook: deleteBook
    };
}

export default {
    create: create
};
