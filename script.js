// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     submitFormAndFeedback();
//   });

function Submit_Form(){
    let name = document.forms['form']['name'].value;
    let email = document.forms['form']['email'].value;
    let feedback = document.forms['form']['textarea'].value;

    console.log(name,email,feedback);

    const subject = 'Feedback from user';
    const body = `Name: ${name}\n Email:${email}\n Subject: ${subject}\n Feedback:\n ${feedback}`;

    const mailto = `mailto:asfawfanual2003@gmail.com?subject = ${subject} &body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

}

