const formatPrice = (price: number) => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  return `${formatted.replace(/,/g, ' ').replace('$', '').trim()} $`;
};

export default formatPrice;
