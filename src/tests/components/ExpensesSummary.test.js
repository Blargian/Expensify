import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should render the total if 1 expense is passed',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
})


test('should render the total if multiple expenses are passed',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={23512340987}/>);
    expect(wrapper).toMatchSnapshot();
})