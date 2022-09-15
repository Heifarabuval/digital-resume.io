(async () => {
    document.querySelector("header").innerHTML = await (await fetch("../pages/templates/header.html")).text()

    document.querySelector("footer").innerHTML = await (await fetch("../pages/templates/footer.html")).text()

    document.querySelector("main").innerHTML = await (await fetch("../pages/templates/main.html")).text()
})()