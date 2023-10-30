import '../style.css'
function MenuToggle() {
  return (
    <div className="w-7 h-7  flex flex-col gap-1.5 justify-center" id="menu-toggle">
      <input type="checkbox" id="check-menu"  className="absolute z-20 w-10 h-10 opacity-0"/>
      <span className="w-8 h-2 bg-black block rounded"></span>
      <span className="w-8 h-2 bg-black block rounded"></span>
      <span className="w-8 h-2 bg-black block rounded"></span>
    </div>
  )
}

export default MenuToggle