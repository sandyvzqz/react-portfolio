const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ssolivares0@gmail.com",
        pass: ""
    },
});

contactEmail.verify((error)=>{
    if (error){
        console.log(err);
    } else{
        console.log("Ready to send");
    }
});

router.post("/", (req, res) =>{
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const mail ={
        from: name,
        to: "ssolivares0@gmail.com",
        subject: " Contact form submission - portfolio",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error);
        } else{
            res.json({ code:200, status: "Message sent"});
        }
    });
});