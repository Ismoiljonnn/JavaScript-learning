function formatTime(seconds) {
  if (seconds > 0) {
    let h = Math.floor(seconds / 3600);
    let remainder = seconds % 3600;
    let m = Math.floor(remainder / 60);
    remainder = remainder % 60;
    let s = remainder;

    if (seconds < 60) {
      return `${s} seconds`;
    } else if (seconds < 3600) {
      return `${m} minutes ${s} seconds`;
    } else {
      return `${h} hours ${m} minutes ${s} seconds`;
    }
  }
}

let input = 3661;

console.log(`${input} -> ${formatTime(input)}`);