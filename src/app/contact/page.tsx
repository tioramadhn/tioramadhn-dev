import { Mail, Phone } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="w-full md:grid md:grid-cols-2 divide-x space-y-8 md:space-y-0">
      <h1 className="heading-section-title mt-4 md:mt-0 self-start md:self-center col-span-full md:col-span-1">
        Contact
      </h1>
      <div className="self-start md:self-center flex flex-col gap-4 pl-4 overflow-hidden">
        <h2 className="body-medium-regular flex gap-2 items-center animate-fade-up">
          <Mail className="w-4 h-4" /> tioramadhan9f@gmail.com
        </h2>
        <h2 className="body-medium-regular flex gap-2 items-center animate-fade-up">
          <Phone className="w-4 h-4" /> +6281386673635
        </h2>
      </div>
    </div>
  );
};

export default Page;
