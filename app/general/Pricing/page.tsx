import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact pricing',
 description: 'pagina de precios',
 keywords: ['Contact page']
};

export default function PricingPage(){
    return(
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}