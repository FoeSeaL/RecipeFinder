import cook from '../assets/images/cook.png'; 
function Header() {
    return (
      <header className="header app1">
        <img src={cook} alt="cook" className="cook" width={90} />
        <h1>Tasty Recipes</h1>
        <p>Find your next favorite meal!</p>
      </header>
    );
  }
  
  export default Header;