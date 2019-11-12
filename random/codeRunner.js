var alerts = { 
    "one": [{app:'helloworld',message:'message'}],
    "2": {app:'helloagain',message:'another message'}
}

alerts = Object.assign({
    "3": {app:'helloagain_again',message:'yet another message'}
}, alerts)
bob = Object.assign({
    "4": {app:'_again4',message:'yet another message4'}
}, alerts.one[0])

//Result:
console.log(alerts)
// { 
//     1: {app:'helloworld',message:'message'},
//     2: {app:'helloagain',message:'another message'}
//     3: {app: "helloagain_again",message: "yet another message"}
// } 
// data = {
//     "users":[{
//         "id": null,
//         "userInfo": [
//           {
//             "login": {
//               "username": "username",
//               "passcode": 109
//             },
//             "initial": null,
//             "factorCount": null,
//             "factors": [],
//             "percentages": [],
//             "amount": []
//           }
//         ]
//     }

// ]
//   }

//   data = Object.assign("id":3, data)
//   console.log(JSON.stringify(data))