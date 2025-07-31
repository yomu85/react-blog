import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">할 일 목록</h1>
      
      <div className="flex gap-2 mb-6">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1"
        />
        <Button onClick={addTodo}>추가</Button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-md border",
              todo.completed && "bg-gray-50"
            )}
          >
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
            />
            <Label
              className={cn(
                "flex-1 cursor-pointer",
                todo.completed && "line-through text-gray-500"
              )}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </Label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </Button>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          아직 할 일이 없습니다. 새로운 할 일을 추가해보세요!
        </p>
      )}

      <div className="mt-6 text-center text-sm text-gray-600">
        전체: {todos.length}개 | 완료: {todos.filter(t => t.completed).length}개
      </div>
    </div>
  );
}

export default App;