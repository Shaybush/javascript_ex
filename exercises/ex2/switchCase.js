const switchCase = (id) => {
    let result;

    if (id) {
        switch (id) {
            case 1:
                result = "1"
                break;
            case 2:
                result = "2"
                break;
            case 3:
                result = "3"
                break;
            case 4:
                result = "4"
                break;
            case 5:
                result = "5"
                break;
            case 6:
                result = "6"
                break;
            case 7:
                result = "7"
                break;
            case 8:
                result = "8"
                break;

            default:
                result = 0;
        }
    }
    else {
        return 0;
    }
    return result;
}

module.exports = switchCase;