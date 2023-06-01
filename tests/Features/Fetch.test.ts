import { Fetchop } from "../../src/Fetchop";

describe('Fetch', () => {
	it('should fetch the given endpoint using the static method', () => {
		(async () => {
			const response = await Fetchop.call('GET::https://jsonplaceholder.typicode.com/todos/1');
			expect(response).toHaveProperty('userId');
			expect(response).toHaveProperty('id');
			expect(response).toHaveProperty('title');
			expect(response).toHaveProperty('completed');
		})()
	});
	it('should fetch the given endpoint using the static method with the baseUrl', () => {
		(async () => {
			const response = await Fetchop.call('GET::/todos/1', {
				baseUrl: 'https://jsonplaceholder.typicode.com'
			});
			expect(response).toHaveProperty('userId');
			expect(response).toHaveProperty('id');
			expect(response).toHaveProperty('title');
			expect(response).toHaveProperty('completed');
		})()
	});
	it('should fetch the given endpoint using the instance method', () => {
		(async () => {
			const fetchop = new Fetchop();
			const response = await fetchop.call('https://jsonplaceholder.typicode.com/todos/1');
			expect(response).toHaveProperty('userId');
			expect(response).toHaveProperty('id');
			expect(response).toHaveProperty('title');
			expect(response).toHaveProperty('completed');
		})()
	});
	it('should fetch the given endpoint using the instance method with the baseUrl', () => {
		(async () => {
			const fetchop = new Fetchop({
				baseUrl: 'https://jsonplaceholder.typicode.com'
			});
			const response = await fetchop.call('/todos/1');
			expect(response).toHaveProperty('userId');
			expect(response).toHaveProperty('id');
			expect(response).toHaveProperty('title');
			expect(response).toHaveProperty('completed');
		})()
	});
})