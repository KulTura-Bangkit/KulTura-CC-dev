const foods = [
{
    id: 201,
    name: 'Apem',
    description: 'Apam atau apem (dikenal juga dengan appam di negeri asalnya India) adalah makanan yang terbuat dari tepung beras yang didiamkan semalam dengan mencampurkan telur, santan, gula dan tape serta sedikit garam kemudian dibakar atau dikukus. Bentuknya mirip serabi, tetapi lebih tebal.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/11.apem.jpg',
    url_product: 'https://www.tokopedia.com/tokokuealfath-1/kue-apem-mangkok-ij-putih?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 202,
    name: 'Ayam Bakar',
    description: 'Ayam bakar adalah sebuah hidangan Asia Tenggara Maritim, terutama hidangan Indonesia atau Malaysia, dari ayam yang dipanggang di atas arang.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/12.ayam%20bakar.jpg',
    url_product: 'https://www.tokopedia.com/bumburujakguyur/ayam-bakar-solo-pedas-manis-sambal-1-ekor-ayam-negri?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 203,
    name: 'Bakso',
    description: 'Bakso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia. Bakso umumnya dibuat dari campuran daging sapi giling dan tepung tapioka, tetapi ada juga bakso yang terbuat dari daging ayam, babi, ikan, udang bahkan daging kerbau. Dalam penyajiannya, bakso umumnya disajikan panas-panas dengan kuah kaldu sapi bening, dicampur mi, bihun, taoge, tahu, terkadang telur lalu ditaburi bawang goreng dan seledri.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/13.bakso.jpg',
    url_product: 'https://www.tokopedia.com/mwararasa/bakso-sapi-urat-homemade-super-spesial-isi-25?extParam=ivf%3Dfalse&src=topads',
},
{
    id: 204,
    name: 'Bakwan',
    description: 'Bakwan merupakan makanan gorengan yang terbuat dari sayuran dan tepung terigu yang lazim ditemukan di Indonesia. Bakwan biasanya merujuk kepada kudapan gorengan sayur-sayuran yang biasa dijual oleh penjaja keliling. Bahannya terdiri dari taoge, irisan kubis (kol) atau irisan wortel, dicampur dalam adonan tepung terigu dan digoreng dalam minyak goreng yang cukup banyak.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/14.bakwan.jpg',
    url_product: 'https://www.tokopedia.com/sophiesallystore/bakwan-malang-frozen-homemade?extParam=ivf%3Dfalse&src=topads',
},
{
    id: 205,
    name: 'Gado-gado',
    description: 'Gado-gado adalah makanan khas Betawi berisi sayur-sayuran yang direbus, irisan telur dan tahu, serta ditaburi bawang goreng dan kerupuk. Sayur-sayuran ditambahkan dengan bumbu kacang atau saus dari kacang tanah yang telah dihaluskan yang kemudian diaduk merata.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/15.gado%20gado.jpg',
    url_product: 'https://www.tokopedia.com/topajahh/gado-gado-spesial-kacang-mede-almond-komplit-telur-mede-nasput-tidak-pedas?extParam=ivf%3Dfalse&src=topads',
},
{
    id: 206,
    name: 'Gudeg',
    description: 'Gudeg adalah hidangan khas Provinsi Daerah Istimewa Yogyakarta yang terbuat dari nangka muda yang dimasak dengan santan. Perlu waktu berjam-jam untuk membuat hidangan ini. Warna cokelat biasanya dihasilkan oleh daun jati yang dimasak bersamaan. Gudeg biasanya dimakan dengan nasi dan disajikan dengan kuah santan kental (areh), ayam kampung, telur, tempe, tahu, dan sambal goreng krecek.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/16.gudeg.jpg',
    url_product: 'https://www.tokopedia.com/gudegyunarni/paket-1-gudeg-yu-narni?extParam=ivf%3Dfalse&src=topads',
},
{
    id: 207,
    name: 'Lumpia',
    description: 'Lumpia atau terkadang dieja sebagai lun pia adalah sejenis jajanan tradisional Tionghoa. Lumpia yang dikenal oleh orang Indonesia merupakan lafal Bahasa Hokkian. Lumpia terdiri dari lembaran tipis tepung gandum yang dijadikan sebagai pembungkus isian yang umumnya adalah rebung, telur, sayuran segar, daging, atau makanan laut.Di Indonesia, lumpia dikenal sebagai jajanan khas Semarang dengan tata cara pembuatan dan bahan-bahan yang telah disesuaikan dengan tradisi setempat.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/17.lumpia.jpg',
    url_product: 'https://www.tokopedia.com/lunpiamataram/lunpia-goreng-lunpia-mataram-semarang-lumpia',
},
{
    id: 208,
    name: 'Pempek',
    description: 'Pempek adalah makanan yang terbuat dari daging ikan yang digiling lembut yang dicampur tepung kanji atau tepung sagu, serta komposisi beberapa bahan lain seperti telur, bawang putih yang dihaluskan, penyedap rasa, dan garam.[1] Pempek biasanya disajikan dengan kuah yang disebut cuka yang memiliki rasa asam, manis, dan pedas. Pempek merupakan makanan khas Palembang - Sumatera Selatan.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/18.pempek.jpg',
    url_product: 'https://www.tokopedia.com/pempekmangetet/pempek-palembang-paket-campur-mang-etet-cuko-sedang',
},
{
    id: 209,
    name: 'Rendang',
    description: 'Rendang adalah hidangan berbahan dasar daging yang dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan. Proses memasaknya memakan waktu berjam-jam (biasanya sekitar empat jam) hingga yang tinggal hanyalah potongan daging berwarna hitam pekat dan dedak. Dalam suhu ruangan, rendang dapat bertahan hingga berminggu-minggu. Rendang yang dimasak dalam waktu yang lebih singkat dan santannya belum mengering disebut kalio, berwarna cokelat terang keemasan.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/19.rendang.jpg',
    url_product: 'https://www.tokopedia.com/pondok-salero/rendang-padang-pondok-salero-kemasan-300gr',
},
{
    id: 210,
    name: 'Sate',
    description: 'Sate adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu, kemudian dipanggang menggunakan bara arang kayu. Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate. Daging yang dijadikan sate antara lain daging ayam, kambing, domba, sapi, babi, kelinci, kuda, dan lain-lain.',
    url_image: 'https://storage.googleapis.com/kultura-images/makanan/20.sate.jpg',
    url_product: 'https://www.tokopedia.com/djoeraganfood/djoeragan-sate-ayam-ambal-khas-kebumen-10-tusuk?extParam=cmp%3D1%26ivf%3Dtrue%26src%3Dsearch',
},
];

module.exports = foods;