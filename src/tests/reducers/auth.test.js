import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';

test('Should login and set the uid',()=>{
    const action = {
        type: 'LOGIN',
        uid: expenses[0].id
      };
    const state = authReducer({}, action);
    expect(state).toEqual({uid: expenses[0].id})
});

test('Should logout and clear the uid',()=>{
    const action = {
        type: 'LOGOUT',
      };
    const state = authReducer({}, action);
    expect(state).toEqual({})
})