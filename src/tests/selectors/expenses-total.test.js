import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return the total amount of individual expenses',()=>{
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});

test('should return a total amount of zero for no expenses',()=>{
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should return a single amount for one expense',()=>{

    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

