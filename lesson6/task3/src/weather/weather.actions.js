export const WEATHER_DATA_RECEIVED = 'WEATHER/WEATHER_DATA_RECEIVED';

export const weatherDataReceived = weatherData => {
    return {
        type: WEATHER_DATA_RECEIVED,
        payload: {
            weatherData,
        },
    };
};

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const getWeatherData = () => {
    return function (dispatch) {
        fetch(baseUrl)
            .then(response => {
                if (response.ok)
                    return response.json();

                throw new Error('Failed to load');
            })
            .then(weatherData =>
                dispatch(weatherDataReceived(weatherData)));
    };
};
