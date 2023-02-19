module.exports = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    if (String(month).length === 1) {
        month = '0' + month
    }
    if (String(date).length === 1) {
        date = '0' + date
    }
    if (String(hours).length === 1) {
        hours = '0' + hours
    }
    if (String(minutes).length === 1) {
        minutes = '0' + minutes
    }
    if (String(seconds).length === 1) {
        seconds = '0' + seconds
    }
    let createAt = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
    return createAt
}