const STORAGE_KEY = "epi_driving_state";
const STORAGE_KEY = "epi_driving_state";

function getState(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
        current:0,
        score:0,
        answers:{},
        timeLeft:1800 // 30 minutes
    };
}

function saveState(state){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState(){
    localStorage.removeItem(STORAGE_KEY);
}
function getState(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    current: 0,
    score: 0,
    answers: {}
  };
}

function saveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState(){
  localStorage.removeItem(STORAGE_KEY);
}
