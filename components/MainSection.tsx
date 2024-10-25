


/*MainSection*/

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"


interface MainSectionProps {
  children?: ReactNode;
}

export default function MainSection({ children }: MainSectionProps) {
  return (
    <div className="ml-[200px]">
      {/* Flex container for two sections */}
      <div className="flex justify-between">
        {/* Left Section */}
        <div className="flex-1 p-6 mr-5 ml-20">
          <p className="flex justify-center text-sm text-[rgb(112,112,112)]">Express checkout</p>
          <div className="flex space-x-2 pt-4">
            <Button className="flex items-center hover:bg-[rgb(69,17,214)] justify-center w-[286px] h-[48px] bg-[rgb(89,47,244)] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="inherit"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 341 80.035"
                className="w-12 h-20" // Increase the size of the SVG
                style={{ fill: "white; width: 120px; height: 20px" }} // Fill color for the SVG
              >
                <path
                  fillRule="evenodd"
                  d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z"
                  clipRule="evenodd"
                />
                <path d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.06-5.757-13.06-13.402s5.606-13.402 13.06-13.402 13.059 5.757 13.059 13.402-5.605 13.402-13.059 13.402z" />
              </svg>
            </Button>
            <Button className="flex items-center justify-center bg-black text-white rounded-lg w-[286px] h-[48px]">
              <img
                src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg"
                alt="Google Pay"
                className="w-100 h-6" // Adjust the size of the image
              />
            </Button>
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="mx-4 text-sm text-[rgb(112,112,112)]">OR</p>
            <div className="flex-1 border-t border-gray-300 "></div>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold font-size: 21px my-4">Contact</h2>
            <a className="underline text-sm" href="">Log in</a>
          </div>
          <div className="flex-1 items-center">
            <Input className="py-4 mb-4 w-100% " type="email" placeholder="Email" />
            <div className="flex items-center gap-[10px]">
              <Checkbox /> <Label className="my-4">Email me with news and offers</Label>
            </div>
          </div>
          <h1 className="my-2 text-xl font-bold">Payment</h1>
          <p className="text-gray-500 text-sm mb-3">All transactions are secure and encrypted.</p>
          <Card className="bg-[rgb(0,0,0,0.04)]">
            <CardHeader className="p-4 border border-black rounded-t-lg">
              <CardTitle><RadioGroup defaultValue="Credit card">
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
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Input type="email" placeholder="Card number" />
              <div className="flex gap-[14px] py-4">
                <Input type="email" placeholder="Expiration date (MM / YY)" />
                <Input type="email" placeholder="Security code" />
              </div>
              <Input type="email" placeholder="Name on card" />
            </CardContent>
            <CardFooter className="bg-white py-2">
              <RadioGroup className="bg-white" defaultValue="Credit card">
                <div className="flex w-[530px] justify-between space-x-2">
                  <div className="flex items-center justify-center">
                    <RadioGroupItem value="Credit card" id="Credit card" />
                    <p className="w-[475px] pl-2 ">iDeal</p>
                  </div>
                  <img src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ideal.Dvz0zDwq.svg" alt="" />
                </div>
              </RadioGroup>
            </CardFooter>
          </Card>
          <h1 className="my-4 font-semibold">Billing address</h1>
          <div className="flex-1 ">
            <Select>
              <SelectTrigger className="mt-4 ">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mongolia">Mongolia</SelectItem>
                <SelectItem value="USA">United States</SelectItem>
                <SelectItem value="China">China</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex mt- gap-[14px] ">
              <Input className="mt-4 " type="string" placeholder="First name" />
              <Input className="mt-4 " type="string" placeholder="Last name" />
            </div>
            <Input className="mt-4 " type="string" placeholder="Company (optional)" />
            <Input className="mt-4 " type="string" placeholder="Address" />
            <div className="flex gap-[14px]">
              <Input className="mt-4 " type="string" placeholder="City" />
              <Input className="mt-4 " type="string" placeholder="Postal code (optional)" />
            </div>
            <h1 className="my-4 font-semibold">Remember me</h1>
            <div className="flex gap-[10px] p-4 items-center border rounded-lg">
              <Checkbox className="border border-gray-400"></Checkbox><p className="text-sm">Save my information for a faster checkout</p>
            </div>
            <div className="flex items-center gap-[5px] mb-9 mt-4">
              <span className="inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="w-[15px] h-[12px] stroke-current text-black fill-none">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.5 6.3c0-2.298 1.131-4.9 3.5-4.9s3.5 2.602 3.5 4.9m-8.4.47v5.36c0 .26.21.47.47.47h8.86c.26 0 .47-.21.47-.47V6.77a.47.47 0 0 0-.47-.47H2.57a.47.47 0 0 0-.47.47"></path>
                </svg>
              </span>
              <p className="text-xs text-[rgb(112,112,112)] ">Secure and encrypted</p>
            </div>
            <Button className="w-[583px] h-[58.6px] text-lg font-bold">Pay now</Button>
            <footer className="flex items-center gap-[10px] underline border-t border-gray-300 mt-20 pt-[15px]">
              <a className="text-[14px]" href="">Terms of service</a>
              <a className="text-[14px]" href="">Contact information</a>
            </footer>
          </div>
        </div>







        {/* Right Section */}
        <div className="flex-1/2 relative top-0 w-[1500px] bg-[rgb(245,245,245)] border-l p-[38px]">
          <div className="sticky top-10">
            <div className="flex">
              <div className="flex justify-center bg-[rgb(230,230,230)] w-[64px] h-[64px] rounded-sm border border-[rgb(214,214,214)]">
                <img src="/image/Tokyo-Volume-II_64x64.jpg" alt="Image on the right" />
                <div className="flex absolute top-[-8px] left-[50px]">
                  <span className="flex justify-center w-5 h-5 items-center bg-[rgb(102,102,102)] text-xs font-bold text-white border border-gray-500 rounded-full">1</span>
                </div>
              </div>
              <div className="flex flex-col justify-center pl-3">
                <p className="text-sm">TOKYO-VOLUME-TWO-COLLECTION</p>
                <p className="text-xs">Standard</p>
              </div>
              <div className="flex items-center pl-10 pb-4 text-sm">
                <p>₮152,000.00</p>
              </div>
            </div>
            <div className="flex w-[440px] gap-4 py-5">
              <Input type="email" placeholder="Discount code" />
              <Button className="w-[69px] h-[51px] bg-[rgb(237,237,237)] text-[rgb(102, 102, 102) border border-[rgb(237,237,237)]]">Apply</Button>
            </div>
            <div className="flex gap-[265px] my-4">
              <h1 className="text-lg font-bold">Total</h1>
              <div className="flex items-baseline gap-2">
                <p className="flex text-xs ">MNT</p> <h1 className="text-lg font-semibold">₮152,000.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add children content if provided */}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
