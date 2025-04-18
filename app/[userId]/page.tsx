import { Button } from "@/components/ui/button";
import Contact from "@/components/ui/Contact";
import PhotoGallery from "@/components/ui/PhotoGallery";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import Social from "@/components/ui/social";
import { dbConnect } from "@/config/dbConnect";
import Link from "next/link";
import { notFound } from "next/navigation";
import userModel from "@/models/user.model";

export default async function ProfilePage() {
  await dbConnect();
  
  // Fetch the first user (for demonstration)
  // In a real app, you'd fetch the logged-in user's data
  const user = await userModel.findOne().select('name');
  
  if (!user) {
    return notFound();
  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-around xl:pt-8 xl:pb-24 xl:mt-15">
          <div className="text-center xl:text-left font-serif">
            <span className="h2">Hello</span>
            <h1 className="h1">
              I'm DR.
              <br />
              <span className="text-blue-400">{user.name}</span>
            </h1>
            <h3 className="max-w-[500px] mb-5 text/80">
              Specialized Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, placeat.
            </h3>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="#contact"
                className="uppercase rounded-lg flex items-center gap-2 border-1 border-amber-500 p-4"
              >
                <span className="hover:bg-amber-800-300 transition-all duration-300 font-serif scroll-auto">
                  Let's Connect With Me
                </span>
              </Link>
              <div className="mt-[-30px]">
                <Social />
              </div>
            </div>
          </div>

          <div>
            <ProfilePhoto />
          </div>
        </div>
        <PhotoGallery />
      </div>

      <hr />

      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}