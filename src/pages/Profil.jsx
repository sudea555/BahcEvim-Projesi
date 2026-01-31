import { useState } from "react"

function Profil({ sepet, favoriler,cikisYap }) {
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150")
  const [duzenle, setDuzenle] = useState(false)

  const [kullanici, setKullanici] = useState("bahcevim_user")
  const [email, setEmail] = useState("bahcevim@mail.com")
  const [konum, setKonum] = useState("İstanbul")
  const siparisler = [
    {
      id: 1,
      tarih: "12 Ocak 2026",
      toplam: 450,
      urunSayisi: 3
    },
    {
      id: 2,
      tarih: "28 Aralık 2025",
      toplam: 250,
      urunSayisi: 1
    }
  ]
  

  return (
    <div className="profil-sayfa">
      <h2 className="profil-baslik">Profil</h2>

      {/* FOTO */}
      <label htmlFor="avatarInput" className="profil-avatar-wrapper">
        <img src={avatar} alt="Profil" className="profil-avatar" />
        <span className="profil-foto-yazi">Fotoğrafı değiştir</span>
      </label>

      <input
        id="avatarInput"
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files[0]
          if (file) setAvatar(URL.createObjectURL(file))
        }}
      />

      {/* BİLGİLER */}
      <div className="profil-bilgiler">

        <div className="profil-bilgi">
          <span>👤 Kullanıcı</span>
          {duzenle ? (
            <input
              value={kullanici}
              onChange={(e) => setKullanici(e.target.value)}
            />
          ) : (
            <strong>{kullanici}</strong>
          )}
        </div>

        <div className="profil-bilgi">
          <span>📧 E-posta</span>
          {duzenle ? (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <strong>{email}</strong>
          )}
        </div>

        <div className="profil-bilgi">
          <span>📍 Konum</span>
          {duzenle ? (
            <input
              value={konum}
              onChange={(e) => setKonum(e.target.value)}
            />
          ) : (
            <strong>{konum}</strong>
          )}
        </div>

      </div>
      <div className="profil-istatistikler">

  <div className="profil-stat">
    <span>❤️ Favoriler</span>
    <strong>{favoriler.length}</strong>
  </div>

  <div className="profil-stat">
    <span>🛒 Sepet</span>
    <strong>
      {sepet.reduce((toplam, urun) => toplam + urun.adet, 0)}
    </strong>
  </div>

</div>

      {/* BUTON */}
      <button
        className="profil-btn"
        onClick={() => setDuzenle(!duzenle)}
      >
        {duzenle ? "Kaydet" : "Bilgileri Düzenle"}
      </button>

      {/* SİPARİŞ GEÇMİŞİ */}
<div className="profil-siparisler">
  <h3>Sipariş Geçmişi</h3>

  {siparisler.length === 0 ? (
    <p className="siparis-bos">Henüz sipariş yok</p>
  ) : (
    siparisler.map((siparis) => (
      <div key={siparis.id} className="siparis-kart">
        <div>
          <strong>{siparis.tarih}</strong>
          <span>{siparis.urunSayisi} ürün</span>
        </div>
        <span className="siparis-toplam">
          {siparis.toplam} ₺
        </span>
      </div>
    ))
  )}
</div>
<button
  className="profil-logout"
  onClick={() => {
    cikisYap()
    window.location.href = "/"
  }}
>
  Çıkış Yap
</button>

    </div>
    
  )
}

export default Profil
