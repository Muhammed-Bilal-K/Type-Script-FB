import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
const token = localStorage.getItem("token");

const Home = () => {
    const navigate = useNavigate();
    const handleSignout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

  return (
    <div className="banner-area">
      <div>
        <header>
          <div className="menu">
            <ul className="ull">
              <li>
                <Link to="/">Home</Link>
              </li>
              {token ? (
                <>
                  <li>
                  <span style={{color:"white", marginRight:"60px", cursor:"pointer"}} onClick={handleSignout}>Sign Out</span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </header>
      </div>
      <div className="banner-text">
        <h1>HomePage Design</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem
          harum eaque aut deserunt pariatur eum ea, sequi minus nam veniam atque
          et quisquam molestiae aperiam! Iusto, ipsum.
        </p>
      </div>
    </div>
  );
};

export default Home;
