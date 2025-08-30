let slides = [
  { img: "images/Beautiful Sunset.webp", caption: "Beautiful Sunset" },
  { img: "images/Mountain View.jpeg", caption: "Mountain View" },
  { img: "images/City Lights.jpeg", caption: "City Lights" }
];

let currentIndex = 0;
let intervalId = null;

const showSlide = (index) => {
  if (index < 0 || index >= slides.length) return;
  const slide = slides[index];
  document.getElementById("slide-img").src = slide.img;
  document.getElementById("caption").innerText = `${slide.caption}`;
  document.getElementById("counter").innerText = `Slide ${index + 1} of ${slides.length}`;
  console.log(`Slide ${index + 1}: ${slide.caption}`);
};

const nextSlide = () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  } else {
    console.log("Message: This is the last slide.");
    alert("This is the last slide.");
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  } else {
    console.log("Message: This is the first slide.");
    alert("This is the first slide.");
  }
};

const playSlides = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 3000);
    console.log("Auto-play started");
  }
};

const pauseSlides = () => {
  clearInterval(intervalId);
  intervalId = null;
  console.log("Auto-play paused");
};

const addSlide = () => {
  const url = document.getElementById("imgUrl").value;
  const caption = document.getElementById("imgCaption").value;

  if (url && caption) {
    slides.push({ img: url, caption: caption });
    console.log(`Added new slide: ${caption}`);
    alert("New slide added successfully!");
    document.getElementById("imgUrl").value = "";
    document.getElementById("imgCaption").value = "";
    showSlide(slides.length - 1);
    currentIndex = slides.length - 1;
  } else {
    alert("Please enter both URL and Caption!");
  }
};

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("playBtn").addEventListener("click", playSlides);
document.getElementById("pauseBtn").addEventListener("click", pauseSlides);
document.getElementById("addBtn").addEventListener("click", addSlide);

showSlide(currentIndex);
