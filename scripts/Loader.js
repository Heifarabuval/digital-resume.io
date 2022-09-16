(async () => {
    document.querySelector("header").innerHTML = await (await fetch("../pages/templates/header.html")).text()

    document.querySelector("footer").innerHTML = await (await fetch("../pages/templates/footer.html")).text()

    document.querySelector("main").innerHTML = await (await fetch("../pages/templates/main.html")).text()

    const getTimeScript = document.createElement("script")
    getTimeScript.innerText=await (await fetch("../scripts/Date.js")).text()

    const modalScript = document.createElement("script")
    modalScript.innerText=await (await fetch("../scripts/Modal.js")).text()

    const dropScript = document.createElement("script")
    dropScript.innerText=await (await fetch("../scripts/Drop.js")).text()
    dropScript.defer=true
    document.querySelector("head").append(getTimeScript,modalScript,dropScript);


    document.querySelector("#modals").innerHTML=await (await fetch("../pages/components/modals.html")).text()



})()


