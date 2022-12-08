const testCase1 =
{
    testCaseName: 'Test Case 1',
    expected: 16.99,
    balanceHistory: [
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-1"),
            balance: 10000.0,
            previous_balance: 0,
            is_deleted: false,
        },
    ]
}

const testCase2 =
{
    testCaseName: 'Test Case 2',
    expected: 24.38,
    balanceHistory: [
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-1"),
            balance: 10000.0,
            previous_balance: 0,
            is_deleted: false,
        },
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-5"),
            balance: 15000.0,
            previous_balance: 10000.0,
            is_deleted: false,
        },
    ]
}

const testCase3 =
{
    testCaseName: 'Test Case 3',
    expected: 10.68,
    balanceHistory: [
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-1"),
            balance: 10000.0,
            previous_balance: 0,
            is_deleted: false,
        },
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-5"),
            balance: 5000.0,
            previous_balance: 10000.0,
            is_deleted: false,
        },
    ]
}

const testCase4 =
{
    testCaseName: 'Test Case 4',
    expected: 20.55,
    balanceHistory: [
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-1"),
            balance: 10000.0,
            previous_balance: 0,
            is_deleted: false,
        },
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-15"),
            balance: 15000.0,
            previous_balance: 10000.0,
            is_deleted: false,
        },
        {
            id: 1,
            account_id: 'someaccount',
            user_id: 'someuser',
            created_at: new Date("2022-1-27"),
            balance: 10000.0,
            previous_balance: 15000.0,
            is_deleted: false,
        }
    ]
}

const testData = [
    testCase1,
    testCase2,
    testCase3,
    testCase4
]

export default testData
