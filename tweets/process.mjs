import fs from 'fs';

import js from './js.json';
import mobile from './mobile.json';
import ds from './ds.json';
import product from './product.json';

const tweets = [js, mobile, ds, product]
  .map(i => i.tweets)
  .flat()
  .map(i => i.Text)
  .filter(Boolean)
  .map(x => x.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''))
  .map(x => x.replace(/@([A-Za-z0-9_]+)/g, ''))
  .map(x => x.replace(/\r?\n|\r/g, ''))
  .map(x => x.replace(/\.|`|'|"|  :  /g, ''))
  .map(x => x.toLowerCase().trim())
  .map(x => x.replace(/rt|&lt;|&gt;|-&gt;|🦀|🙈|😸|🤷‍♀️|🦄|💜|🎲|😆|💫|😐|😢|🙊|🖕|👑|🍳|⭐️|💚|✅|❤️|🙍‍♀️|😋|😏|😍|💝|👾|💸|🖥|😮|😁|💙|🤷‍♂️|🌈|🙂|🌚|😊|😀|😿|😄|🙃|🎄|🐜|⬆️|😶|👴|👏|😉|😎|🔮|🕉|😂|👇|🙏|😔|😳|🐸|👍|🙌|🤯|🧵|🤩|😅|1️⃣|⬇️|3️⃣|🤗|💪|🥳|😘|👌|🤕|👋|🥺|😻|🤓|🤣|🙄|🥰|🥩/g, ''))
  .filter(Boolean)
  .join('. ')
  .replace(/ \. /g, '. ')
  .replace(/  /g, ' ')
  .replace(/\)+/g, ')');

fs.writeFile('./underhood.txt', tweets, 'utf-8', (err) => {
  if (err) return console.log(err);

  console.log('success!');
});
