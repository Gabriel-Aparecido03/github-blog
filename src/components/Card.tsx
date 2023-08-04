import { formatDistanceToNow } from 'date-fns'

interface CardPropsType {
  created_at : string;
  description: string;
  name:string;
  id:number;
  username: string | undefined;
}

export function Card({created_at,description,name,username}:CardPropsType) {
  return (
    <a href={`/issues/${username}/${name}`} className="bg-base-post p-8 h-[276px] rounded hover:cursor-pointer">
      <div className="w-full items-center justify-between flex">
        <h6 className="text-base-title font-bold text-lg">{ name }</h6>
        <span className="text-base-span text-sm"> 
        { formatDistanceToNow(new Date(created_at), {addSuffix: true,})}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-base-text text-base">{ description }</p>
      </div>
    </a>
  )
}