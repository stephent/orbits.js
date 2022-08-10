// Handling of TLE input dialog.
const ListEnter = document.getElementById('TLEListEnter');
const ListCancel = document.getElementById('TLEListCancel');

let satellites = [];
let satelliteNames = [];
let satNameToIndex = [];

ListEnter.onclick = function() 
{
    const TLEcontainer = document.getElementById('TLEListcontainer');
    const TLEinput = document.getElementById('TLEListinput');
    const TLEselectList = document.getElementById('TLESelectlist');
    TLEcontainer.style.visibility = "hidden";
    const tleIn = TLEinput.value;
    const lines = tleIn.split('\n');
    const numElem = (lines.length + 1) / 3;

    satellites = [];
    satelliteNames = [];
    satNameToIndex = [];
    let innerHTML = "";

    for (let indElem = 0; indElem < Math.floor(numElem); indElem++)
    {
        const title = lines[indElem * 3].trim();
        const tleLine1 = lines[indElem * 3 + 1];
        const tleLine2 = lines[indElem * 3 + 2];
        const satrec = satellite.twoline2satrec(tleLine1, tleLine2);

        satellites.push(satrec);
        //satLines.push([title, tleLine1, tleLine2]);
        satelliteNames.push(title);
        satNameToIndex[title] = indElem;

        const satGeometry = new THREE.SphereGeometry( 30, 10, 10 );
        const satMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const satSphere = new THREE.Mesh( satGeometry, satMaterial ); 
        satelliteMeshGroup.add(satSphere);
        satelliteMeshList[indElem] = satSphere;

        targetList.push(title);
    }
    satelliteNames.sort();
}

ListCancel.onclick = function() 
{
    const TLEcontainer = document.getElementById('TLEListcontainer');
    TLEcontainer.style.visibility = "hidden";
}