export class UserInfo {
    constructor(userInfo, profileName, description, avatar) {
        this._userName = document.querySelector(userInfo.userNameSelector);
        this._userAbout = document.querySelector(userInfo.userAboutSelector);
        // this._api = api;
        this._profileName = profileName;
        this._description = description;
        this._avatar = avatar;
    };

    // возвращает объект с данными пользователя
    getUserInfo() {
        const userData = {
            name: this._userName.textContent,
            about: this._userAbout.textContent
        }
        // console.log(userData, '-', 'объект из getUserInfo');
        return userData;
    };

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(newUserData) {
        this._userName.textContent = newUserData.name;
        this._userAbout.textContent = newUserData.about;
    };

    // отрисовка данных профиля, приходящих с сервера
    // renderUserInfo() {
    //     this._api.getInfoAboutUser()
    //         .then((res) => {
    //             console.log(res)
    //             this._profileName.textContent = res.name;
    //             this._description.textContent = res.about;
    //         })        
    // };
    
    // // отрисовка аватара, приходящего с сервера
    // renderAvatar() {
    //     this._api.getInfoAboutUser()
    //         .then((res) => {
    //             console.log(res)
    //             this._avatar.src = res.avatar;
    //         })
    // }
}