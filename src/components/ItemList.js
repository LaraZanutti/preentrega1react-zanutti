import Item from './Item'
import { GridLoader } from 'react-spinners'


function ItemList({ data, isLoading }) {
    return (
        isLoading ? <GridLoader color="#fc8181" className='mt-16' /> : (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-8">
                {data.map((item, i) => {
                    return (
                        <Item key={i} item={item} />
                    )
                })}
            </section>
        )
    )
}

export default ItemList