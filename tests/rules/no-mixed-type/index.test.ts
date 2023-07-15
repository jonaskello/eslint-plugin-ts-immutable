import { name, rule } from "#eslint-plugin-functional/rules/no-mixed-types";
import { testRule } from "#eslint-plugin-functional/tests/helpers/testers";

import tsTests from "./ts";

const tester = testRule(name, rule);

tester.typescript(tsTests);
