// mountains.js

document.addEventListener("DOMContentLoaded", () => {
  const mountainSelect = document.getElementById("mountainSelect");
  const mountainInfoContainer = document.getElementById("mountain-info");
  const searchMountainButton = document.getElementById(
    "search-mountain-button"
  );

  // POPULATE MOUNTAIN SELECT DROPDOWN WITH DATA FROM ARRAY
  mountainsArray.forEach((mountain) => {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainSelect.appendChild(option);
  });

  // DISPLAY MOUNTAIN INFORMATION
  const viewMountain = () => {
    const selectedMountain = mountainSelect.value;
    const mountain = mountainsArray.find((m) => m.name === selectedMountain);

    if (mountain) {
      mountainInfoContainer.innerHTML = `
                <div class="result-box">
                    <h3>${mountain.name}</h3>
                    <p><strong>Elevation:</strong> ${
                      mountain.elevation
                    } feet</p>
                    <p><strong>Difficulty:</strong> ${mountain.effort}</p>
                    <p>${mountain.desc}</p>
                    ${
                      mountain.img
                        ? `<img src="../mountain_images/${mountain.img}" alt="${mountain.name} class="result-image" />`
                        : ""
                    }
    <p><strong>Today's Sunrise and Sunset:</strong></p>
    <p id="sunrise-sunset">Fetching data...</p>
    </div>
`;

      // FETCH SUNRISE AND SUNSET TIMES FOR MOUNTAIN
      getSunriseSunset(mountain.coords.lat, mountain.coords.lng);
    } else {
      mountainInfoContainer.innerHTML = `<p>Please select a mountain to view its information.</p>`;
    }
  };
  const getSunriseSunset = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
      );
      const data = await response.json();

      if (data.status === "OK") {
        const { sunrise, sunset } = data.results;
        document.getElementById("sunrise-sunset").innerHTML = `
                    <p><strong>Sunrise:</strong> ${sunrise.format("h:mm A")}</p>
                    <p><strong>Sunset:</strong> ${sunset.format("h:mm A")}</p>
                `;
      } else {
        document.getElementById("sunrise-sunset").textContent =
          "Unable to retrieve sunrise/sunset times.";
      }
    } catch (error) {
      document.getElementById("sunrise-sunset").textContent =
        "Error fetching sunrise/sunset times.";
    }
  };

  // CLEAR RESULTS
  const clearResults = () => {
    mountainInfoContainer.innerHTML = "";
    mountainSelect.value = ""; // reset dropdown values
  };

  // EVENT LISTENERS
  searchMountainButton.addEventListener("click", viewMountain);

  // CLEAR RESULTS BUTTON
  window.clearResults = clearResults;
});
