const axios = require('axios');


const getClima = async(lat, lng) => {


    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${lng}&units=metric&appid=f2ef6ffe2e6f4baed23c924f26849d5b`);



    return resp.data.main.temp;
}

module.exports = {
    getClima
}