import {After, AfterAll, Before, BeforeAll} from '@cucumber/cucumber';
import {ITestCaseHookParameter} from '@cucumber/cucumber/lib/support_code_library_builder/types';

BeforeAll((): void => {
    console.log('\n= Starting Tests =');
});

Before((scenario: ITestCaseHookParameter): void => {
    console.log('\n == Running:', scenario.pickle.name);
});

After((scenario: ITestCaseHookParameter): void => {
    console.log('\n == Result:', scenario.result?.status);
});

AfterAll((): void => {
    console.log('\n= Test done =');
});
