const getCookie = () => {
    const cookie = document.cookie;
    const allCookies = cookie.split(';');
    const findCookies = allCookies.find(c => c.includes('name'));
    if (findCookies) {
        'country=china; name=zhangsan; age=18';
        const cookieName = findCookies.split('=')[0];
    }
};