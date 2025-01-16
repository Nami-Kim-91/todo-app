
const TodoTemplate = ({children}) => {
  // console.log(props.children);
  return (
    <div className="todo-template">
      <h1>일정관리</h1>
      {/* <p>Todo App을 만들자!</p> */}
      <p>{children}</p>
    </div>
  );
};

export default TodoTemplate;