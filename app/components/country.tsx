// components/Country.tsx

import React from 'react';

interface Country {
  name: string;
  capital: string;
  population: string;
}

interface CountryDetailsProps {
  country: Country | null; // Country object or null if not found
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  if (!country) {
    return (
      <div className="flex justify-center mt-20">
        <h1 className="text-3xl font-bold text-red-600 bg-white shadow-md rounded-lg p-6">
          Country not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{country.name}</h1>
      <p className="text-lg text-gray-700 mb-2">
        <span className="font-semibold">Capital: </span>
        {country.capital}
      </p>
      <p className="text-lg text-gray-700">
        <span className="font-semibold">Population: </span>
        {country.population}
      </p>
    </div>
  );
};

export default CountryDetails;
