document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const feedback = event.target.feedback.value;

  // Send feedback to the server
  fetch('/submit-feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ feedback })
  })
  .then(response => response.json())
  .then(() => {
    alert('Feedback submitted successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
