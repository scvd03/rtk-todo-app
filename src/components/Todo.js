import { ReactComponent as Check } from '@/assets/check.svg';
import { useDispatch } from 'react-redux';

import { toggleTodo } from '@/reducers/todos';

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(toggleTodo(todo.id));
  };
  return (
    <li className="w-full p-2 mb-2 list-none hover:shadow-md">
      <div className="relative flex items-center mr-4 ">
        <input
          {...{ onChange }}
          defaultChecked={todo.done}
          className="opacity-0 absolute left-0 h-7 w-7"
          type="checkbox"
        />
        <div className="bg-white border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
          {/* M: svg 파일 분리하여 관리하는 법 */}
          <Check className="fill-current hidden w-2 h-2 text-blue-600 pointer-events-none" />
        </div>
        <label className="select-none">{todo.title}</label>
      </div>
      <p className="text-xs text-gray-500 font-bold overflow-x-auto">
        {todo.desc}
      </p>
    </li>
  );
}
