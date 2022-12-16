import style from "./Navbar.module.css"
import {text} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const MenuBar =()=>{
    return (
        
      <div class={style.dropdowncontent}>
        <div className={style.main_menuContainer} >
          <div>
<Link to="/product">
<h1 className={style.MenuH1} >Face</h1>
<p>Face Primer</p>
 <p>Concealer</p>
<p>Foundation</p>
<p>Compact</p>
<p>Contour</p>
<p>Loose Powder</p>
<p>Tinted Moisturizer</p>
<p>Blush</p>
<p>Bronzer</p>
<p>BB & CC Cream</p>
<p>Highlighters</p>
<p>Setting Spray</p>
<p>Makeup Remover</p>
<p>Sindoor</p>
</Link>
          </div>
          <div>
          <Link to="/product">
<h1 className={style.MenuH1} >Kajal</h1>
<p>Eyeliner</p>  
 <p>Mascara</p>
<p>Eye Shadow</p>
<p>Eye Brow Enhancers</p>
<p>Eye Primer</p>
<p>False Eyelashes</p>
<p>Eye Makeup Remover</p>
<p>Under Eye Concealer</p>
<p>Bronzer</p>
<p>Contact Lenses</p>
<h1 className={style.MenuH1} >Makeup Kits & Combos</h1>
<p>Makeup Kits</p>
<p>Bronzer</p>
<p>Makeup Combos</p>


</Link>
          </div>
          <div>
<Link to="/product">
<h1 className={style.MenuH1} >Lips</h1>         

<p>Lipstick</p>
 <p>Liquid Lipstick</p>
<p>Lip Crayon</p>
<p>Lip Gloss</p>
<p>Lip Liner</p>
<p>Lip Plumper</p>
<p>Lip Stain</p>

<h1 className={style.MenuH1} >Nails</h1>    
<p>Nail Polish</p>
<p>Nail Art Kits</p>
<p>Nail Care</p>
<p>Nail Polish Remover</p>
</Link>
          </div>
        </div>
     </div>
        
    )
}

export default MenuBar;