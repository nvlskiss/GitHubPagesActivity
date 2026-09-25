document.addEventListener("DOMContentLoaded", function () {
    const monthDate = new Date("2026-10-19T00:00:00").getTime();
    const annivDate = new Date("2026-11-19T00:00:00").getTime();
    const heBDate = new Date("2027-09-24T00:00:00").getTime();
    const sheBDate = new Date("2026-11-03T00:00:00").getTime();
  
    function updateTimers() {
      const now = new Date();
  
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
      const ampm = h >= 12 ? 'PM' : 'AM';
      
      h = h % 12 || 12; 
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
  
      const clockElement = document.getElementById('clock');
      if (clockElement) {
        clockElement.innerHTML = `${h}h ${m}m ${s}s`;
      }
  
      const distance = monthDate - now.getTime();
      const monthElement = document.getElementById("month");
  
      if (monthElement) {
        if (distance < 0) {
          monthElement.innerHTML = "Next Month Na Ulit!";
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          monthElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }

      const distance2 = annivDate - now.getTime();
      const annivElement = document.getElementById("anniv");

      if (annivElement) {
        if (distance2 < 0) {
          annivElement.innerHTML = "Next Year Na Ulit!";
        } else {
          const days = Math.floor(distance2/ (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
  
          annivElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }

      const distance3 = annivDate - now.getTime();
      const heBElement = document.getElementById("heB");

      if (heBElement) {
        if (distance3 < 0) {
          heBElement.innerHTML = "Next Year Na Ulit!";
        } else {
          const days = Math.floor(distance3/ (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
  
          heBElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }
      const distance4 = annivDate - now.getTime();
      const sheBElement = document.getElementById("sheB");

      if (sheBElement) {
        if (distance4 < 0) {
          sheBElement.innerHTML = "Next Year Na Ulit!";
        } else {
          const days = Math.floor(distance4/ (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
  
          sheBElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }
    }
  
    updateTimers();
    setInterval(updateTimers, 1000);
  });

  const btn = document.getElementById('break-btn');
  const container = btn.parentElement;
  
  btn.addEventListener('mouseover', () => {
    btn.style.margin = '0';
  
    const maxX = container.clientWidth - btn.offsetWidth;
    const maxY = container.clientHeight - btn.offsetHeight;
  
    const randomX = Math.floor(Math.random() * Math.max(0, maxX));
    const randomY = Math.floor(Math.random() * Math.max(0, maxY));
  
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  });
