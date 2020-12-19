class AbstractRepository {
    constructor(db) {
        this.db = db
    }

    async find() { }
    async findOne() { }
    async save() { }
    async findByIdAndRemove()
}

module.exports = AbstractRepository