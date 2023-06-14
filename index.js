const form = document.getElementById('myForm');
const username = document.getElementById('name');
const email = document.getElementById('email');
const result= document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission

  const url = "https://7bah5wp2f8.execute-api.us-west-2.amazonaws.com/dev";
  const options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ 'name': username.value, 'email': email.value }),
  };



  try {
    const res = await fetch(url, options);
    const data = await res.json();
    result.innerText=data.body.slice(1,data.body.length-1);
    console.log(data)
  } catch (error) {
    console.error(error);
  }
});