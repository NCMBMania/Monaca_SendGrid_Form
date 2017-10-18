ons.ready(() => {
  const applicationKey = 'YOUR_APPLICATION_KEY';
  const clientKey = 'YOUR_CLIENT_KEY';
  
  const ncmb = new NCMB(applicationKey, clientKey);
  
  $('#send').on('click', () => {
    const email_params = {
      name: $('#name').val(),
      email: $('#email').val(),
      option: $('#option').val(),
      body: $('#body').val()
    };
    
    ncmb
      .Script
      .data(email_params)
      .exec('POST', 'email.js')
      .then((result) => {
        const json = JSON.parse(result.body);
        if (json.message === 'success') {
          $('#message').text('送信しました。お問い合わせありがとうございます')
          $('#dialog').show();
        }
      })
  });
  
  $('#closeDialog').on('click', () => {
    $('#dialog').hide();
  })
});
