const createError = (error) => {
    switch (error.code) {
        case "ERR_NETWORK":
            return "Something is wrong with the internet connection.";
        case "ERR_BAD_REQUEST":
            return "There is something wrong in the spelling, could you please try again.";
        case "NO_RESULT":
            return "No results found, could you please try again";
        default:
            return error.message;

    }
    ;
}

export default createError;