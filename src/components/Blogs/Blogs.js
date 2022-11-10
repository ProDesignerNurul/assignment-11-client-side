import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {

    useTitle('Blogs')

    return (
        <div className='lg:w-2/4 mx-auto text-justify my-20'>

            <div className='border border-red-400 p-5 rounded-lg my-6'>
                <h2 className='text-4xl mb-2'>Differences SQL vs NoSQL </h2>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br /> <br />
                    There are five practical differences between SQL and NoSQL:
                    <br /> <br />

                    1. Language <br /> <br />
                    2. Scalability <br /> <br />
                    3. Structure <br /> <br />
                    4. Properties <br /> <br />
                    5. Support and communities
                </p>

            </div>


            <div className='border border-red-400 p-5 rounded-lg my-6'>
                <h2 className='text-4xl mb-2'>What Is JWT? How JWT Works! </h2>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>

            </div>


            <div className='border border-red-400 p-5 rounded-lg my-6'>
                <h2 className='text-4xl mb-2'>Difference between Node.JS and Javascript!</h2>
                <p>
                    1. NodeJS : <br />
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.  <br /> <br />
                    2. JavaScript : <br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>

            </div>


            <div className='border border-red-400 p-5 rounded-lg my-6'>
                <h2 className='text-4xl mb-2'>Difference between Node.JS and Javascript!</h2>
                <p>
                    We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br /> <br />
                    How NodeJS handle multiple client requests? <br />
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                </p>

            </div>

        </div>
    );
};

export default Blogs;