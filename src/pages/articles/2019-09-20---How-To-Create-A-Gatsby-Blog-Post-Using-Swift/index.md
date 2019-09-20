---
title: How To Create A Gatsby Blog Post Using Swift
date: "2019-09-20T22:21:15+0200"
layout: post
draft: false
path: "/posts/how-to-create-a-gatsby-blog-post-using-swift/"
category: "Blog"
tags:
 - "development"
 - "swift"
description: "We all know that developers are lazy. And because I'm not an exception I have created a small command line tool which can automate a bit the process of blog post creation."
---

This site is running under [Gatsby](https://www.gatsbyjs.org/) site generator. From my point of view this tool is great and more over **"it just works"©**. 

The structure is also pretty streightforward: you have **pages** folder, inside there is **articles** folder where you put all your blog posts. Every blog post is represented by a folder which has some specific name (*2019-09-20---How-To-Create-A-Gatsby-Blog-Post-Using-Swift*). I'm not really sure if it's mandatory to have folder name in *date---title* format but I just decided to follow this approach. So the tool I'm going to talk in this post is basically creating this folder based on title you provide as a parameter.

## Hello Swift

As an iOS developer I've decided to use Swift programming language for this purpose. Nowadays you can do so much things with Swift: native iOS, iPad OS and Mac OS apps, backend apps, command line tools and so on.

#### Before you start

Make sure you have the latest version of Swift installed. You can check it by using command `swift --version`. Now create a new directory (in my case it's *GatsbyArticlesMaker*) navigate to it. The next step is to initialize a basic Package structure by calling `swift package init --type executable`. Keep in mind that this command will create a package with the same name as your directory.
