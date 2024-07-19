export class Ui {
    displayGames(arr){
        let box ='';
        for(let i=0 ;i<arr.length; i++)
        {
            box+=` <div class="col-md-3 details">
                    <div class="card p-2">
                        <img src="${arr[i].thumbnail}" class="card-img-top w-100" alt="">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class = "card-title text-white">${arr[i].title}</h5>
                                <button class="p-1 border-0 rounded-2">Free</button>
                            </div>
                            <p class="card-text fw-bold text-center">${arr[i].short_description.split(" ",7)}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <div class="badge text-wrap px-2 py-1">
                                ${arr[i].genre}
                            </div>
                            <div class="badge text-wrap px-2 py-1">
                                ${arr[i].platform}
                            </div>
                        </div>
                    </div>
                </div>`
        }
        document.getElementById('gameRow').innerHTML = box;
    }

    displayDetails(data){
        let box = ` <div class="container">
            <header class="hstack justify-content-between">
                <h1 class="text-center h3 py-4 text-white">Details Game</h1>
                <button class="btn-close btn-close-white" id="btnClose"></button>
            </header>
            <div class="row g-4" id="detailsContent">
                <div class="col-md-4">
                    <img src="${data.thumbnail}" class="w-100" alt="image details">
                </div>

                <div class="col-md-8 text-white">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> Live</span> </p>
                    <p class="small">
                        ${data.description}
                    </p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
            </div>
        </div>`
        document.querySelector('.section2').innerHTML = box
    }
}