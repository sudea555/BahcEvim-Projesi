import './Favoriler.css';

import { Link } from "react-router-dom"

function Favoriler({ favoriler, setFavoriler }) {

  function favoridenCikar(id) {
    const guncel = favoriler.filter(urun => urun.id !== id)
    setFavoriler(guncel)
  }

  return (
    <div className="favoriler-sayfa">
      <h2 className="favoriler-baslik">Favorilerim</h2>

      {favoriler.length === 0 ? (
  <div className="favoriler-bos">
    <span className="favoriler-emoji">❤️</span>
    <p>Henüz favori ürün eklemediniz</p>

    <button
      className="favoriler-gozat"
      onClick={() => window.location.href = "/"}
    >
      Ürünlere göz at
    </button>
  </div>
) : (


        <div className="favoriler-grid">
          {favoriler.map((urun) => (
            <div key={urun.id} className="favori-kart">
              <img src={urun.resim} alt={urun.ad} />

              <div className="favori-icerik">
                <h4>{urun.ad}</h4>
                <span>{urun.fiyat} ₺</span>

                <button
                  onClick={() => favoridenCikar(urun.id)}
                >
                  Favorilerden Kaldır
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favoriler
