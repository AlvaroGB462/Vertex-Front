document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      empresa: form.empresa.value,
      mensaje: form.mensaje.value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.ok) {
        alert("Mensaje enviado correctamente 🚀");
        form.reset();
      } else {
        alert(result.error || "Error al enviar el mensaje");
      }

    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  });
});