export class UserInfo {
    constructor(userInfo, profileName, description, avatar) {
        this._userName = document.querySelector(userInfo.userNameSelector);
        this._userAbout = document.querySelector(userInfo.userAboutSelector);
        // this._api = api;
        // this._profileName = profileName;
        // this._description = description;
        this._avatar = avatar;
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
    setUserInfo(newUserData) {
        this._userName.textContent = newUserData.name;
        this._userAbout.textContent = newUserData.about;
    };
    
}