const produk = [
    {
        nama: "Nastar Premium",
        harga: "Rp 85.000 / toples",
        gambar: "assets/images/nastar.jpg"
    },
    {
        nama: "Kastengel Keju",
        harga: "Rp 90.000 / toples",
        gambar: "assets/images/kastengel.jpg"
    },
    {
        nama: "Putri Salju",
        harga: "Rp 80.000 / toples",
        gambar: "assets/images/putri-salju.jpg"
    },
    {
        nama: "Lidah Kucing",
        harga: "Rp 75.000 / toples",
        gambar: "assets/images/lidah-kucing.jpg"
    },
    {
        nama: "Cookies Coklat",
        harga: "Rp 70.000 / toples",
        gambar: "assets/images/cookies-coklat.jpg"
    },
    {
        nama: "Sagu Keju",
        harga: "Rp 85.000 / toples",
        gambar: "assets/images/sagu-keju.jpg"
    }
];

const produkList = document.getElementById("produk-list");

produk.forEach(item => {
    produkList.innerHTML += `
    <div class="produk-card">
      <img src="${item.gambar}" alt="${item.nama}">
      <h3>${item.nama}</h3>
      <p>${item.harga}</p>
      <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20${item.nama}" target="_blank">
        Pesan via WhatsApp
      </a>
    </div>
  `;
});