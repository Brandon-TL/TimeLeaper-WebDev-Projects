import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userId : "VA001",
        userName : "midudev",
        name : "Miguel Ángel Durán",
        isFollowing : true
    },
    {
        userId : "VA002",
        userName : "_nasch_",
        name : "Nicolás Schürmann",
        isFollowing : true
    },
    {
        userId: "VA003",
        userName : "MoureDev",
        name : "Brais Moure",
        isFollowing : true
    },
    {
        userId : "VA004",
        userName : "_time_leaper_",
        name : "Time Leaper",
        isFollowing : false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userId, userName, name, isFollowing }) => {
                    return (
                        <TwitterFollowCard key={userId}
                            id={userId} userName={userName} initialFollowing={isFollowing}
                        >
                            {name}    
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}