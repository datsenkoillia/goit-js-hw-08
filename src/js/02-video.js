import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  ),
    1000;
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
