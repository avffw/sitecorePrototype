$(function () {
    theme.form = {
        elements: {
            form: $('form'),
            nameField: $("input[name='name']"),
            emailField: $("input[name='email']"),
            subjectField: $("input[name='subject']"),
            textArea: $('textarea[name="message"]'),
            submitButton: $('div[data-name="submit"')
        },
        init: function () {


            theme.form.elements.submitButton.click(function () {

                theme.form.validateFields(theme.form.elements);

            });

        },
        validateFields: function (fieldsObj) {

            var verified = false;
            theme.form.submitForm(verified);

        },
        submitForm: function (valid) {
            var invalidFields;
            if (!valid) {

                theme.form.throwError(invalidFields);
            } else {
                theme.form.elements.form.submit();
            }
        },
        throwError: function () {

        }

    }
});
