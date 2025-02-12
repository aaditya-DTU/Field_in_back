const myObj = {
    js: 'javascript',
    cpp: 'cpp',
    rb: 'ruby'
}

for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const lang = ["js", "cpp", "html", "css", "py"]
for (const key in lang) {
    console.log(`${key} :- ${lang[key]}`);   
}