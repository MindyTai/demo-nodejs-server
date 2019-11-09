import supertest from 'supertest';
import app from '../src/server';

const PORT = 3001;
let listener;
let request;

beforeAll(() => {
  listener = app.listen(PORT);
  request = supertest(listener);
});
afterAll(async () => {
  await listener.close();
});

test('Server Health Check', async () => {
  const res = await request.get('/');
  expect(res.status).toEqual(200);
  expect(res.text).toBe('Hello!CI/CD!');
});
