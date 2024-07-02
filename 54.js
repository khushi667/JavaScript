// call, apply, bind 

// ###### call ########
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: "khushi",
    age: 19,

}
const user2 = {
    firstName: "prachi",
    age: 17
}
about.call(user2, "guitar","mozart");


// ##### Apply ######
about.apply(user2, ["guitar","bach"]);

// ###### Bind #########
const func = about.bind(user1,"guitar", "bach");
func();