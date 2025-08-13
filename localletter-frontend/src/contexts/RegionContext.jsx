import { createContext, useState, useContext } from 'react';

const RegionContext = createContext();

export const useRegion = () => useContext(RegionContext);

export const RegionProvider = ({ children }) => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const selectRegion = (province, city) => {
    setSelectedProvince(province);
    setSelectedCity(city);
  };

  return (
    <RegionContext.Provider value={{ 
      selectedProvince, 
      selectedCity, 
      selectRegion 
    }}>
      {children}
    </RegionContext.Provider>
  );
};