


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

require("datejs");

function combineUsers (...args){
  let combinedObjects= {
    users:[],
    merge_date:Date.today().toString("M/D/YYYY")
  };

    for(let array of args){
      combinedObjects.users.push(...array)
    }

    return combinedObjects;
  }
