// 관련사이트 이벤트
const wide = document.getElementById("wideEvent");
const close = document.getElementById("closeEvent");
const site = document.getElementById("getOtherSite");
const siteList = document.getElementById("siteList");
site.addEventListener("click",popSite);

// copyright 이벤트
const site1 = document.getElementById("getCopyRight1");
const copyList1 = document.getElementById("copyList1");
site1.addEventListener("click", popSite1);

const site2 = document.getElementById("getCopyRight2");
const copyList2 = document.getElementById("copyList2");
site2.addEventListener("click", popSite2);

const site3 = document.getElementById("getCopyRight3");
const copyList3 = document.getElementById("copyList3");
site3.addEventListener("click", popSite3);

const site4 = document.getElementById("getCopyRight4");
const copyList4 = document.getElementById("copyList4");
site4.addEventListener("click", popSite4);

const site5 = document.getElementById("getCopyRight5");
const copyList5 = document.getElementById("copyList5");
site5.addEventListener("click", popSite5);

// 
let ck1 = false;
function popSite1() {
    ck1 = !ck1;
    if(ck1 == true) {
        copyList1.style.display = "flex";
        console.log("펼칩니다.")
    }  else {
        copyList1.style.display = "none";
        console.log("닫힙니다.");
    }
}
let ck2 = false;
function popSite2() {
    ck2 = !ck2;
    if(ck2 == true) {
        copyList2.style.display = "flex";
        console.log("펼칩니다.")
    }  else {
        copyList2.style.display = "none";
        console.log("닫힙니다.");
    }
}
let ck3 = false;
function popSite3() {
    ck3 = !ck3;
    if(ck3 == true) {
        copyList3.style.display = "flex";
        console.log("펼칩니다.")
    }  else {
        copyList3.style.display = "none";
        console.log("닫힙니다.");
    }
}
let ck4 = false;
function popSite4() {
    ck4 = !ck4;
    if(ck4 == true) {
        copyList4.style.display = "flex";
        console.log("펼칩니다.")
    }  else {
        copyList4.style.display = "none";
        console.log("닫힙니다.");
    }
}
let ck5 = false;
function popSite5() {
    ck5 = !ck5;
    if(ck5 == true) {
        copyList5.style.display = "flex";
        console.log("펼칩니다.")
    }  else {
        copyList5.style.display = "none";
        console.log("닫힙니다.");
    }
}

// 처음엔 닫혀있음
let ck = false;
function popSite() {
    ck = !ck;
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