document.querySelector('.login-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.login-form'))
    })
    .then( response => response.text() )
    .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}