// Memory reference prediction task
const settings = { lang: "uz", theme: "dark", fontSize: 14 };

const copy1 = settings;
copy1.lang = "ru";
console.log(settings.lang); // ru

const copy2 = {};
for (const key in settings) {
  copy2[key] = settings[key];
}
copy2.lang = "en";
console.log(settings.lang); // ru
console.log(copy2.lang); // en

console.log(settings === copy1, settings === copy2); // true false
