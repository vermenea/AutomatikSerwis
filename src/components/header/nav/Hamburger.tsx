import { HamburgerProps } from "@/util/types"

export default function Hamburger({isActive, toggleActive} : HamburgerProps){
    
    return   <div className={`hamburger ${isActive ? 'active' : ''} cursor-pointer block sm:hidden`} onClick={toggleActive}>
    <span className="bar block w-5 h-[3px] bg-white my-[5px] transition-transform"></span>
    <span className="bar block w-5 h-[3px] bg-white my-[5px] transition-transform"></span>
    <span className="bar block w-5 h-[3px] bg-white my-[5px] transition-transform"></span>
  </div>
}