import { createContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generalMenu } from '../constants/menu';
const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const location = useLocation();

  const getMenu = () => {
    const active = generalMenu.find(
      (e) => e.path === location.pathname.replace('/', '').toLocaleLowerCase()
    );
    const restMenu = generalMenu.filter(
      (e) => e.path !== location.pathname.replace('/', '').toLocaleLowerCase()
    );
    return { active, restMenu };
  };

  const data = { getMenu };

  return (
    <>
      <CategoryContext.Provider value={data}>
        {children}
      </CategoryContext.Provider>
    </>
  );
};

export { CategoryProvider };
export default CategoryContext;
