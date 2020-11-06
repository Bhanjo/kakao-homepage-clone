const wide = document.getElementById("wideEvent");
const close = document.getElementById("closeEvent");
const site = document.getElementById("getOtherSite");
site.addEventListener("click",popSite);

const siteList = document.getElementById("siteList");

// 처음엔 닫혀있음
let ck = false;
function popSite() {
    ck = !ck
    if(ck == true) {
        wide.style.display = "none";
        close.style.display = "flex";
        site.style.fontWeight = "bold";
        siteList.style.display = "flex";
        console.log("펼칩니다.")
    }  else {
        wide.style.display = "flex";
        close.style.display = "none";
        site.style.fontWeight = "normal";
        siteList.style.display = "none";
        console.log("닫힙니다.");
    }
}