# msWorkshop
Monolith to MicroServices with Fastify Workshop - NodeConf EU 2019 Ireland


# Completed Project Can be found here:
fastify.rocks/workshop
https://github.com/delvedor/fastify-architecture-workshop

# Elastic Login
fastify.rocks/elastic-login

## Tech Stack

### NPM Packages

hyperid - for generating ids

### Testing
Tap

## Test Get Path
curl -H "Authorization: Basic am9uOnNub3c=" http://localhost:3000/post/j-tAwOP-ShaWj8eAjftOVg-1


### Kibana

```
POST desktop-l2r4gkn-tweets/_search
{
    "query": { "match_all": {} }
}
```
```
POST desktop-l2r4gkn-tweets/_search
{
    "query": { 
        "term": {
            "id": "j-tAwOP-ShaWj8eAjftOVg-1"
        }
     }
}
```

