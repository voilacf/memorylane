import { Db, MongoClient } from "mongodb";


export class Database {
    private client: MongoClient;
    private db!: Db;

    constructor(uri: string) {
        this.client = new MongoClient(uri);
        this.db = this.client.db();
    }

    public async start(): Promise<any> {
        try {
            await this.client.connect();
            await this.client.db("admin").command({ ping: 1 });
            console.log('Connected to MongoDB');
            return Promise.resolve();
        } catch (error: unknown) {
            console.error('Error connecting to MongoDB:', error);
            await this.client.close();
            return Promise.reject((error as Error).message);
        }
    }

    public getMongoDatabase(): Db {
        if (!this.db) {
            throw new Error('Database is not initialized. Call start() method first.');
        }
        return this.db;
    }

    public async createCollection(collectionName: string): Promise<void> {
        try {
            await this.db.createCollection(collectionName);
            console.log(`Collection ${collectionName} created successfully`);
            Promise.resolve();
        } catch (error) {
            console.error(`Error creating collection ${collectionName}:`, error);
            Promise.reject((error as Error).message);
        }
    }
}
