import React from 'react';

const ItemCardLateral = ({ texto = 'item do menu', link = '#' }) => {
  return (
    <div className="py-4">
      <a href={link} className="text-primary hover:text-primaryHover font-bold">
        {texto}
      </a>
    </div>
  );
};

export default ItemCardLateral;
