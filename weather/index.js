var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: [],
    },
    methods: {
        hotCity: function(city) {
            this.city = city;
            this.searchWeather();
        },
        searchWeather: function() {
            console.log("天气查询");
            //  console.log(this.city);
            // 调用接口
            // 保存this
            var that = this;
            axios
                .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function(response) {
                    // console.log(response);
                    console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function(err) {});
        },
    },
});
// new Vue({
//     el: "#app",
//     data: {
//         city: "武汉",
//         forecastList: [],
//         hotCitys: ["北京", "上海", "广州", "深圳"],
//     },
//     methods: {
//         queryWeather() {
//             this.forecastList = [];
//             axios
//                 .get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.city}`)
//                 .then((res) => {
//                     console.log(res);
//                     this.forecastList = res.data.data.forecast;
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 })
//                 .finally(() => {});
//         },
//         clickSearch(city) {
//             this.city = city;
//             this.queryWeather();
//         },
//     },
// });