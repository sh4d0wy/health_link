const express = require("express");
const mongoose=require("mongoose");
const app = express();
const http = require('http').createServer(app);
const {Server} = require('socket.io');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const consultantRouter = require('./routes/consultantRoute')

app.use(cors({ origin: 'http://localhost:3000' }));

const io = new Server(http, {
    cors: {
        origin: 'http://localhost:3000', // Replace with your frontend's origin
        methods: ['GET', 'POST'],
        credentials: true
    }
});


io.on('connection', (socket) => {
    console.log('A user connected!');
    socket.on('user-message', (data) => {
        console.log('Received message:', data);
        io.emit('user-message', data);
    });
});


async function main(){
    try{
        await mongoose.connect("mongodb+srv://sakshambhugra:healthlink@cluster0.x32gvme.mongodb.net/healthlink?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Db Connected");
    }catch(e){
        console.log(e);
    }
}

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter);
app.use('/consultant',consultantRouter);

http.listen(3001,()=>{
    main();
    console.log('Server is running on port 3001');
})