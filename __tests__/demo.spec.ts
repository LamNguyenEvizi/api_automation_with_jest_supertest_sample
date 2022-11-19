
import request from "supertest";

const baseUrl = process.env.ENDPOINT;

describe('Todos endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
			.get('todos/1');

		expect(response.statusCode).toBe(200);
	});

    it('should set the todo item to completed', async () => {
        const response = await request(baseUrl)
          .put('todos/1')
          .send({
              completed: true
          });
      
        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject({completed: true, id: 1})
      });
});