/**
 * @fileoverview Ensure a proper naming convention for your variables
 * @author Jakob Kjaer
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-bad-naming-convention"),

    RuleTester = require("eslint").RuleTester;


RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-bad-naming-convention", rule, {

    valid: [
        // give me some code that won't trigger a warning
        "var sHello = 'HEllo World'",
        "var oJson = { Hello:'World'}",
        "var iNumber = 2",
        "var aArray = [1, 2]",
        "var oObject = {}",
        "var that = this",
        "var oModel = new JSONModel({})",
        "var oModel = this.getModel()",
        "var i = 5 + 5",
        "var sTest = 'Hello' + 'hello'"

    ],

    invalid: [
      {
          code: "var that = 'Hello World'",
          errors: [{
              message: "Bad naming of variable",
              type: "VariableDeclarator"
          }]
      },{
            code: "var hello = 'Hello World'",
            errors: [{
                message: "Bad naming of variable",
                type: "VariableDeclarator"
            }]
        },
        {
            code: "var myFunction = function(){}",
            errors: [{
                message: "Bad naming of variable",
                type: "VariableDeclarator"
            }]
        },
        {
            code: "var number = 42",
            errors: [{
                message: "Bad naming of variable",
                type: "VariableDeclarator"
            }]
        },
        {
            code: "var myObject = {}",
            errors: [{
                message: "Bad naming of variable",
                type: "VariableDeclarator"
            }]
        },
        {
            code: "var myArray = [1,2]",
            errors: [{
                message: "Bad naming of variable",
                type: "VariableDeclarator"
            }]
        },
        {
            code: "var array = [1,2]",
            errors: [{
                message: "Bad naming of variable",
                type: "VariableDeclarator"
            }]
        }
    ]
});
