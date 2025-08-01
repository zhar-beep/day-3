// script.js

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    
    // Cat heart image
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    imageContainer.appendChild(catHeartImage);

    // Valentine text container
    var textContainer = document.createElement('div');
    textContainer.className = 'valentine-text';
    
    // First line
    var line1 = document.createElement('p');
    line1.className = 'valentine-line1';
    line1.textContent = "...straight from my heart of someone who adores you more than words can say.";
    
    // Second line
    var line2 = document.createElement('p');
    line2.className = 'valentine-line2';
    line2.textContent = "Wishing you a Valentine's Day filled with all the joy and warmth you bring into my life!";
    
    textContainer.appendChild(line1);
    textContainer.appendChild(line2);
    imageContainer.appendChild(textContainer);

    document.getElementById('options').style.display = 'none';
}

displayCat();