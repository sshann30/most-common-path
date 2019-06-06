"use strict";

/*
  Within this file, write your complete solution. As you can see, we read in the log file for you.
*/

const fsp = require('fs-promise');


/**
 * We have written the basics here for you.
 * This is a JS module called MostCommonPathFinder.
 * It contains a single method `findPath` which is
 * where most of your code will go.
 **/

const MostCommonPathFinder = (() => {
  /**
   * Any vars you might want here?
   */

  return {
    findPath: (logFilePath) => {
      return fsp.readFile(logFilePath, 'utf8').then((logfileString) => {
        console.log(logfileString)
        const lines = logfileString.split("\n")
        console.log(lines)
        // split each line on space
        // for everyone of these split, there is going to be an array w/ id and path


        // make an object that will hold an array for each user id 
        var idArray = [];
        // for each line in log (for loop)
        // split on space (gives back array with id and path)
        var text = "";
        var i;
        for (i = 0; i < id.length; i++) {
          text += id[i] + "<br>";
        }
        

        var idArray = [];
        return 'An array of strings containing the most common three path sequence'; // <-- replace this with the answer
      
          return ["/2", "/3", "/4"]
          // above is hardcoded
      });
    }
  };
})();

module.exports = MostCommonPathFinder;

// "this challenge can be done in only 4 lines of code" -Eric
// 1 per each commented section???



// // make an object that will hold an array for each user id (STILL NEED TO FEED DRAGON.LOG INTO HERE)
// var idArray = [];
// // for each line in dragonlog (for loop)
// // split on space (gives back array with id and path)
// var text = "";
// var i;
// for (i = 0; i < id.length; i++) {
//   text += id[i] + "<br>";
// }

var idArray = [];

// We then "push" (add) each of these numbers to our idArray.
idArray.push();
console.log(idArray)

function sortNums(a, b) {
  return (a - b);
}

// // end of step one will result will in an object that has:
//   // one array for every user id 
//   // and inside that array will be paths that user visited in order


// // once i have the sequence every user took, chop it down to first 3 
// // compare first 3 among users
// // 