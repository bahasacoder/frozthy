//import HeaderMenu from './header-menu'
import HeroSection from './hero-section'
import type { NavigationSection } from '@/components/blocks/menu-navigation'
import herodata from '@/db/heroData.json'
/*
const navigationData: NavigationSection[] = [

*/
// const menudata =  
const HeroPage = () => {
  return (


      <main className='flex flex-col'>
        <HeroSection menudata = {herodata} />
      </main>
  )
}

export default HeroPage
