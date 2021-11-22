async function cookievalidator(cookies)
{
    try{
        await externallyValidateCookie(cookies.testCookie)
    }
    catch{
        throw new Error('Invalid Cookies');
    }
}

module.exports = cookievalidator;