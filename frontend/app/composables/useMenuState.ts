
// composables/useMenuState.ts

export const useMenuState = () => {
  const menuOpen = useState<boolean>('menu:open', () => false)
  const openSubmenu = useState<string | null>('menu:submenu', () => null)

  const toggleSubmenu = (id: string) => {
    openSubmenu.value = openSubmenu.value === id ? null : id
  }
  const closeAll = () => {
    menuOpen.value = false
    openSubmenu.value = null
  }

  return { menuOpen, openSubmenu, toggleSubmenu, closeAll }
}