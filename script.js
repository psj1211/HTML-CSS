
const musicPlayer = document.querySelector("#musicPlayer");
const musicDetail = document.querySelector("#musicDetail");

const openButton = document.querySelector("#openMusicInfo");
const closeButton = document.querySelector("#closeMusicInfo");

// 창 열기 / 닫기
function toggleMusicDetail() {
    musicDetail.classList.toggle("active");
}

// 플레이어 클릭
musicPlayer.addEventListener("click", toggleMusicDetail);

// 상세 정보 버튼 클릭
openButton.addEventListener("click", (e) => {
    e.stopPropagation();
    musicDetail.classList.add("active");
});

// 닫기 버튼 클릭
closeButton.addEventListener("click", () => {
    musicDetail.classList.remove("active");
});
