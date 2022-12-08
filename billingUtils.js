const DAILY_INTEREST_RATE = 0.02 / 365

function calculateDailyInterestCharge(balance) {
    const daily_interest_charge = DAILY_INTEREST_RATE * balance;
    return daily_interest_charge;
}

const billingUtils = {
    calculateDailyInterestCharge
}

export default billingUtils
