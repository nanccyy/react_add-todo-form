(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),s=a.n(r),i=a(7),c=a(5),l=a(6),m=a(9),d=a(8),u=a(2),h=(a(15),a(16),a(1)),p=a.n(h),b=function(e){var t=e.todoTitle,a=e.name,n=e.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",{className:"todo__item"},t),o.a.createElement("td",{className:"todo__item"},a),o.a.createElement("td",{className:"todo__item"},n))},g=o.a.memo((function(e){var t=e.todos;return o.a.createElement("table",{className:"todo"},o.a.createElement("thead",null,o.a.createElement("tr",{className:"todo__head-row"},o.a.createElement("th",{className:"todo__heading"},"Todo"),o.a.createElement("th",{className:"todo__heading"},"User"),o.a.createElement("th",{className:"todo__heading"},"UserId"))),o.a.createElement("tbody",{className:"todo__body"},t.map((function(e){return o.a.createElement("tr",{className:"todo__row",key:Math.random()},o.a.createElement(b,e))}))))}));g.propTypes={todos:p.a.arrayOf(p.a.shape({id:p.a.number.isRequired})).isRequired};var y=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){var t=y.find((function(t){return t.id===e.userId}));return t?Object(u.a)(Object(u.a)({},t),{},{todoTitle:e.title}):""})),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={user:"",todo:"",todos:f,noUserError:"",noTodoError:""},e.addSelection=function(t){if(t.preventDefault(),e.state.user)if(e.state.todo){var a=y.find((function(t){return t.name===e.state.user}));a.todoTitle=e.state.todo,e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[a]),todo:"",user:""}}))}else e.setState({noTodoError:"Please enter the title"});else e.setState({noUserError:"Please choose a user"})},e.checkForInput=function(t){t&&e.setState({noTodoError:""})},e.checkForUser=function(t){t&&e.setState({noUserError:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.todo,r=t.todos,s=t.noTodoError,i=t.noUserError;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Add todo form"),o.a.createElement("p",null,o.a.createElement("span",null,"Users: "),y.length),o.a.createElement("form",{action:"#",method:"get",className:"form",onSubmit:function(t){e.addSelection(t)}},o.a.createElement("select",{className:"form__select",value:a,onChange:function(t){var a=t.target.value;e.setState({user:a}),e.checkForUser(a)}},o.a.createElement("option",{value:""},"Choose a user"),y.map((function(e){return o.a.createElement("option",{key:e.id,value:e.name},e.name)}))),o.a.createElement("div",{className:"form__error"},i),o.a.createElement("label",null,o.a.createElement("input",{type:"text",className:"form__todo",placeholder:"Todo",name:"todo",value:n,onChange:function(t){var a=t.target.value;e.setState({todo:a.trim()}),e.checkForInput(a)}})),o.a.createElement("div",{className:"form__error"},s),o.a.createElement("button",{type:"submit",className:"form__button"},"Add")),o.a.createElement(g,{todos:r}))}}]),a}(n.PureComponent);s.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4c091986.chunk.js.map