const switchCase = (id) => {
    let result;

    if (id) {
        switch (id) {
            case 1:
                result = "1"
            case 2:
                result = "2"
            case 3:
                result = "3"
            case 4:
                result = "4"
            case 5:
                result = "5"
            case 6:
                result = "6"
            case 7:
                result = "7"
            case 8:
                result = "8"

            default:
                result = 0;
        }
    }
    return result;
}

module.exports = switchCase;