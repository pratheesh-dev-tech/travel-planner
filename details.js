
    function goBack() {
            window.location.href = 'https://chennaimetrorail.org/';
        }

    var map = L.map('map').setView([13.0827, 80.2707], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    L.control.locate().addTo(map);

    var stationIcon = L.icon({
        iconUrl: 'logo.png',
        iconSize: [32, 32],
        iconAnchor: [16, 17],
        popupAnchor: [0, -32]
    });



    document.getElementById('date').valueAsDate = new Date();
    function getCurrentTime() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes;
    }

    var stationMapping = {
        "Koyambedu": 210,
        "Puratchi Thalaivi Dr.J.Jayalalithaa CMBT Metro": 211,
        "Arumbakkam": 212,
        "Vadapalani": 213,
        "Ashok Nagar": 214,
        "Ekkattuthangal": 215,
        "Arignar Anna Alandur Metro": 114,
        "Airport": 117,
        "Meenambakkam": 116,
        "Nanganallur": 115,
        "Guindy": 113,
        "Little Mount": 112,
        "St. Thomas Mount": 217,
        "Thirumangalam": 209,
        "Anna Nagar Tower": 208,
        "Anna Nagar East": 207,
        "Shenoy Nagar": 206,
        "Pachaiyappa": 205,
        "Kilpauk": 204,
        "Nehru Park": 203,
        "Egmore Metro": 202,
        "Puratchi Thalaivar Dr.M.G.Ramachandran Central Metro": 104,
        "AG - DMS": 108,
        "Teynampet": 109,
        "Nandanam": 110,
        "Saidapet Metro": 111,
        "Thousand Light": 107,
        "LIC": 106,
        "Government Estate": 105,
        "High Court": 103,
        "Mannadi": 102,
        "Washermenpet": 101,
        "Thiyagaraya College Metro": 149,
        "Tondiarpet Metro": 148,
        "New Washermenpet Metro": 147,
        "Tollgate Metro": 146,
        "Kaladipet Metro": 145,
        "Thiruvotriyur Metro": 143,
        "Wimco Nagar Metro": 142,
        "Thiruvottriyur Theradi Metro": 144,
        "Wimco Nagar Depot Station": 141
    };

    var blueLineStations = [

         {"name": "Chennai International Airport", "lat": 12.980826, "lon": 80.1642, "id": 117},
        {"name": "Meenambakkam", "lat": 12.987656, "lon": 80.176505, "id": 116},
        {"name": "OTA-Nanganallur Road", "lat": 12.999933, "lon": 80.193985, "id": 115},
        {"name": "Alandur", "lat": 13.004713, "lon": 80.20145, "id": 114},
        {"name": "Guindy", "lat": 13.00924, "lon": 80.213199, "id": 113},
        {"name": "Little Mount", "lat": 13.014712, "lon": 80.223993, "id": 112},
        {"name": "Saidapet", "lat": 13.023717, "lon": 80.228208, "id": 111},
        {"name": "Nandanam", "lat": 13.03139, "lon": 80.239969, "id": 110},
        {"name": "Teynampet", "lat": 13.037904, "lon": 80.247029, "id": 109},
        {"name": "AG-DMS", "lat": 13.044682, "lon": 80.248052, "id": 108},
        {"name": "Thousand Lights", "lat": 13.058198, "lon": 80.258056, "id": 107},
        {"name": "LIC", "lat": 13.064511, "lon": 80.266065, "id": 106},
        {"name": "Government Estate", "lat": 13.069557, "lon": 80.272842, "id": 105},
        {"name": "Chennai Central", "lat": 13.081426, "lon": 80.272887, "id": 104},
        {"name": "High Court", "lat": 13.087369, "lon": 80.285021, "id": 103},
        {"name": "Mannadi", "lat": 13.095177, "lon": 80.286164, "id": 102},
        {"name": "Washermenpet", "lat": 13.107064, "lon": 80.280528, "id": 101},
        {"name": "Theagaraya College", "lat": 13.116, "lon": 80.284, "id": 149},
        {"name": "Tondiarpet", "lat": 13.124, "lon": 80.289, "id": 148},
        {"name": "New Washermenpet", "lat": 13.13498, "lon": 80.29327, "id": 147},
        {"name": "Tollgate", "lat": 13.143, "lon": 80.296, "id": 146},
        {"name": "Kaladipet", "lat": 13.151, "lon": 80.299, "id": 145},
        {"name": "Tiruvottiyur Theradi", "lat": 13.15977258, "lon": 80.30244886, "id": 144},
        {"name": "Tiruvottiyur", "lat": 13.172, "lon": 80.305, "id": 143},
        {"name": "Wimco Nagar", "lat": 13.17915, "lon": 80.30767, "id": 142},
        {"name": "Wimco Nagar Depot", "lat": 13.1842985, "lon": 80.30909273, "id": 141}
    ];

    var greenLineStations = [
        {"name": "Chennai Central", "lat": 13.081426, "lon": 80.272887, "id": 104},
        {"name": "Egmore", "lat": 13.079059, "lon": 80.261098, "id": 202},
        {"name": "Nehru Park", "lat": 13.078625, "lon": 80.250855, "id": 203},
        {"name": "Kilpauk", "lat": 13.077508, "lon": 80.242867, "id": 204},
        {"name": "Pachaiyappa's College", "lat": 13.07557, "lon": 80.232347, "id": 205},
        {"name": "Shenoy Nagar", "lat": 13.078697, "lon": 80.225133, "id": 206},
        {"name": "Anna Nagar East", "lat": 13.084794, "lon": 80.21866, "id": 207},
        {"name": "Anna Nagar Tower", "lat": 13.084975, "lon": 80.208727, "id": 208},
        {"name": "Thirumangalam", "lat": 13.085259, "lon": 80.201575, "id": 209},
        {"name": "Koyambedu", "lat": 13.073708, "lon": 80.194869, "id": 210},
        {"name": "CMBT", "lat": 13.068568, "lon": 80.203882, "id": 211},
        {"name": "Arumbakkam", "lat": 13.062058, "lon": 80.211581, "id": 212},
        {"name": "Vadapalani", "lat": 13.050825, "lon": 80.212242, "id": 213},
        {"name": "Ashok Nagar", "lat": 13.035534, "lon": 80.21114, "id": 214},
        {"name": "Ekkattuthangal", "lat": 13.017044, "lon": 80.20594, "id": 215},
        {"name": "Alandur", "lat": 13.004713, "lon": 80.20145, "id": 114},
        {"name": "St. Thomas Mount", "lat": 12.995128, "lon": 80.19864, "id": 217}
    ];

    var blueLinePath = [
        [12.980826, 80.1642, "Chennai International Airport"], //airport
        [12.981917, 80.166955],
        [12.987656, 80.176505, "Meenambakkam"], //Meenambakkam
        [12.988603, 80.177700],
        [12.989805, 80.178954],
        [12.993022, 80.183264],
        [12.997809, 80.191124],
        [12.999933, 80.193985, "OTA-Nanganallur Road"], //Nanganallur Road
        [13.001618, 80.196119],
        [13.001867, 80.196464],
        [13.001955, 80.196628],
        [13.002046, 80.196857],
        [13.002105, 80.197099],
        [13.002079, 80.197457],
        [13.001791, 80.199172],
        [13.001769, 80.199398],
        [13.001789, 80.199668],
        [13.001828, 80.199842],
        [13.001911, 80.200043],
        [13.002056, 80.200296],
        [13.002328, 80.200594],
        [13.004713, 80.20145, "Alandur"], //Alandur
        [13.005123, 80.201923],
        [13.005871, 80.202610],
        [13.006816, 80.203868],
        [13.007606, 80.205726],
        [13.008200, 80.209417],
        [13.008246, 80.209517],
        [13.00924, 80.213199, "Guindy"], //Guindy
        [13.009865,  80.215417],
        [13.010170, 80.216133],
        [13.010984, 80.217351],
        [13.011080, 80.217529],
        [13.012187, 80.220808],
        [13.012567, 80.221502],
        [13.014712, 80.223993, "Little Mount"], //Little Mount
        [13.015359, 80.224960],
        [13.015640, 80.225229],
        [13.016152, 80.225483],
        [13.016295, 80.225567],
        [13.016601, 80.225560],
        [13.016890, 80.225530],
        [13.017072, 80.225471],
        [13.018131, 80.225048],
        [13.019513, 80.225044],
        [13.020320, 80.225283],
        [13.020967, 80.225744],
        [13.022959, 80.227402],
        [13.023717, 80.228208, "Saidapet"], //Saidapet

        [13.03139, 80.239969, "Nandanam"], //Nandanam
        [13.033131, 80.243444],
        [13.034781, 80.245695],
        [13.035177, 80.246060],
        [13.037904, 80.247029, "Teynampet"], //Teynampet
        [13.044682, 80.248052, "AG-DMS"], //AG-DMS
        [13.058198, 80.258056, "Thousand Lights"], //Thousand Lights
        [13.064511, 80.266065, "LIC"], //LIC
        [13.069557, 80.272842, "Government Estate"], //Government Estate
        [13.070687, 80.273996],
        [13.071014, 80.274184],
        [13.071171, 80.274218],
        [13.071385, 80.274269],
        [13.071563, 80.274280],
        [13.071855, 80.274211],
        [13.072543, 80.273796],
        [13.073830, 80.272668],
        [13.07453,  80.27181],
        [13.07709, 80.26905],
        [13.07752, 80.26876],
        [13.07812, 80.26865],
        [13.07867, 80.26876],
        [13.07906, 80.26894],
        [13.07981, 80.26948],
        [13.08042, 80.27011],
        [13.08063, 80.27062],
        [13.08090, 80.27106],
        [13.081426, 80.272887,"Chennai Central"], //Chennai Central
        [13.08232 , 80.28180],
        [13.08278, 80.28273],
            [13.08365, 80.28375],
        [13.08474, 80.28433],
        [13.08592, 80.28468],
        [13.087369, 80.285021, "High Court"], //High Court
        [13.095177, 80.286164, "Mannadi"], //Mannadi
        [13.09628, 80.28622],
        [13.09694, 80.28627],
        [13.09724, 80.28625],
        [13.09770, 80.28620],
        [13.09805, 80.28609],
        [13.09847, 80.28583],
        [13.10281, 80.28081],
        [13.10330, 80.28044],
        [13.10384, 80.28021],
        [13.10485, 80.28011],
        [13.10574, 80.28032],
        [13.107064, 80.280528, "Washermenpet"], //Washermenpet
        [13.116, 80.284, "Theagaraya College"], //Theagaraya College
        [13.124, 80.289, "Tondiarpet"], //Tondiarpet
        [13.143, 80.296, "Tollgate"], //Tollgate
        [13.151, 80.299, "Kaladipet"], //Kaladipet
        [13.15977258, 80.30244886, "Tiruvottiyur Theradi"], //Tiruvottiyur Theradi
        [13.16283, 80.30335],
        [13.172, 80.305, "Tiruvottiyur"], //Tiruvottiyur
        [ 13.17915, 80.30767, "Wimco Nagar"], //Wimco Nagar
        [13.1842985, 80.30909273, "Wimco Nagar Depot"] //Wimco Nagar Depot
    ];

    var greenLinePath = [
        [12.995128, 80.19864, "St. Thomas Mount"], //St. Thomas Mount
        [12.99571, 80.19980],
        [12.99581, 80.19997],
        [12.99604, 80.20022],
        [12.99625, 80.20036],
        [12.99646, 80.20046],
        [12.99655, 80.20049],
        [12.99686, 80.20053],
        [12.99703, 80.20052],
        [12.99801, 80.20041],
        [12.99856, 80.20037],
        [12.99864, 80.20036],
        [13.00134, 80.20028],
        [13.00155, 80.20030],
        [13.00175, 80.20031],
        [13.00195, 80.20037],
        [13.00213, 80.20044],
        [13.00226, 80.20050],
        [13.00259, 80.20075],
        [13.004713, 80.20145, "Alandur"], //Alandur
        // [13.00493, 80.20186],
        [13.00735, 80.20298],
        [13.00756, 80.20307],
        [13.00785, 80.20316],
        [13.00813, 80.20321],
        [13.00842, 80.20326],
        //[13.00858, 80.20327],
        //  [13.00989, 80.20321],
        // [13.01028, 80.20322],
        // [13.01051, 80.20323],
        // [13.01086, 80.20327],
        [13.01104, 80.20330],
        [13.01117, 80.20334],
        //[13.011146, 80.20343],
        [13.017044, 80.20594, "Ekkattuthangal"], //Ekkattuthangal
        [13.01867, 80.20608],
        [13.01894, 80.20617],
        [13.01922, 80.20626],
        [13.01949, 80.20632],
        [13.01977, 80.20636],
        [13.02005, 80.20637],
        [13.02062, 80.20636],
        [13.02229, 80.20643],
        [13.02259, 80.20647],
        [13.02311, 80.20656],
        [13.02353, 80.20663],
        [13.02504, 80.20692],
        [13.02573, 80.20698],
        [13.02571, 80.20699],
        [13.02606, 80.20707],
        [13.02646, 80.20718],
        [13.02686, 80.20734],
        [13.02720, 80.20751],
        [13.02744, 80.20768],
        [13.02843, 80.20846],
        [13.02890, 80.20869],
        [13.02967, 80.20892],
        [13.03216, 80.20965],
        [13.03245, 80.20970],
        [13.03264, 80.20973],
        [13.03270, 80.20973],
        [13.03291, 80.20973],
        [13.03320, 80.20970],
        [13.03374, 80.20966],
        [13.03392, 80.20967],
        [13.03406, 80.20968],
        [13.03436, 80.20976],
        [13.03469, 80.20997],
        [13.03497, 80.21026],
        [13.035534, 80.21114, "Ashok Nagar"], //Ashok Nagar
        [13.03594, 80.21187],
        [13.03602, 80.21193],
        [13.03608, 80.21200],
        [13.03612, 80.21206],
        [13.03620, 80.21213],
        [13.03623, 80.21216],
        [13.03628, 80.21220],
        [13.03636, 80.21226],
        [13.03643, 80.21230],
        [13.03649, 80.21233],
        [13.03669, 80.21240],
        [13.03736, 80.21246],
        [13.04907, 80.21206],
        [13.050825, 80.212242, "Vadapalani"], //Vadapalani
        [13.05172, 80.21212],
        [13.05191, 80.21210],
        [13.05213, 80.21206],
        [13.05241, 80.21200],
        [13.05455, 80.21155],
        [13.062058, 80.211581, "Arumbakkam"], //Arumbakkam
        [13.063178, 80.21181],
        [13.06465, 80.21164],
        [13.06549, 80.21112],
        [13.06677, 80.20985],
        [13.06762, 80.20870],
        [13.06827, 80.20764],
        [13.06842, 80.20724],
        [13.06844, 80.20691],
        [13.06850, 80.20502],
        [13.068568, 80.203882, "CMBT"], //CMBT
        [13.06895, 80.20210],
        [13.06902, 80.20179],
        [13.06942, 80.20072],
        [13.06949, 80.20032],
        [13.06953, 80.20009],
        [13.06946, 80.19651],
        [13.06947, 80.19609],
        [13.06951, 80.19586],
        [13.06963, 80.19560],
        [13.06972, 80.19543],
        [13.06982, 80.19529],
        [13.06996, 80.19518],
        [13.07016, 80.19504],
        [13.07035, 80.19496],
        [13.07057, 80.19480],
        [13.07082, 80.19485],
        [13.073708, 80.194869, "Koyambedu"], //Koyambedu
        [13.0765737, 80.1949345],
        [13.0769545, 80.1949818],
        [13.0771981, 80.1951072],
        [13.0776752, 80.1956594],
        [13.0778082, 80.1959618],
        [13.0779016, 80.1962179],
        [13.0779963, 80.1964855],
        [13.0780159, 80.1969133],
        [13.0780247, 80.1972372],
        [13.0780152, 80.1975228],
        [13.0780283, 80.1976398],
        [13.0780782, 80.1977072],
        [13.0781631, 80.1977595],
        [13.0782239, 80.1977843],
        [13.0782569, 80.1977961],
        [13.0783490, 80.1978246],
        [13.0795975, 80.1985662],
        [13.0825364, 80.1984720],
        [13.0830566, 80.1985105],
        [13.0834795, 80.1985709],
        [13.0840827, 80.1986939],
        [13.0846097, 80.1996679],
        //[13.0850871, 80.1997763],
        // [13.0852018, 80.1999653],
        [13.0851992, 80.2002382],
        [13.0852159, 80.2004357],
        [13.085259, 80.201575, "Thirumangalam"], //Thirumangalam
        [13.084975, 80.208727, "Anna Nagar Tower"], //Anna Nagar Tower
        [13.084794, 80.21866, "Anna Nagar East"], //Anna Nagar East
        [13.08438, 80.22261],
        [13.08436, 80.22291],
        [13.08426, 80.22340],
        [13.08411, 80.22378],
        [13.08378, 80.22440],
        [13.08362, 80.22461],
        [13.08336, 80.22488],
        [13.08316, 80.22504],
        [13.08286, 80.22519],
        [13.08266, 80.22526],
        [13.08246, 80.22530],
        [13.08219, 80.22532],
        [13.078697, 80.225133, "Shenoy Nagar"], //Shenoy Nagar
        [13.07644, 80.22487],
        [13.07602, 80.22495],
        [13.07566, 80.22515],
        [13.07527, 80.22545],
        [13.07500, 80.22570],
        [13.07483, 80.22596],
        [13.07467, 80.22628],
        [13.07458, 80.22663],
        [13.07453, 80.22736],
        [13.07557, 80.232347, "Pachaiyappa's College"], //Pachaiyappa's College
        [13.07592, 80.23505],
        [13.07740, 80.24167],
        [13.077508, 80.242867, "Kilpauk"], //Kilpauk
        [13.07810, 80.24716],
        [13.07846, 80.24965],
        [13.078625, 80.250855, "Nehru Park"], //Nehru Park
        [13.07871, 80.25312],
        [13.07895, 80.25588],
        [13.07857, 80.25929],
        [13.07862, 80.25971],
        [13.079059, 80.261098, "Egmore"], //Egmore
        [13.07921, 80.26206],
        [13.07916, 80.26230],
        [13.07903, 80.26269],
        [13.07866, 80.26490],
        [13.07857, 80.26544],
        [13.07861, 80.26566],
        [13.08077, 80.27069],
        [13.08094, 80.27107],
        [13.081426, 80.272887, "Chennai Central"] //Chennai Central
    ];

    var allStations = blueLineStations.concat(greenLineStations);
    var stationsMap = {};
    var liveLocationMarker;

  function populateDropdowns() {
            var originSelect = document.getElementById('origin');
            var destinationSelect = document.getElementById('destination');

            allStations.forEach(station => {
                var option = document.createElement('option');
                option.value = station.name;
                option.textContent = station.name;
                originSelect.appendChild(option);
                destinationSelect.appendChild(option.cloneNode(true));
            });
        }

        populateDropdowns();

        document.getElementById('origin').addEventListener('change', function() {
            var selectedOrigin = this.value;
            var destinationSelect = document.getElementById('destination');

            // Clear the destination dropdown
            destinationSelect.innerHTML = '<option value="" disabled selected>Select Destination</option>';

            // Repopulate the destination dropdown excluding the selected origin
            allStations.forEach(station => {
                if (station.name !== selectedOrigin) {
                    var option = document.createElement('option');
                    option.value = station.name;
                    option.textContent = station.name;
                    destinationSelect.appendChild(option);
                }
            });
        });

        document.getElementById('destination').addEventListener('change', function() {
            var selectedOrigin = document.getElementById('origin').value;
            var selectedDestination = this.value;

            if (selectedOrigin === selectedDestination) {
                alert('Origin and destination cannot be the same. Please select a different destination.');
                this.innerHTML = '<option value="" disabled selected>Select Destination</option>';

                // Repopulate the destination dropdown excluding the selected origin
                allStations.forEach(station => {
                    if (station.name !== selectedOrigin) {
                        var option = document.createElement('option');
                        option.value = station.name;
                        option.textContent = station.name;
                        this.appendChild(option);
                    }
                });
            }
        });

    // Adding markers for all stations
    allStations.forEach(station => {
            L.marker([station.lat, station.lon], { icon: stationIcon, title: station.name })
                .addTo(map)
                .bindTooltip(station.name, {
                    className: 'my-tooltip'  // Apply custom class
                });
            stationsMap[station.name] = station;
        });


    // Drawing the blue line polyline using predefined coordinates
    var blueLinePolyline = L.polyline(blueLinePath, {
        color: 'blue',
        weight: 4
    }).addTo(map);

    // Drawing the green line polyline using predefined coordinates
    var greenLinePolyline = L.polyline(greenLinePath, {
        color: 'green',
        weight: 4
    }).addTo(map);

    // Function to get the nearest station point from the path coordinates
    function getNearestPoint(station, path) {
        var minDistance = Infinity;
        var nearestPoint = null;
        path.forEach(point => {
            var distance = map.distance([station.lat, station.lon], point);
            if (distance < minDistance) {
                minDistance = distance;
                nearestPoint = point;
            }
        });
        return nearestPoint;
    }

    // Function to find the shortest path using Dijkstra's algorithm
    function dijkstraUsingPaths(origin, destination) {
        var path = [];
        var originIsBlueLine = blueLineStations.some(station => station.name === origin.name);
        var destinationIsBlueLine = blueLineStations.some(station => station.name === destination.name);
        var originIsGreenLine = greenLineStations.some(station => station.name === origin.name);
        var destinationIsGreenLine = greenLineStations.some(station => station.name === destination.name);

        if (originIsBlueLine && destinationIsBlueLine) {
            path = blueLinePath.slice();
        } else if (originIsGreenLine && destinationIsGreenLine) {
            path = greenLinePath.slice();
        } else {
            var junctions = ["Alandur", "Chennai Central"];
            var shortestPath = null;
            var shortestDistance = Infinity;

            junctions.forEach(junction => {
                var originToJunction = dijkstraUsingPaths(origin, stationsMap[junction]);
                var junctionToDestination = dijkstraUsingPaths(stationsMap[junction], destination);
                var combinedPath = originToJunction.concat(junctionToDestination.slice(1));
                var totalDistance = combinedPath.reduce((acc, point, index) => {
                    if (index < combinedPath.length - 1) {
                        return acc + map.distance(point, combinedPath[index + 1]);
                    }
                    return acc;
                }, 0);

                if (totalDistance < shortestDistance) {
                    shortestDistance = totalDistance;
                    shortestPath = combinedPath;
                }
            });

            path = shortestPath;
        }

        if (path && path.length > 0) {
            var originPoint = getNearestPoint(origin, path);
            var destinationPoint = getNearestPoint(destination, path);
            var originIndex = path.findIndex(point => point[0] === originPoint[0] && point[1] === originPoint[1]);
            var destinationIndex = path.findIndex(point => point[0] === destinationPoint[0] && point[1] === destinationPoint[1]);

            if (originIndex < destinationIndex) {
                return path.slice(originIndex, destinationIndex + 1);
            } else {
                return path.slice(destinationIndex, originIndex + 1).reverse();
            }
        }

        return [];
    }

   // window.onload = function() {
   //     if (localStorage.getItem('selectedOrigin')||localStorage.getItem('selectedDestination')) {
    //        document.getElementById('origin').value = localStorage.getItem('selectedOrigin');
    //    }
 //   };

   // document.getElementById('origin').addEventListener('change', function() {
   //     localStorage.setItem('selectedOrigin', this.value);
   //     location.reload();
  //  });

    document.getElementById('getDetailsButton').addEventListener('click', function() {
        var origin = document.getElementById('origin').value;
        var destination = document.getElementById('destination').value;

        if (!origin || !destination) {
            alert('Please select both origin and destination.');
            return;
        }

        var originStation = stationsMap[origin];
        var destinationStation = stationsMap[destination];

        if (originStation && destinationStation) {
            var shortestPath = dijkstraUsingPaths(originStation, destinationStation);

            if (shortestPath.length > 0) {
                // Remove previously highlighted paths
                if (window.currentPolyline) {
                    map.removeLayer(window.currentPolyline);
                }

                window.currentPolyline = L.polyline(shortestPath, {
                    color: 'yellow',
                    weight: 4,
                    className: 'highlighted-path'
                }).addTo(map);

                var pathBounds = L.latLngBounds(shortestPath);
                map.fitBounds(pathBounds);
            } else {
                alert('No path found between the selected stations.');
            }
        }
    });

    // Populate the dropdowns on page load
    populateDropdowns();

    // Add live location point
   /* map.locate({ setView: true, watch: true });

    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        if (!liveLocationMarker) {
            liveLocationMarker = L.marker(e.latlng, { icon: customIcon }).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();
        } else {
            liveLocationMarker.setLatLng(e.latlng);
            liveLocationMarker.getPopup().setContent("You are within " + radius + " meters from this point").openOn(map);
        }
    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);*/

    // Update time input with current time
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("time").value = getCurrentTime();
    });




    // Initialize the map when the DOM content is fully loaded
    document.addEventListener('DOMContentLoaded', initMap);

    // Set up event listeners to clear displayed data when inputs change
    document.getElementById('origin').addEventListener('change', clearDisplayedData);
    document.getElementById('destination').addEventListener('change', clearDisplayedData);
    document.getElementById('date').addEventListener('change', clearDisplayedData);
    document.getElementById('time').addEventListener('change', clearDisplayedData);

    // Function to initialize the map (example using Leaflet)
    function initMap() {
        window.myMap = L.map('map').setView([13.0827, 80.2707], 13); // Centered on Chennai
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data ©️ <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(window.myMap);
    }

    // Function to clear displayed data
    function clearDisplayedData() {
        // Clear fare, stops, duration, and distance
        document.getElementById('fare').innerText = "";
        document.getElementById('stops').innerText = "";
        document.getElementById('duration').innerText = "";
        document.getElementById('distance').innerText = "";

        // Clear the timetable list
        document.getElementById('myList').innerHTML = '';

        // Clear the inter junction row
        document.getElementById('interJunctionRow').innerHTML = '';

        // Clear the map or remove the highlighted path
        if (window.myPath) {
            window.myMap.removeLayer(window.myPath);
            window.myPath = null;
        }
    }

    // Function to fetch and display train details
  document.getElementById("getDetailsButton").addEventListener("click", function() {
    var button = this;
    button.style.backgroundColor = 'green';

    setTimeout(function() {
        button.style.backgroundColor = '#4CAF50';
    }, 10000);

    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    var originStation = stationsMap[origin];
    var destinationStation = stationsMap[destination];

    if (!originStation || !destinationStation) {
        alert('Please select both origin and destination stations.');
        return;
    }

    fetch('https://apiprod.chennaimetrorail.org/v4/api/TravelPlannerWithRoute/TravelPlanner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "FromStationId": originStation.id.toString(),
            "ToStationCode": destinationStation.id.toString(),
            "strDate": date,
            "strTime": time,
            "SecretKey": "$GrtJWlry#StH#QRit$kY"
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.status === 'success') {
            document.getElementById("fare").innerText = " ₹" + data.generalclassfare;
            document.getElementById("stops").innerText = data.inbetweenstationcount;
            document.getElementById("duration").innerText = data.duration + " mins";
            document.getElementById("distance").innerText = data.distance + " km";

            let timetable = data.timetable;
            let list = document.getElementById("myList");
            list.innerHTML = '';

            timetable.forEach((element, index) => {
                let div = document.createElement('div');
                div.className = 'circle';
                div.style.backgroundImage = `url(${element.colorcode})`;
                div.innerHTML = `${element.train_time}<br>P${element.platform}`;
                div.addEventListener('click', function() {
                    // Remove highlight from previously selected circle and info
                    let highlighted = document.querySelector('.highlight');
                    if (highlighted) {
                        highlighted.classList.remove('highlight');
                    }

                    // Highlight the selected circle
                    div.classList.add('highlight');

                    // Clear previous routeinfo
                    let interJunctionRow = document.getElementById("interJunctionRow");
                    interJunctionRow.innerHTML = '';

                    // Display the routeinfo for the clicked circle
                    if (element.routeinfo) {
                        let p = document.createElement('p');
                        p.innerText = element.routeinfo;
                        p.classList.add('highlight');
                        interJunctionRow.appendChild(p);
                    }
                });
                list.appendChild(div);
            });

            // Highlight and show route info for the first circle by default
            if (timetable.length > 0) {
                let firstCircle = list.firstChild;
                firstCircle.classList.add('highlight');

                let interJunctionRow = document.getElementById("interJunctionRow");
                interJunctionRow.innerHTML = '';
                if (timetable[0].routeinfo) {
                    let p = document.createElement('p');
                    p.innerText = timetable[0].routeinfo;
                    p.classList.add('highlight');
                    interJunctionRow.appendChild(p);
                }
            }

            // Clear the existing first train and last train data
            let dayNight = document.getElementById("day-night");
            dayNight.innerHTML = '';

            let trainInfoContainer = document.createElement('div');
            trainInfoContainer.classList.add('train-info-container');

            // Create a container for the first train information
            let firstTrainContainer = document.createElement('div');
            firstTrainContainer.classList.add('train-info-item');
            firstTrainContainer.style.alignItems = 'center';

            let firstTrainImg = document.createElement('img');
            firstTrainImg.src = 'SUN.jpg';
            firstTrainImg.alt = 'First Train';
            firstTrainImg.style.marginRight = '2px'; // Add some space between image and text
            firstTrainImg.style.width = '34px'; // Set the width of the image
            firstTrainImg.style.height = '34px';

            let firstTrainText = document.createElement('span');
            firstTrainText.innerText = `${data.firsttrain}`;

            firstTrainContainer.appendChild(firstTrainImg);
            firstTrainContainer.appendChild(firstTrainText);

            // Create a container for the last train information
            let lastTrainContainer = document.createElement('div');
            lastTrainContainer.classList.add('train-info-item');
            lastTrainContainer.style.display = 'flex';
            lastTrainContainer.style.alignItems = 'right';
            lastTrainContainer.style.justifyContent = 'flex-end';

            let lastTrainImg = document.createElement('img');
            lastTrainImg.src = 'moon1.png';
            lastTrainImg.alt = 'Last Train';
            lastTrainImg.style.marginRight = '5px'; // Add some space between image and text
            lastTrainImg.style.width = '30px'; // Set the width of the image
            lastTrainImg.style.height = '30px';

            let lastTrainText = document.createElement('span');
            lastTrainText.innerText = `${data.lasttrain}`;

            lastTrainContainer.appendChild(lastTrainImg);
            lastTrainContainer.appendChild(lastTrainText);

            // Append both train containers to the trainInfoContainer
            trainInfoContainer.appendChild(firstTrainContainer);
            trainInfoContainer.appendChild(lastTrainContainer);

            // Append trainInfoContainer to day-night
            dayNight.appendChild(trainInfoContainer);

            // Clear the existing path if any
            if (window.myPath) {
                window.myMap.removeLayer(window.myPath);
            }

            // Check if data.route exists and is an array before mapping
            if (Array.isArray(timetable[0].route)) {
                // Add new path to the map (example assuming you have coordinates in data)
                let coordinates = timetable[0].route.map(station => {
                    // For this example, assuming you have a method to get coordinates from station names
                    let coord = getStationCoordinates(station.stationname);
                    return [coord.latitude, coord.longitude];
                });
                window.myPath = L.polyline(coordinates, { color: 'blue' }).addTo(window.myMap);
                window.myMap.fitBounds(window.myPath.getBounds());
            } else {
                console.error('No route data available or data.route is not an array');
                alert('No route data available for the selected route and time.');
            }
        } else {
            alert('No trains available for the selected route and time.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// CSS for highlight
const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        border: 5px solid white;
        padding: 5px;
        border-radius: 1px;
    }
`;
document.head.appendChild(style);