const commons = [
    "--require-module ts-node/register",
    "--require src/commons/hooks.ts",
    "--require src/step-definitions/*.steps.ts",
    "--format-options '{\"snippetInterface\": \"synchronous\"}'",
    "default: '--publish-quiet'"
];

const all = [
    ...commons,
    "src/features/**/*.feature"
];

const demo = [
    ...commons,
    "src/features/days.feature"
];

module.exports = {
    default: commons.join(' '),
    demo: demo.join(' '),
    all: all.join(' ')
};
