const updateTime = () => {
    let today = new Date();
    let time = today.getHours() + ":" +today.getMinutes()
    document.querySelector('#time').innerText = time.toString();
};
updateTime();
setInterval(() => {
    updateTime();
}, 1000 * 60)