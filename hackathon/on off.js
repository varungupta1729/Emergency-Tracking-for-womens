const OffBtn = document.getElementById("Off");
const OnBtn = document.getElementById("On");
const switchContainer = document.querySelector(".switch-container");
// Switch On

OnBtn.onclick = () => {
  // OffBtn.classList.remove("active");
  // OnBtn.classList.add("active");
 
  addRemoveActive(OffBtn, OnBtn);
  removeStandby();
};
// Switch Off
OffBtn.onclick = () => {
  if (OnBtn.classList.contains("active")) {
    addRemoveActive(OnBtn, OffBtn);
    removeStandby();
  } else {
    return;
  }
};

// todo: Remove standby from the switch container

function removeStandby() {
  switchContainer.classList.remove("standby");
  if (OffBtn.classList.contains("active")) {
    startStandby();
  } else {
    switchContainer.classList.remove("standby");
    clearTimeout(standby);
  }
}
// todo: create timeout for standby

let standby;

function startStandby() {
  standby = setTimeout(() => {
    switchContainer.classList.add("standby");
    OffBtn.classList.remove("active");
  }, 5000);
}
// todo: addRemoveActive utility function
function addRemoveActive(remove, add) {
  remove.classList.remove("active");
  add.classList.add("active");
}