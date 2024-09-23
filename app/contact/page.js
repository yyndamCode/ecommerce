import Link from "next/link";
import { Card } from "../_components/ui/Card";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import Button from "../_components/ui/CustomButton";

export default function Contact() {
  return (
    <main className="relative my-20 ">
      <div className="flex items-center">
        <Link href={"/"} className="text-sm text-gray-400">
          Home
        </Link>
        <p className="mx-2 text-gray-400">/</p>
        <Link href={"/contact"} className="text-sm ">
          Contact
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-7 my-20">
        <Card className="col-span-1 grid gap-8 shadow-sm px-9 py-10">
          <div className="grid gap-6">
          <div className="flex items-center">
            <span className="flex items-center justify-center bg-primary-9 text-xl text-primary-7 mr-4 w-10 h-10 rounded-full">
              <IoCallOutline />
            </span>
            <h3 className=" text-base font-medium"> Calls To Us</h3>
          </div>
          <p className="text-base font-normal">We are available 24/7, 7 days a week.</p>
          <p className="text-base font-normal">Phone: +8801611112222</p>
          </div>
          <span className="w-full h-[2px] bg-gray-400"></span>
            <div>
              <div className="grid gap-6">
          <div className="flex items-center">
            <span className="flex items-center justify-center bg-primary-9 text-xl text-primary-7 mr-4 w-10 h-10 rounded-full">
              <FiMail />
            </span>
            <h3 className=" text-base font-medium"> Write To US</h3>
          </div>
          <p className="text-base font-normal">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-base font-normal">Emails: customer@exclusive.com</p>
          <p className="text-base font-normal">Emails: support@exclusive.com</p>
          </div>
         </div>
        </Card>
        <Card className="col-span-3 shadow-sm	px-9 py-10	 ">
          <div className="grid grid-cols-3 gap-4">
            <input type="text" className="bg-primary-7 p-4 border-none rounded-md" placeholder="Your Name *" />
            <input type="email" className="bg-primary-7 p-4 border-none rounded-md" placeholder="Your Email *" />
            <input type="number" className="bg-primary-7 p-4 border-none rounded-md" placeholder="Your Phone *" />
          </div>
            <div className="w-full h-[207px] my-8">
              <textarea
      className="peer h-full min-h-[100px] w-full resize-none  p-4 rounded-[6px] border-none bg-primary-7"
      placeholder=" Your Massage"></textarea>
            </div>
            <div className="text-end">
              <Button className="bg-primary-9 text-primary-7">Send Massage</Button>
            </div>
        </Card>
      </div>
    </main>
  );
}
