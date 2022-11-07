let filenames = ['actioncheck/migrations/0003_test1_age.py']
let migration_comment_available = [false, null]


if (filenames.length > 0 && migration_comment_available[0] === false){
    console.log("OK")
}else if (filenames.length > 0 && migration_comment_available[0] === true){
    console.log("PEHLE SE OK")
}else if(typeof migration_comment_available === 'string'){
    console.log("DELETE")
}