function getAccountBalanceHistory(userId, accountId, startDate, endDate, sortDirection, mockBalanceHistory) {
    // This and other provided SQL are just for illustration. I would use something like 
    // pgpromise with ParameterizedQuery in actual production code to avoid SQL injection
    `SELECT created_at, balance FROM account_balance_history
        WHERE user_id=${userId} AND account_id=${accountId} 
        AND created_at BETWEEN ${startDate} AND ${endDate}
        AND not is_deleted
        ORDER BY start_date ${sortDirection}`;
    // Returned list is pre-sorted and filtered to only include data for interest calculation
    return mockBalanceHistory ?? [];
}

function getBalanceOnDate(userId, accountId, date) {
    // Looks up most recent balance on or before date
    `
        SELECT balance FROM account_balance_history
        WHERE user_id=${userId} AND account_id=${accountId} 
        AND DATE(created_at) <= ${date}
        AND not is_deleted
        ORDER BY created_at DESC
        LIMIT 1
    `;

    // None of the test cases opened before January 1, so mocking this as 0.0
    const mockStartingBalance = 0.0;
    return mockStartingBalance;
}

const model = {
    getAccountBalanceHistory,
    getBalanceOnDate
}

export default model
