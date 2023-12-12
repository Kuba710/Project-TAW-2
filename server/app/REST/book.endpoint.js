import business from '../business/business.container';

const bookEndpoint = (router) => {
    router.get('/api/books', async (request, response, next) => {
        try {
            let result = await business.getBookManager().query();
            console.log("request ")
            console.log(result)
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/books/:id', async (request, response, next) => {
        try {
            const id = request.params.id;
            let result = await business.getBookManager().get(id);
            console.log(result);

            if (result) {
                response.status(200).send(result);
            } else {
                response.status(404).send('Dokument o podanym ID nie został znaleziony.');
            }
        } catch (error) {
            console.log(error);
            response.status(500).send('Wystąpił błąd serwera.');
        }
    });

    router.post('/api/books', async (request, response, next) => {
        try {
            let result = await business.getBookManager().createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete('/api/books/:id', async (request, response, next) => {
      try {
        const id = request.params.id;
        let result = await business.getBookManager().deleteBook(id);

        if (result) {
          response.status(200).send('Książka została usunięta');
        } else {
          response.status(404).send('Nie znaleziono książki o podanym ID.');
        }
      } catch (error) {
        console.log(error);
        response.status(500).send('Wystąpił błąd serwera.');
      }
    });

};
export default bookEndpoint;
