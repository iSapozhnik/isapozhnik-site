---
title: Xcode shortcuts to speed up the testing process
date: "2019-09-26T08:05:28+0200"
layout: post
thumb: "./tips.png"
draft: false
path: "/articles/xcode-shortcuts-to-speed-up-testing-process/"
category: "Tips"
tags:
  - "tips"
  - "development"
  - "Xcode"
  - "shortcut"
description: "We all love to write unit tests, aren't we? 😉 Here are some really useful shortcuts to improve your testing productivity."
---

Now, when we are talking about Unit Testing in Xcode, the first and the most obvious shortcut is `CMD+U` (⌘U). This simple combo will just execute all the tests in the current scheme. But what other options do we have?

### Test without building

So, if you want to run all your tests without rebuilding the whole project just hit `Ctrl+CMD+U` (⌃⌘U). In the previuos tip I have already [mentioned](https://isapozhnik.com/posts/build-faster/) another, pretty smilar sortcut to run your project without building.

### Run only one test

This might be really useful if you are aiming to iterate on a single test and you want to run only that specific test. Hit `Ctrl+Option+CMD+U` (⌃⌥⌘U). With this shortcut, you can run the test in which your cursor is.

### Re-run the previously executed set of tests or a single test

Imagine, you are refactoring some class and you want to make sure that you didn't break any existing logic. For that, you can execute some specific test and then, after each phase of refactoring, while still having your class open in the editor, hit `Ctrl+Option+CMD+G` (⌃⌥⌘G). Using the same combo you can run the whole test suite if it was executed before.

I hope this will help you to improve your coding productivity 😉<br>Happy coding!