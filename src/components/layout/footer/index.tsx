import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  MailSearch,
  Twitter,
  Youtube,
} from "lucide-react";
import { FaGooglePlusG, FaTelegramPlane } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-12">
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
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <Facebook />
                  </div>
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <FaGooglePlusG />
                  </div>
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <Instagram />
                  </div>
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <Youtube />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xl font-bold">Let’s chat</span>
                <div className="flex gap-2">
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <Twitter />
                  </div>
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <FaTelegramPlane />
                  </div>
                  <div className="rounded-full w-[50px] h-[50px] flex items-center justify-center border border-black">
                    <MdWhatsapp />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-6">Catalog</h3>
                <nav className="flex gap-8 text-[20px] font-light">
                  <span>Features</span>
                  <span>/</span>
                  <span>Service</span>
                  <span>/</span>
                  <span>Pricing & Plans</span>
                  <span>/</span>
                </nav>
              </div>

              <div className="flex flex-col gap-[49px]">
                <div>
                  <h4 className="text-2xl font-bold mb-6">Location</h4>
                  <div className="text-[20px] font-light">
                    <p>483920, Moscow,</p>
                    <p>Myasnitskaya 22/2/5, Office 4</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-6">Languages</h4>
                  <div className="flex gap-6 text-[20px] font-light">
                    <span>En</span>
                    <span>Es</span>
                    <span>Fr</span>
                    <span>De</span>
                    <span>Ru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
