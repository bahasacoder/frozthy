import HeaderMenu from '@/components/blocks/header/header-menu'
import type { NavigationSection } from '@/components/blocks/menu-navigation'
import navigationData from '@/db/stickyMenu.json'

// const navigationData: NavigationSection[] = ... // Load this from your JSON file or define it directly



const StickyMenu = () => {
  return (
    <div className='overflow-x-hidden pb-17.5'>
      {/* Header Section */}
      <HeaderMenu navigationData={navigationData} />

    </div>
  )
}

export default StickyMenu
