import { useState, MouseEvent, useMemo, useCallback } from "react";

export default function useDropdownMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isMenuOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const openMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const menuState = useMemo(
    () => [anchorEl, isMenuOpen, openMenu, closeMenu] as const,
    [anchorEl, closeMenu, isMenuOpen, openMenu]
  );

  return menuState;
}
