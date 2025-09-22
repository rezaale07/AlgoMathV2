// ===== DATA SOAL =====
const questionsData = {
  single: {
    Trigonometri: {
      Easy: [
        { question: "Nilai dari sin 0° adalah...", answers: ["0", "1", "½", "∞"], correct: 0 },
        { question: "Nilai dari cos 90° adalah...", answers: ["1", "0", "½", "∞"], correct: 0 },
        { question: "Nilai dari tan 45° adalah...", answers: ["1", "0", "½", "∞"], correct: 0 },
        { question: "Nilai dari sin 30° adalah...", answers: ["½", " √3/2", "1", "0"], correct: 0 },
        { question: "Nilai dari cos 60° adalah...", answers: ["0", "½", "1", "√3/2"], correct: 1 },
        { question: "Nilai dari tan 0° adalah...", answers: ["1", "0", "∞", "-1"], correct: 1 },
        { question: "Perbandingan sisi depan dan miring disebut...", answers: ["tan", "cos", "sin", "sec"], correct: 2 },
        { question: "Perbandingan sisi samping dan miring disebut...", answers: ["tan", "cos", "sin", "sec"], correct: 1 },
        { question: "sin²x + cos²x = ...", answers: ["2", "0", "½", "1"], correct: 3 },
        { question: "Jika cos x = 1, maka x =", answers: ["90°", "0°", "45°", "180°"], correct: 1 }
      ],
      Medium: [
        { question: "Jika sin A = 3/5, maka cos A = ...", answers: ["4/5", "5/4", "9/25", "1/2"], correct: 0 },
        { question: "Nilai dari tan 60° adalah... ", answers: ["3", "1", "1/2", "2"], correct: 0 },
        { question: "ika sin x = ½ dan 0° < x < 180°, maka x = ... ", answers: ["30° dan 150°", "30° dan 60°", "90° dan 120°", "45° dan 135°"], correct: 0 },
        { question: "Nilai dari cos²30° adalah... ", answers: ["¾", "½", "3/4", "1/4"], correct: 2 },
        { question: "Jika tan x = sin x / cos x, dan sin x = 3/5, cos x = 4/5, maka tan x = ... ", answers: ["4/3", "5/4", "3/4", "5/3"], correct: 2 },
        { question: "Nilai dari sin 90° × cos 0° = ... ", answers: ["0", "1", "2", "½"], correct: 1 },
        { question: "Dalam segitiga siku-siku, panjang sisi depan sudut B adalah 8 dan sisi samping 6, maka tan B = ... ", answers: ["8/6", "3/4", "4/3", "6/8"], correct: 2 },
        { question: "Jika tan A = 1 dan A di kuadran I, maka nilai A adalah...", answers: ["90°", "30°", "60°", " 45°"], correct: 3 },
        { question: "Dalam segitiga, jika panjang sisi depan sudut A = 5 dan sisi miring  = 13, maka sin A = ...", answers: ["5/13", "12/13", "13/5", "1/2"], correct: 0 },
        { question: "cos²x - sin²x = ...", answers: ["cos 2x", "sin 2x", "tan 2x", "1"], correct: 0 }
      ],
      Hard: [
        { question: "Jika sin A = 5/13, dan A di kuadran I, maka nilai tan A = ...", answers: ["5/12", "12/5", "13/5", "5/13"], correct: 0 },
        { question: "Nilai dari sin 2x jika sin x = 3/5 dan cos x = 4/5 adalah...", answers: ["24/25", "12/25", "24/50", "8/15"], correct: 0 },
        { question: "Jika tan A = √3 dan A di kuadran II, maka nilai sin A adalah...", answers: ["√3/2", "1/2", "√3/√(1+3)", " √3/2 (positif)"], correct: 3 },
        { question: "cos x = –½ dan x berada di kuadran III, maka nilai x = ...", answers: [" 120", "240°", "60°", " 150°"], correct: 1 },
        { question: "Jika sin x = –¾ dan x di kuadran IV, maka nilai cos x = ...", answers: ["√7/4", "5/4", "√(1 – 9/16)", "√7/8"], correct: 3 },
        { question: "Nilai dari tan 2x jika tan x = 1 adalah...", answers: ["2", "1", "∞", "0"], correct: 0 },
        { question: "Jika sin x = a dan cos x = b, maka rumus identitas tan x dalam a dan b adalah...", answers: ["a/b", "b/a", "a²/b²", "b²/a²"], correct: 0 },
        { question: "cos x = –√3/2 dan x di kuadran III, maka nilai x = ...", answers: ["210°", "150°", "120°", "240°"], correct: 3 },
        { question: "Nilai dari sin 2x jika sin x = 3/5 dan cos x = 4/5 adala...", answers: ["135°", "45°", "225°", "315°"], correct: 0 },
        { question: "Jika sin A = x dan cos A = y, maka nilai sin 2A = ...", answers: ["2xy", "x² + y²", "x/y", "xy"], correct: 0 }
      ]
    },
    "Peluang Kejadian": {
      Easy: [
        { question: "Sebuah dadu dilempar sekali. Peluang muncul angka genap adalah...", answers: ["1/2", "1/3", "2/3", "1/6"], correct: 0 },
        { question: "Sebuah koin dilempar sekali. Peluang muncul gambar adalah...", answers: ["1/4", "1/2", "3/4", "2/3"], correct: 1 },
        { question: "Peluang mendapatkan bilangan prima dari angka 1–10 adalah...", answers: ["4/10", "5/10", "6/10", "7/10"], correct: 2 },
        { question: "Dari angka 1 sampai 5, peluang memilih angka lebih dari 3 adalah...", answers: ["2/5", "3/5", "1/5", "4/5"], correct: 0 },
        { question: "Jika sebuah kartu diambil dari set kartu A–E, peluang memilih kartu B adalah...", answers: ["1/4", "1/5", "2/5", "1/2"], correct: 1 },
        { question: "Dari 10 siswa, 6 laki-laki dan 4 perempuan. Peluang memilih siswa perempuan adalah...", answers: ["2/5", "3/5", "4/10", "6/10"], correct: 2 },
        { question: "Dalam kantong ada 2 bola merah dan 3 bola biru. Peluang ambil bola merah adalah...", answers: ["2/3", "2/5", "3/5", "1/2"], correct: 1 },
        { question: "Sebuah spinner dibagi menjadi 4 bagian sama besar: A, B, C, D. Peluang jatuh di C adalah...", answers: ["1/3", "1/4", "1/2", "3/4"], correct: 1 },
        { question: "Sebuah angka dipilih dari 1 sampai 6. Peluang memilih angka ganjil adalah...", answers: ["1/2", "1/3", "2/3", "1/6"], correct: 0 },
        { question: "Dalam kantong terdapat 5 kelereng: 2 merah, 1 kuning, dan 2 biru. Peluang ambil biru adalah...", answers: ["1/5", "2/5", "3/5", "4/5"], correct: 1 }
      ],
      Medium: [
        { question: "Dalam satu kantong terdapat 3 bola merah, 2 bola kuning, dan 5 bola biru. Peluang mengambil bola kuning adalah...", answers: ["1/2", "1/5", "1/3", "2/10"], correct: 3 },
        { question: "Sebuah angka dipilih dari 1 sampai 20. Peluang angka yang dipilih adalah kelipatan 4 adalah...", answers: ["1/4", "1/5", "1/2", "3/10"], correct: 0 },
        { question: "Sebuah dadu dilempar 2 kali. Peluang total mata dadu sama dengan 7 adalah...", answers: ["1/12", "1/6", "1/36", "1/8"], correct: 1 },
        { question: "Peluang muncul angka 3 atau 5 pada dadu adalah...", answers: ["1/3", "2/6", "1/6", "1/2"], correct: 1 },
        { question: "Jika dua koin dilempar bersamaan, peluang keduanya muncul angka adalah...", answers: ["1/2", "1/3", "1/4", "2/4"], correct: 2 },
        { question: "Dalam satu kelas terdapat 12 siswa laki-laki dan 8 perempuan. Jika satu siswa dipilih acak, peluang memilih perempuan adalah...", answers: ["2/5", "2/3", "1/3", "4/5"], correct: 0 },
        { question: "Dalam satu kotak terdapat 10 kartu bernomor 1 sampai 10. Peluang mengambil kartu bernomor ganjil lebih dari 5 adalah...", answers: ["2/10", "3/10", "4/10", "1/5"], correct: 1 },
        { question: "Sebuah spinner memiliki 6 bagian: 3 hijau, 2 merah, dan 1 kuning. Peluang mengenai warna merah adalah...", answers: ["2/6", "1/3", "1/2", "1/6"], correct: 0 },
        { question: "Jika dua angka dipilih acak dari 1–5 tanpa pengulangan, peluang total angkanya genap adalah...", answers: ["1/2", "3/5", "2/5", "4/10"], correct: 0 },
        { question: "Sebuah kantong berisi 4 kelereng merah, 3 biru, dan 3 hijau. Peluang mengambil bola bukan merah adalah...", answers: ["6/10", "1/2", "3/5", "2/5"], correct: 2 }
      ],
      Hard: [
        { question: "Dari 5 siswa laki-laki dan 4 siswa perempuan, dipilih 2 siswa acak. Peluang keduanya perempuan adalah...", answers: ["1/6", "2/9", "1/9", "1/8"], correct: 2 },
        { question: "Sebuah dadu dilempar tiga kali. Peluang muncul angka 6 minimal satu kali adalah...", answers: ["91/216", "125/216", "1/6", "36/216"], correct: 0 },
        { question: "Dari 10 kartu bernomor 1–10, diambil 3 acak tanpa pengembalian. Peluang ketiganya genap adalah...", answers: ["1/30", "1/20", "2/15", "1/15"], correct: 3 },
        { question: "Dalam 1 kotak ada 4 bola merah, 3 hijau, 2 biru. Diambil 2 bola tanpa pengembalian. Peluang kedua bola beda warna adalah...", answers: ["42/72", "48/81", "52/81", "54/81"], correct: 3 },
        { question: "Sebuah kartu diambil dari satu set kartu remi standar (52 kartu). Peluang kartu tersebut adalah kartu hati atau kartu angka 10 adalah...", answers: ["16/52", "17/52", "13/52", "14/52"], correct: 0 },
        { question: "Dari 7 siswa, akan dipilih ketua dan wakil secara acak. Peluang A dan B terpilih sebagai ketua dan wakil (urutan penting) adalah...", answers: ["1/42", "2/42", "1/21", "2/21"], correct: 0 },
        { question: "Peluang memilih huruf vokal dari kata “MATEMATIKA” secara acak adalah...", answers: ["4/10", "5/10", "4/9", "3/10"], correct: 1 },
        { question: "Jika dua dadu dilempar, peluang jumlah mata dadu lebih dari 10 adalah...", answers: ["1/12", "1/18", "1/6", "1/9"], correct: 0 },
        { question: "Peluang terambil bola merah dari kotak berisi 2 merah, 3 hijau, dan 5 biru, kemudian hijau, tanpa dikembalikan...", answers: ["1/15", "1/12", "3/45", "3/33"], correct: 2 },
        { question: "Dari 6 pasang sepatu, diambil 2 sepatu secara acak. Peluang yang terambil adalah sepasang sepatu yang cocok adalah...", answers: ["1/12", "1/11", "1/15", "1/6"], correct: 1 }
      ]
    },
    "Statistika/Penyajian Data": {
      Easy: [
        { question: "Rata-rata dari 5, 7, 9, 6, 8 adalah...", answers: ["7", "6.5", "7.5", "8"], correct: 0 }
        // Tambahkan sisa soal
      ]
      // Tambahkan Medium dan Hard jika ada
    }
  },
  // ====== DATA SOAL MULTIPLAYER ======

  multiplayer: {
    sejarah: {
      easy: [
        { question: "Siapa proklamator kemerdekaan Indonesia?", answers: ["Soekarno & Hatta", "Diponegoro", "Bung Tomo", "Tan Malaka"], correct: 0 },
        { question: "Tahun berapa Indonesia merdeka?", answers: ["1942", "1945", "1950", "1965"], correct: 1 },
        { question: "Tanggal berapa Proklamasi Indonesia dibacakan?", answers: ["16 Agustus 1945", "17 Agustus 1945", "18 Agustus 1945", "20 Agustus 1945"], correct: 1 },
        { question: "Siapa penulis teks Proklamasi?", answers: ["Soekarno", "Hatta", "Sayuti Melik", "Ahmad Soebardjo"], correct: 0 },
        { question: "Dimana Proklamasi dibacakan?", answers: ["Istana Negara", "Pegangsaan Timur 56", "Lapangan Ikada", "Monas"], correct: 1 },
        { question: "Bendera pusaka Sang Saka Merah Putih dijahit oleh?", answers: ["Fatmawati", "Kartini", "Dewi Sartika", "Martha Tiahahu"], correct: 0 },
        { question: "Siapa yang mengetik naskah Proklamasi?", answers: ["Soekarno", "Sayuti Melik", "Amir Sjarifuddin", "Hatta"], correct: 1 },
        { question: "Siapa presiden pertama Indonesia?", answers: ["Soekarno", "Hatta", "Soeharto", "Megawati"], correct: 0 },
        { question: "Siapa wakil presiden pertama Indonesia?", answers: ["Soekarno", "Hatta", "Tan Malaka", "Amir Sjarifuddin"], correct: 1 },
        { question: "Pada masa penjajahan, Indonesia disebut?", answers: ["Hindia Timur", "Hindia Belanda", "Nusantara", "Melayu Raya"], correct: 1 },
        { question: "Siapa pahlawan yang dikenal sebagai 'Si Pitung'?", answers: ["Pitung", "Diponegoro", "Cut Nyak Dien", "Imam Bonjol"], correct: 0 },
        { question: "Siapa pahlawan dari Aceh yang berjuang melawan Belanda?", answers: ["Cut Nyak Dien", "Kartini", "Fatmawati", "Dewi Sartika"], correct: 0 },
        { question: "Siapa pahlawan wanita dari Jawa Tengah yang memperjuangkan pendidikan?", answers: ["Kartini", "Cut Nyak Dien", "Martha Tiahahu", "Fatmawati"], correct: 0 },
        { question: "Perang Diponegoro berlangsung pada tahun?", answers: ["1825-1830", "1900-1905", "1750-1760", "1945-1949"], correct: 0 },
        { question: "Siapa tokoh Perang Padri?", answers: ["Tuanku Imam Bonjol", "Diponegoro", "Sisingamangaraja", "Patimura"], correct: 0 },
        { question: "Perang Aceh dipimpin oleh?", answers: ["Cut Nyak Dien", "Teuku Umar", "Sisingamangaraja", "Tuanku Imam Bonjol"], correct: 1 },
        { question: "Siapa tokoh dari Maluku yang memimpin perlawanan?", answers: ["Pattimura", "Sisingamangaraja", "Diponegoro", "Imam Bonjol"], correct: 0 },
        { question: "Organisasi Budi Utomo berdiri tahun?", answers: ["1908", "1928", "1945", "1912"], correct: 0 },
        { question: "Siapa pendiri Sarekat Islam?", answers: ["HOS Cokroaminoto", "Soekarno", "Tan Malaka", "Hatta"], correct: 0 },
        { question: "Peristiwa Sumpah Pemuda terjadi pada tahun?", answers: ["1928", "1945", "1908", "1930"], correct: 0 }
      ],

      medium: [
        { question: "Siapa ketua BPUPKI?", answers: ["Soepomo", "Soekarno", "Radjiman Wedyodiningrat", "Hatta"], correct: 2 },
        { question: "Perjanjian Linggarjati ditandatangani tahun?", answers: ["1946", "1947", "1948", "1949"], correct: 0 },
        { question: "Siapa ketua PPKI?", answers: ["Soekarno", "Hatta", "Soepomo", "Radjiman"], correct: 0 },
        { question: "Siapa tokoh yang disebut Bapak Koperasi Indonesia?", answers: ["Hatta", "Soekarno", "Cokroaminoto", "Tan Malaka"], correct: 0 },
        { question: "Siapa yang memimpin Pertempuran Surabaya 10 November 1945?", answers: ["Bung Tomo", "Soekarno", "Diponegoro", "Hatta"], correct: 0 },
        { question: "Kapan Belanda mengakui kedaulatan Indonesia?", answers: ["1949", "1950", "1955", "1945"], correct: 0 },
        { question: "Dimana Konferensi Asia-Afrika diadakan?", answers: ["Jakarta", "Bandung", "Yogyakarta", "Bali"], correct: 1 },
        { question: "Apa isi perjanjian Renville?", answers: ["Gencatan senjata", "Pengakuan kedaulatan", "Perdagangan", "Kerja sama ekonomi"], correct: 0 },
        { question: "Apa nama tentara resmi Indonesia setelah kemerdekaan?", answers: ["TNI", "ABRI", "KNIL", "Polri"], correct: 0 },
        { question: "Apa tujuan G30S/PKI?", answers: ["Mengganti ideologi negara", "Merdeka", "Menyatukan rakyat", "Perdagangan bebas"], correct: 0 },
        { question: "Siapa tokoh yang dikenal sebagai Bapak Pendidikan Indonesia?", answers: ["Ki Hajar Dewantara", "Hatta", "Soekarno", "Soepomo"], correct: 0 },
        { question: "Kapan Supersemar ditandatangani?", answers: ["1966", "1965", "1970", "1967"], correct: 0 },
        { question: "Siapa presiden kedua Indonesia?", answers: ["Soekarno", "Soeharto", "Habibie", "Megawati"], correct: 1 },
        { question: "Dimana tempat pengasingan Soekarno sebelum merdeka?", answers: ["Ende & Bengkulu", "Aceh", "Maluku", "Jakarta"], correct: 0 },
        { question: "Apa hasil perjanjian Roem-Royen?", answers: ["Pengembalian Yogyakarta", "Gencatan senjata", "Perdagangan", "KMB"], correct: 0 },
        { question: "Dimana Konferensi Meja Bundar dilaksanakan?", answers: ["Den Haag", "Jakarta", "Bandung", "Yogyakarta"], correct: 0 },
        { question: "Siapa tokoh yang dikenal dengan semboyan 'Ing ngarso sung tulodo'?", answers: ["Ki Hajar Dewantara", "Soekarno", "Cokroaminoto", "Hatta"], correct: 0 },
        { question: "Perang Puputan terjadi di daerah?", answers: ["Bali", "Aceh", "Sumatera Barat", "Maluku"], correct: 0 },
        { question: "Organisasi Muhammadiyah didirikan oleh?", answers: ["KH Ahmad Dahlan", "Soekarno", "Cokroaminoto", "Tan Malaka"], correct: 0 },
        { question: "Kapan Konferensi Asia-Afrika dilaksanakan?", answers: ["1955", "1960", "1949", "1950"], correct: 0 }
      ],

      hard: [
        { question: "Siapa pemimpin Perang Tondano?", answers: ["Raja Sisingamangaraja", "Patimura", "Sam Ratulangi", "Diponegoro"], correct: 2 },
        { question: "Siapa tokoh yang dikenal sebagai Raja Batak terakhir?", answers: ["Sisingamangaraja XII", "Diponegoro", "Patimura", "Imam Bonjol"], correct: 0 },
        { question: "Apa tujuan utama Politik Etis Belanda?", answers: ["Balas budi", "Memerdekakan", "Eksploitasi", "Perang"], correct: 0 },
        { question: "Apa isi Trilogi Ki Hajar Dewantara?", answers: ["Ing ngarso sung tulodo, ing madya mangun karso, tut wuri handayani", "Bhinneka Tunggal Ika", "Satu nusa satu bangsa", "Revolusi mental"], correct: 0 },
        { question: "Siapa penggagas sistem tanam paksa?", answers: ["Van den Bosch", "Daendels", "Raffles", "Van Deventer"], correct: 0 },
        { question: "Apa tujuan utama Politik Devide et Impera?", answers: ["Pecah belah", "Persatuan", "Perdagangan", "Kemerdekaan"], correct: 0 },
        { question: "Apa isi Dekrit Presiden 5 Juli 1959?", answers: ["Kembali ke UUD 1945", "Mengganti presiden", "Membubarkan MPR", "Membentuk BPUPKI"], correct: 0 },
        { question: "Siapa tokoh yang dikenal dengan 'Bapak Marhaenisme'?", answers: ["Soekarno", "Hatta", "Tan Malaka", "Soepomo"], correct: 0 },
        { question: "Apa tujuan utama perjanjian Bongaya?", answers: ["Menundukkan Gowa-Tallo", "Merdeka", "Perdagangan", "Aliansi"], correct: 0 },
        { question: "Siapa penggagas sistem ekonomi koperasi di Indonesia?", answers: ["Hatta", "Soekarno", "Ki Hajar Dewantara", "Tan Malaka"], correct: 0 },
        { question: "Siapa tokoh yang memimpin perlawanan rakyat Bali dalam Perang Puputan Badung?", answers: ["Raja Denpasar", "Patimura", "Diponegoro", "Imam Bonjol"], correct: 0 },
        { question: "Apa isi Perjanjian Saragosa?", answers: ["Pembagian wilayah Portugis & Spanyol", "Kemerdekaan Indonesia", "Aliansi dagang", "Pajak bumi"], correct: 0 },
        { question: "Siapa tokoh perumus dasar negara (Pancasila)?", answers: ["Soekarno", "Hatta", "Soepomo", "Moh. Yamin"], correct: 0 },
        { question: "Apa isi Trikora yang dicetuskan Soekarno?", answers: ["Merebut Irian Barat", "Melawan Belanda", "Ganyang Malaysia", "Merdeka 100%"], correct: 0 },
        { question: "Kapan operasi Trikora dilaksanakan?", answers: ["1961", "1959", "1965", "1967"], correct: 0 },
        { question: "Siapa tokoh proklamator dari luar Jawa yang sangat vokal?", answers: ["Sam Ratulangi", "Patimura", "Sisingamangaraja", "Tuanku Imam Bonjol"], correct: 0 },
        { question: "Apa hasil Konferensi Meja Bundar?", answers: ["Pengakuan kedaulatan", "Perjanjian dagang", "Persekutuan militer", "Perang"], correct: 0 },
        { question: "Siapa yang memimpin TKR pertama kali?", answers: ["Sudirman", "Urip Sumoharjo", "Nasution", "Oerip Soemohardjo"], correct: 3 },
        { question: "Apa tujuan utama Dwi Fungsi ABRI?", answers: ["Pertahanan & politik", "Pertanian", "Pendidikan", "Ekonomi"], correct: 0 },
        { question: "Siapa penggagas 'Ganyang Malaysia'?", answers: ["Soekarno", "Hatta", "Soeharto", "Tan Malaka"], correct: 0 }
      ]
    },
    
  ipa: {
    easy: [
      { question: "Apa simbol kimia untuk air?", answers: ["H2O", "CO2", "O2", "NaCl"], correct: 0 },
      { question: "Planet terdekat dengan Matahari adalah?", answers: ["Merkurius", "Venus", "Bumi", "Mars"], correct: 0 },
      { question: "Organ apa yang berfungsi memompa darah?", answers: ["Hati", "Jantung", "Paru-paru", "Ginjal"], correct: 1 },
      { question: "Makhluk hidup yang bisa membuat makanannya sendiri disebut?", answers: ["Autotrof", "Heterotrof", "Karnivora", "Omnivora"], correct: 0 },
      { question: "Sumber energi utama di Bumi berasal dari?", answers: ["Matahari", "Bulan", "Api", "Baterai"], correct: 0 },
      { question: "Hewan pemakan tumbuhan disebut?", answers: ["Herbivora", "Karnivora", "Omnivora", "Insektivora"], correct: 0 },
      { question: "Alat pernapasan ikan adalah?", answers: ["Insang", "Paru-paru", "Kulit", "Trakea"], correct: 0 },
      { question: "Gas apa yang dibutuhkan manusia untuk bernapas?", answers: ["Oksigen", "Karbon Dioksida", "Nitrogen", "Hidrogen"], correct: 0 },
      { question: "Benda cair jika dipanaskan akan menjadi?", answers: ["Gas", "Padat", "Es", "Cair terus"], correct: 0 },
      { question: "Berapa jumlah planet di tata surya?", answers: ["7", "8", "9", "10"], correct: 1 },
      { question: "Hewan pemakan daging disebut?", answers: ["Karnivora", "Herbivora", "Omnivora", "Detritivora"], correct: 0 },
      { question: "Penyakit akibat kekurangan vitamin C adalah?", answers: ["Skorbut", "Rabun Senja", "Rakhitis", "Anemia"], correct: 0 },
      { question: "Tumbuhan bernafas menggunakan?", answers: ["Stomata", "Insang", "Hidung", "Mulut"], correct: 0 },
      { question: "Planet yang dikenal sebagai planet merah adalah?", answers: ["Mars", "Venus", "Jupiter", "Saturnus"], correct: 0 },
      { question: "Hewan amfibi bisa hidup di?", answers: ["Darat dan air", "Udara", "Gunung", "Padang pasir"], correct: 0 },
      { question: "Proses perubahan dari ulat menjadi kupu-kupu disebut?", answers: ["Metamorfosis", "Fotosintesis", "Respirasi", "Fermentasi"], correct: 0 },
      { question: "Matahari adalah sebuah?", answers: ["Bintang", "Planet", "Asteroid", "Komet"], correct: 0 },
      { question: "Hewan pemakan segala disebut?", answers: ["Omnivora", "Karnivora", "Herbivora", "Insektivora"], correct: 0 },
      { question: "Indra pengecap pada manusia adalah?", answers: ["Lidah", "Hidung", "Telinga", "Kulit"], correct: 0 },
      { question: "Kelelawar tidur di waktu?", answers: ["Siang", "Malam", "Pagi", "Sore"], correct: 0 }
    ],

    medium: [
      { question: "Proses tumbuhan membuat makanan disebut?", answers: ["Fotosintesis", "Respirasi", "Transpirasi", "Metabolisme"], correct: 0 },
      { question: "Bagian sel yang mengatur seluruh kegiatan sel adalah?", answers: ["Inti sel", "Mitokondria", "Ribosom", "Kloroplas"], correct: 0 },
      { question: "Alat optik yang digunakan untuk melihat benda sangat kecil adalah?", answers: ["Mikroskop", "Teleskop", "Kamera", "Periskop"], correct: 0 },
      { question: "Bagian tumbuhan yang berfungsi menyerap air adalah?", answers: ["Akar", "Batang", "Daun", "Bunga"], correct: 0 },
      { question: "Lapisan atmosfer terluar adalah?", answers: ["Eksosfer", "Stratosfer", "Troposfer", "Mesosfer"], correct: 0 },
      { question: "Gas rumah kaca utama adalah?", answers: ["CO2", "O2", "N2", "H2"], correct: 0 },
      { question: "Organ tubuh manusia yang menyaring darah adalah?", answers: ["Ginjal", "Hati", "Paru-paru", "Jantung"], correct: 0 },
      { question: "Planet terbesar di tata surya adalah?", answers: ["Jupiter", "Saturnus", "Neptunus", "Bumi"], correct: 0 },
      { question: "Proses pernapasan pada tumbuhan disebut?", answers: ["Respirasi", "Fotosintesis", "Difusi", "Transpirasi"], correct: 0 },
      { question: "Urutan planet dari Matahari yang benar adalah?", answers: ["Merkurius, Venus, Bumi, Mars", "Venus, Merkurius, Mars, Bumi", "Bumi, Mars, Venus, Merkurius", "Mars, Bumi, Venus, Merkurius"], correct: 0 },
      { question: "Bagian tumbuhan tempat berlangsungnya fotosintesis?", answers: ["Daun", "Akar", "Batang", "Bunga"], correct: 0 },
      { question: "Benda langit yang mengelilingi planet disebut?", answers: ["Satelit", "Komet", "Asteroid", "Meteor"], correct: 0 },
      { question: "Alat pernapasan serangga adalah?", answers: ["Trakea", "Paru-paru", "Insang", "Kulit"], correct: 0 },
      { question: "Bagian mata yang berfungsi mengatur banyaknya cahaya masuk adalah?", answers: ["Pupil", "Kornea", "Retina", "Lensa"], correct: 0 },
      { question: "Hewan yang berkembang biak dengan cara bertelur disebut?", answers: ["Ovipar", "Vivipar", "Ovovivipar", "Metamorfosis"], correct: 0 },
      { question: "Proses penguapan air pada tumbuhan disebut?", answers: ["Transpirasi", "Respirasi", "Fotosintesis", "Metabolisme"], correct: 0 },
      { question: "Tulang yang melindungi otak adalah?", answers: ["Tengkorak", "Rusuk", "Paha", "Tulang belakang"], correct: 0 },
      { question: "Nama ilmiah manusia adalah?", answers: ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo floresiensis"], correct: 0 },
      { question: "Apa fungsi mitokondria dalam sel?", answers: ["Pusat energi", "Pusat kendali", "Fotosintesis", "Pertumbuhan"], correct: 0 },
      { question: "Gerhana Matahari terjadi ketika?", answers: ["Bulan berada di antara Bumi dan Matahari", "Bumi di antara Matahari dan Bulan", "Bulan dan Bumi sejajar", "Bumi menutupi Matahari"], correct: 0 }
    ],

    hard: [
      { question: "Siapa penemu hukum gravitasi?", answers: ["Isaac Newton", "Albert Einstein", "Galileo", "Aristoteles"], correct: 0 },
      { question: "Apa nama planet yang memiliki cincin paling jelas?", answers: ["Saturnus", "Jupiter", "Neptunus", "Uranus"], correct: 0 },
      { question: "Unit dasar kehidupan adalah?", answers: ["Sel", "Jaringan", "Organ", "Atom"], correct: 0 },
      { question: "Bagian telinga yang berfungsi menangkap gelombang suara adalah?", answers: ["Daun telinga", "Koklea", "Gendang telinga", "Saluran telinga"], correct: 0 },
      { question: "Unsur kimia dengan lambang Fe adalah?", answers: ["Besi", "Perak", "Emas", "Fosfor"], correct: 0 },
      { question: "Perubahan zat dari cair ke gas disebut?", answers: ["Menguap", "Membeku", "Mencair", "Mengembun"], correct: 0 },
      { question: "Hewan yang darahnya dingin disebut?", answers: ["Poikiloterm", "Homeoterm", "Amfibi", "Mamalia"], correct: 0 },
      { question: "Zat yang mempercepat reaksi kimia disebut?", answers: ["Katalis", "Enzim", "Asam", "Basa"], correct: 0 },
      { question: "Tumbuhan paku berkembang biak dengan?", answers: ["Sporangium", "Biji", "Umbi", "Tunas"], correct: 0 },
      { question: "Ilmu yang mempelajari tentang hewan disebut?", answers: ["Zoologi", "Botani", "Ekologi", "Anatomi"], correct: 0 },
      { question: "Lapisan bumi yang paling luar disebut?", answers: ["Litosfer", "Astenosfer", "Inti luar", "Mantel"], correct: 0 },
      { question: "Satuan gaya dalam SI adalah?", answers: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 },
      { question: "Alat pengukur intensitas gempa disebut?", answers: ["Seismograf", "Barometer", "Higrometer", "Anemometer"], correct: 0 },
      { question: "Tumbuhan hijau membuat makanan dengan bantuan?", answers: ["Klorofil", "Mitokondria", "Air", "Hewan"], correct: 0 },
      { question: "Ilmu yang mempelajari tentang hubungan makhluk hidup dengan lingkungannya disebut?", answers: ["Ekologi", "Biologi", "Zoologi", "Botani"], correct: 0 },
      { question: "Bagian otak yang mengatur keseimbangan tubuh adalah?", answers: ["Serebelum", "Serebrum", "Medula", "Hipotalamus"], correct: 0 },
      { question: "Benda yang ditarik ke pusat Bumi disebabkan oleh?", answers: ["Gaya gravitasi", "Gaya gesek", "Gaya listrik", "Gaya magnet"], correct: 0 },
      { question: "Planet terjauh dari Matahari adalah?", answers: ["Neptunus", "Pluto", "Uranus", "Saturnus"], correct: 0 },
      { question: "Alat pernapasan cacing adalah?", answers: ["Kulit", "Paru-paru", "Insang", "Trakea"], correct: 0 },
      { question: "Gas mulia yang paling ringan adalah?", answers: ["Helium", "Neon", "Argon", "Xenon"], correct: 0 }
    ]
  },
  
  bahasa: {
    easy: [
      { question: "Sinonim dari kata 'besar' adalah?", answers: ["Kecil", "Agung", "Pendek", "Rendah"], correct: 1 },
      { question: "Antonim dari kata 'tinggi' adalah?", answers: ["Panjang", "Rendah", "Dalam", "Kurus"], correct: 1 },
      { question: "Kata baku dari 'aktifitas' adalah?", answers: ["Aktifitas", "Aktivitas", "Aktiviti", "Aktif"], correct: 1 },
      { question: "Huruf kapital dipakai pada ...", answers: ["Awal kalimat", "Akhir kalimat", "Kata depan", "Kata sambung"], correct: 0 },
      { question: "Kata 'berlari' memiliki imbuhan ...", answers: ["ber- -i", "me- -kan", "ke- -an", "di- -i"], correct: 0 },
      { question: "Puisi lama yang terdiri dari 4 baris disebut?", answers: ["Pantun", "Syair", "Gurindam", "Prosa"], correct: 0 },
      { question: "Jumlah baris dalam satu bait pantun adalah?", answers: ["2", "3", "4", "5"], correct: 2 },
      { question: "Cerita rakyat yang mengandung unsur keajaiban disebut?", answers: ["Legenda", "Mitos", "Dongeng", "Fabel"], correct: 2 },
      { question: "Cerita binatang disebut?", answers: ["Fabel", "Legenda", "Mitos", "Epik"], correct: 0 },
      { question: "Kata tanya untuk menanyakan tempat adalah?", answers: ["Apa", "Dimana", "Siapa", "Kapan"], correct: 1 },
      { question: "Kalimat perintah diakhiri dengan tanda ...", answers: ["Tanya", "Seru", "Titik", "Koma"], correct: 1 },
      { question: "Sinonim kata 'marah' adalah?", answers: ["Murung", "Kesal", "Sedih", "Riang"], correct: 1 },
      { question: "Antonim dari 'gelap' adalah?", answers: ["Redup", "Cerah", "Panas", "Terang"], correct: 3 },
      { question: "Kata depan yang benar digunakan pada kalimat: ...", answers: ["Ke Jakarta", "Ke rumah", "Ke sekolah", "Semua benar"], correct: 3 },
      { question: "Kalimat 'Dia makan nasi' adalah kalimat ...", answers: ["Aktif", "Pasif", "Majemuk", "Tanya"], correct: 0 },
      { question: "Kalimat 'Buku itu dibaca Andi' adalah kalimat ...", answers: ["Aktif", "Pasif", "Imperatif", "Interogatif"], correct: 1 },
      { question: "Kata 'membaca' terdiri dari imbuhan ...", answers: ["me- -i", "me- -kan", "me-", "di-"], correct: 2 },
      { question: "Kata baku dari 'kwalitas' adalah?", answers: ["Kwalitas", "Kualitas", "Qualitas", "Kwaliti"], correct: 1 },
      { question: "Kalimat 'Siapa namamu?' diakhiri tanda ...", answers: ["Seru", "Tanya", "Titik", "Koma"], correct: 1 },
      { question: "Sinonim kata 'cantik' adalah?", answers: ["Bagus", "Indah", "Jelek", "Elok"], correct: 3 }
    ],

    medium: [
      { question: "Kalimat 'Ibu sedang memasak di dapur' termasuk kalimat ...", answers: ["Aktif transitif", "Aktif intransitif", "Pasif", "Tanya"], correct: 1 },
      { question: "Antonim kata 'maju' adalah?", answers: ["Mundur", "Kiri", "Kalah", "Jauh"], correct: 0 },
      { question: "Kalimat majemuk adalah ...", answers: ["Kalimat dengan satu subjek", "Kalimat dengan satu predikat", "Kalimat dengan dua klausa", "Kalimat dengan banyak imbuhan"], correct: 2 },
      { question: "Kalimat 'Pintu itu ditutup ayah' adalah ...", answers: ["Aktif", "Pasif", "Majemuk", "Perintah"], correct: 1 },
      { question: "Kata baku dari 'ijin' adalah?", answers: ["Ijin", "Izin", "Ijinn", "Ijeen"], correct: 1 },
      { question: "Teks yang berisi informasi faktual disebut?", answers: ["Fiksi", "Nonfiksi", "Puisi", "Dongeng"], correct: 1 },
      { question: "Kalimat 'Dia sedang membaca buku' adalah kalimat ...", answers: ["Aktif", "Pasif", "Majif", "Tanya"], correct: 0 },
      { question: "Cerita asal-usul suatu daerah disebut?", answers: ["Legenda", "Fabel", "Mitos", "Epik"], correct: 0 },
      { question: "Kata baku dari 'resiko' adalah?", answers: ["Risiko", "Resiko", "Resicu", "Riziko"], correct: 0 },
      { question: "Kata 'terindah' memiliki imbuhan ...", answers: ["ter- -i", "ter-", "ter- -kan", "me-"], correct: 1 },
      { question: "Antonim kata 'panjang' adalah?", answers: ["Lebar", "Pendek", "Lurus", "Kecil"], correct: 1 },
      { question: "Sinonim kata 'berani' adalah?", answers: ["Takut", "Gagah", "Kuatir", "Lemah"], correct: 1 },
      { question: "Jenis teks yang berisi langkah-langkah disebut?", answers: ["Teks prosedur", "Teks berita", "Teks cerita", "Teks ulasan"], correct: 0 },
      { question: "Kalimat 'Dia lahir pada 17 Agustus 1945' menggunakan huruf kapital pada ...", answers: ["Nama orang", "Tanggal", "Tempat", "Semua benar"], correct: 3 },
      { question: "Kalimat 'Ayah membeli sayur dan ibu memasak' adalah kalimat ...", answers: ["Majemuk setara", "Majemuk bertingkat", "Pasif", "Imperatif"], correct: 0 },
      { question: "Kata baku dari 'aktifitas' adalah?", answers: ["Aktifitas", "Aktivitas", "Aktif", "Aktive"], correct: 1 },
      { question: "Sinonim kata 'indah' adalah?", answers: ["Bagus", "Cantik", "Menarik", "Semua benar"], correct: 3 },
      { question: "Antonim kata 'dingin' adalah?", answers: ["Panas", "Hangat", "Gerah", "Kering"], correct: 0 },
      { question: "Kalimat perintah disebut juga kalimat ...", answers: ["Interogatif", "Imperatif", "Deklaratif", "Eksklamatif"], correct: 1 },
      { question: "Sinonim kata 'bodoh' adalah?", answers: ["Pintar", "Cerdas", "Tuli", "Pandir"], correct: 3 }
    ],

    hard: [
      { question: "Kata 'menyanyi' memiliki imbuhan ...", answers: ["meN- -i", "me- -kan", "me-", "ber-"], correct: 0 },
      { question: "Antonim kata 'konkret' adalah?", answers: ["Abstrak", "Nyata", "Jelas", "Tegas"], correct: 0 },
      { question: "Sinonim kata 'riang' adalah?", answers: ["Sedih", "Murung", "Gembira", "Marah"], correct: 2 },
      { question: "Kalimat 'Surat itu ditulis oleh Budi' adalah kalimat ...", answers: ["Aktif", "Pasif", "Imperatif", "Majemuk"], correct: 1 },
      { question: "Kata baku dari 'fihak' adalah?", answers: ["Pihak", "Fihak", "Pihakk", "Fihaq"], correct: 0 },
      { question: "Cerita yang tokoh utamanya hewan tetapi berperilaku seperti manusia adalah?", answers: ["Fabel", "Legenda", "Mitos", "Epik"], correct: 0 },
      { question: "Jenis kalimat 'Apakah kamu sudah makan?' adalah ...", answers: ["Deklaratif", "Imperatif", "Interogatif", "Eksklamatif"], correct: 2 },
      { question: "Sinonim kata 'induk' adalah?", answers: ["Anak", "Pokok", "Kecil", "Besar"], correct: 1 },
      { question: "Antonim kata 'tajam' adalah?", answers: ["Tumpul", "Lembut", "Runcing", "Kasar"], correct: 0 },
      { question: "Sinonim kata 'cakap' adalah?", answers: ["Pintar", "Cantik", "Jelek", "Bodoh"], correct: 0 },
      { question: "Kalimat 'Budi membaca buku ketika Ani datang' adalah kalimat ...", answers: ["Majemuk bertingkat", "Majemuk setara", "Pasif", "Deklaratif"], correct: 0 },
      { question: "Kata 'seindah' memiliki imbuhan ...", answers: ["se- -i", "se-", "se- -kan", "ber-"], correct: 1 },
      { question: "Sinonim kata 'murung' adalah?", answers: ["Sedih", "Bahagia", "Marah", "Riang"], correct: 0 },
      { question: "Antonim kata 'optimis' adalah?", answers: ["Pesimis", "Semangat", "Pasti", "Rajin"], correct: 0 },
      { question: "Sinonim kata 'pandai' adalah?", answers: ["Cerdas", "Bodoh", "Jahil", "Lalai"], correct: 0 },
      { question: "Antonim kata 'rapat' adalah?", answers: ["Renggang", "Dekat", "Longgar", "Kuat"], correct: 0 },
      { question: "Sinonim kata 'jelas' adalah?", answers: ["Tegas", "Kabur", "Nyata", "Aneh"], correct: 2 },
      { question: "Antonim kata 'kasar' adalah?", answers: ["Halus", "Keras", "Kuat", "Berat"], correct: 0 },
      { question: "Sinonim kata 'sulit' adalah?", answers: ["Sukar", "Mudah", "Ringan", "Lemah"], correct: 0 },
      { question: "Antonim kata 'panas' adalah?", answers: ["Dingin", "Hangat", "Gerah", "Sejuk"], correct: 0 }
    ]
  }
}
};

    
