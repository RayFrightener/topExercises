import restaurantFrontImage from './bobsBurgersRestaurantFront.jpg';

function pageLoad() {
    const contentDiv = document.getElementById('content');

    const pageHeading = document.createElement('h1');
    pageHeading.textContent = 'Come experience the best restaurant in town!';

    const restaurantFront = document.createElement('img');
    restaurantFront.src = restaurantFrontImage;
    restaurantFront.setAttribute('alt', 'image of restaurant front!');

    contentDiv.appendChild(pageHeading);
    contentDiv.appendChild(restaurantFront);
}

export {pageLoad};