const vendors = [
 {
 id: 'my-restaurant',
 name: 'Cafe Mahallah Halimah',
 location: 'Mahallah Halimah',
 openHours: '8:00 am - 10:00 pm',
 isOpen: true,
 menu: [
 { id: 'hal-1', name: 'Nasi Ayam Penyet', description: 'Fried chicken with sambal and rice', price: 6.5, category: 'Nasi',available: true },
 { id: 'hal-2', name: 'Nasi Goreng Kampung', description: 'Fried rice with chicken and vegetables', price: 6, category:'Masakan Panas', available: true },
 { id: 'hal-3', name: 'Teh O Ais', description: 'Iced tea', price: 2.5, category:'Drinks', available: false },
 ],

 },
 {
 id: 'Cafe Mahallah Maryam',
 name: 'Kafe Mahallah Maryam',
 location: 'Mahallah Maryam, Ground Floor',
 openHours: '8:00 am - 9:00 pm',
 isOpen: true,
 menu: [
 { id: 'mar-1', name: 'Ayam Gunting', description: 'Fried chicken with chilli powder', price: 9, category: 'Chicken', available: true },
 { id: 'mar-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3, category: 'Drinks', available: true },
 ],
 },
]
export default vendors