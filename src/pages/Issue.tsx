import { useEffect, useState } from "react";
import { Code } from "../components/Code";
import { IssueBoard } from "../components/IssueBoard";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import { apiRepos } from "../api";

interface infosRepo {
  githubLink:string;
  title:string;
  ownerGithubLink :string;
  ownerGithub:string;
  createdAt:string;
  description:string;
}

export function Issue() {

  const [infos,setInfos] = useState<infosRepo>()
  const [commentsNumber,setCommentsNumber] = useState(0)

  const { username,repo }  = useParams()

  async function gettingInfosAboutRepo() {
    const resInfos = await apiRepos.get(`/${username}/${repo}`)
    const { name,createdAt,description, owner,html_url } = resInfos.data
    setInfos({ 
      createdAt,
      description,
      githubLink:html_url,
      ownerGithub:owner.login,
      ownerGithubLink:owner.html_url,
      title:name
    })
  }

  async function gettingInfosAboutRepoComments() {
    const resInfos = await apiRepos.get(`/${username}/${repo}/comments`)
    setCommentsNumber(resInfos.data.length)
  }

  useEffect(()=>{
    Promise.all([gettingInfosAboutRepoComments(),gettingInfosAboutRepo()])
  })

  return (
    <Layout>
      <IssueBoard 
        comments={commentsNumber}
        createdAt={infos?.createdAt}
        githubLink={infos?.githubLink}
        ownerGithub={infos?.ownerGithub}
        ownerGithubLink={infos?.ownerGithubLink}
        title={infos?.title}
      />
      <div>
        <p className="text-base leading-tight text-base-text font-bold">
          { infos?.description }
        </p>
      </div>
    </Layout>
  )
}