//Contoh async await

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fetch error:", error);
    throw error;
  }
}

fetchData().then((data) => console.log("Hasil:", data));

//Contoh Promise.all

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

async function fetchMultipleData() {
  try {
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
}

fetchMultipleData();
