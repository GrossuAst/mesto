export class Api {
    constructor(config) {
        // this._url = config.url;
        this._usersUrl = config.url.usersUrl;
        this._cardsUrl = config.url.cardsUrl;
        this._headers = config.headers;
        // this._usersProfile = usersProfile;
    }
    
    // метод для получения информации о пользователе
    getInfoAboutUser() {
        return fetch(this._usersUrl, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if(res.ok) {
                    // console.log(res);
                    return res.json();
                }
                console.log('ошибка получения данных');
            })
    };

    // метод для получения данных о карточках
    getInitialCards() {
        return fetch(this._cardsUrl, {
            method: 'GET',
            headers: this._headers 
        })
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                console.log('ошибка получения данных');
            })
            // .catch(alert('ошибка'))
    };

    // метод для редактирования профиля
    editProfileInfo(userInfo) {
        return fetch(this._usersUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.about
        })},
        )
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                console.log('ошибка обработки данных');
            })
    }
    
    // отправка карточки на сервер
    sendCard(object) {
        return fetch(this._url, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({name: object.name, link: object.link})
        })
        .then((res) => {
            if(res.ok) {
                console.log('отправка карточки прошла успешно')
                return res.json()
            }
            console.log('ошибка получения данных');
        })
    }

    editProfile() {
        return fetch('https://mesto.nomoreparties.co/v1/cohortId/users/me', {
            method: 'PATCH',
            headers: {
            authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
            'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Marie Skłodowska Curie',
    about: 'Physicist and Chemist'
  })
}); 
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