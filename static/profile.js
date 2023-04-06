function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
  };

  // make request to server to get the data
  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  // add the data the server returns to the document
    .then((response) => response.json())
    // (you can add it to the end of the div with ID "profiles")
    .then((responseJson) => {
      document.querySelector('#profiles').insertAdjacentHTML('beforeend', `<p>
        Name: ${responseJson.fullname} <ul>
        <li> Age: ${responseJson.age} </li>
        <li> Occupation: ${responseJson.occupation} </li>
        </ul>
      </p>`)
    })
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
