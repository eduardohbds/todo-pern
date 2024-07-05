## Todo Client Side
This is a application that are a Todo list with the add,delete,list the of ToDo

### Configuration 
1. To inited the project use the command `npx create-react-app client`
2. The late command install other packages essential to run the application, like react,react-dom,react-scripts  
3. The packages to be installed is `chakra` to facilitate the design development and `axios` to make the connections with the server
4. To use the chakra in the project we must modify the `App.js` file with:
```js
    <ChakraProvider>
      <App />
    </ChakraProvider>
```
1.  Create the folder `mkdir /component`
2.  Create the files `touch EditTodo.jsx InputTodo.jsx ListTodo.jsx TableTodo.jsx`
3.  I use the format **.jsx** because we can mix the html and js in the code to make more easier to write

### Components
#### ListTodo
1. This component has two functions `deleteTodo()` and `getTodo()`
2. I use the hook useEffect to run the getTodo() and get the todo list from the database
3. In the design I use a component called TableTodo 
4. 
#### EditTodo

#### InputTodo


#### TableTodo

