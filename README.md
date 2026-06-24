# Project Zero
## Setup and Launch

*Prepared by Hamza Tasneem, CTO, TSS Talent Lab. Version 4.0.*

---

## Overview

In this project you set up your working tools, earn the Claude 101 certification, and build and deploy a portfolio website. Everything is done inside one GitHub repository and submitted there, so every step can be reviewed.

This is a one week project. You start with the certification, set up your two AI agents, learn each skill and create each account as you reach it, then build, deploy, and present.

## How this works

- Fork the project repository that has been shared with you.
- Work through the sections below in order, inside your fork.
- As you finish each step, commit your work and save your proof, a link or a screenshot, into the proof folder.
- When everything is done, fill in PRESENTATION.md with every link, artifact, and proof of learning.
- Add hamza@techsupersonic.com as a collaborator on your fork.
- Schedule a call and present your work.

## Repository structure

The repository is already set up in this shape so you know where everything goes:

```
project-zero/
  README.md            This brief. Read it, do not edit it.
  PRESENTATION.md      Your submission. All links, artifacts, and proof go here.
  LEARNING_LOG.md      One short wrap-up per skill you learn.
  skills/
    teach-me/SKILL.md       Your learning agent (provided).
    troubleshoot/SKILL.md   Your troubleshooting agent (provided).
  proof/               Certificates and screenshots go here.
  docs/                Your architecture diagram goes here.
  portfolio/           Your portfolio site code goes here.
```

## Section 1: Claude 101

Complete Claude 101, the introductory course on working with Claude, and earn the certificate. The course is here: https://anthropic.skilljar.com/claude-101. This grounds you in the tool behind your agents and your daily coding.

Submit: save the certificate or its link in the proof folder, and record the link in PRESENTATION.md.

## Section 2: Set up your two AI agents

Each agent is a skill, which is a markdown file named SKILL.md that tells Claude how to act in a particular mode. To set one up, open the skill folder in your fork, add its SKILL.md to your Claude project as a skill, and trigger it to confirm it runs. Both skills you need are already in the skills folder.

- Learning agent (skills/teach-me/SKILL.md). Your tutor. Say "teach me" followed by a topic and it walks you through it one step at a time and has you do the work yourself.
- Troubleshooting agent (skills/troubleshoot/SKILL.md). Your debugging partner. Describe what has broken and it guides you to the cause instead of handing you the fix.
- Claude Code. Install it so you can work with an AI coding agent directly inside your project.

Submit: a screenshot of each agent working, saved in the proof folder.

## Section 3: Learn the skills and set up your accounts

Use your learning agent to work through each skill below, then set up the accounts as you reach them.

Learn these through your agent:

- **Software development lifecycle (SDLC)**: the stages every build moves through, plan, design, build, test, deploy, and maintain. You will mirror these stages on your board and explain them on your call.
- **Git and GitHub**: clone, commit with clear messages, branch, and open and merge a pull request.
- **Dev hygiene**: find out what this means, then apply it. It covers code formatting, linting, and keeping secrets out of your code. Set up Prettier and ESLint, and keep a .env file that is listed in your .gitignore.

Set up these accounts:

- **GitHub**: a professional username, two-factor authentication turned on, and an SSH key connected so you push securely.
- **ClickUp**: build a board with columns that follow the lifecycle, Backlog, To Do, In Progress, In Review, Testing, Done. Create a ticket for every step in this brief and move each one across as you go.
- **Vercel**: create an account and connect it to your GitHub for deployment.
- **Supabase**: create a free account and leave it ready for a later project. You will not build in it yet.

Submit: screenshots of your board and your connected accounts, saved in the proof folder.

## Section 4: Build and ship

Plan it. Draw a one-page architecture diagram of your site, the pages, how they connect, and where the data comes from. Save it in the docs folder.

Build it. Build your portfolio site with React and Next.js in the portfolio folder, with these sections:

| Section | What goes in it |
|---|---|
| Header | Your name and a one-line description |
| About | Two or three sentences on your background and what you are working toward |
| Skills | The technologies you have worked with so far |
| Projects | Your most significant project: what it does, your role, the stack, and a link if it is live |
| Contact | An email and a link to your GitHub profile |

Ship it. Deploy the site to Vercel, with the project root set to the portfolio folder, so anyone can open it at a public URL.

Submit: the live URL, recorded in PRESENTATION.md.

## Section 5: Document and present

You will present this project in three formats. Presenting your work clearly is part of the project from the start, so take it seriously.

1. Written. PRESENTATION.md is your submission file. Put everything in it: the live site URL, the repository link, the board link, the Loom video link, the architecture diagram, your certificate link, and a short note on each skill you learned.
2. Video. Learn Loom, then record a short walkthrough of your live site, your repository, and your board. Add the link to PRESENTATION.md.
3. Live. Schedule a call and present to us. Share your screen, walk through the site, the repository, and the board, and explain one thing you learned in simple terms, as if to someone who is not technical. Camera on, clean background, clear audio.

Also keep these:

- LEARNING_LOG.md: a short wrap-up for each skill, a confidence score from one to three and a few lines of reflection. Your learning agent produces these as you go.
- GitHub profile README: set up your profile page so it introduces you and links to your live site.

This is where your presentation skills begin. We will give you feedback and you will keep improving from the next project onward.

## What to submit

- [X] Claude 101 certificate link, in proof and PRESENTATION.md
- [X] Both agents installed, screenshots in proof
- [X] ClickUp board built and loaded with a ticket per step, screenshot in proof
- [X] GitHub set up: professional username, two-factor on, SSH push working
- [X] At least one pull request opened and merged
- [X] Vercel connected, site live at a public URL
- [X] Supabase account created and parked
- [X] Prettier, ESLint, and .env handling in place
- [X] Architecture diagram in docs
- [X] Portfolio site built with all five sections
- [X] Loom walkthrough recorded, link in PRESENTATION.md
- [X] GitHub profile README live
- [X] PRESENTATION.md and LEARNING_LOG.md complete
- [X] hamza@techsupersonic.com added as a collaborator
- [ ] Call scheduled

---

*TSS Talent Lab | A Vertical of Tech Supersonic LLC | Confidential*
