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
    };

    getUserInfo() {
        return fetch(this._url, {
            headers: this._headers
        })
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                console.log('ошибка получения данных');
            })
    };

    // отправка карточки на сервер
    createCard({name, link}) {
        return fetch(this._url, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({name: 'qwe', link: 'https://s9.travelask.ru/system/images/files/000/333/620/wysiwyg_jpg/olen-kartinki-55.jpg?1501687420'})
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