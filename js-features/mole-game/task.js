const dead = document.getElementById("dead") //убито
const lost = document.getElementById("lost") // промах

const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
    getHole(i).onclick = ()=> {
        if (getHole(i).className.includes(`hole_has-mole`)) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (dead.textContent >= 10) {
            alert("вы выиграли");
            dead.textContent = 0;
            lost.textContent = 0;

        }
        if (lost.textContent >= 5) {
            alert("вы проиграли")
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}