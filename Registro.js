function validarFormulario() {
    let nombre = document.getElementById('validationCustom01').value;
    let apellido = document.getElementById('validationCustom02').value;
    let email = document.getElementById('validationCustom05').value;
    let telefono = document.getElementById('validationCustom07').value;
    let fechaNacimiento = document.getElementById('validationCustom08').value;
    let sexo = document.getElementById('validationCustom04').value;
    let estrato = document.getElementById('validationCustom10').value;
    let grupoSanguineo = document.getElementById('validationCustom11').value;
    let hobbie = document.getElementById('validationCustom09').value;
  
    let expresionNombre = /^[a-zA-Z\s]+$/;
    let expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let expresionTelefono = /^\d{10}$/;

    if (!expresionNombre.test(nombre)) {
        alert('Ingrese el nombre correctamente.');
        return false;
    }
    if (!expresionNombre.test(apellido)) {
        alert('Ingrese el apellido correctamente.');
        return false;
    }
    if (!expresionEmail.test(email)) {
        alert('Correo electrónico inválido, inténtelo de nuevo.');
        return false;
    }
    if (!expresionTelefono.test(telefono)) {
        alert('Número telefónico inválido, intente nuevamente.');
        return false;
    }
    if (estrato === "" || !["1", "2", "3", "4", "5", "6"].includes(estrato)) {
        alert('Selecciona un estrato válido.');
        return false;
    }
    if (grupoSanguineo === "" || !["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].includes(grupoSanguineo)) {
        alert('Selecciona un grupo sanguíneo válido.');
        return false;
    }
  
    let mensaje = 'Datos ingresados:\n\n' +
                  'Nombre: ' + nombre + '\n' +
                  'Apellido: ' + apellido + '\n' +
                  'Email: ' + email + '\n' +
                  'Teléfono: ' + telefono + '\n' +
                  'Fecha de Nacimiento: ' + fechaNacimiento + '\n' +
                  'Sexo: ' + sexo + '\n' +
                  'Estrato: ' + estrato + '\n' +
                  'Grupo Sanguíneo: ' + grupoSanguineo + '\n' +
                  'Hobbie: ' + hobbie;
  
    alert(mensaje);
}
