import { formatDistanceToNow } from "date-fns";
import { ArrowSquareUpRight, GithubLogo, CaretLeft, Calendar, ChatTeardrop } from "phosphor-react";

interface IssueBoardType {
  githubLink:string | undefined;
  title:string | undefined;
  ownerGithub :string | undefined;
  createdAt:string | undefined;
  comments:number | undefined;
  ownerGithubLink:string | undefined;
}

export function IssueBoard({comments,createdAt,githubLink,ownerGithub,ownerGithubLink,title}:IssueBoardType) {
  return (
    <div className="rounded-xl bg-base-profile px-10 py-8 gap-4 flex flex-col justify-start items-center min-h-[200px] shadow-sm translate-y-[-25%]">
      <div className="flex justify-between w-full items-center">
        <a href="/" className="flex gap-4 items-center">
          <CaretLeft className="text-blue w-3 h-3" />
          <span className="flex gap-2 items-center text-blue font-bold text-sm">Back</span>
        </a>
        <div className="flex gap-4 items-center">
          <a href={githubLink} className="flex gap-2 items-center text-blue">Github 
            <ArrowSquareUpRight className="text-blue w-3 h-3"/> 
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex w-full justify-center items-center text-xs uppercase text-bold text-blue">
          <h1 className="leading-loose text-2xl font-bold text-base-title text-center">{ title }</h1>
        </div>
        <div className="flex items-center justify-start gap-5 mt-4 w-full">
          <div className="flex gap-4 items-center">
            <GithubLogo className="w-4 h-4 text-base-label"/>
            <a href={ownerGithubLink} className="text-base text-base-subtitle leading-tight"> { ownerGithub }</a>
          </div>
          <div className="flex gap-4 items-center">
            <Calendar className="w-4 h-4 text-base-label"/>
            { createdAt && <span className="text-base text-base-subtitle leading-tight"> { formatDistanceToNow(new Date(createdAt), {addSuffix: true,})} </span>}
          </div>
          <div className="flex gap-4 items-center">
            <ChatTeardrop  className="w-4 h-4 text-base-label"/>
            <span className="text-base text-base-subtitle leading-tight"> { comments }</span>
          </div>
        </div>
      </div>
     </div>
  )
}