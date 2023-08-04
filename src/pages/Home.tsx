import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { SearchBar } from "../components/SearchBar";
import { api } from "../api";

interface UserType {
  name : string;
  username : string;
  followers: string;
  job: string;
  repos: string;
  company: string;
  bio:string;
}

interface Repos {
  created_at : string;
  description: string;
  name:string;
  id:number;
}

export function Home() {

  const [user,setUser] = useState<UserType>()
  const [repos,setRepos] = useState<Repos[]>()
  const [newFilterText,setNewFilterText] = useState('')

  async function gettingGithubInfos() {
    const res = await api.get('/Gabriel-Aparecido03')
    const { followers,public_repos,company,login,name,bio } = res.data

    setUser({
      company,
      followers,
      job : company,
      name,
      repos:public_repos,
      username:login,
      bio
    })
  }

  async function gettingGithubReposInfos() {
    const res = await api.get('Gabriel-Aparecido03/repos')
    const filteredArray = res.data.reduce((result:any, currentObj:any) => {
      const obj = { 
        created_at : currentObj.created_at,
        name : currentObj.name ,
        id: currentObj.id,
        description:currentObj.description
      }
      result.push(obj)
      return result;
    }, []);
    setRepos([...filteredArray])
  }

  function onChangeFilterText(e:string) {
    setNewFilterText(e)
  }


  useEffect(()=>{
    Promise.all([gettingGithubInfos(),gettingGithubReposInfos()])
  },[])

  const filterdPosts = newFilterText.length > 1 ?
    repos?.filter(item => item.name.includes(newFilterText)) : repos


  return (
    <Layout>
      <div className="pb-8">
        <Profile 
          bio={user?.bio}
          company={user?.company}
          followers={user?.followers}
          name={user?.name}
          username={user?.username}
        />
        <SearchBar 
          totalRepos={user?.repos}
          value={newFilterText}
          onChangeText={onChangeFilterText}
        />
        <div className="grid grid-cols-2 gap-8 mt-8">
          { filterdPosts?.map(( item )=>(
            <Card 
              key={item.id}
              created_at={item.created_at}
              description={item.description}
              name={item.name}
              id={item.id}
              username={user?.username}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}