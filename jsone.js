function onbtn() {
    document.getElementById('bulb-image').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById('cat-image').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switch-status').textContent = "Switched On";
    document.getElementById('on-switch').style.backgroundColor = "#cdb2d9";
    document.getElementById('off-switch').style.backgroundColor = "#e12d39";

}

function offbtn() {
    document.getElementById('bulb-image').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById('cat-image').src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('switch-status').textContent = "Switched Off";
    document.getElementById('off-switch').style.backgroundColor = "#cdb2d9";
    document.getElementById('on-switch').style.backgroundColor = "#22c55e";
}