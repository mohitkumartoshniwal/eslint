module.exports = {
  meta: {
    type: "problem",
    schema: [
      {
        type: "object",
        properties: {
          allowedMethods: {
            type: "array",
            items: {
              enum: ["log", "info", "warn", "error", "dir"],
            },
          },
          identifierrr: {
            type: "string",
          },
        },
      },
    ],
    messages: {
      errorMsg: "Using console methods are not allowed",
    },
    fixable: "code",
  },
  create(context) {
    const config = context.options[0] || {};
    let allowedMethods = config.allowedMethods || [];
    let identifier = config.identifier || "";

    return {
      "CallExpression > MemberExpression > Identifier[name='console']"(node) {
        const name = node.parent.property.name;
        console.log(name);

        if (allowedMethods.includes(name)) {
          return;
        }

        context.report({
          node,
          messageId: "errorMsg",
          fix(fixer) {
            if (identifier) {
              return fixer.replaceText(node, identifier);
            } else {
              return fixer.replaceText(node.parent.parent, identifier);
            }
          },
        });
      },
    };
  },
};
