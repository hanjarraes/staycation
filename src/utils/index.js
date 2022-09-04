export const numberFormat = (number) => {
    const formatNumbering = new Intl.NumberFormat("id-ID")
    return formatNumbering.format(number)
}

export const formatDate = (date) => {
    const d = new Date(date)
    const dft = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    });
    const [{ value: mo }, , { value: da }] = dft.formatToParts(d)
    return `${da} ${mo}`
}