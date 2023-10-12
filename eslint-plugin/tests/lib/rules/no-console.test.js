const { RuleTester } = require("eslint");
const noConsoleRule = require("../../../lib/rules/no-console");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run("no-console", noConsoleRule, {
  valid: [
    "info()",
    "console",
    "console.log",
    { code: "console.warn()", options: [{ allowedMethods: ["warn"] }] },
  ],
  invalid: [
    {
      code: "console.log()",
      errors: [{ messageId: "errorMsg" }],
      options: [{ identifier: "Logger" }],
      output: "Logger.log()",
    },
    {
      code: "console.info()",
      errors: [{ messageId: "errorMsg" }],
      options: [{ identifier: "Logger" }],
      output: "Logger.info()",
    },
    {
      code: "console.info()",
      errors: [{ messageId: "errorMsg" }],
      options: [{ identifier: "" }],
      output: "",
    },
  ],
});
