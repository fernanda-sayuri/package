import { Card } from '../../components/card';
import React, { useState, useEffect } from 'react';

const dataListCard = [{
  title: 'Grupos',
  linkName: 'Acessar',
  href: '/groups'
},
{
  title: 'Produtos',
  linkName: 'Acessar',
  href: '/products'
},
{
  title: 'Canais',
  linkName: 'Acessar',
  href: '/channels'
}];

const Home = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 800) {
        setScreenSize('flex-col');
      } else {
        setScreenSize('');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex flex-1 flex-wrap h-svh ${screenSize}`}>
      {dataListCard.map((itemCard, index)=> (
        <Card key={index} title={itemCard.title} linkName={itemCard.linkName} href={itemCard.href} />
      ))}
    </div>
  );
};

export default Home;

