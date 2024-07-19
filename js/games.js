import { Ui } from "./ui.js";
import { Details } from "./details.js";
export class Games{
    constructor ()
    {
        this.ui = new Ui();
        this.Details = new Details()
        this.getGames("mmorpg");
        const links = document.querySelectorAll("nav .navbar-nav li");
        for(let i = 0; i < links.length; i++)
            {
                links[i].addEventListener("click",(e) => {
                    e.preventDefault();
                    document.querySelector("a.active").classList.remove("active");
                    e.target.classList.add("active");
                    this.getGames(e.target.getAttribute('category-data'))
                })
            }
    }
    async getGames(category){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '45173f04e7mshe80831070c5dce3p1b512ejsn048c7541791f',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
        const data = await url.json()
        this.ui.displayGames(data)
        this.clickCard(data);

        loading.classList.add("d-none");
    }

    clickCard(arr)
    {
        let cardDetail = document.querySelectorAll(".details");
        for(let i = 0; i < cardDetail.length; i++)
            {
                cardDetail[i].addEventListener("click", (e) => {
                    const idCard = arr[i].id;
                    this.Details.showDetailsCard(idCard);
                })
            }
    }
}