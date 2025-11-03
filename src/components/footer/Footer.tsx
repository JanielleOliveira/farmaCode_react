import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

  const data = new Date().getFullYear()
  
  return (
    <>
      <div className="flex justify-center bg-red-700 text-white border-t border-black-700/50 ">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-semibold text-black-700 tracking-wide">
            Farma Code por{" "}
            <span className="text-black">Janielle Oliveira</span> |
            Copyright: {data}
          </p>

          <p className="text-lg text-white">Conecte-se comigo</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/janielleoliveira/"
              target="_blank"
              className="hover:text-black transition-colors duration-200"
            >
              <LinkedinLogoIcon size={42} weight="bold" />
            </a>

            <a
              href="https://www.instagram.com/jane.olivi/"
              target="_blank"
              className="hover:text-black transition-colors duration-200"
            >
              <InstagramLogoIcon size={42} weight="bold" />
            </a>

            <a
              href="https://github.com/JanielleOliveira"
              target="_blank"
              className="hover:text-black transition-colors duration-200"
            >
              <GithubLogoIcon size={42} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
