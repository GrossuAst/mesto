export class UserInfo {
    constructor(userInfo) {
        this._userName = document.querySelector(userInfo.userNameSelector);
        this._userAbout = document.querySelector(userInfo.userAboutSelector);
        this._avatar = document.querySelector(userInfo.avatarSelector);
    };

    // возвращает объект с данными пользователя
    getUserInfo() {
        const userData = {
            name: this._userName.textContent,
            about: this._userAbout.textContent,
            // avatar: this._avatar.textContent
        }
        return userData;
    };

    renderUserProfile(data) {
        this._userName.textContent = data.name;
        this._userAbout.textContent = data.about;
        this._avatar.src = data.avatar;
    }

    // принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(newUserData) {
        this._userName.textContent = newUserData.name;
        this._userAbout.textContent = newUserData.about;
    };
    
    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}