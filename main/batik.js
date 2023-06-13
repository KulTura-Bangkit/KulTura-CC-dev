const batiks = [
{
    id: 101,
    name: 'Batik Cirebon',
    description: 'Batik Cirebon merupakan ragam batik khas Cirebon yang merupakan salah satu dari empat sentra industri batik di Jawa Barat yang masih ada hingga sekarang. Tiga sentra industri batik lainnya adalah Indramayu, Tasikmalaya, dan Garut. Meskipun demikian, Cirebon merupakan sentra batik tertua yang memberikan pengaruh terhadap ragam pola batik di sentra-sentra industri batik lain di Jawa Barat. Motif batik Cirebon yang paling terkenal dan menjadi ikon Cirebon adalah motif Megamendung. Motif ini melambangkan awan pembawa hujan sebagai lambang kesuburan dan pemberi kehidupan. Sejarah motif ini berkaitan dengan sejarah kedatangan bangsa Tiongkok di Cirebon, yaitu Sunan Gunung Jati yang menikah dengan wanita Tionghoa bernama Ong Tie. Motif ini memiliki gradasi warna yang sangat bagus dengan proses pewarnaan yang dilakukan sebanyak lebih dari tiga kali.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/1.batik-cirebon.jpg',
    url_product: 'https://www.tokopedia.com/batikfariza/kain-batik-katun-motif-mega-mendung-khas-trusmi-cirebon-batik-fariza?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 102,
    name: 'Batik Ikat Celup',
    description: 'Ikat celup atau Jumputan (tie-dye) adalah teknik mewarnai kain dengan cara mengikat kain dengan cara tertentu sebelum dilakukan pencelupan. Di beberapa daerah di Indonesia, teknik ini dikenal dengan berbagai nama lain seperti jumputan pelangi atau cinde (Palembang), tritik atau jumputan (Jawa), serta sasirangan (Banjarmasin). Teknik ikat celup sering dipadukan dengan teknik lain seperti batik.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/2.batik-ikat-celup.jpg',
    url_product: 'https://www.tokopedia.com/arjunaweda/adikusuma-hem-batik-pria-motif-celup-ikat-biru-s-3bbf4?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 103,
    name: 'Batik Kalimantan Tengah',
    description: 'Benang Bintik merupakan nama lain dari Batik Khas Dayak Kalimantan Tengah. Dalam hal jenis, Benang Bintik tergolong ke dalam berbagai motif khas, di antaranya adalah motif Batang Garing, motif Huma Betang, motif ukiran, motif senjata, motif naga, motif Balanga, motif campuran dan motif-motif lainnya.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/3.batik-kalimantan-tengah.jpg',
    url_product: 'https://www.tokopedia.com/kerambat/batik-khas-kalimantan-tengah-02-kualitas-premium-putih-tulang-250-cm?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 104,
    name: 'Batik Kawung',
    description: 'Batik Kawung adalah motif batik yang bentuknya berupa bulatan mirip buah kawung (sejenis kelapa atau kadang juga dianggap sebagai aren atau kolang-kaling) yang ditata rapi secara geometris. Kadang, motif ini juga ditafsirkan sebagai gambar bunga lotus (teratai) dengan empat lembar mahkota bunga yang merekah. Lotus adalah bunga yang melambangkan umur panjang dan kesucian.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/4.batik-kawung.jpg',
    url_product: 'https://www.tokopedia.com/anggorobatiksragena/batik-pria-lengan-panjang-slimfit-kawung-gumilar-s-batik?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 105,
    name: 'Batik Papua',
    description: 'Batik Papua adalah Pakaian khas dari wilayah Papua ini juga berkembang selain di wilayah Papua itu sendiri, pada awal­-nya batik Papua banyak dipengaruhi oleh gaya batik dari Pekalongan karena perhitungan bisnis lebih menguntungkan batik motif dari Papua diproduksi di Pekalongan, kemudian dikirim ke Papua dan diperdagangkan sebagai batik Papua. Batik Papua mulai berkembang sekitar tahun 1985, motif yang berkembang merupakan perpaduan dua budaya antara Papua dan Pekalongan. Pekalongan merupakan etnis Jawa sebagai penghasil batik dipadukan dengan etnis Papua yang kaya akan ragam hias yang dikembangkan sebagai motif batik. Batik Papua hasil perpaduan dua budaya ini juga dikenal dengan julukan lain, yaitu: Batik Port Numbay. Batik Papua mempunyai keunikan tersendiri dari aspek motifnya, karena dikembangkan dari kekayaan budaya dan keunikan alam Papua yang eksotik.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/5.batik-papua.jpg',
    url_product: 'https://www.tokopedia.com/naza-batik/kemeja-batik-pria-original-merak-papua?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 106,
    name: 'Batik Parang',
    description: 'Batik Parang adalah salah satu motif batik yang paling tua di Indonesia. Parang berasal dari kata Pereng yang berarti lereng. Perengan menggambarkan sebuah garis menurun dari tinggi ke rendah secara diagonal. Susunan motif S jalin-menjalin tidak terputus melambangkan kesinambungan. Bentuk dasar huruf S diambil dari ombak samudra yang menggambarkan semangat yang tidak pernah padam. Batik ini merupakan batik asli Indonesia yang sudah ada sejak zaman keraton Mataram Kartasura (Solo).',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/6.batik-parang.jpeg',
    url_product: 'https://www.tokopedia.com/juna-batik/kaos-kerah-batik-parang-warna-kekinian-baju-pria-elegan?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 107,
    name: 'Batik Poleng',
    description: 'Poleng atau corak papan catur adalah pola kotak-kotak sederhana yang terbentuk dari selang-seling warna gelap dan terang, biasanya hitam dan putih. Di Bali, kain dengan motif seperti ini disebut sebagai kain poleng. Kain poleng melambangkan keseimbangan antara dua hal yang bertolak belakang. Corak poleng juga dikenal dalam kebudayaan Jawa, khususnya dalam kerajinan batik.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/7.batik-poleng.jpg',
    url_product: 'https://www.tokopedia.com/balebatik/kain-batik-cap-sogan-jogja-motif-poleng-1cm?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 108,
    name: 'Batik Sekar Jagad',
    description: 'Batik Sekar Jagad adalah salah satu motif batik yang berasal dari Solo dan Yogyakarta. Motif ini mengandung makna aneka rupa keindahan yang terjalin menjadi satu atau melingkupi keseluruhan keindahan. Ada pula yang beranggapan bahwa motif Sekar Jagad sebenarnya berasal dari kata kar jagad yang diambil dari bahasa Jawa , sehingga motif ini juga melambangkan keragaman di seluruh dunia.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/8.batik-sekar-jagad.jpg',
    url_product: 'https://www.tokopedia.com/toko-myrna/batik-myrna-kemeja-batik-lengan-pendek-pria-motif-sekar-jagad-coksu-m?extParam=ivf%3Dfalse%26src%3Dsearch',
},
{
    id: 109,
    name: 'Batik Tambal',
    description: 'Batik tambal adalah motif batik yang menggabungkan atau menambal berbagai macam motif batik lainnya dalam bidang-bidang segitiga yang disusun sedemikian rupa. Bidang-bidang segitiga tersebut biasanya tercipta dari bidang persegi empat yang lebih besar, dengan garis-garis yang memotong dari setiap sudutnya. Nama motif batik ini berasal dari kata tambal, yakni menambal atau memperbaiki hal-hal yang rusak. Dalam perjalanan hidupnya, manusia harus memperbaiki diri menuju kehidupan yang lebih baik, lahir maupun batin. Dahulu, kain batik bermotif tambal dipercaya bisa membantu kesembuhan orang yang sakit. Caranya adalah dengan menyelimuti orang sakit tersebut dengan kain motif tambal.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/9.batik-tambal.jpg',
    url_product: 'https://www.tokopedia.com/batikazbi/kain-batik-cap-katun-2warna-dustyblue-navi-motif-tambal?extParam=ivf%3Dfalse&src=topads',
},
{
    id: 110,
    name: 'Batik Truntum',
    description: 'Batik Truntum merupakan salah satu motif batik Jawa. Batik Truntum biasanya digunakan sebagai motif dasar pada kain batik dan dapat dikombinasikan dengan ragam hias lainnya, seperti Truntum Babon Angrem, Truntum Pari, dan Truntum Garuda. Motif batik ini bermakna cinta yang tumbuh kembali. Karena maknanya, kain bermotif truntum biasa dipakai oleh orang tua pengantin pada hari pernikahan. Harapannya adalah agar cinta kasih yang tumaruntum ini akan menghinggapi kedua mempelai. Kadang dimaknai pula bahwa orang tua berkewajiban untuk “menuntun” kedua mempelai untuk memasuki kehidupan baru.',
    url_image: 'https://storage.googleapis.com/kultura-images/batik/10.batik-truntum.jpg',
    url_product: 'https://www.tokopedia.com/galeribati/kemeja-batik-pria-dewasa-truntum-lengan-pendek-by-ab-aljaya-m?extParam=ivf%3Dfalse%26src%3Dsearch',
},
];

module.exports = batiks;