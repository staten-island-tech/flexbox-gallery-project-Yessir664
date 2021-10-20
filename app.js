let scrollup = function () {
    window.scrollTo(0,0);
};
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
setTimeout(scrollup, 500);
let slam = document.getElementById('slam');
let slam_remove = function () {
    slam.parentNode.removeChild(slam);
    window.scrollTo(0,0);
};

setTimeout(slam_remove, 6500);
