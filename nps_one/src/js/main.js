import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
    const displaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    displaimer.innerHTML = data.fullName;

    document.querySelector("head > title").textContent = data.fullName;

    document.querySelector(".hero-banner > img").src = data.images[0].url;

    document.querySelector(".hero-banner__content").innerHTML = 
        parkInfoTemplate(data);
}