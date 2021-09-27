import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodosEmpty } from "../TodosEmpty";

function AppUI() {

	const {
		error,
		loading,
		searchedTodos,
		toggleCompleteTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<>
			<TodoCounter />
			<TodoSearch />
			
			<TodoList>
				{error && <TodosError error={error} />}
				{/* {loading && <TodosLoading />} */}
				{loading && new Array(3).fill(1).map((a, i) => <TodosLoading key={i} />)}
				{(!loading && !searchedTodos.length) && <TodosEmpty />}

				{searchedTodos.map(todo => (
					<TodoItem 
						key={todo.text} 
						text={todo.text} 
						completed={todo.completed}
						onComplete={() => toggleCompleteTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{openModal && (
        <Modal>
          <TodoForm />
        </Modal>
			)}

			<CreateTodoButton
        setOpenModal={setOpenModal}
      />
			
		</>
	);
}

export { AppUI };