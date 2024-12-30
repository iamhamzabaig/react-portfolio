import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";

function Profile() {
  const icons = [
    { Icon: FaFacebook, label: "Facebook" },
    { Icon: FaLinkedin, label: "LinkedIn" },
    { Icon: FaGithub, label: "GitHub" },
    { Icon: FaGoogle, label: "Gmail" },
  ];

  const personalInfo = [
    {
      title: "Age:",
      value: 25,
    },
    {
      title: "Residence:",
      value: "Pakistan",
    },
    {
      title: "Freelance:",
      value: "Available",
    },
    {
      title: "Address:",
      value: "Satellite Town, RWP",
    },
  ];

  const skills = [
    {
      skillTitle: "Html",
      percentage: 90,
    },
    {
      skillTitle: "CSS",
      percentage: 80,
    },
    {
      skillTitle: "Js",
      percentage: 80,
    },
    {
      skillTitle: "Sql",
      percentage: 70,
    },
    {
      skillTitle: "Wordpress",
      percentage: 75,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-start p-3 bg-white h-screen  dark:bg-secondaryDarkBg transition-all duration-500 ease-in-out shadow-lg">
        <img
          src="https://hancockogundiyapartners.com/wp-content/uploads/2019/07/dummy-profile-pic-300x300.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-primary dark:border-white"
        />
        <label className="text-primarytxt dark:text-white text-[1.125rem]">
          Hamza Munawar
        </label>
        <label className="dark:text-white  text-[0.9rem]">
          Frontend Developer
        </label>

        <div className="flex flex-row justify-center space-x-6 mt-2 ">
          {icons.map(({ Icon, label }) => (
            <Icon
              key={label}
              aria-label={label}
              className="p-1 w-5 h-5 text-black bg-orangetxt rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-orange-400 hover:text-white transform hover:scale-110"
            />
          ))}
        </div>
        <div className="border-t border-gray-300 w-1/2 mx-auto my-3"></div>
        <div className="flex flex-col w-full">
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center w-full mt-1 "
            >
              <label
                htmlFor={info.title}
                className="bg-orangetxt text-black px-2 text-[0.8rem]"
              >
                {info.title}
              </label>
              <span
                className={`text-[0.8rem] text-nowrap dark:text-white ${info.value === "Available" ? "text-green-500 dark:text-green-400" : ""}`}
              >
                {info.value}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 w-1/2 mx-auto my-3"></div>
        <div className="space-y-1 w-full">
          {skills.map((skill) => (
            <div key={skill.skillTitle} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[0.7rem]">{skill.skillTitle}</span>
                <span className="text-[0.7rem]">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1  dark:bg-gray-700 border-2 border-orangetxt">
                <div
                  className="bg-orangetxt h-0.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
