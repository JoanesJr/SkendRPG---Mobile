class ValidationErrors {

    validate(response, field) {
        return response.data.validation.body.keys.filter(value => value == field) ? true : false;
    }
}



export default new ValidationErrors;