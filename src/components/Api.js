export class Api {
    constructor(config) {
        this._usersUrl = config.url.usersUrl;
        this._cardsUrl = config.url.cardsUrl;
        this._avatarUrl = config.url.avatarUrl;
        this._headers = config.headers;
    }
    
    // метод для получения информации о пользователе
    getInfoAboutUser() {
        return fetch(this._usersUrl, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if(res.ok) {
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
                    return res.json();
                }
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
                    return res.json();
                }
                console.log('ошибка обработки данных');
            })
    }

    // метод для отрисовки аватарки
    editAvatar(urlAvatar) {
        return fetch(this._avatarUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
            avatar: urlAvatar
        })},
        )
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
                console.log('ошибка обработки данных аватара');
            })
    }
    
    // отправка карточки на сервер
    sendCard(object) {
        return fetch(this._cardsUrl, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({name: object.name, link: object.link, likes: object.likes})
        })
        .then((res) => {
            if(res.ok) {
                console.log('отправка карточки прошла успешно')
                return res.json();
            }
            console.log('ошибка получения данных');
        })
        
    }

    // удаление карточки с сервера
    deleteCard(cardId) {
        return fetch(this._cardsUrl + '/' + cardId, {
            method: 'DELETE',
            headers: {
                authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a'
              }
        })
            .then((res) => {
                if(res.ok) {
                    return res.json();
                } 
                console.log('ошибка удаления карточки.', 'не проходит проверку res.ok');
            })
            .catch((err) => {
                console.log('не работает', err)
            })
    }
    
    putLike() {
        return fetch(this.cardsUrl + '/' + cardId + '/likes', {
            method: 'PUT',
            headers: {
                authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a'
            }
        })
        .then((res) => {
            if(res.ok) {
                console.log('лайк ставится')
                return res.json();
            }
        })
    }

    delteLike() {
        return fetch(this.cardsUrl + '/' + cardId + '/likes', {
            method: 'DELETE',
            headers: {
                authorization: 'e900e361-a4f9-4167-b7d1-fcc078aa308a'
            }
        })
        .then((res) => {
            if(res.ok) {
                console.log('лайк ставится')
                return res.json();
            }
        })
    }

}