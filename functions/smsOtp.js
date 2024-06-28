const request = require('request');

const senderId = "AGYATA";
const apiKey = "e71990aa0670a277cef660b9aa6664e9f8a9816853025f5b";
const apiToken = "c5fc6fb7bc41c994bc6e1bcfb4b0fce70bb2d83c4e997e2d";
const sid = "astrogyatatechnologies1";
const subdomain = "api.exotel.com";
// const mobileNo = "+919131662204";
// const otp = async (otp,mobileNo) => {
//     try {
//         const body = `Dear User, The OTP to login to AstroGyata App is ${otp}. The OTP is Valid for 15 mins. Team AstroGyata www.astrogyata.in`
//         const dataString = `From=${senderId}&To=${mobileNo}&Body=${body}`;
//         const options = {
//             url: `https://${subdomain}/v1/Accounts/${sid}/Sms/send`,
//             method: 'POST',
//             headers: {
//                 'Authorization': 'Basic ' + Buffer.from(apiKey + ':' + apiToken).toString('base64'),
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: dataString
//         };
//         function callback(error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log("OTP Sent successfully!");
//                 return true
//             } else {
//                 console.log("Error sending OTP:");
//                 console.log(error);
//                 return false
//             }
//         }
//         request(options, callback);
//     }
//     catch (err) {
//         console.log("Error in OTP function:");
//         console.log(err);
//     }
// }

// module.exports = {
//     otp
// };

const otp = async (otp, mobileNo) => {
    try {
        const senderId = "AGYATA";
        const apiKey = "e71990aa0670a277cef660b9aa6664e9f8a9816853025f5b";
        const apiToken = "c5fc6fb7bc41c994bc6e1bcfb4b0fce70bb2d83c4e997e2d";
        const sid = "astrogyatatechnologies1";
        const subdomain = "api.exotel.com";
        const body = `Dear User, The OTP to login to AstroGyata App is ${otp}. The OTP is Valid for 15 mins. Team AstroGyata www.astrogyata.in`;

        const dataString = `From=${senderId}&To=${mobileNo}&Body=${body}`;
        
        const options = {
            url: `https://${subdomain}/v1/Accounts/${sid}/Sms/send`,
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(apiKey + ':' + apiToken).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: dataString
        };

        return new Promise((resolve, reject) => {
            function requestCallback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(true);
                } else {
                    reject(false);
                }
            }
            request(options, requestCallback);
        });
    }
    catch (err) {
        throw err;
    }
}

module.exports = otp;
