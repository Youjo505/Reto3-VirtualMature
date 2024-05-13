document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Validación de teléfono
    let telefono = document.getElementById('telefono').value;
    let telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
      document.getElementById('telefonoError').textContent = 'Formato de teléfono inválido (9 dígitos numéricos)';
      document.getElementById('telefonoError').style.display = 'block';
      event.preventDefault(); // Evitar que el formulario se envíe
    }
  });
  
  document.getElementById('confirmPassword').addEventListener('input', function() {
    // Validación de contraseñas
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPassword').setCustomValidity('Las contraseñas no coinciden');
    } else {
      document.getElementById('confirmPassword').setCustomValidity('');
    }
  });
  