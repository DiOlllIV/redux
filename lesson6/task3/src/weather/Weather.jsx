import React, { useEffect } from 'react';
import PropTypes, { array } from 'prop-types';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ weatherData, fetchWeatherData }) => {
    useEffect(() => {
        return fetchWeatherData();
    }, []);

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map((elem) => 
                    (
                        <li key={Math.round(Math.random() * 1000)}
                        className="city">
                            <span className="city__name">
                                {elem.name}
                            </span>
                            <span className="city__temperature">
                                {elem.temperature}
                            </span>
                        </li>
                    )
                )}
            </ul>
        </main>
    );
};

Weather.propTypes = {
    fetchWeatherData: PropTypes.func.isRequired,
}

const mapState = state => {
    return {
        weatherData: weatherDataSelector(state),
    };
};

const mapDispatch = {
    fetchWeatherData: weatherActions.fetchWeatherData,
}


export default connect(mapState, mapDispatch)(Weather);