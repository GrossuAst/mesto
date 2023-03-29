export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getInitialCards() {
        return fetch(this._url, {
            headers: this._headers
        })
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                console.log('ошибка получения данных');
            })
    }








    
    // getInfoAboutMe() {
    //     this._options
    //         .then(res => res.json())
    //         .then((result) => {
    //             console.log(result);
    //     })
    // };

    // getInitialCards()  {
    //     this._options
    //         .then(res => res.json())
    //         .then((result) => {
    //             console.log(result);
    //             // return result;
    //     })
    // }
}