'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Server Tests:', () => {

  // testing 404 on bad route
  it('test a bad route that doesn\'t exist', async () => {
    await request.get('/notarealroute')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  });

  // 404 on a bad method
  it('should return a ', async () => {
    await request.put('/person')
      .then(result => {
        expect(result.status).toEqual(404);
      })
  });

  // 500 if no name in the query string
  it('should return an error 500 if no name in the query string', async () => {
    await request.get('/person')
      .then(result => {
        expect(result.status).toEqual(500);
      })
  })

  // 200 if the name is in the query string
  it('should return status 200 if name is in query string', async () => {
    await request.get('/person?name=jenner')
      .then(result => {
        expect(result.status).toEqual(200);
      })
  })

  // given a name in the query string, the output object is correct
  it('should return the correct query string entered', async () => {
    await request.get('/person?name=jenner')
      .then(result => {
        expect(typeof result.body.name).toEqual('string');
        expect(result.body.name).toEqual('jenner');
      })
  })
});
