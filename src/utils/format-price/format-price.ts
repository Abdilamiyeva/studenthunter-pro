export const formatPrice = (price?: number | string) =>
  (Number(String(price).replaceAll(' ', '')) < 0 ? '-' : '') +
  String(Math.floor(typeof price === 'number' ? price : +(price || '')?.replaceAll(' ', '')))
    .replaceAll(' ', '')
    .replace(/[^\d]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const formatPriceBackToNumber = (price?: number | string) =>
  typeof price === 'number' ? price : +(price || '')?.replaceAll(' ', '')
