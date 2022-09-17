const updateTime = () => {
    let today = new Date();
    let time = JSON.stringify(today.getHours()).length !== 2 ? "0" + today.getHours() : today.getHours() + ":" + JSON.stringify(today.getMinutes()).length !== 2 ? "0" + today.getMinutes() : today.getMinutes();
    document.querySelector('#time').innerText = time.toString();
};
updateTime();
setInterval(() => {
    updateTime();
}, 1000 * 60)