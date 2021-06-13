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
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

const primary = yellow[50];
const secondary = yellow[100];

const titleMuseum = { title: '"Августовок: история и судьбы"' };

const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className="header">
      <img src={imgSrc} alt=""></img>

      <div className="center_bar">
        <h2>Каталог экспонатов основного фонда</h2>
        <p id="type_museum">Историко-краеведческий музей <span className="museumName">{titleMuseum.title}</span></p>
        <div className="search_block">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Поиск…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
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
    </div>
  );
};

export default Header;