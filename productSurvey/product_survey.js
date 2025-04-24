function submitFeedback() {
  // Obtener valores de los campos del formulario
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  const experience = document.getElementById('userExperince').value;

  // Alerta de confirmación
  alert('Thank you for your valuable feedback');

  // Mostrar los datos en pantalla
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;
  document.getElementById('userExperienceDisplay').innerHTML = experience;

  // Mostrar sección oculta
  document.getElementById('userInfo').style.display = 'block';
}

// Asociar función al botón de enviar
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Permitir envío con tecla Enter
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});
