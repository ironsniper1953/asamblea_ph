document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apartamento = document.getElementById("apartamento").value;
    let email = document.getElementById("email").value;

    let propietario = { nombre, apartamento, email };
    
    fetch("https://script.google.com/macros/s/AKfycbwsFBOltrfwq9ByPXeS98BWNFp-3d7drYCWNhCakR0jUpvYNJLNLOuPqBE_manr53VI/exec", { 
        method: "POST",
        body: JSON.stringify(propietario)
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);
        generarQR(nombre, apartamento);
    });
});

function generarQR(nombre, apartamento) {
    let qrContainer = document.getElementById("qrContainer");
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, `https://asamblea.com/asistencia.html?propietario=${nombre}_${apartamento}`);
}
