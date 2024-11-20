(function(){
    
    const publicKey = "-GN4GmwKGm8x0j8bN";
    const serviceID = "service_l495h47";
    const templateID = "template_2pcr6rg";
    const form = document.getElementById('contactForm');
    


    emailjs.init({
      publicKey: publicKey,
    });


    form.addEventListener('submit', function(event){
        event.preventDefault();
        const formData = new FormData(form);
        emailjs.sendForm(serviceID, templateID, form).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              showAlert('success', 3000);
              form.reset();
            },
            (error) => {
              showAlert('failure', 3000);
              console.log('FAILED...', error);
            },
          );
    });

    function showAlert(variant, duration){
      const alert = document.getElementById('#formAlert');
      alert.innerHTML = variant === 'success' ? 'Formunuz bize ulaştı, teşekkür ederiz!' : 'Bir sorun oluştu, lütfen tekrar deneyin.';
      alert.classList.remove('d-none');
      alert.classList.add('d-block');

      setTimeout(()=> {
        alert.classList.remove('d-block');
        alert.classList.add('d-none');
      }, duration);
    }
})();
