function insertHTML(_id, _content) {
  if (document.getElementById(_id)) {
    document.getElementById(_id).innerHTML = _content;
  } else {
    console.error(`The element '${_id}' could not be found`);
  }
}

function queryData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((results) => {
    container.innerHTML = "";
    results.forEach((result) => {
      alert(result);
    });
  });
}

queryData();
