# Basics of Coding Deno
## Preface
What this text is and what it is not: This text is intended to introduce the reader to the basics of the TypeScript programming language (running on Deno) in the sense that they will be able to write minimal types of programs and run the code. It is not intended to go into advanced topics like asynchronous programming, frameworks, or advanced software engineering principles.

The programs are intended to be run in the terminal as that is common to most operating systems. Linux and Mac come preinstalled with a terminal. Windows may or may not have it pre-installed. "Windows Terminal" can be installed from the Microsoft store. Just do a search for it and install it.
## Installation and Setup of Deno
To set up Deno, navigate to the [Deno](https://deno.com/) website and follow the installation instructions for your operating system. If Deno has been installed properly you will be able to type the following command in the terminal command line and receive the response shown:
```
$ deno --version
deno x.x.x (release, ...)
(Note: the version shown here varies with your installed version)
```
## How to Run Examples

Each lesson folder contains a `.ts` (TypeScript) source file and a `.md` file showing the run command and expected output. Deno runs TypeScript natively — no compilation or config files needed.

Navigate into the lesson folder and run with `deno run`:

```
$ cd 01_hello-world
$ deno run hello-world.ts
```

Some lessons require permission flags for file, environment, or network access:

```
$ deno run --allow-read --allow-write writing-files.ts
$ deno run --allow-env environment-variables.ts
$ deno run --allow-net xml.ts
```

Each lesson's `.md` file shows the exact command including any required flags.

## Lessons

| # | Topic |
|---|-------|
| 01 | hello-world |
| 02 | values |
| 03 | variables |
| 04 | constants |
| 05 | for |
| 06 | if-else |
| 07 | switch |
| 08 | arrays |
| 09 | slices |
| 10 | maps |
| 11 | range |
| 12 | functions |
| 13 | multiple-return-values |
| 14 | variadic-functions |
| 15 | closures |
| 16 | recursion |
| 17 | pointers |
| 18 | structs |
| 19 | methods |
| 20 | interfaces |
| 21 | errors |
| 22 | strings-and-runes |
| 23 | struct-embedding |
| 24 | enums |
| 25 | custom-errors |
| 26 | generics |
| 27 | goroutines |
| 28 | channels |
| 29 | select |
| 30 | timeouts |
| 31 | timers |
| 32 | tickers |
| 33 | mutexes |
| 34 | atomic-counters |
| 35 | waitgroups |
| 36 | worker-pools |
| 37 | rate-limiting |
| 38 | recover |
| 39 | logging |
| 40 | sorting |
| 41 | sorting-by-functions |
| 42 | panic |
| 43 | defer |
| 44 | collection-functions |
| 45 | string-functions |
| 46 | string-formatting |
| 47 | regular-expressions |
| 48 | json |
| 49 | xml |
| 50 | time |
| 51 | epoch |
| 52 | time-formatting-parsing |
| 53 | random-numbers |
| 54 | number-parsing |
| 55 | url-parsing |
| 56 | sha1-hashes |
| 57 | base64-encoding |
| 58 | reading-files |
| 59 | writing-files |
| 60 | line-filters |
| 61 | file-paths |
| 62 | directories |
| 63 | temporary-files-and-directories |
| 64 | command-line-arguments |
| 65 | command-line-flags |
| 66 | command-line-subcommands |
| 67 | environment-variables |
| 68 | testing-and-benchmarking |
| 69 | http-client |
| 70 | http-server |
| 71 | context |
| 72 | tcp-server |
| 73 | text-templates |
| 74 | execing-processes |
| 75 | spawning-processes |
| 76 | signals |
| 77 | exit |
| 78 | sha256-hashes |

## Attribution

This project is adapted in part from **[Basics of Coding Go](https://github.com/jrmarcum/BasicsOfCodingGo)**
by [Jon Marcum](https://github.com/jrmarcum), which was itself adapted from
**[Go by Example](https://github.com/mmcgrana/gobyexample)**
by [Mark McGranaghan](https://github.com/mmcgrana), both licensed under the
[Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).

The lesson files and code examples derived from those works retain their
CC BY 3.0 license. This project exists as a platform for multi-language
comparative study of syntax, language simplicity, lines of code required,
and runtime performance.

## License

This repository contains two tiers of content:

| Content | License |
| --- | --- |
| Lesson files and code examples adapted from *Basics of Coding Go* / *Go by Example* | [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/) — see NOTICE |
| Original contributions by Jon Marcum (project structure, README, comparative study additions) | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) — see LICENSE |

The root `LICENSE` file (CC0) applies to Jon Marcum's original contributions.
The `NOTICE` file clarifies that CC BY 3.0 governs all content adapted from *Go by Example* and *Basics of Coding Go*.
