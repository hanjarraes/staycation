export const numberFormat = (number) => {
    const formatNumbering = new Intl.NumberFormat("id-ID")
    return formatNumbering.format(number)
}
