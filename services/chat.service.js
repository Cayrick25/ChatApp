import PouchDB from 'pouchdb-react-native';

class Chat {
    db = null;
    room = '';
    username = '';

    join(username, room) {
        this.username = username;
        this.room = room.toLowerCase();
        this.db = new PouchDB(this.room);
        return this.getMessages();
    }

    getMessages() {
        if (this.db) throw 'No database';
        try {
            const response = await this.db.allDocs({ include_docs: true });
            return response.rows.map(r => r.doc);
        } catch (e) {
            console.error(e);
        }
    }
}

export default new Chat();