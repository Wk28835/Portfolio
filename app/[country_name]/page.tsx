// app/[country_name]/page.tsx

import React from 'react';
import CountryDetails from '../../app/components/country';

const CountryPage: React.FC<{ params: { country_name: string } }> = ({ params }) => {
  const CountryData = {
    pakistan: { name: 'Pakistan', capital: 'Islamabad', population: '25.8M' },
    india: { name: 'India', capital: 'Delhi', population: '1.4B' },
    china: { name: 'China', capital: 'Beijing', population: '1.412B' },
    japan: { name: 'Japan', capital: 'Tokyo', population: '125.1M' },
  };

  const { country_name } = params;
  const country = CountryData[country_name as keyof typeof CountryData] || null; // Get country or null if not found

  return <CountryDetails country={country} />;
};

export default CountryPage;
