// $.ajax({
//    url: "//formspree.io/calvinmiddleton7@gmail.com",
//     method: "POST",
//    data: {message: "Your message has been sent!"},
  //  dataType: "json"
//});

new Vue({
    el: '#contact_form', // id of the 'app'
    data: {
        name: '',   // data for the name on the form
        email:'',   // data for the email on the form
        message:'', // data for the message on the form
        maxLength: 140 // maximum length of the form message
    },
    methods: { // all the actions our app can do
        isValidName: function () { // TODO what if name is just spaces?
            var valid = this.name.length > 0;
            console.log('checking for a valid name: ' + valid);
            return valid;
        },
        isValidEmail: function () { // TODO is a@b a valid email?
            var valid = this.email.indexOf('@') > 0;
            console.log('checking for a valid email: ' + valid);
            return valid;
        },
        isValidMessage: function () { // what is message is just spaces?
            var valid = (this.message.length > 0) &&
                (this.message.length < this.maxLength);
            console.log('checking for a valid message: ' + valid);
            return valid;
        },
        checkMessage: function () {
            // TODO keep the message below maxMessageLength?
            //      or maybe change the text, background, or counter color?
        },
        submitForm: function () {
            // TODO prevent form from submitting if name, email, or message
            //      are invalid and display message
            var person = this.name;
            var email = this.email;
            var message = this.message;

            jQuery.ajax({
              url: "//formspree.io/calvinmiddleton7@gmail.com",
              method: "POST",
              data: {message: message, "Name of Person": person, email: email},
              dataType: "json",
              success: function() {
                alert('You clicked submit!');
              }
            });

        }
    }
});
