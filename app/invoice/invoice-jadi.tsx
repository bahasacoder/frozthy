import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function InvoiceJadi() {
    return(
        <div>
            <div>
                <div>Logo</div>
                <div>Brand Comapny</div>
                <div>Slogan Company</div>
            </div>
            <div>
                <h3>Invoice To :</h3>
                <div><span>Icon</span><p>Phone: 0000 00000000</p></div>
                <div><span>Icon</span><p>Your email address here</p></div>
            </div>
            <div>
                <h1>Invoice </h1>
                <div><p>Invoice Number: 0000 00000000</p></div>
                <div><p>Invocei Date: 22/11/2026</p></div>
            </div>
        <Card className='ring-primary max-w-md gap-2 bg-transparent shadow-none'>
            <CardHeader>
                <CardTitle>Creative Clash</CardTitle>
            </CardHeader>
            <CardContent>
                Step into a space where design skills are tested, ideas come alive, and only the boldest concepts win the
                spotlight.
            </CardContent>
        </Card>
        </div>
    )
}