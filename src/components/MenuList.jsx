import { useLocalStorage } from '../hooks/useLocalStorage.js'
import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

function MenuList({ items }) { 
    const { addToCart } = useCart()
    const [sortBy, setSortBy] = useLocalStorage('sortBy', 'default')

    if (items.length === 0) {
        return <p className="muted">No items on this menu yet.</p>
    }

    const sortedItems = [...items].sort((a,b) => {
        if(sortBy === 'price-low') {
            return a.price - b.price //lwest price first
        }
        if(sortBy === 'price-high') {
            return b.price - a.price //highest price first
        }
        if(sortBy === 'popular') {
            return (b.popular === true ? 1 :0) - (a.popular === true ? 1 :0)
        }
        return 0 // default

    })

    return (
        //sort dropdown 
        <div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="sort-menu" style={{ marginRight: '10px' }}>Sort by: </label>
                <select id="sort-menu" value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '5px'}}>
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Popular</option>
                </select>
            </div>

            <div className="grid">
                {sortedItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
                ))}
            </div>
        </div>
    )
}

export default MenuList
