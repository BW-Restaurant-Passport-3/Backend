const server = require('./server');
const request = require('supertest');

describe('server.js', () => {
  it('Should be runnuning on test environment', () => {
    expect(process.env.ENVIRONMENT).toBe('testing');
  });

  describe('GET /', () => {
    it('should be json', async () => {
      const response = await request(server).get('/');
      expect(response.type).toBe('application/json');
    });

    it('should return 200 OK', async () => {
      const response = await request(server).get('/');
      expect(response.status).toEqual(200);
    });
  });

  describe('POST /api/auth/register', () => {
    it('should be json', async () => {
      const response = await request(server)
        .post('/api/auth/register')
        .send({
          username: 'user7',
          password: 'password',
          name: 'Dude',
          city: 'NY',
          email: 'dude2@email.com',
        });

      expect(response.type).toBe('application/json');
    });

    it('should return 201 CREATED with successful registration', async () => {
      const response = await request(server)
        .post('/api/auth/register')
        .send({
          username: 'user8',
          password: 'password',
          name: 'Mr. Mr',
          city: 'Paris',
          email: 'mr2@email.com',
        });

      expect(response.status).toEqual(201);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should be json', async () => {
      const response = await request(server)
        .post('/api/auth/login')
        .send({ username: 'user4', password: 'password' });

      expect(response.type).toBe('application/json');
    });

    it('should return 200 OK upon successful login', async () => {
      const response = await request(server)
        .post('/api/auth/login')
        .send({ username: 'user5', password: 'password' });

      expect(response.status).toEqual(200);
    });
  });
});
