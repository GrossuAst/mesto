export class UserInfo {
    constructor(userInfo) {
        this._userName = document.querySelector(userInfo.userNameSelector);
        this._userAbout = document.querySelector(userInfo.userAboutSelector);
    };

    // возвращает объект с данными пользователя
    getUserInfo() {
        const userData = {
            name: this._userName.textContent,
            about: this._userAbout.textContent
        }
        console.log(userData);
        return userData;
    };

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(userData) {
        // this._userName.textContent = 
    };
}