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
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
    });
})();
