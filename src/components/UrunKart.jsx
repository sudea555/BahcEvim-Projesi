function UrunKart({ urun, sepeteEkle, favoriler, favoriToggle }) {
  const favorideMi = favoriler.some(item => item.id === urun.id)

  return (
    <div className="urun-kart">
      <img src={urun.resim} alt={urun.ad} />

      <div className="urun-icerik">
        <h3>{urun.ad}</h3>
        <p>{urun.aciklama}</p>

        <span className="urun-fiyat">{urun.fiyat} ₺</span>

        <button
          className="sepete-ekle"
          onClick={() => sepeteEkle(urun)}
        >
          Sepete Ekle
        </button>

        {/* FAVORİ BUTONU */}
        <button
          onClick={() => favoriToggle(urun)}
          style={{
            marginTop: "8px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer"
          }}
        >
          {favorideMi ? "❤️ Favorilerde" : "🤍 Favorilere Ekle"}
        </button>
      </div>
    </div>
  )
}

export default UrunKart
