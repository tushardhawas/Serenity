import './Navbar.css';

const nav = ({ onAbout, onToggleTheme, theme }) => {
  return (
    <header className="navbar">
      <div className="logo">Serenity</div>
     
      <button className="nav-button" type="button" onClick={onToggleTheme}>
        {theme === 'soft' ? 'Dusk' : 'Soft'}
      </button>
    </header>
  );
};

export default nav;