// https://calculator.swiftutors.com/angular-displacement-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const angularDisplacementRadio = document.getElementById('angularDisplacementRadio');
const distanceTravelledRadio = document.getElementById('distanceTravelledRadio');
const radiusofCircularPathRadio = document.getElementById('radiusofCircularPathRadio');

let angularDisplacement;
let distanceTravelled = v1;
let radiusofCircularPath = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

angularDisplacementRadio.addEventListener('click', function() {
  variable1.textContent = '(s) Distance Travelled (m)';
  variable2.textContent = '(r) Radius of Circular Path (m)';
  distanceTravelled = v1;
  radiusofCircularPath = v2;
  result.textContent = '';
});

distanceTravelledRadio.addEventListener('click', function() {
  variable1.textContent = '(θ) Angular Displacement (rad)';
  variable2.textContent = '(r) Radius of Circular Path (m)';
  angularDisplacement = v1;
  radiusofCircularPath = v2;
  result.textContent = '';
});

radiusofCircularPathRadio.addEventListener('click', function() {
  variable1.textContent = '(θ) Angular Displacement (rad)';
  variable2.textContent = '(s) Distance Travelled (m)';
  angularDisplacement = v1;
  distanceTravelled = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(angularDisplacementRadio.checked)
    result.textContent = `Angular Displacement = ${computeAngularDisplacement().toFixed(2)} rad`;

  else if(distanceTravelledRadio.checked)
    result.textContent = `Distance Travelled = ${computeDistanceTravelled().toFixed(2)} m`;

  else if(radiusofCircularPathRadio.checked)
    result.textContent = `Radius of Circular Path = ${computeRadiusofCircularPath().toFixed(2)} m`;
})

// calculation

function computeAngularDisplacement() {
  return Number(distanceTravelled.value) / Number(radiusofCircularPath.value);
}

function computeDistanceTravelled() {
  return Number(angularDisplacement.value) * Number(radiusofCircularPath.value);
}

function computeRadiusofCircularPath() {
  return Number(distanceTravelled.value) / Number(angularDisplacement.value);
}