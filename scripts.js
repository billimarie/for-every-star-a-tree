document.addEventListener("DOMContentLoaded", () => {
  /* Fundraising Circle */
  var counter = 50,
  c = 0;
  var i = setInterval(function () {
  var counterSpan = document.querySelector("#counter span");
  var counterDiv = document.querySelector("#counter");

  if (counterSpan) {
      counterSpan.textContent = c + "%";
  }

  if (counterDiv) {
      counterDiv.style.background = `linear-gradient(to right, #f60d54 ${c}%, #0d0d0d ${c}%)`;
  }

  c++;
  counter++;

  if (counter === 101) {
      clearInterval(i);
  }
  }, 50);

  // function animateProgress(current, goal, duration) {
  //   let percentage = (current / goal) * 100;
  //   let circle = document.getElementById("progress-bar");
  //   let text = document.getElementById("progress-text");
    
  //   let startOffset = 377;
  //   let endOffset = 377 - (percentage / 100) * 377;
  //   let startTime;

  //   function step(timestamp) {
  //       if (!startTime) startTime = timestamp;
  //       let progress = (timestamp - startTime) / duration;
  //       if (progress > 1) progress = 1;
        
  //       let currentOffset = startOffset - (progress * (startOffset - endOffset));
  //       circle.style.strokeDashoffset = currentOffset;
  //       text.textContent = Math.round(progress * percentage) + "%";
        
  //       if (progress < 1) {
  //           requestAnimationFrame(step);
  //       }
  //   }
    
  //   requestAnimationFrame(step);
  // }

  // function createConfetti() {
  //   for (let i = 0; i < 30; i++) {
  //       let confetti = document.getElementById("confetti-container");
  //       confetti.classList.add("confetti");
  //       confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  //       confetti.style.left = `${Math.random() * window.innerWidth}px`;
  //       confetti.style.top = `${Math.random() * 50}px`;
  //       confetti.style.animationDuration = `${1 + Math.random()}s`;
  //       document.body.appendChild(confetti);
  //       setTimeout(() => confetti.remove(), 1500);
  //   }
  // }

  // document.getElementById("progress-container").addEventListener("mousedown", function() {
  //   this.style.transform = "scale(0.9)";
  // });

  // document.getElementById("progress-container").addEventListener("mouseup", function() {
  //   this.style.transform = "scale(1)";
  //   createConfetti();
  // });

  // // ANIMATE!
  // animateProgress(600, 1000, 1000);

  /* Event Calendar */
      const calendar = document.getElementById("calendar");

      if (!calendar) {
        console.error("Calendar element not found");
        return;
      }

      const daysInMonth = 31;
      const startOffset = 4; // how many blank days before the 1st
      const eventDays = [15, 16, 17, 18, 20, 24, 31];

      // Clear in case of re-render
      calendar.innerHTML = "";

      // Empty cells before the 1st
      for (let i = 0; i < startOffset; i++) {
        calendar.appendChild(document.createElement("span"));
      }

      // Create day cells
      for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("span");
        cell.textContent = day;
        cell.className =
          "inline-block items-center justify-between text-center w-6 h-6 mx-auto";

        if (eventDays.includes(day)) {
          cell.classList.add(
            "rounded-full",
            "bg-cyan-700",
            "text-white",
            "font-semibold",
            "cursor-pointer",
            "hover:scale-110",
            "transition",
            "text-center",
            "inline-block"
          );
          cell.title = "Community Event";
        }

        calendar.appendChild(cell);

        cell.onclick = () => {
            const target = document.getElementById(day);

            if (!target) return;

            const yOffset = window.innerHeight / 2 - target.offsetHeight / 2;
            const y =
                target.getBoundingClientRect().top + window.pageYOffset - yOffset;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });

            target.classList.remove(
                "bg-cyan-600",
                "text-white"
            );

            target.classList.add(
                "bg-white",
                "text-cyan-600",
                "transition-all",
                "duration-300"
            );
        };
      }
});