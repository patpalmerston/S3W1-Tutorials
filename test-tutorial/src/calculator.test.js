import { add, subtract } from './calculator';

describe('calculator', () => {
	describe('add()', () => {
		it('should return the sum of numbers passed in', () => {
			// expect
			expect(add(2, 3)).toBe(5);
			expect(add(2, 2)).toBe(4);
      expect(add(8)).toBe(8);
      
		}); 
	});

	describe('subtract()', () => {
		it('should return subtracted sum of two numbers passed in', () => {
			expect(subtract(2, 2)).toBe(0);
			expect(subtract(5, 2)).toBe(3);
		});
	});
});
