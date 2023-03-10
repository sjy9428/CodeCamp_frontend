const email = "codecamp@naver.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'naver.com']
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'naver.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail.join("")
// 'code****'
// maskingMail.join("") + @ + company
// VM722:1 Uncaught SyntaxError: Invalid or unexpected token
maskingMail.join("") + "@" + company
// 'code****@naver.com'