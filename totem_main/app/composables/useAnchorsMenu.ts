export interface AnchorItem {
  label: string
  href: string
}

export function useAnchorMenu() {
  const anchors = useState<AnchorItem[]>('anchors', () => [])
  
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