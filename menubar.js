// 드롭다운 메뉴바 코드
const kakaoMenu = document.getElementById("hoverKakao");
const kakaoDetail = document.getElementById("kakaoDetail");
kakaoMenu.addEventListener("mouseover", showKakao);
kakaoMenu.addEventListener("mouseout", hideKakao);
kakaoDetail.addEventListener("mouseover", showKakao);
kakaoDetail.addEventListener("mouseout", hideKakao);

const investMenu = document.getElementById("hoverInvest");
const investDetail = document.getElementById("investmentDetail")
investMenu.addEventListener("mouseover", showInvest);
investMenu.addEventListener("mouseout", hideInvest);
investDetail.addEventListener("mouseover", showInvest);
investDetail.addEventListener("mouseout", hideInvest);

const serviceMenu = document.getElementById("hoverService");
const serviceDetail = document.getElementById("serviceDetail");
serviceMenu.addEventListener("mouseover", showService);
serviceMenu.addEventListener("mouseout", hideService);
serviceDetail.addEventListener("mouseover", showService);
serviceDetail.addEventListener("mouseout", hideService);

const socialMenu = document.getElementById("hoverSocial");
const socialDetail = document.getElementById("socialDetail");
socialMenu.addEventListener("mouseover", showSocial);
socialMenu.addEventListener("mouseout", hideSocial);
socialDetail.addEventListener("mouseover", showSocial);
socialDetail.addEventListener("mouseout", hideSocial);

// 카카오 메뉴
function showKakao() {
    kakaoDetail.style.display = 'flex';
}
function hideKakao() {
    kakaoDetail.style.display = 'none';
}

//투자 메뉴
function showInvest() {
    investDetail.style.display = 'flex';
}
function hideInvest() {
    investDetail.style.display = 'none';
}

//서비스 메뉴
function showService() {
    serviceDetail.style.display = 'flex';
}
function hideService() {
    serviceDetail.style.display = 'none';
}

//소셜임팩트 메뉴
function showSocial() {
    socialDetail.style.display = 'flex';
}
function hideSocial() {
    socialDetail.style.display = 'none';
}