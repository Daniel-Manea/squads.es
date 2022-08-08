window.addEventListener("load", function() {
    const form = document.getElementById('userForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Felicidades ya estás inscrito!");
        setTimeout(window.location.reload(), 5000);
      })
    });
  });