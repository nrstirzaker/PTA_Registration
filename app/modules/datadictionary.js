const uuid = require('uuid/v4');
const moment = require('moment');

var datadictionary = function () {
    //var current = null;
    function init(data) {

        var record = {};
        record['email'] = data.email;
        record['fullName'] = data.fullName;
        record['fullNameYoungestChild'] = data.fullNameYoungestChild;
        record['schoolYear'] = data.schoolYear;
        record['contactNumber'] = data.contactNumber;
        record['agreedPrivacyPolicy'] = data.agreedPrivacyPolicy;

        if (data.committee) {
            record['committee'] = true;
        }

        if (data.helper) {
            record['helper'] = true;
        }

        if (data.specificEvent) {
            record['specificEvent'] = true;
        }

        if (data.secondHandUniform) {
            record['secondHandUniform'] = true;
        }
        if (data.information) {
            record['information'] = true;
        }

        return  record;
    }
    function createMember(data) {
        var member = init(data);
        //member.createdOn=moment.utc().format();
        member.id = uuid();
        return member;
    }
    function updateMember(data) {
        var member = init(data);
        member.id = data.id
        //member.createdOn=data.createdOn;
        //member.updatedOn=moment.utc().format();
        return member;
    }
    return {
        createMember: createMember,
        updateMember: updateMember
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