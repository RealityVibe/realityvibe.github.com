/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-20 22:04:48
 * @version $Id$
 */
var obj = { a: 1, b: 2, c: 3, d: 4 };
var json = JSON.stringify(obj, ["c","b","a"], "\t");
console.log(json);