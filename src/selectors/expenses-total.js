
const selectExpensesTotal = (expenses) => {
    let total = 0;
    expenses.forEach((expense)=>{
        total+=expense.amount;
    })
    return total;
}

export default selectExpensesTotal;