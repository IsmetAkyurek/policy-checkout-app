type FormatAmount = (amount: number) => string;

/**
 * Formats the given amount value in a fixed 2 digit format and returns as a string.
 * @param {number} amount Amount value to be formatted
 * @returns {string} Fixed 2 digit formatted string value
 */
const formatAmount: FormatAmount = (amount) => {
  return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default formatAmount;
