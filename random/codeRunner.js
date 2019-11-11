var alerts = { 
    test:[{
    1: {app:'helloworld',message:'message'},
    2: {app:'helloagain',message:'another message'}
}]}

alerts = Object.assign({3: {app:'helloagain_again',message:'yet another message'}}, alerts.test[0])

//Result:
console.log(alerts)
// { 
//     1: {app:'helloworld',message:'message'},
//     2: {app:'helloagain',message:'another message'}
//     3: {app: "helloagain_again",message: "yet another message"}
// } 