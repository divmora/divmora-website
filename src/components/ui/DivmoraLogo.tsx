import React from 'react';
import logoUrl from '../../assets/logo.png';

interface DivmoraLogoProps {
  size?: number;
  className?: string;
}

export const DivmoraLogo: React.FC<DivmoraLogoProps> = ({
  size = 36,
  className = '',
}) => {
  return (
    <img
      src={logoUrl}
      alt="Divmora"
      width={size}
      height={size}
      className={`shrink-0 object-contain select-none transition-transform duration-150 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      loading="eager"
    />
  );
};
