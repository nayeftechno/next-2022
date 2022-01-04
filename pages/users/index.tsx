import type { NextPage } from 'next';
import RenderHead from "../../components/RenderHead";
import UsersList from "../../components/usersList";

const UsersPage: NextPage = ({ users }: any): JSX.Element => {
    return (<>
        <RenderHead title="Users" />
        <div className="row">
            <h4>Users Page</h4>
            <div className="col-md-12">
                <UsersList users={users} />
            </div>
        </div>
    </>);
};
export default UsersPage;

// function sendEmail() : void {
//     const nodemailer = require('nodemailer');
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'nayefmhmd@gmail.com',
//           pass: 'Abc@123P@ssw0rd2020'
//         }
//       });
      
//       var mailOptions = {
//         from: 'nayefmhmd@gmail.com',
//         to: 'mohammad.aldibes@seera.sa',
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy!'
//       };
      
//       transporter.sendMail(mailOptions, function(error : any, info : any){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });  
// };

export async function getStaticProps(context: any) {
    //await sendEmail();
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: [] = await response.json();
    return {
        props: {
            users
        }
    };
};
