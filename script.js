function insertHTML(_id, _content) {
  if (document.getElementById(_id)) {
    document.getElementById(_id).innerHTML = _content;
  } else {
    console.error(`The element '${_id}' could not be found`);
  }
}

function connectToDatabase(_url, _user, _password) {
  fetch(`${_user}/data.js`)
    .then((response) => response.json())
  return response.json;

function queryData(_id) {
  fetch("data.json")
    .then((response) => response.json())
    .then((results) => {
    container.innerHTML = "";
    results.forEach((result) => {
      alert(result);
    });
  });
}
