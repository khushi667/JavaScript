// destructring in object

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// there is a shortcut for destructring in object

const { bandName, famousSong, ...restprops } = band; 
console.log(bandName);
console.log(restprops);





//const { bandName:var1, famousSong:var2 } = band; // The variable name has been changed.
//console.log(var1, var2);

