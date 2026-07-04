export interface AnchorItem {
  label: string
  href: string
}

const anchors = useState<AnchorItem[]>('anchors', () => [])

export function useAnchorMenu() {

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