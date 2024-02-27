document
  .getElementById("data-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const timeStamp = new Date();

    const receivedData = document.createElement("div");
    receivedData.innerHTML = `
    <p><strong>Current Time: </strong> ${timeStamp}</p>
    <p><strong>Name:</strong> ${formData.get("name")}</p>
    <p><strong>Tanggal Lahir:</strong> ${formData.get("birthday")}</p>
    <p><strong>Jenis Kelamin:</strong> ${formData.get("gender")}</p>
    <p><strong>Pesan:</strong> ${formData.get("message")}</p>
  `;

    const receiver = document.getElementById("data-form-receiver");
    receiver.innerHTML = "";
    receiver.appendChild(receivedData);

    const sayHello = document.getElementById("banner-section");
    sayHello.innerHTML = `
    <h1>Hi ${formData.get("name")}
    <h1>Kickstart Your Career in Tech</h1>
    <p>Explore the best deals and products</p>
    <a href="https://revou.co/" target="_blank" class="btn">Learn More</a>
    `;
  });
