function test() {
  const bd = document.getElementsByClassName("container");
  const baru = document.body;
  const card = document.getElementsByClassName("card");
  baru.classList.toggle("harus");
  console.log(bd);
  //   for (const x of bd) {
  //     console.log(x);
  //     if (x[1]) {
  //       console.log("halo");
  //     }
  //     x.classList.toggle("harus");
  //     x.classList.toggle("text-white");
  //   }
  for (const kartu of card) {
    kartu.classList.toggle("bg-dark");
    kartu.classList.toggle("kartu");
  }
  for (let i = 0; i < bd.length; i++) {
    const element = bd[i];
    if (i == 0) {
      continue;
    } else {
      //   element.classList.toggle("text-white");
      element.classList.toggle("harus");
    }
  }
}
