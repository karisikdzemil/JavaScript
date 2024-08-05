
const sayHello = (hi, name = "dzekiloni") => {
  const hello = `${hi} ${name}`; 
  return hello;
}

sayHello("Caooo", "djemsi");
const checkInput = (...strings) =>{
  let lang = "";
  for (names of strings){
    lang = lang + " " + names;
  }
  if(lang === ""){
    const callBack = sayHello("chuss", "alfeidhauzhen");
    return callBack;
  }else{
    return lang;
  }

}
console.log(checkInput("kako", "si", "majko", "kako", "si", "oce"));
console.log(checkInput());