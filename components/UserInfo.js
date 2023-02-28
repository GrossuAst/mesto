export class UserInfo {
    constructor(userInfo) {
        this._userName = userInfo.userName;
        this._userAbout = userInfo.userAbout;
    };

    // возвращает объект с данными пользователя
    getUserInfo() {
        const userData = {
            name: this._userName.textContent,
            about: this._userAbout.textContent
        }
        return userData;
    };

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo() {

    };
}