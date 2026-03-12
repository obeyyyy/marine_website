import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#EBEEFF] w-full"> 
            <Navbar />
            <div className="pt-10">
            <QuoteForm title="GET IN TOUCH WITH US TODAY"  bgColor="bg-[#EBEEFF] "/>
            </div>
            <div className="bg-[#9DCBDB] py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">OUR LOCATIONS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                        <div className="flex flex-col items-center text-center p-6 rounded-lg ">
                            <img src="/images/icon1.png" alt="Location 1" className="w-16 h-16 mb-4 object-contain" />
                            <h3 className="text-xl font-semibold mb-2">OUR LOCATIONS</h3>
                            <p className="">Dubai | UK | China | India</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-lg ">
                            <img src="/images/icon2.png" alt="Location 2" className="w-16 h-16 mb-4 object-contain" />
                            <h3 className="text-xl font-semibold mb-2">CALL US</h3>
                            <p className="">+971 123456789</p>
                            <p className="">+44 123456789</p>
                            <p className="">+86 123456789</p>
                            <p className="">+91 1234567890</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-lg ">
                            <img src="/images/icon3.png" alt="Location 3" className="w-16 h-16 mb-4 object-contain" />
                            <h3 className="text-xl font-semibold mb-2">EMAIL US</h3>
                            <p className="">info@vymarine.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}