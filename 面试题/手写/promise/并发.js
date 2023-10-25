const poll = (urls, maxNum) => {
  return new Promise((resolve) => {
    const results = [];
    let index = 0,
      count = 0;
    async function request() {
      if (index === urls.length) {
        return;
      }
      const i = index;
      const url = urls[index];
      index++;
      try {
        const res = await fetch(url);
        results[i] = res;
      } catch (error) {
        results[i] = error;
      } finally {
        count++;
        if (count === urls.length) {
          resolve(results);
        }
        request();
      }
    }
    const times = Math.min(maxNum, urls.length);
    for (let i = 0; i < times; i++) {
      request();
    }
  });
};


let urls = []
for (let i = 0; i < 100; i++) {
  urls.push('https://baidu.com')
}
const v = await poll(urls, 5)
console.log('v', v)