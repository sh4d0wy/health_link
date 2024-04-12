"use client"
import io from 'socket.io-client'
import React,{useState,useEffect, useContext} from 'react'
import UserContext from '../../_Context/UserContext';

const page = () => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [receivedMsg,setReceivedMsg] = useState([])
    
    const {user} = useContext(UserContext);
    
    useEffect(() => {
        if (!socket) {
            const newSocket = io('http://localhost:3001'); 
            setSocket(newSocket);
        }
        if(socket){

            socket.on('user-message',(data)=>{
                setReceivedMsg((prevMsg)=>[...prevMsg,data]);
                console.log("received message", data);
            })
        }
        return () => { 
            if (socket) socket.disconnect();
        };
    }, [socket]);
    console.log(receivedMsg);

    const handleSendMessage = () => {
        if (socket) {
            socket.emit('user-message', message);
            console.log('sent message ',message);
            setMessage('');
        }
    };

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };

    return (
        <>
        <div className='w-full h-[100vh] flex flex-col bg-blue-500 gap-6  items-center justify-center'>
            <div className='text-4xl font-bold'>Community Chat</div>
            <div className='w-[80vw] overflow-y-auto scrollable h-[80vh] rounded-3xl flex flex-col p-16 bg-white gap-10  justify-end'>
                <div className='flex flex-col gap-4' >
            {receivedMsg.length>0&&
            receivedMsg.map((msg,index)=>{
                return(
                    <div className='bg-blue-100 rounded-xl flex flex-col h-full text-black w-1/4 px-4 py-2' >
                    <div>
                    <sup>{user.userName}</sup>
                    </div>
                    <div className='flex justify-between'>
                    <p className='text-black' key={index}>{msg}</p>
                    <sub>01:14</sub>
                    </div>
                    </div>
                )
            })}
                
            </div>
            <div className='flex gap-10 w-full justify-center'>
            <input className='text-black px-4 py-2 rounded-xl bg-neutral-200 w-3/4  h-12 outline-none' placeholder='Enter your message' type="text" value={message} onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    handleSendMessage();
                }
            }}
            onChange={handleChangeMessage} />
            <button className='bg-blue-200 rounded-xl px-4 py-2 text-black w-1/4'onClick={handleSendMessage}>Send Message</button>
            </div>
            
        </div>
        </div>
        </>
    );
};

export default page;