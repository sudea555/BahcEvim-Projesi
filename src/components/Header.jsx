import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../assets/logo.jpeg"

function Header({ sepet,arama, setArama }) {
  const toplamAdet = sepet.reduce(
    (toplam, urun) => toplam + urun.adet,
    0
  )

  return (
    <header className="header">
      {/* SOL: Logo + BahçeEvım */}
      <div className="header-left">
        <div className="logo-wrapper">
          <img src={logo} alt="BahçeEvım Logo" />
        </div>
        <span className="logo-text">BahçEvim</span>
      </div>

      {/* ORTA: Arama */}
      <div className="header-search">
        <input  type="text"
  placeholder="Taze ürün ara..."
  value={arama}
  onChange={(e) => setArama(e.target.value)} />
        <button>🔍</button>
      </div>

      {/* SAĞ: Menü */}
      <nav className="header-menu">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/sepet">
          Sepet
          {toplamAdet > 0 && (
            <span className="sepet-sayi">{toplamAdet}</span>
          )}
        </Link>
        <Link to="/favoriler">Favoriler</Link>
      </nav>
    </header>
  )
}

export default Header
