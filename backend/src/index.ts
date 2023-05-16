import http from 'http';
import express from 'express';
import cors from 'cors';
import fs from "fs";

//let encodestring: string = "WwogIHsKICAgICJzZW50QXQiOiAxNjc2MjAxNDkxMDAwLAogICAgIm5pY2tuYW1lIjogIlNjb3R0IExhbmciLAogICAgIm1lc3NhZ2UiOiAibmlja25hbWVzIgogIH0sCiAgewogICAgInNlbnRBdCI6IDE2NzYyMDExMTIwMDAsCiAgICAibmlja25hbWUiOiAiQ2xpbnQgQmFydG9uIiwKICAgICJtZXNzYWdlIjogInVzIgogIH0sCiAgewogICAgInNlbnRBdCI6IDE2NzYyMDE3MDEwMDAsCiAgICAibmlja25hbWUiOiAiU3RldmVuIFJvZ2VycyIsCiAgICAibWVzc2FnZSI6ICJpbiIKICB9LAogIHsKICAgICJzZW50QXQiOiAxNjc2MjAxMDQwMDAwLAogICAgIm5pY2tuYW1lIjogIkphbWVzIEJhcm5lcyIsCiAgICAibWVzc2FnZSI6ICJzZW5kIgogIH0sCiAgewogICAgInNlbnRBdCI6IDE2NzYyMDA5ODAwMDAsCiAgICAibmlja25hbWUiOiAiQnJ1Y2UgQmFubmVyIiwKICAgICJtZXNzYWdlIjogIlBsZWFzZSIKICB9LAogIHsKICAgICJzZW50QXQiOiAxNjc2MjAxNjQxMDAwLAogICAgIm5pY2tuYW1lIjogIlRob3IgT2RpbnNvbiIsCiAgICAibWVzc2FnZSI6ICJjb21tYSIKICB9LAogIHsKICAgICJzZW50QXQiOiAxNjc2MjAyMDU5MDAwLAogICAgIm5pY2tuYW1lIjogIlN0ZXBoZW4gU3RyYW5nZSIsCiAgICAibWVzc2FnZSI6ICJvcmRlci4iCiAgfSwKICB7CiAgICAic2VudEF0IjogMTY3NjIwMTgwMTAwMCwKICAgICJuaWNrbmFtZSI6ICJOYXRhc2hhIFJvbWFub2ZmIiwKICAgICJtZXNzYWdlIjogInRoZSIKICB9LAogIHsKICAgICJzZW50QXQiOiAxNjc2MjAxODkyMDAwLAogICAgIm5pY2tuYW1lIjogIlRvbnkgU3RhcmsiLAogICAgIm1lc3NhZ2UiOiAiY29ycmVjdCIKICB9LAogIHsKICAgICJzZW50QXQiOiAxNjc2MjAxNjczMDAwLAogICAgIm5pY2tuYW1lIjogIlBldGVyIFBhcmtlciIsCiAgICAibWVzc2FnZSI6ICJzZXBhcmF0ZWQiCiAgfSwKICB7CiAgICAic2VudEF0IjogMTY3NjIwMTQzNDAwMCwKICAgICJuaWNrbmFtZSI6ICJGcmFuayBDYXN0bGUiLAogICAgIm1lc3NhZ2UiOiAib3VyIgogIH0KXQ==";
//declare let Messages: string;
//Messages = atob(encodestring);

interface Database {
    sentAt: string;
    nickname: string;
    message: string;
}
const messages: Database[] = [];

//Read the file
const jsonData = fs.readFileSync("C:\Users\jonas\Downloads\Coding-Challenge-Web\backend\data\gibberish-decoded.json", "utf-8")
const data = JSON.parse(jsonData);

//fill the Databse with the messages
data.forEach((message: Database) => {
    messages.push(message)
});

const app = express();

app.use(cors());

/**
 * /messages:
 *   get:
 *     summary: Retrieve a list of messages
 *     description: Retrieve a list of messages from the local database file.
*/
app.get('/messages', (request: express.Request, response: express.Response) => {
    response.send(messages);
});


/**
 * /messages:
 *   post:
 *     summary: Save an incoming message
 *     description: Save an incoming message to the local database file.
*/
app.post('/messages', (request: express.Request, response: express.Response) => {
    if (!request.headers['x-api-key']) {
        return response.sendStatus(403);
    }
    else {
        messages.push(request.body);
        response.sendStatus(201);
    }
});

http.createServer(app);

const port = process.env.PORT || 1337;

app.listen(port);

console.log(`Running on port ${port}`);