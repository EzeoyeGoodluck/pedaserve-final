/** Single source of truth for company details. Edit here, not in pages. */
export const COMPANY = {
  name: 'Pedaserve',
  legalName: 'Pedaserve Ltd',
  email: 'info@pedaserve.com',
  // Add a UK number here when you have one, e.g. '+44 1923 000000'. Leave empty to hide phone links.
  phone: '',
  address: {
    line1: '81A Tolpits Lane',
    town: 'Watford',
    postcode: 'WD18 6NT',
    country: 'England',
    countryCode: 'GB',
  },
  addressOneLine: '81A Tolpits Lane, Watford, WD18 6NT, England',
  schemaAddress: {
    '@type': 'PostalAddress',
    'streetAddress': '81A Tolpits Lane',
    'addressLocality': 'Watford',
    'addressRegion': 'Hertfordshire',
    'postalCode': 'WD18 6NT',
    'addressCountry': 'GB',
  },
};
