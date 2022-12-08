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
    let totalInterest = 0

    let nextBalanceEvent = accountBalanceHistory.shift()

    for (let dayOfMonth = 1; dayOfMonth < daysInMonth + 1; dayOfMonth++) {
        let nextBalanceEventDayOfMonth = nextBalanceEvent ?
            nextBalanceEvent?.created_at?.getDate() :
            null

        // Check if balance changed on this day
        if (dayOfMonth == nextBalanceEventDayOfMonth) {
            const balanceChange = nextBalanceEvent.balance - balance
            balance = nextBalanceEvent.balance
            nextBalanceEvent = accountBalanceHistory.shift()
        }
        const dailyInterestCharge = billingUtils.calculateDailyInterestCharge(balance)
        totalInterest += dailyInterestCharge
    }
    const roundedInterest = Math.round(totalInterest * 100) / 100
    return roundedInterest
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
