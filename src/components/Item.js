import { useNavigate } from "react-router-dom"
import ItemCount from "./ItemCount"
function Item({ item }) {
    const navigate = useNavigate()
    const irAProducto = (e, id) => {
        const cardActionsClicked = e.target.closest('.card-actions');
        if (!cardActionsClicked) {
            navigate(`/producto/${id}`)
        }
    }
    return (
        <div className="card w-70 bg-base-100 shadow-xl image-full hover:scale-110 cursor-pointer" onClick={(e) => irAProducto(e, item.id)}>
            <figure><img src={item.image} alt={item.title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{item.title}</h2>
                <p className="text-center">${item.price}</p>
                <div className="card-actions bg-base-300 w-full absolute bottom-0 left-0 bg-opacity-50 flex justify-center p-4 flex-col items-center gap-4">
                    <ItemCount stock={5} initial={1} />
                </div>
            </div>
        </div>
    )
}

export default Item