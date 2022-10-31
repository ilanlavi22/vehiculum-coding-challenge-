// Create our number formatter.
const CURRENCY_FORMATTER = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 3,
  minimumFractionDigits: 2,
  currency: 'EUR'
});
export function formatCurrency(number) {
  return '\u20AC ' + CURRENCY_FORMATTER.format(number / 100);
}
