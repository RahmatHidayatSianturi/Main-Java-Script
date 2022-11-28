const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Perkenalkan nama saya mattbot. siapa nama kamu?",
    `salam kenal yaa ${data?.nama}, oiya berapa usia kamu?`,
    `ohhh ${data?.usia} tahun, oiya hobi kamu apa nihh?`,
    `wawww keren tuh hobinya "${data?.hobi}", btw udah punya pacar?`,
    `ohhh ${data?.pacar}, yaudah kalau gitu. udahan dulu yah?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1200]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank u yaa ${usersData[0]} udah main ke mattbot 😍👌,
  kali-kali kita main ${usersData[2]} bareng ya!`;
  jawaban.value = "siap thanks juga!";
}

function botEnd() {
  window.location.reload();
}
