const updateTime = () => {
    let today = new Date();

    function addLeadingZeros(num, totalLength) {
        return JSON.stringify(String(num).padStart(totalLength, '0'));
    }

    const minutes = today.getMinutes().length !== 2 ? addLeadingZeros(today.getMinutes()) : today.getMinutes();

    let time = JSON.stringify(today.getHours()).length !== 2 ? addLeadingZeros(today.getHours()) : today.getHours() + ":" + minutes.replaceAll("\"", "");
    document.querySelector('#time').innerText = time.toString();
};
updateTime();
setInterval(() => {
    updateTime();
}, 1000 * 60)