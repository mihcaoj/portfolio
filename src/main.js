import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

/********** SCROLLING  **********/
const backToTopButton = document.querySelector(".back-to-top");
const scrollDownIndicator = document.querySelector(".scroll-indicator");

// Show back to top button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 900) {
    backToTopButton.style.visibility = "visible";
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.visibility = "hidden";
    backToTopButton.style.opacity = "0";
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Hide scroll indicator when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY < 600) {
    scrollDownIndicator.style.visibility = "visible";
    scrollDownIndicator.style.opacity = "1";
  } else {
    scrollDownIndicator.style.visibility = "hidden";
    scrollDownIndicator.style.opacity = "0";
  }
});

/********** EMAIL **********/
document.addEventListener("DOMContentLoaded", function () {
  const emailElement = document.getElementById("email");
  const emailCopiedElement = document.getElementById("emailCopied");

  if (emailElement && emailCopiedElement) {
    emailElement.addEventListener("click", function () {
      const tempInput = document.createElement("input");
      tempInput.value = emailElement.innerText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      emailElement.style.display = "none";
      emailCopiedElement.style.display = "block";

      setTimeout(() => {
        emailElement.style.display = "";
        emailCopiedElement.style.display = "";
      }, 2000);
    });
  }
});

/********** SCENE SETUP **********/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

scene.background = new THREE.Color(0x000000);

/********** LIGHTS **********/
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

/********** STARS **********/
function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  scene.add(star);
}

Array(250).fill().forEach(addStar);

/********** MOON **********/
const moonTexture = new THREE.TextureLoader().load(
  "/assets/images/moon_map.jpg",
);
moonTexture.generateMipmaps = true;
moonTexture.minFilter = THREE.LinearMipmapLinearFilter;
moonTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

const normalTexture = new THREE.TextureLoader().load(
  "/assets/images/moon_texture.jpg",
);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(10, 64, 64),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  }),
);

scene.add(moon);

moon.position.set(20, 0, 0);

/********** SCROLL ANIMATION **********/
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.03;
  moon.rotation.y += 0.01;
  moon.rotation.z += 0.01;

  camera.position.x = t * -0.001;
  camera.position.y = t * -0.0002;
  camera.position.z = t * -0.01 + 15;
}

document.body.onscroll = moveCamera;
moveCamera();

/********** ANIMATION LOOP **********/
function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();
