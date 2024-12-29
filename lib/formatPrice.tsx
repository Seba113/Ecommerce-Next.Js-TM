export function formatPrice(price: number){
    const priceFormated = new Intl.NumberFormat('en-EN', {
        style:"currency",
        currency: "UYU"
    })

    const finalPrice = priceFormated.format(price)
    return finalPrice
}