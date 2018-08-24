/**
* @fileoverview Ensure a proper naming convention for your variables
* @author Jakob Kjaer
*/
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Ensure a proper naming convention for your variables",
      category: "Error",
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function (context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section
    let fCheckForUpperCase = function(sName){
      return (sName.toUpperCase() === sName) ? true : false
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      VariableDeclarator: function (node) {

        if (node.id.name === 'that' && node.init.type === "ThisExpression"){
          return;

        }
        else {
          switch (node.id.name.charAt(0)) {
            case "s":
            if (node.init === null || node.init.type === "BinaryExpression" || node.init.type === "MemberExpression" || (node.init.type === "Literal" && typeof (node.init.value) === "string") || node.init.type ===
            "CallExpression") {
              if (fCheckForUpperCase(node.id.name.charAt(1)) === true){
                return;
                break;
              }
            }
            case "f":
            if (node.init === null  || node.init.type === "MemberExpression" || node.init.type === "NewExpression" || node.init.type === "FunctionExpression" || node.init.type ===
            "CallExpression") {
              if (fCheckForUpperCase(node.id.name.charAt(1)) === true){
                return;
                break;
              }
            }

            case "o":
            if (node.init === null  || node.init.type === "MemberExpression" || node.init.type === "NewExpression" || node.init.type === "CallExpression" || node.init.type ===
            "ObjectExpression") {
              if (fCheckForUpperCase(node.id.name.charAt(1)) === true){
                return;
                break;
              }
            }
            case "i":
            if (node.init === null  || node.init.type === "BinaryExpression" || node.init.type === "MemberExpression" || (node.init.type === "Literal" && typeof (node.init.value) === "number") || node.init.type ===
            "CallExpression") {
              if (fCheckForUpperCase(node.id.name.charAt(1)) === true){
                return;
                break;
              }
            }
            case "a":
            if (node.init === null || node.init.type === "MemberExpression" || node.init.type === "CallExpression" || node.init.type ===
            "ArrayExpression") {
              if (fCheckForUpperCase(node.id.name.charAt(1)) === true){
                return;
                break;
              }
            }

            default:
            context.report({
              node: node,
              message: "Bad naming of variable"
            });
          }
        }
      }
    };
  }
};
