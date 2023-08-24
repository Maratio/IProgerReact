import React from "react"
import Header from "./Header"
import Users from "./Users"
import AddUser from "./AddUser"
import axios from "axios"


// function Header(){
// <Header>Шапка сайта</Header>
// }

// function App(){
//   return (<div>
//     <h1>{helpText}</h1>
//     <input placeholder = {helpText} onClick = {inputClick} onMouseEnter={mouseOver}/>
// <p>
//     {helpText === "Help text" ? "Yes" : "No"}
// </p>
// </div>)
// }

const baseUrl ="https://reqres.in/api/users?page=1"

  class App extends React.Component {

    constructor(props){
      super(props)
      axios.get(baseUrl).then((res) => {this.setState({users: res.data.data})})
      this.state = {
        users: [
          // {
          //   id: 1,
          //   firstname: "Bob",
          //   lastname: "Marley",
          //   bio: "Хеллоу bob долор, как дела, давно не виделись",
          //   age: 40,
          //   isHappy: true
      
          // },
          // {  id: 2,
          //   firstname: "Jonh",
          //   lastname: "Doe",
          //   bio: "Хеллоу Jonh, как дела, давно не пили",
          //   age: 25,
          //   isHappy: false
          // }
      
        ]
      }
      this.addUser = this.addUser.bind(this)
      this.deleteUser = this.deleteUser.bind(this)
      this.editUser = this.editUser.bind(this)

    }

// componentDidUpdate(prevProp){
//     if(this.state.helpText !== "Help")
//     console.log("Some")
// }

  
    render() {
    return (<div>
      <Header title = "Список пользователей"/>
      <main>
        <Users users = {this.state.users} onEdit = {this.editUser} onDelete = {this.deleteUser}/>
      </main>
      <aside>
        <AddUser onAdd = {this.addUser}/>
      </aside>
  </div>)
    }

    deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
    }

    editUser(user){
      let allUsers = this.state.users
      allUsers[user.id - 1] = user

      this.setState({users:[]}, () => {this.setState({users: [...allUsers]})})
    }

    addUser(user){
      const id = this.state.users.length + 1
      this.setState({users: [...this.state.users, {id, ...user}]})
    }
  
  }

  export default App