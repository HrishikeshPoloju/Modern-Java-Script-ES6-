// Real-world bug fix with let in a loop

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("let i:", i); // 0, 1, 2 (correct)
    }, 100 * i);
  }
  