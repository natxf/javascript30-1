(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        let content = "<ul>";
        posts.forEach((element) => {
          content += `<li>
                <h1>${element.title}</h1>
                <p>${element.body}</p>
                </li>`;
        });
        content += "</ul>";
        answer.innerHTML = content;
      });
  });

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        let content = "<ul>";
        posts.forEach((element) => {
          content += `<li>
                <h1>${element.title}</h1>
                <p>${element.body}</p>
                </li>`;
        });
        content += "</ul>";
        answer.innerHTML = content;
      });
  });

  cw3.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then(post =>
      {
        answer.innerHTML = `<h1>${post.title}</h1>
        <p>${post.body}</p>`;
      })
  });
  cw4.addEventListener("click", function () {
    answer.innerHTML="Processing..."
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then(post =>
               {
                 answer.innerHTML = `<h1>Dodano nowy post o id=${post.id}</h1>`
               });
} )
})();
