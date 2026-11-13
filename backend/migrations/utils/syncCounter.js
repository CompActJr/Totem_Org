export const syncCounter = async (db, sequenceName, value) => {
    const existing = await db.collection('counters').findOne({ _id: sequenceName });

    if (!existing) {
        await db.collection('counters').insertOne({ _id: sequenceName, seq: value });
        return;
    }

    if (existing.seq < value) {
        await db.collection('counters').updateOne(
            { _id: sequenceName },
            { $set: { seq: value } },
        );
    }
};
