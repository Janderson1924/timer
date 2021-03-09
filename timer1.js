const timerAmount = process.argv.slice(2); //
for (let i = 0; i < timerAmount.length; i++) {
  timerAmount[i];
  if (timerAmount < 0 || timerAmount === isNaN || timerAmount === null) {
    process.exit(0);
  }
  let delay = (timerAmount[i] * 1000);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}

