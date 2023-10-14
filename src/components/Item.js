import "./Item.css"
import {BiTrash} from "react-icons/bi"
import {BiEdit} from "react-icons/bi"
export default function Item(props) {
  const {data, deleteTask, editTask} = props
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <BiEdit className="btn" onClick={() => editTask(data.id)} />
        <BiTrash className="btn" onClick={() => deleteTask(data.id)} />
      </div>
    </div>
  )
}
