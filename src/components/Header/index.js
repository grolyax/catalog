import DateElement from '../common/date';
import './styles.scss';
import imgSrc from "./logo.jpg";
import AddBoxIcon from '@material-ui/icons/AddBox.js';
import ViewModuleIcon from '@material-ui/icons/ViewModule.js';
import MenuIcon from '@material-ui/icons/Menu.js';
import ExitToAppIcon from '@material-ui/icons/ExitToApp.js';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline.js';
import IconButton from '@material-ui/core/IconButton';
import yellow from '@material-ui/core/colors/yellow';
import SearchIcon from '@material-ui/icons/Search';

const primary = yellow[50];
const secondary = yellow[100];

const titleMuseum = { title: '"Августовок: история и судьбы"' };

const Header = () => {
  return (
    <div className="header">
      <img src={imgSrc} alt=""></img>

      <div className="center_bar">
        <h2>Каталог экспонатов основного фонда</h2>
        <p id="type_museum">Историко-краеведческий музей <span className="museumName">{titleMuseum.title}</span></p>

        <div className="search_block">
          <div className="search">
            <input className="search_input" placeholder="поиск экспоната"></input>
            <SearchIcon fontSize="large" />
          </div>
          <DateElement />
        </div>

      </div>

      <div className="navigation">
        <div className="navigation_bar">
          <IconButton style={{ color: secondary }}>
            <ViewModuleIcon fontSize="large" />
          </IconButton>
          <IconButton style={{ color: primary }}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <IconButton style={{ color: primary }}>
            <ViewHeadlineIcon fontSize="large" />
          </IconButton>
          <IconButton style={{ color: primary }}>
            <AddBoxIcon fontSize="large" />
          </IconButton>
          <IconButton style={{ color: primary }} aria-label="exit" >
            <ExitToAppIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="user_block">
          <p>Login</p>
          <p>Admin</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Header;