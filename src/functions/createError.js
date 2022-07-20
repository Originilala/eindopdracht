//There are no imports. This helper function takes an error object.
const createError = (error) => {
    //Based on the error code a string is returned.
    switch (error.code) {
        case "ERR_NETWORK":
            return "Something is wrong with the connection. That page on the server not found.";
        case "ERR_BAD_REQUEST":
            return "There is something wrong in the spelling, could you please try again.";
            //This error code we made ourselves and is not returned by Axios. We can use it here.
        case "NO_RESULT":
            return "No results found, could you please try again";
        default:
            //An error object from Axios already has an error message that we can use also.
            return error.message;
    }
}

export default createError;