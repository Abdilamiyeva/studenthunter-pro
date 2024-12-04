export const getFiltersCountries = (countries = []) => {
  const addCountryAndCities = (country: any, cities: any) => ({
    label: country,
    value: country,
    options: cities.map((city: any) => ({
      label: city.name,
      value: city.name,
    })),
  })

  const resultArray: any[] = []
  const countrySet = new Set()

  countries.forEach((state: any) => {
    const country = state.country
    if (!countrySet.has(country)) {
      countrySet.add(country)
      const citiesForCountry = countries.filter((s: any) => s.country === country)
      resultArray.push(addCountryAndCities(country, citiesForCountry))
    }
  })

  return resultArray
}
