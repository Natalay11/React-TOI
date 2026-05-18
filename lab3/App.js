import React, { useState, useEffect } from 'react';
import './App.css';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const ModeToggle = ({ mode, setMode }) => {
    return (
        <div className="toggle-group">
            <button className={mode === 'option1' ? 'active' : ''} onClick={() => setMode('option1')}>
                All posts
            </button>
            <button className={mode === 'option2' ? 'active' : ''} onClick={() => setMode('option2')}>
                Posts by user
            </button>
        </div>
    );
};

const PostList = ({ posts, usersMap, title }) => {
    if (!posts.length) {
        return <div className="empty-message">No posts</div>;
    }
    return (
        <div>
            {title && <h3>{title}</h3>}
            <div className="posts-grid">
                {posts.map(post => {
                    const author = usersMap.get(post.userId);
                    const userName = author?.name || 'Unknown';
                    return (
                        <div className="post-card" key={post.id}>
                            <div className="card-header">User: {userName}</div>
                            <div className="card-body">
                                <div className="post-title">{post.title}</div>
                                <div className="post-body">{post.body}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const UserList = ({ users, selectedUserId, onSelectUser }) => {
    if (!users.length) return <div className="loading">Loading users...</div>;
    return (
        <div className="user-list">
            {users.map(user => (
                <div
                    key={user.id}
                    className={`user-item ${selectedUserId === user.id ? 'active' : ''}`}
                    onClick={() => onSelectUser(user.id)}
                >
                    <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
                    <div className="user-info">
                        <h4>{user.name}</h4>
                        <p>@{user.username}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

function App() {
    const [mode, setMode] = useState('option1');
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [usersMap, setUsersMap] = useState(new Map());
    const [loading, setLoading] = useState(true);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, postsRes] = await Promise.all([fetch(USERS_URL), fetch(POSTS_URL)]);
                const usersData = await usersRes.json();
                const postsData = await postsRes.json();
                setUsers(usersData);
                setPosts(postsData);
                const map = new Map();
                usersData.forEach(user => map.set(user.id, user));
                setUsersMap(map);
                if (usersData.length > 0) setSelectedUserId(usersData[0].id);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const getPostsByUser = (userId) => posts.filter(post => post.userId === userId);

    if (loading) return <div className="loading-full">Loading...</div>;

    return (
        <div className="app">
            <header>
                <h1>Blog Platform</h1>
                <ModeToggle mode={mode} setMode={setMode} />
            </header>
            {mode === 'option1' ? (
                <PostList posts={posts} usersMap={usersMap} />
            ) : (
                <div className="two-columns">
                    <UserList users={users} selectedUserId={selectedUserId} onSelectUser={setSelectedUserId} />
                    <PostList
                        posts={getPostsByUser(selectedUserId)}
                        usersMap={usersMap}
                        title={`Posts by ${usersMap.get(selectedUserId)?.name || ''}`}
                    />
                </div>
            )}
            <footer>Filter demo | JSONPlaceholder</footer>
        </div>
    );
}

export default App;
