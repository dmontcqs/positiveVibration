//PossitiveVibrationYeah. 
const randomIndex = (arr) => {

    return arr[Math.round(Math.random()* arr.length)];
    
};

const specialDay = ["12 de febrero", "13 de agosto", "24 agosto", "1 de diciembre", "4 de marzo", "30 de diciembre", "29 de febrero", "7 de septiembre", "8 de mayo", "9 de octubre"];
const dailyChallenge = ["ayuda a un perrito", "bebe más agua", "levántate más temprano", "descansa de las redes", "ignora a personas tóxicas", "confiesa un secreto", "da 5 abrazos", "come 3 verduras", "limpia tu recámara", "haz un diario"];
const song = ["https://www.youtube.com/watch?v=wl-eVipq5cE", "https://www.youtube.com/watch?v=GpGEeneO-t0", "https://www.youtube.com/watch?v=9L9o4gug1Zc", "https://www.youtube.com/watch?v=jEo2hs2N7r8&t=4s", "https://www.youtube.com/watch?v=-hCH0kpJghs", "https://www.youtube.com/watch?v=J0QlPfTmwcw", "https://www.youtube.com/watch?v=dHC6I7v-1Pc", "https://www.youtube.com/watch?v=1S9M_jtMHd4", "https://www.youtube.com/watch?v=dG0HFoJtg7A&list=OLAK5uy_kTdS5UktINUFe9BHLwQs0x51Xh_HffGrc"];

const printMessage = () => {

document.getElementById("your-elements-id").innerHTML = `Tu possitive vibritation tiene los siguientes elementos: FECHA MÁGICA: ${randomIndex(specialDay)}. RETO DEL DÍA: ${randomIndex(dailyChallenge)}. y aquí tu  <a href="${randomIndex(song)}"> amuleto musical </a>`;

}
console.log(`Tu possitive vibritation es: ${randomIndex(specialDay)}. tu reto es: ${randomIndex(dailyChallenge)}. Tu amuleto musical es:  ${randomIndex(song)}`);


 



