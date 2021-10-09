export function findCurrency(prices: any, currency: any) {
  const currentPrice = prices?.find(
    (price: any) => price.currency === currency
  );

  return `${currentPrice.currency} ${currentPrice.amount}`;
}

export function isActive(name: any, itemType: any, product: any) {
  if (itemType.length) {
    const newItem = itemType.find((item: any) => item.name === name);
    if (newItem?.value === product.value) return true;
    else return false;
  } else {
    return false;
  }
}

export function isActiveMenuItem(location: any, name: string) {
  return !!location.pathname.includes(name);
}

export function finalPrice(selectedProducts: any, currency: any) {
  const finalPrices = selectedProducts?.map((finalPriceItem: any) => {
    let currentItem = finalPriceItem.price.find(
      (item: any) => item.currency === currency
    );

    return {
      ...currentItem,
      amount: currentItem.amount * finalPriceItem.count,
    };
  });

  return finalPrices
    ?.map((item: any) => +item.amount)
    .reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
}

export function numberOfItemsInCart(selectedProducts: any) {
  return selectedProducts
    ?.map((finalPriceItem: any) => finalPriceItem.count)
    .reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    );
}
