import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

const MyComponent = () => {
    return (
        <Collapsible>
            <CollapsibleTrigger className="p-4 w-[585px] border border-black rounded-t-lg">
                <RadioGroup defaultValue="Credit card">
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center justify-center gap-[3px]">
                            <RadioGroupItem value="Credit card" id="Credit card" />
                            <Label htmlFor="Credit card">Credit card</Label>
                        </div>
                        <div className="flex gap-[3px]">
                            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg" alt="" />
                            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/maestro.ByfUQi1c.svg" alt="" />
                            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/mastercard.1c4_lyMp.svg" alt="" />
                            <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/amex.Csr7hRoy.svg" alt="" />
                            <Button className="bg-white text-color-black w-[38px] h-[24px] popup">+1</Button>
                        </div>
                    </div>
                </RadioGroup>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <Card className="border-[rgb(214,214,214)] rounded-none bg-[rgb(0,0,0,0.04)]">
                    <CardContent className="p-4">
                        <Input type="email" placeholder="Card number" />
                        <div className="flex gap-[14px] py-4">
                            <Input type="email" placeholder="Expiration date (MM / YY)" />
                            <Input type="email" placeholder="Security code" />
                        </div>
                        <Input type="email" placeholder="Name on card" />
                    </CardContent>
                </Card>
            </CollapsibleContent>
            <CardFooter className="bg-white py-4 border-b border-r border-l rounded-b border-[rgb(214,214,214)] p-3 text-sm text-gray-700">
                <RadioGroup className="bg-white" data-state="unchecked" defaultValue="Credit card">
                    <div className="flex w-[530px] justify-between space-x-2 p-1">
                        <div className="flex items-center justify-center">
                            <RadioGroupItem value="Credit card" id="Credit card" />
                            <p className="w-[475px] pl-1 ">iDeal</p>
                        </div>
                        <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ideal.Dvz0zDwq.svg" alt="" />
                    </div>
                </RadioGroup>
            </CardFooter>
        </Collapsible>
    );
};

export default MyComponent;
