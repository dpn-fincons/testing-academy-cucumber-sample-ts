import {Given, Then, When,} from '@cucumber/cucumber';
import * as assert from 'assert';

const STATE = {today: undefined, actualAnswer: undefined}

Given('I know what days is today', () => {
    console.log('I know the day');
});

Given(/^Today is '(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)'$/, (today: string) => {
        STATE.today = today;
    }
);

When(/^Someone asks me whether it's '(.+)'$/,
    (askingDay: string) => {
        STATE.actualAnswer = isItDay(STATE.today, askingDay);
    }
);

Then(/^I should be told (.+)$/, (answer: string) => {
        assert.strictEqual(STATE.actualAnswer, answer);
    }
);

function isItDay(today: string, askingDay: string) {
    if (today.localeCompare(askingDay) == 0) {
        return 'Yes'
    } else {
        return 'Nope'
    }
}
