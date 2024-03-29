export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResponse(res) {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
    }
    
    // метод для получения информации о пользователе
    getInfoAboutUser() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse) 
    };

    // метод для получения данных о карточках
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers 
        })
            .then(this._checkResponse)
    };

    // метод для редактирования профиля
    editProfileInfo(userInfo) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.about
        })},
        )
            .then(this._checkResponse)
    }

    // метод для отрисовки аватарки
    editAvatar(urlAvatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
            avatar: urlAvatar.avatar
        })},
        )
            .then(this._checkResponse)
    }
    
    // отправка карточки на сервер
    sendCard(object) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: object.name, 
                link: object.link
            })
        })
        .then(this._checkResponse)
    }

    // удаление карточки с сервера
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse)
    }
    
    // поставить лайк
    putLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    // удалить лайк
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this._checkResponse)
    }

}