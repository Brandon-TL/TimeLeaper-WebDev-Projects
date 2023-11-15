import { useState } from 'react'

export function TwitterFollowCard ({ id, children, userName, initialFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    return (
        <article className='tw-followCard' id={id}>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt={`El avatar de ${children}`}
                    src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='.tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)}>
                    <span className='tw-FollowCard-text'>{text}</span>
                    <span className='tw-FollowCard-unFollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
