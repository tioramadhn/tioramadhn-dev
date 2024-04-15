import { MotionDiv } from "@/components/MotionDiv";
import { Mail, Phone } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="w-full md:grid md:grid-cols-2 divide-x-8 divide-primary  space-y-8 md:space-y-0">
      <h1 className="heading-section-title mt-4 md:mt-0 self-start md:self-center col-span-full md:col-span-1 text-primary">
        <MotionDiv
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </MotionDiv>
      </h1>
      <div className="self-start md:self-center flex flex-col gap-4 pl-4 overflow-hidden">
        {[
          {
            icon: <Mail className="w-4 h-4" />,
            text: "tioramadhan9f@gmail.com",
          },
          {
            icon: <Phone className="w-4 h-4" />,
            text: "+6281386673635",
          },
        ].map(({ icon, text }, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 + index * 0.1 }}
          >
            <h2 className="body-medium-regular flex gap-2 items-center ">
              {icon} {text}
            </h2>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default Page;
