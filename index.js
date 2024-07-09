require('dotenv').config()
const express = require('express') // same thing as import express from "express"
const app = express()

const port = 3000 // Comments

const githubData = {
  "login": "Vikhyat05",
  "id": 44644078,
  "node_id": "MDQ6VXNlcjQ0NjQ0MDc4",
  "avatar_url": "https://avatars.githubusercontent.com/u/44644078?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vikhyat05",
  "html_url": "https://github.com/Vikhyat05",
  "followers_url": "https://api.github.com/users/Vikhyat05/followers",
  "following_url": "https://api.github.com/users/Vikhyat05/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vikhyat05/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vikhyat05/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vikhyat05/subscriptions",
  "organizations_url": "https://api.github.com/users/Vikhyat05/orgs",
  "repos_url": "https://api.github.com/users/Vikhyat05/repos",
  "events_url": "https://api.github.com/users/Vikhyat05/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vikhyat05/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Lotus",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-10-31T13:57:43Z",
  "updated_at": "2024-06-02T05:12:40Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('vikhyatRana')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please login for access</h1>')
})

app.get('/continuOS',(req,res)=>{
  res.send('<h2>Work in Progress</h2>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})