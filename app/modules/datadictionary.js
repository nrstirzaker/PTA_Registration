const uuid = require('uuid/v1');
const moment = require('moment');

var datadictionary = function() {
    //var current = null;
    function init(data) {
        return {

            email: data.email,
            fullName: data.fullName,
            fullNameYoungestChild: data.fullNameYoungestChild,
            schoolYear: data.schoolYear,
            contactNumber: data.contactNumber,
            committee: data.committee || "false",
            helper: data.helper || "false",
            specificEvent: data.specificEvent || "false",
            secondHandUniform: data.secondHandUniform || "false",
            information: data.information || "false",
            agreedPrivacyPolicy: data.agreedPrivacyPolicy || "false"
      
          }
    }
    function createMember(data) {
        var member = init(data);
        member.createdOn=moment.utc().format();
        member.id = uuid();
        return member;
    }
    function updateMember(data) {
        var member = init(data);
        member.id = data.id
        member.createdOn=data.createdOn;
        member.updatedOn=moment.utc().format();
        return member;
    }
    return{
        createMember:createMember,
        updateMember:updateMember
    }
}();

module.exports = exports = datadictionary;

// {


    

//     createMember: function(data) {

//         return {

//             id: uuid(),
//             email: data.email,
//             fullName: data.fullName,
//             fullNameYoungestChild: data.youngestChild,
//             schoolYear: data.schoolYear,
//             contactNumber: data.contactNumber,
//             committee: data.committee || "false",
//             helper: data.helper || "false",
//             specificEvent: data.event || "false",
//             secondHandUniform: data.uniform || "false",
//             information: data.information || "false",
//             agreedPrivacyPolicy: data.agreedPrivacyPolicy,
//             createdOn: new Date()
      
//           }


//     },
//     updateMember: function() {}
// }