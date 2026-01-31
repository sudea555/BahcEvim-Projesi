import UrunKart from "../components/UrunKart"
import cilek from "../assets/Çilek.png"
import domates from "../assets/Domates.png"
import armut from "../assets/Armut.png"
import hurma from "../assets/Hurma.png"
import elma from "../assets/Elma.png"
import aronya from "../assets/Aronya.png"
import ananas from "../assets/Ananas.png"
import seftali from "../assets/Şeftali.png"
import YabanMersini from "../assets/YabanMersini.png"
import limon from "../assets/Limon.png"





const urunler = [
  {
    id: 1,
    ad: "Çilek",
    aciklama: "Doğal İnegöl Çileği",
    fiyat: 250,
    resim: cilek
  },
  {
    id: 2,
    ad: "Domates",
    aciklama: "Bahçeden taze domates",
    fiyat: 250,
    resim: domates
  },
  {
    id: 3,
    ad: "Armut",
    aciklama: "Dalından armut",
    fiyat: 250,
    resim: armut
  },
  {
    id: 4,
    ad: "Yaban Mersini",
    aciklama: "Doğal Yaban Mersini",
    fiyat: 300,
    resim: YabanMersini
  },
  {
    id: 5,
    ad: "Şeftali",
    aciklama: "Dalından doğal İnegöl şeftalisi",
    fiyat: 300,
    resim: seftali
  },
  {
    id: 6,
    ad: "Aronya",
    aciklama: "Doğal Aronya",
    fiyat: 250,
    resim: aronya
  },
  {
    id: 7,
    ad: "Elma",
    aciklama: "Dalından Elma",
    fiyat: 180,
    resim: elma
  },
  {
    id: 8,
    ad: "Ananas",
    aciklama: "Doğal Ananas",
    fiyat: 300,
    resim: ananas
  },
  {
    id: 9,
    ad: "Hurma",
    aciklama: "Doğal içerikli hurma",
    fiyat: 220,
    resim: hurma
  },
  {
    id: 10,
    ad: "Limon",
    aciklama: "Dalından doğal limon",
    fiyat: 220,
    resim: limon
  }
  
  
]






function AnaSayfa({ sepet, setSepet, favoriler, setFavoriler, arama}) {

  const filtreliUrunler = urunler.filter((urun) =>
    urun.ad.toLowerCase().includes((arama || "").toLowerCase())
  )

  function sepeteEkle(urun) {
    const varMi = sepet.find(item => item.id === urun.id)

    if (varMi) {
      const guncelSepet = sepet.map(item =>
        item.id === urun.id
          ? { ...item, adet: item.adet + 1 }
          : item
      )
      setSepet(guncelSepet)
    } else {
      setSepet([...sepet, { ...urun, adet: 1 }])
    }
  }

  function favoriToggle(urun) {
    const varMi = favoriler.find(item => item.id === urun.id)
  
    if (varMi) {
      setFavoriler(favoriler.filter(item => item.id !== urun.id))
    } else {
      setFavoriler([...favoriler, urun])
    }
  }
  

  return (
    <div className="urunler">
    {filtreliUrunler.length === 0 ? (
  <p style={{ marginTop: "40px", color: "#777" }}>
    Aradığınız ürün bulunamadı
  </p>
) : (
  filtreliUrunler.map((urun) => (
    <UrunKart
  key={urun.id}
  urun={urun}
  sepeteEkle={sepeteEkle}
  favoriler={favoriler}
  favoriToggle={favoriToggle}
/>

  ))
)}

  </div>
  )
  function favoriyeEkle(urun) {
    const varMi = favoriler.find(item => item.id === urun.id)
  
    if (!varMi) {
      setFavoriler([...favoriler, urun])
    }
  }
}

export default AnaSayfa
