db = db.getSiblingDB('VDT2023');
db.interns.drop();

const data = cat('/docker-entrypoint-initdb.d/attendees.json');

db.interns.insertMany(JSON.parse(data));
