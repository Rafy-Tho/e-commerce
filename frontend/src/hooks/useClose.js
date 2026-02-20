import { useEffect } from 'react';

function useClose(drawerRef, isOpen, closeDrawer) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        isOpen
      ) {
        closeDrawer();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);
}

export default useClose;
