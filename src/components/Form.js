import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <select name="unit">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
        </select>
        <button>Get Weather</button>
    </form>
);

export default Form;