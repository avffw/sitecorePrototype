$(function () {
    theme.form = {
        elements: {
            form: $('form'),
            fields: {
                nameField: $("input[name='name']"),
                emailField: $("input[name='email']"),
                subjectField: $("input[name='subject']"),
                textArea: $("textarea[name='message']"),

            },
            submitButton: $("div[data-name='submit']")

        },
        init: function () {


            theme.form.elements.submitButton.click(function () {

                theme.form.processFields(theme.form.elements.fields);


            });

        },
        processFields: function (fieldsObj) {

            var verified = false;
            var fieldsArray = [];
            var emptyFields = [];
            fieldsArray = $.map(fieldsObj, function (value, index) {
                return value;
            });

            for (var i = 0; i < fieldsArray.length; i += 1){
                if(!fieldsArray[i].val()){
                    emptyFields.push(fieldsArray[i]);
                }
            }


                if (!emptyFields.length) {
                    verified = true;

                } else {

                    theme.form.throwError(emptyFields);
                }


            theme.form.submitForm(verified);

        },
        submitForm: function (valid) {

            if (valid) {
                theme.form.elements.form.submit();

        }
        },


        throwError: function (emptyFields) {
            alert('error')
        }

    }
});
