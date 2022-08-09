window.addEventListener("load", () => {

  try {
    const form = document.getElementById('petitionForm');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById('nombre');
      const lastname = document.getElementById('apellido');
      const r6username = document.getElementById('usuario');
      const email = document.getElementById('email');
      let number;
      try {
        number = document.getElementById('teléfono');
      } catch (error) {
        number = "***"
      }
      const motivation = document.getElementById('motivación');

      const webhookBody = {
        embeds: [{
          title: 'Nueva petición',
          fields: [
            { name: 'Nombre', value: `${name.value}` },
            { name: 'Apellido', value: `${lastname.value}` },
            { name: 'Usuario R6', value: `${r6username.value}` },
            { name: 'Email', value: `${email.value}` },
            { name: 'Teléfono', value: `${number.value}` },
            { name: 'Motivación', value: `${motivation.value}` }
          ]
        }],
      };

      const webhookUrl = 'https://canary.discord.com/api/webhooks/1005901253873770587/L13AVyr06mmthDL0Ohqt9jV_PF6TIWcMRTsZ1SSj2Zdj0FG4ZbT1IyywFyiWQRpZr45t';

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
      });

      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
        .then(() => {
          alert("Tu petición ha sido enviada con éxito!");
          setTimeout(window.location.assign('/'), 1000);
        })
    });
  } catch (error) {

  }

});