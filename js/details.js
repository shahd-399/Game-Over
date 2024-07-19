import { Ui } from "./ui.js";
export class Details
{
    constructor(id)
    {
        this.ui = new Ui();
        this.getCardDetail(id);
    }
    async getCardDetail(idCard){

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '45173f04e7mshe80831070c5dce3p1b512ejsn048c7541791f',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idCard}`, options)
        const data = await url.json()
        this.ui.displayDetails(data);
        this.hideDataCard()
        loading.classList.add("d-none");
    }

    showDetailsCard(idCard)
    {
        const details = new Details(idCard);
        document.querySelector(".section2").classList.remove('d-none');
        document.querySelector(".section1").classList.add('d-none');
    }
    hideDataCard()
    {
        document.querySelector(".btn-close-white").addEventListener("click" , (e) => {
            document.querySelector(".section2").classList.add('d-none');
            document.querySelector(".section1").classList.remove('d-none');
        });
    }
}