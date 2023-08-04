import { ArrowSquareUpRight, Buildings, GithubLogo, UsersThree } from "phosphor-react";

interface ProfileTypes {
  followers: string | undefined;
  name:string | undefined;
  username:string | undefined;
  company:string | undefined;
  bio:string | undefined;
}

export function Profile( {company,followers,name,username,bio} : ProfileTypes) {
  return (
     <div className="w-full rounded-xl bg-base-profile px-10 py-8 gap-4 flex justify-start items-center min-h-[240px] shadow-sm translate-y-[-25%]">
      <img className="rounded w-32 h-32" src={`https://github.com/${username}.png`} alt="" />
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex justify-between items-center text-xs uppercase text-bold text-blue">
          <h1 className="leading-loose text-2xl font-bold text-base-title">{ name }</h1>
          <a href={`https://github.com/${username}`} className="flex gap-2 items-center ">Github <ArrowSquareUpRight size={12} /> </a>
        </div>
        <div>
          <p className="text-base-text text-base leading-normal">{ bio }</p>
        </div>
        <div className="flex itesm-center justify-start gap-5 mt-4">
          <div className="flex gap-4 items-center">
            <GithubLogo className="w-4 h-4 text-base-label"/>
            <span className="text-base text-base-subtitle leading-tight">{ username }</span>
          </div>
          <div className="flex gap-4 items-center">
            <Buildings className="w-4 h-4 text-base-label"/>
            <span className="text-base text-base-subtitle leading-tight">{ company ? company : 'undefined' }</span>
          </div>
          <div className="flex gap-4 items-center">
            <UsersThree className="w-4 h-4 text-base-label"/>
            <span className="text-base text-base-subtitle leading-tight">{ followers }</span>
          </div>
        </div>
      </div>
     </div>
  )
}