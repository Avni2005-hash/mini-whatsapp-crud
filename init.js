const mongoose=require("mongoose");
const Chat=require("./models/chats.js");

main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
    {
        from: "neha",
        tp: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "priya",
        tp: "neha",
        msg: "Sure, I'll send them in a few minutes.",
        created_at: new Date(),
    },
    {
        from: "rahul",
        tp: "aman",
        msg: "Are you coming to college tomorrow?",
        created_at: new Date(),
    },
    {
        from: "aman",
        tp: "rahul",
        msg: "Yes, I will be there by 9 AM.",
        created_at: new Date(),
    },
    {
        from: "sneha",
        tp: "riya",
        msg: "Did you complete the assignment?",
        created_at: new Date(),
    },
    {
        from: "riya",
        tp: "sneha",
        msg: "Yes, I completed it yesterday.",
        created_at: new Date(),
    },
];

Chat.insertmany(allChats);