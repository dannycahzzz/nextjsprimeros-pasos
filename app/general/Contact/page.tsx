import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO descriptions',
 keywords: ['Contact page']
};

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact page</span>
        </>
    )
}