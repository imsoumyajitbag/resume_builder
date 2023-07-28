const resumeForm = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');

resumeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;

  const resumeHTML = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <h3>Education:</h3>
    <p>${education}</p>
    <h3>Experience:</h3>
    <p>${experience}</p>
  `;

  resumeOutput.innerHTML = resumeHTML;
  resumeOutput.style.display = 'block';
});
