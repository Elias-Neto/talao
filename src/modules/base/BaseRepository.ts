export interface BaseRepository<T, U, V> {
    getItems(): Promise<T[]>
    getItemById(id: number): Promise<T>
    getItemByField(field: string, value: string): Promise<T>
    createItem(item: U): Promise<T>
    updateItem(id: number, item: V): Promise<T>
    updateItemWithRelationsManyToMany(id: number, item: V, relationName: string, relatedIds: number[]): Promise<T>
    deleteItem(id: number): Promise<void>
}
