function updateESTClock() {
  const options = {
    timeZone: "America/New_York",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const estTime = formatter.format(new Date());

  document.getElementById("live-est-clock").textContent = estTime;
}

// UPDATE EVERY SECOND
setInterval(updateESTClock, 1000);

// UPDATE EST TIME ON PAGE LOAD
updateESTClock();
