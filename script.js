const snowContainer = document.getElementById("snow-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.innerHTML = "&#10052;";
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);

// BAR
function showPage(pageId) {
    // ซ่อนทุกหน้าก่อน
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    // แสดงหน้าที่ต้องการ
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.style.display = 'block';
    }
  }

// Add interactivity if needed
console.log("Website is loaded!");