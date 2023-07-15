import dedent from "dedent";

import { type rule } from "#eslint-plugin-functional/rules/prefer-tacit";
import {
  type ValidTestCaseSet,
  type OptionsOf,
} from "#eslint-plugin-functional/tests/helpers/util";

const tests: Array<ValidTestCaseSet<OptionsOf<typeof rule>>> = [
  // Instantiation Expression
  {
    code: dedent`
      const foo = f<number>;
    `,
    optionsSet: [[]],
  },
];

export default tests;
