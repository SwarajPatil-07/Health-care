function bookAppointment(event) {
    event.preventDefault();
  
    const patientName = document.getElementById('patientName').value;
    const doctor = document.getElementById('doctor').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const message = document.getElementById('message').value;
  
    console.log('Patient Name:', patientName);
    console.log('Doctor:', doctor);
    console.log('Appointment Date:', appointmentDate);
    console.log('Message:', message);
  
    document.getElementById('appointmentForm').reset();
  }
  document.getElementById('appointmentForm').addEventListener('submit', bookAppointment);
  