import { HttpStatusCode } from './api/controllers/protocols';
import request from 'supertest';
import { describe, it, expect } from 'vitest';

import { app } from './server';

describe('Testing app server', () => {
  it('should get main route', async () => {
    const res = await request(app).get('/api');

    expect(res.statusCode).toEqual(HttpStatusCode.OK);
    expect(res.body).toHaveProperty('message');
  });
});
