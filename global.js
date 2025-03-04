const url = "https://api.vitaldb.net/cases";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Log the JSON data to the console
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });