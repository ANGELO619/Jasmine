class AbstractRepository {
    constructor(collection) {
        this.collection = collection
    }

    async find() {
        return await this.collection.get()
    }
    async findOne(id) {
        return await this.collection.doc(id).get()
    }
    async create(payload) {
        return await this.collection.add(payload)
    }
    async update(id, payload) {
        return await this.collection.doc(id).set({
            ...payload
        }, { merge: true })
    }
    async remove(id) {
        return await this.collection.doc(id).delete()
    }
}

module.exports = AbstractRepository