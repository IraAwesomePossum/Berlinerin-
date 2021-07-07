if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];
      const doc1 = [52.48924, 13.32622];
      const doc2 = [52.48367, 13.38383];
      const doc3 = [52.49356, 13.41333];
      const doc4 = [52.50768, 13.29912];
      const doc5 = [52.51031, 13.38767];
      const doc6 = [52.40177, 13.41487];
      const doc7 = [52.51152, 13.39142];
      const doc8 = [52.61165, 13.43993];
      const map = L.map("map").setView(coords, 13);

      let greenIcon = new L.Icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords, { icon: greenIcon })
        .addTo(map)
        .bindPopup("You are here")
        .openPopup();
      L.marker(doc1).addTo(map).bindPopup("Sylvia Kollmann").openPopup();
      L.marker(doc2).addTo(map).bindPopup("Alexander Kulka").openPopup();
      L.marker(doc3).addTo(map).bindPopup("Eva Essers").openPopup();
      L.marker(doc4).addTo(map).bindPopup("Lisa Liccini").openPopup();
      L.marker(doc5).addTo(map).bindPopup("Natalie Reytan").openPopup();
      L.marker(doc6).addTo(map).bindPopup("Marie Charlotte König").openPopup();
      L.marker(doc7).addTo(map).bindPopup("Andrea Conrads").openPopup();
      L.marker(doc7).addTo(map).bindPopup("Berndt Pohl").openPopup();
    },
    function () {
      alert("Sorry, we could not fetch your position");
    }
  );
