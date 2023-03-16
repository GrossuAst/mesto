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
        console.log(userData, '-', 'объект из getUserInfo');
        return userData;
    };

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(newUserData) {
        this._userName.textContent = newUserData.name;
        this._userAbout.textContent = newUserData.about;
        console.log(newUserData, '- объект из setUserInfo метода');
    };
}