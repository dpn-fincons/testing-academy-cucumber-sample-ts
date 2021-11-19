import {DataTable, Given, Then, When} from '@cucumber/cucumber';
import * as assert from 'assert';

const STATE = {city: undefined, expectedWeather: undefined, forecast: undefined, days: undefined};

const FORECAST = [
    {day: 'Tuesday', date: '23th of November', weather: 'Sunny'},
    {day: 'Wednesday', date: '24th of November', weather: 'Sunny'},
    {day: 'Thursday', date: '25th of November', weather: 'Sunny'},
    {day: 'Friday', date: '26th of November', weather: 'Cloudy'},
    {day: 'Saturday', date: '27th of November', weather: 'Rainy'},
    {day: 'Sunday', date: '28th of November', weather: 'Rainy'},
    {day: 'Monday', date: '29th of November', weather: 'Sunny'},
    {day: 'Tuesday', date: '30th of November', weather: 'Sunny'},
    {day: 'Wednesday', date: '1st of December', weather: 'Sunny'},
    {day: 'Thursday', date: '2nd of December', weather: 'Sunny'},
    {day: 'Friday', date: '3rd of December', weather: 'Cloudy'},
    {day: 'Saturday', date: '4th of December', weather: 'Rainy'},
    {day: 'Sunday', date: '5th of December', weather: 'Rainy'},
    {day: 'Monday', date: '6th of December', weather: 'Rainy'}
];

Given(/^on Saturday I am in (.+)$/, function (city: string) {
    STATE.city = city;
});

Given(/^I want go a walk$/, function () {
    STATE.expectedWeather = 'Sunny';
});

When(/^I open Google$/, function () {

});

When(/^I search the forecast for Saturday$/, function () {
    STATE.forecast = 'Sunny';
});

Then(/^The answers should be (.+)$/, function (answer) {
    assert.ok(STATE.forecast === answer);
});

Then(/^I should be happy$/, function () {
    assert.ok(STATE.forecast === STATE.expectedWeather);
});


Given(/^Today is Monday, 22th of November$/, function () {

});

When(/^I ask the weather for the next (\d+) days in Bari$/, function (days) {
    STATE.days = days;
});

Then(/^The weatherman answers$/, function (dataTable: DataTable) {
    assert.strictEqual(STATE.days, dataTable.rows().length);
    for (let i = 0; i < STATE.days; i++) {
        assert.strictEqual(FORECAST[i].day, dataTable.rows()[i][0]);
        assert.strictEqual(FORECAST[i].date, dataTable.rows()[i][1]);
        assert.strictEqual(FORECAST[i].weather, dataTable.rows()[i][2]);
    }
});
