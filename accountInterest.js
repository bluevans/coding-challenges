import billingUtils from './billingUtils.js'
import dateUtils from './dateUtils.js'
import model from './model.js'
import testData from './testData.js'

function calculateInterest(userId, accountId, startDate, endDate, mockBalanceHistory) {
    // console.log(mockBalanceHistory)
    const daysInMonth = dateUtils.getTotalDaysInMonth(startDate)
    const sortDirection = 'DESC'
    const accountBalanceHistory = model.getAccountBalanceHistory(userId, accountId, startDate, endDate, sortDirection, mockBalanceHistory)

    // If user opened account on prior month, see what the last balance was at start of this month
    let balance = model.getBalanceOnDate(userId, accountId, startDate)
    let total_interest = 0

    let next_balance_event = accountBalanceHistory.shift()

    for (let day_of_month = 1; day_of_month < daysInMonth + 1; day_of_month++) {
        let next_balance_event_day_of_month = next_balance_event ?
            next_balance_event?.created_at?.getDate() :
            null

        // Check if balance changed on this day
        if (day_of_month == next_balance_event_day_of_month) {
            const balanceChange = next_balance_event.balance - balance
            balance = next_balance_event.balance
            // console.log(`Balance changed on day ${next_balance_event_day_of_month}. New balance: ${next_balance_event.balance}. Change: ${balanceChange}`)
            next_balance_event = accountBalanceHistory.shift()
        }
        const daily_interest_charge = billingUtils.calculateDailyInterestCharge(balance)
        total_interest += daily_interest_charge
        // console.log(`Daily interest for day ${day_of_month} is ${daily_interest_charge}, running total: ${total_interest}`)
    }
    const rounded_interest = Math.round(total_interest * 100) / 100
    return rounded_interest
}

function checkTestCase(testCase) {
    const { balanceHistory, testCaseName, expected } = testCase
    const result = calculateInterest(
        'someUserId',
        'someAccountId',
        new Date(Date.UTC(2022, 1, 1)),
        new Date(Date.UTC(2022, 1, 31)),
        balanceHistory
    )
    console.log(`${testCaseName} result: ${result}, expected: ${expected}`)
}

testData.forEach(testCase => checkTestCase(testCase))
