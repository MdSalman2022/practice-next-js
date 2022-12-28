import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div>
            <Image src="/404.jpg" width={1920} height={1080}></Image>
            <Link href="/"><button className='btn btn-primary'>Back to home</button></Link>
        </div>
    );
};

export default Error;