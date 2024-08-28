function calculatedDiscountedPrice (price, discountedPecentage) {
    const discount = (price * discountedPecentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountedPecentage = 20
const finalPrice = calculatedDiscountedPrice(originalPrice, discountedPecentage)


console.log("originail price: $" + originalPrice)
console.log("Discount: " * discountedPecentage + "%")
console.log("Price with discount: $" + finalPrice)