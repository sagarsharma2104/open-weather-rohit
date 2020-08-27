const openWeather = require('./open-weather');
const profiles = require('./profiles.json');

profiles.forEach(user => {
    openWeather(user.city, user.country).then((response)=>{
        console.log('response : ', response);
    },(err)=>{
        console.log('err : ', err);
    });
});
