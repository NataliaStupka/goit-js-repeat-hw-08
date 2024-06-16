console.log('Home worck 8.2: npm install @vimeo/player');
//-------------------------------------------------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time'; //localStorage

player.on('play', function (data) {
  console.log('played the video!:', data);
});

// this!! updateTime
player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}

// function startVideo() {
//   console.log('start');
//   player.setCurrentTime().then(function () {

//   });
// }
// startVideo();
// player.setCurrentTime().then(function () {
//   JSON.parse(localStorage.getItem(STORAGE_KEY));
// });

//----------------------
// player.setVolume(0.4); //встановлення рівня звуку

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
