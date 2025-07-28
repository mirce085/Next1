import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, MailSearch, Twitter, Youtube } from "lucide-react";
import { FaGooglePlusG, FaTelegramPlane } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-[174px]">
            <div className="flex flex-col gap-12 max-w-[520px]">
              <h3 className="text-6xl/18 font-light">
                Ready to Redesign Your Everyday?
              </h3>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email here"
                  className="bg-[#e5e5e5] py-[20px] rounded-[5px]"
                />
                <Button className="py-[20px] rounded-[5px]">
                  Free Consultation
                </Button>
              </div>
            </div>
            <div className="flex gap-[96px]">
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold">Follow us</span>
                    <div className="flex gap-2">
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><Facebook/></div>
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><FaGooglePlusG /></div>
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><Instagram/></div>
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><Youtube/></div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold">Let’s chat</span>
                    <div className="flex gap-2">
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><Twitter/></div>
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><FaTelegramPlane /></div>
                        <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black"><MdWhatsapp /></div>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-4"></div>
        </div>
      </div>
    </footer>
  );
}
