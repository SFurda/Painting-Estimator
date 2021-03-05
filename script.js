function placeSelector() {
    // let place = document.querySelector('#typePainting').value;

    if (document.querySelector("#place").value == 'Interior') {

        document.getElementById("wePaint").innerHTML = 'Interior Painting';

    } else {
        ////
        document.getElementById("wePaint").innerHTML = 'Exterios Painting';

    }



}
