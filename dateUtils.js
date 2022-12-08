function getTotalDaysInMonth(date) {
    const last_day_number = new Date(date.getUTCFullYear(), date.getUTCMonth(), 0).getDate();
    return last_day_number;
}

const dateUtils = {
    getTotalDaysInMonth
}

export default dateUtils
