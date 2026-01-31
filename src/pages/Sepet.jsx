function Sepet({ sepet, setSepet }) {
  const toplamTutar = sepet.reduce(
    (toplam, urun) => toplam + urun.fiyat * urun.adet,
    0
  )
  
  function urunSil(index) {
    const yeniSepet = sepet.filter((_, i) => i !== index)
    setSepet(yeniSepet)
  }

  return (
    <div className="sepet-sayfa">
      <div className="sepet-baslik">
  <span className="sepet-ikon">🧺</span>
  <h2>Sepetim</h2>
</div>

      {sepet.length === 0 && (
        <p className="sepet-bos">Sepetiniz şu an boş.</p>
      )}

      <div className="sepet-liste">
        {sepet.map((urun, index) => (
          <div className="sepet-kart" key={index}>
            <img src={urun.resim} alt={urun.ad} />
            <div className="sepet-icerik">
              <h4>{urun.ad}</h4>
              <span>
  {urun.adet} x {urun.fiyat} ₺
</span>
            </div>
            <button
  className="sepet-sil"
  onClick={() => urunSil(index)}
>
  ❌
</button>

          </div>
        ))}
      </div>

      {sepet.length > 0 && (
        <div className="sepet-toplam">
          Toplam: <strong>{toplamTutar} ₺</strong>
        </div>
      )}
    </div>
  )
}

export default Sepet
