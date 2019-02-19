---
title: 'Recent git branches'
date: '2019-02-19'
spoiler: "How to get a list of recently modified git branches?"
---

When I work on a big project for a long time I switch between branches quite often. The thing is that I cannot remember branch names.

So I have this simple alias in my dotfiles:

```
alias recent="git for-each-ref --count=10 --sort=-committerdate refs/heads/ --format=\"%(refname:short)\""
```

It allows me to list my 10 recently modified branches like this:

```
$ recent
```

I also admire the simplicity and power of git commands. It's so productive to use.

```
$ git checkout - # switches to the previous branch; synonymous to `git checkout @{-1}`
$ git checkout @{-2} # use `@{-N}` to refer to the N-th last branch or commit checked out
```
