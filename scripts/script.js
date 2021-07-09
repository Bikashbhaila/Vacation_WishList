
// get and store input Values for destinations

document.querySelector("#destination_form").addEventListener("submit", displayWishList);


function displayWishList(event) {

    document.getElementById("my_wish_list").innerHTML = "My WishList";

    event.preventDefault();

    let nameInput = event.target.elements["dest_name"].value;
    let locationInput = event.target.elements["location"].value;
    let imageUrlInput = event.target.elements["dest_photo"].value;
    let descriptionInput = event.target.elements["dest_desc"].value;

    // console.log(imageUrlInput);

    let destinationCard = createCard(nameInput, locationInput, imageUrlInput, descriptionInput);
    console.log(destinationCard);
    document.querySelector("#card_container").appendChild(destinationCard);
}

function createCard(dest_name, location, dest_photo, dest_desc) {

    // get and store form input variables
    let newCard = document.createElement('div');
    newCard.setAttribute("class", "card");
    newCard.style.width = "18rem";

    // image
    let cardImage = document.createElement("img");
    cardImage.setAttribute("class", "card-img-top");
    cardImage.setAttribute("alt", "Destination image");

    if (dest_photo === "") {
        cardImage.setAttribute("src", "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg");
    } else {
        cardImage.setAttribute("src", dest_photo);
    }

    newCard.appendChild(cardImage);
    // card body
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    // card body contents
    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = dest_name;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("h6");
    cardText.setAttribute("class", "card-text");
    cardText.innerHTML = location;
    cardBody.appendChild(cardText)

    let cardDesc = document.createElement("p");
    cardDesc.setAttribute("class", "card-text");
    cardDesc.innerHTML = dest_desc;
    cardBody.appendChild(cardDesc);

    // card buttons
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "btn btn-warning");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", editCard);
    cardBody.append(editButton);

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "btn btn-danger");
    removeButton.setAttribute("id", "remove_btn");
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener("click", removeCard);
    cardBody.append(removeButton);

    newCard.appendChild(cardBody);

    return newCard;
}



function editCard(event) {
    let buttonTargetParent = event.target.parentElement;
    let newNameInput = prompt("Enter new destination name:");
    // console.log(event.target.parentElement.firstChild);
    buttonTargetParent.children[0].innerText = newNameInput;

    let newLocationInput = prompt("Enter new destination location:");
    // console.log(event.target.parentElement.children[0]);
    buttonTargetParent.children[1].innerText = newLocationInput;

    let newImageUrlInput = prompt("Enter new url for the destination:");
    if (newImageUrlInput == "") {
        buttonTargetParent.parentElement.children[0].src = "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
    } else {
        buttonTargetParent.parentElement.children[0].src = newImageUrlInput;
    }
}

function removeCard(event) {
    // console.log(event.target.Parent);
    let cardToRemove = event.target.parentElement.parentElement; // event target or the remove button 2 level down the main card
    // console.log(event.target.Parent.Parent.Parent);
    console.log(cardToRemove);
    cardToRemove.parentElement.removeChild(cardToRemove);
}

