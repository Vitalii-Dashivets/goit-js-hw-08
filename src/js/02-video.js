import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    
player.on('timeupdate', throttle( function({seconds}){
    
    const currentTime = seconds;
    console.log(currentTime);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
       
},2000));
    
   
const currentTime = localStorage.getItem("videoplayer-current-time");
const parsedCurrentTime = JSON.parse(currentTime);
// console.log(currentTime);
// console.log(parsedCurrentTime);

player.setCurrentTime(parsedCurrentTime).then(function (seconds) {
    
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

