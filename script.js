// Danh sách bài hát
const playlist = [
    { file: "song1.mp3", title: "Hay de con chiu dau kho thay em" },
    { file: "song2.mp3", title: "Baby anh doi co lau" },
    { file: "song3.mp3", title: "Band4band" }
  ];
  
  let currentIndex = 0;
  
  const player = document.getElementById("player");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const currentSong = document.getElementById("currentSong");
  
  // Hàm tải bài hát hiện tại
  function loadSong(index) {
      const song = playlist[index];
      player.src = song.file;
      currentSong.textContent = "Playing: " + song.title;
  }
  
  // Chuyển bài
  function nextSong() {
      currentIndex = (currentIndex + 1) % playlist.length;
      loadSong(currentIndex);
      player.play();
  }
  
  function prevSong() {
      currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      loadSong(currentIndex);
      player.play();
  }
  
  // Sự kiện nút
  playBtn.addEventListener("click", () => player.play());
  pauseBtn.addEventListener("click", () => player.pause());
  nextBtn.addEventListener("click", nextSong);
  prevBtn.addEventListener("click", prevSong);
  
  // Khi bài hiện tại phát xong, tự sang bài tiếp theo
  player.addEventListener("ended", nextSong);
  
  // Tải bài đầu tiên khi mở web
  loadSong(currentIndex);