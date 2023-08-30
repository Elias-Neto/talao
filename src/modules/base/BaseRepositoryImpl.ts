import { Repository, EntityTarget, FindOptionsWhere, DeepPartial } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

import { BaseRepository } from './BaseRepository'

import dataSource from '@/config/database/typeorm/data-source'

export class BaseRepositoryImpl<T, U, V> implements BaseRepository<T, U, V> {
    protected primaryKey: keyof T
    protected typeormRepository: Repository<T>

    constructor(primaryKey: keyof T, entityType: EntityTarget<T>) {
        this.primaryKey = primaryKey
        this.typeormRepository = dataSource.getRepository(entityType)
    }

    async getItems(): Promise<T[]> {
        return await this.typeormRepository.find()
    }

    async getItemById(id: number): Promise<T> {
        const item = this.getItemByField(this.primaryKey as string, id.toString())
        
        return item
    }

    async getItemByField(field: string, value: string): Promise<T> {
        const item = this.typeormRepository.findOne({
            where: { [field]: value } as FindOptionsWhere<T>
        })

        if (!item) {
            throw new Error(`Register not found!`)
        }

        return item
    }

    async createItem(item: U): Promise<T> {
        const newItem = this.typeormRepository.create(item as DeepPartial<T>)

        return await this.typeormRepository.save(newItem)
    }

    async updateItem(id: number, item: V): Promise<T> {
        await this.typeormRepository.update(id, item as QueryDeepPartialEntity<T>)

        return await this.getItemById(id)
    }

    async updateItemWithRelationsManyToMany(id: number, item: V, relationName: string, relatedIds: number[]): Promise<T> {
        console.log('id', id)
        console.log('item', item)
        console.log('relationName', relationName)
        console.log('relatedIds', relatedIds)

        const entity = await this.updateItem(id, item)

        // Cria um construtor de queries que nos permitirá trabalhar com a relação many-to-many
        const relationQueryBuilder = this.typeormRepository.createQueryBuilder()
            .relation(this.typeormRepository.target, relationName)
            .of(entity)

        // Remove relacionamentos atuais
        await relationQueryBuilder.remove(await entity[relationName])

        // Adiciona novos relacionamentos
        await relationQueryBuilder.add(relatedIds)

        return await this.getItemById(id)
    }

    async deleteItem(id: number): Promise<void> {
        const item = await this.getItemById(id)

        await this.typeormRepository.delete(id)
    }
}
