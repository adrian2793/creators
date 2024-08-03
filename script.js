function insertHTML(_id, _content) {
  if (document.getElementById(_id)) {
    document.getElementById(_id).innerHTML = _content;
  } else {
    console.error(`The element '${_id}' could not be found`);
  }
}

function connectToDatabase(_url, _user, _password) {
  fetch(`${_url}/${_user}/data.html?password=${_password}`)
  .then((response) => response.json())
  .then((posts) => {
    container.innerHTML = "";
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      div.getElementById("card-link").href = post.link;
      div.getElementById("logo-img").src = post.logoImage;
      div.getElementById("card-title").textContent = post.title;
      div.getElementById("card-details").textContent = post.details;
      div.getElementById("cover-img").src = post.coverImage;
      div.getElementById(
        "card-footer"
      ).innerHTML = ` <ion-icon name="arrow-up"></ion-icon>
          <ion-icon name="chatbox-ellipses"></ion-icon>
          <ion-icon name="bookmark"></ion-icon>`;
      container.append(div);
    });
  });
 }





