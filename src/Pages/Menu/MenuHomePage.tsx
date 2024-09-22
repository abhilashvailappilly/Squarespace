import React, { useEffect, useState } from 'react';
import BuildingLoaderPage from './BuildingLoaderPage';
import Spinner from '../../Components/Others/Spinner';
import Logo from '../../Components/Svg/Logo';
import MenuLeftSideLayout from '../../Components/Layout/Menu/MenuLeftSideLayout';
import MenuRightSideLayout from '../../Components/Layout/Menu/MenuRightSideLayout';
import MenuLeftSideContainer from '../../Components/Menu/Container/MenuLeftSideContainer';
import MenuRightSideContainer from '../../Components/Menu/Container/MenuRightSideContainer';
import { useStoreHook } from '../../Hooks/UseStoreHook';



const MenuHomePage = () => {
  const [currentView, setCurrentView] = useState('first'); 
  const {menu} = useStoreHook()

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setCurrentView('second'); 
    }, 1000); //6 8

    const secondTimer = setTimeout(() => {
      setCurrentView('main'); 
    }, 1000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  if (currentView === 'first') {
    return <BuildingLoaderPage />;
  }

  if (currentView === 'second') {
    return <Spinner />;
  }

  return (
    <div className="w-full flex h-full bg-white">
    { !menu?.isEditing &&
     <MenuLeftSideLayout>
            <MenuLeftSideContainer/>
     </MenuLeftSideLayout>
     }
      <MenuRightSideLayout>
         <MenuRightSideContainer/>

      </MenuRightSideLayout>
    </div>
  ); 
};

export default MenuHomePage;
