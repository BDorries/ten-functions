"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(arg){
    return arg === true;
}

function isFalse(arg){
    return arg === false;
}

function not(arg){
    return !arg;
}

function addOne(arg){
    return ++arg;
}

function isEven(arg){
    return parseInt(arg) % 2 == 0;
}

function isIdentical(arg1,arg2){
    return arg1 === arg2;
}
function isEqual(arg1,arg2){
    return arg1 == arg2;
}
function or(arg1, arg2){
    return arg1 || arg2;
}

function and(arg1, arg2){
    return arg1 && arg2;
}
function concat(arg1,arg2){
    return arg1.toString()+arg2.toString();
}