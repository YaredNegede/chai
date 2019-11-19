const left = {};

const right = {};

const AppHeader = {
    login: 'Login',
    signup: 'Sign Up',
    browse: 'Browse',
    notification:'Notification',
    search:'Search',
    setting:'Setting',
    reports:'Reports',
};


const AppFooter = {
    telegram: 'Telegram',
    facebook: 'Facebook',
    call: '+251 91 23 45 678'
};

const settings = (store, action) => {

    return {
        ...store,
        AppHeader,
        AppFooter,
        right,
        left
    }

}

export default settings
