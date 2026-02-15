const produk = [
    {
        nama: "Nastar",
        harga: ["Rp38.000 / toples 600ml ", "Rp48.000 / toples 800ml ", "Rp63.000 / toples 100ml "],
        gambar: "assets/image/nastar.webp"
    },
    {
        nama: "Putri Salju",
        harga: ["Rp30.000 / toples 600ml ", "Rp35.000 / toples 800ml ", "Rp47.000 / toples 100ml "],
        gambar: "assets/image/putriSalju1.webp"
    },
    {
        nama: "Kastengel",
        harga: ["Rp36.000 / toples 600ml ", "Rp53.000 / toples 800ml ",],
        gambar: "assets/image/kastengel1.webp"
    },
    {
        nama: "Palm Cheese",
        harga: ["Rp35.000 / toples 600ml ", "Rp44.000 / toples 800ml ", "Rp59.000 / toples 100ml "],
        gambar: "assets/image/palmCheese1.webp"
    },
    {
        nama: "Putri Salju Milo",
        harga: ["Rp33.000 / toples 600ml ", "Rp41.500 / toples 800ml ", "Rp55.000 / toples 100ml "],
        gambar: "assets/image/palmCheese1.webp"
    },
    {
        nama: "Mini Kukis",
        harga: ["Rp30.000 / toples 600ml ", "Rp46.000 / toples 800ml ",],
        gambar: "assets/image/kuki1.webp"
    },
];

const produkList = document.getElementById("produk-list");

produk.forEach(item => {
    produkList.innerHTML += `
    <div class="produk-card">
      <img src="${item.gambar}" alt="${item.nama}">
      <h3>${item.nama}</h3>
      <p>${item.harga}</p>
      <a href="https://wa.me/628884025682?text=Halo,%20saya%20ingin%20order%20${item.nama}" target="_blank">
        Pesan via WhatsApp
      </a>
    </div>
  `;
});

