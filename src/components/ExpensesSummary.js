import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount===1 ? 'expense' : 'expenses';
    return(
    <div>
        <h3>Viewing {expenseCount} {expenseWord} totalling {expensesTotal}</h3>
    </div>
    )
    };

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters);

    return {    
        expenseCount: state.expenses.length,
        expensesTotal: numeral(selectExpensesTotal(visibleExpenses)/100).format('$0,0.00'),
    }
   
};

export default connect(mapStateToProps)(ExpensesSummary);