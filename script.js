alert ("Selamat Datang di Lotte tiket \n Yang dapat masuk hanya umur 13 tahun keatas")

const umur = prompt("Masukkan Umur Anda");

if (umur >= 13) {
    const studio = prompt("Masukkan Studio Pilihan Anda \n 1 : Studio 1 \n 2 : Studio 2 \n 3 : Studio 3");

if (studio == "1" || studio == "2" || studio == "3") {
const film = prompt("Masukkan Film Pilihan Anda \n 1 : Avengers Endgame \n 2 : Avengers Infinity \n 3 : Avengers Age of Ultron");
   
let namaFilm
    if (film == "1") {
    namaFilm = "Avengers Endgame";
    } else if (film == "2") {
    namaFilm = "Avengers Infinity";
    } else if (film == "3") {
    namaFilm = "Avengers Age of Ultron";
    } //mutable

    if (film == "1" || film == "2" || film == "3") {
        const nama = prompt("Masukkan Nama Anda"); 
        alert (`Berikut Tiket Anda : \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm} `)
    } else {
    alert ("Maaf, Film yang anda pilih tidak tersedia");
    }
 } else {
     alert ("Anda Harus Memilih Studio");
    }
} else{
    alert ("Anda tidak bisa masuk");
}