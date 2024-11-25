const proxyServer =
  "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";

async function getData(endpoint) {
  const result = await fetch(`${proxyServer}${endpoint}`);
  const data = await result.json();

  return data;
}

export default getData;
