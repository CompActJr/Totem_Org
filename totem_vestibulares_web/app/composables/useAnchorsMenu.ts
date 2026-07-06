export interface AnchorItem {
  label: string
  href: string
}

export function useAnchorsMenu() {
  const anchors = useState<AnchorItem[]>(() => [])
  
  function setMenu(items: AnchorItem[]) {
    anchors.value = items
  }

  function clearMenu() {
    anchors.value = []
  }

  return {
    anchors,
    setMenu,
    clearMenu
  }
}