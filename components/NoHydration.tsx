'use client';

import { useEffect, useState } from 'react';

interface NoHydrationProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function NoHydration({ children, fallback = null }: NoHydrationProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    
    // Limpiar atributos de extensiones después de la hidratación
    const cleanExtensionAttributes = () => {
      const suspiciousAttrs = [
        'bis_skin_checked',
        'bis_register',
        '__processed',
        'data-gr-c-s-loaded',
        'data-gr-ext-installed',
        'data-grammarly',
        'data-grammarly-shadow-root'
      ];
      
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach(el => {
        suspiciousAttrs.forEach(attr => {
          if (el.hasAttribute(attr)) {
            el.removeAttribute(attr);
          }
        });
        
        Array.from(el.attributes).forEach(attr => {
          if (attr.name.startsWith('__processed_')) {
            el.removeAttribute(attr.name);
          }
        });
      });
    };

    // Ejecutar limpieza después de la hidratación
    setTimeout(cleanExtensionAttributes, 100);
    setTimeout(cleanExtensionAttributes, 500);
    setTimeout(cleanExtensionAttributes, 1000);
  }, []);

  return (
    <>
      {isHydrated ? children : fallback}
    </>
  );
}
