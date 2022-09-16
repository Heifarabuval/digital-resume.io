setTimeout(() => {
    let win;
    let isDown = false;
    let current;

    win = document.querySelectorAll(".window");
    win.forEach((w) => {
        w.addEventListener('mousedown', function (e) {
            current = e.target.closest('.window');
            isDown = true;
            offset = [
                w.offsetLeft - e.clientX,
                w.offsetTop - e.clientY
            ];
        }, true);
        document.addEventListener('mouseup', function () {
            isDown = false;
        }, true);

        window.addEventListener('resize', function (event) {
            win.forEach((w, i) => {
                w.style.top = `${50}%`;
                w.style.left = `${50}%`;
            }, true);
        }, true);
        document.addEventListener('mousemove', function (event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
                const main = document.querySelector("main");

                let x = mousePosition.x + offset[0];
                let y = mousePosition.y + offset[0];

                const bound = current.getBoundingClientRect();
                const edgeL = current.getBoundingClientRect().left;
                const edgeR = (current.getBoundingClientRect().left + current.clientWidth) - main.clientWidth;




                current.style.left = (mousePosition.x + offset[0]) + 'px';
                current.style.top = (mousePosition.y + offset[1]) + 'px';


            }
        }, true);
    });
}, 1000);
