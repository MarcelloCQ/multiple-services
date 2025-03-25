import { useEffect, useRef, useState } from 'react';

const useHeaderMenu = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenuChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.classList.toggle('active');
    setMenu(!menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        const tsBtn = document.getElementById('nav-btn-menu');
        tsBtn?.classList.remove('active');
        setMenu(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const tsBtn = document.getElementById('nav-btn-menu');
        tsBtn?.classList.remove('active');
        setMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuRef, buttonRef]);

  return {
    handleMenuChange,
    setMenu,
    menu,
    menuRef,
    buttonRef,
  };
};

export default useHeaderMenu;
