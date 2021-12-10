let searchInput = () => {
    let msg = '';
    msg += String(document.getElementsByClassName('search-input-box').innerHTML);
    console.log(msg)
    return msg;
}

function clearMemory () {
    document.getElementById('demo').innerHTML = null;
}


function requestData() {
    
    let searchKey =  document.getElementById('input').value;
    let numberLoad = 1;
    let isClearMemory = false;

    if(isClearMemory ) {
        clearMemory();
    }
    
    console.log(searchKey);

    var request = $.ajax({
        url: "http://api.giphy.com/v1/gifs/search",
        method: "GET",
        data: { q: searchKey, api_key: 'OaI8Scqh6gxKwYuB0TXRiZxeyTICIFcX' },
        dataType: "json"
    });

    request.done(function (msg) {
        let res = msg.data; 
        let count = 0;
        res.forEach(element => {
            if(count < numberLoad) {
                document.getElementById('demo').innerHTML += "<img"+ " class=" + "'img-box' " + "src="+element.images.original.url+"'>" 
                count ++; 
            } 
        });
        console.log(msg.data)
    });

    request.fail(function (jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });
}


