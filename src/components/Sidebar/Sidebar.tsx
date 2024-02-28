import Boutons from '../Boutons/Boutons'
import { MdHome,MdGroups } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import Logo from '../Logo/Logo';

function Sidebar() {
  return (
    <div className='sidebar'>    
        <Logo/>   

        <div className="milieu">
            <hr />
            <h3 className='titre-menu'>Menu</h3>
              <Boutons label="Accueil" icon= {<MdHome />} />
              <Boutons label="Messages" icon= {<AiFillMessage />} />
              <Boutons label="Amis" icon= {<GiThreeFriends />} />
              <Boutons label="Groupes" icon= {<MdGroups />} />
        </div>

        <div className="bas">
            <hr />
            <Boutons label="Profil" icon= {<CgProfile />} />
            <Boutons label="Paramètres" icon= {<IoIosSettings />} />
        </div>
    </div>
  )
}

export default Sidebar