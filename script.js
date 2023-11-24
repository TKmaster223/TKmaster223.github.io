document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.wrapper');
  const registerForm = document.querySelector('.register-form');
  const loginForm = document.querySelector('.login-form');

  function showRegisterForm() {
    wrapper.classList.add('active');
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
  }

  function hideRegisterForm() {
    wrapper.classList.remove('active');
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  }

  document.querySelector('.register-link').addEventListener('click', showRegisterForm);
  document.querySelector('.login-link').addEventListener('click', hideRegisterForm);

});

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.form-box.login form');
  let storedPassword = '1234';
  let storedUsername = 'farouk@gmail.com';

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var enteredUsername = document.querySelector('.form-box.login form input[type="email"]').value;
      var enteredPassword = document.querySelector('.form-box.login form input[name="password"]').value;

      if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
          alert('Login successful!');
          window.location.assign('gallery.html');
      } else {
          alert('Incorrect username or password');
        window.alert('Incorrect password please try again');
      }
      loginForm.reset();
  });

  });

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const imgSrc = image.querySelector('img').getAttribute('src');
            const imgText = image.getAttribute('data-text');

            modal.style.display = 'block';
            modalImage.src = imgSrc;
            modalText.innerHTML = imgText;
        });
    });

    const closeModal = document.querySelector('.close');
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});

function success() {
  alert("Trip succesfully booked");
}

document.addEventListener('DOMContentLoaded', function() {
  const getStartedButton = document.querySelector('#bot');

  getStartedButton.addEventListener('click', function() {
      window.location.assign('Login_page.html');
  });
});
