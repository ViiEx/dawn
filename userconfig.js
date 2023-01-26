const CONFIG = new Config({
    crypto: {
        coin: "ETH",
        currency: "EURO",
        refreshIn: 10,
    },
    overrideStorage: true, // override localStorage with fixed userconfig values
    temperature: {
        location: "Cholargos, Greece",
        scale: "C",
    },
    clock: {
        format: "h:i p",
        iconColor: "#ff7b95",
    },
    search: {
        engines: {
            g: ["https://google.com/search?q=", "Google"],
            i: ["https://ixquick.com/do/search?q=", "Ixquick"],
            d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
            y: ["https://youtube.com/results?search_query=", "Youtube"],
            w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
        },
    },
    keybindings: {
        t: "todo-list",
        s: "search-bar",
    },
    disabled: ["crypto-rate"],
    openLastVisitedTab: false,
    tabs: [
        {
            name: "Study!",
            background_url: "src/img/banners/bg-1.gif",
            categories: [
                {
                    name: "Study",
                    links: [
                        {
                            url: "https://www.reddit.com/r/archlinux",
                            name: "r/archlinux",
                        },
                        {
                            name: "r/devops",
                            url: "https://www.reddit.com/r/devops",
                        },
                        {
                            name: "r/golang",
                            url: "https://www.reddit.com/r/golang",
                        },
                        {
                            name: "Github",
                            url: "https://github.com",
                            icon: "brand-github",
                        },
                    ],
                },
                {
                    name: "Wasting time!",
                    links: [
                        {
                            name: "r/linuxmemes",
                            url: "https://www.reddit.com/r/linuxmemes",
                        },
                        {
                            name: "r/linuxmasterrace",
                            url: "https://www.reddit.com/r/linuxmasterrace",
                        },
                        {
                            name: "r/unixporn",
                            url: "https://www.reddit.com/r/unixporn",
                        },
                        {
                            name: "YouTube",
                            url: "https://www.youtube.com",
                            icon: "brand-youtube",
                        },
                    ],
                },
            ],
        },
        {
            name: "music",
            background_url: "src/img/banners/bg-2.gif",
            categories: [
                {
                    name: "music services",
                    links: [
                        {
                            url: "https://soundcloud.com/",
                            icon: "brand-soundcloud",
                            icon_color: "#c57750",
                        },
                        {
                            url: "https://youtu.be/",
                            icon: "brand-youtube",
                            icon_color: "#996767",
                        },
                        {
                            url: "https://r-a-d.io/",
                            icon: "radio",
                        },
                    ],
                },
                {
                    name: "music boards",
                    links: [
                        {
                            name: "/music/",
                            url: "https://lainchan.org/music/",
                            icon: "disc",
                        },
                        {
                            name: "/mu/",
                            url: "https://boards.4channel.org/mu/",
                        },
                    ],
                },
            ],
        },
        {
            name: "coding",
            background_url: "src/img/banners/bg-3.gif",
            categories: [
                {
                    name: "subreddits",
                    links: [
                        {
                            name: "r/python",
                            url: "https://www.reddit.com/r/Python/",
                            icon: "brand-python",
                        },
                        {
                            name: "r/bash",
                            url: "https://www.reddit.com/r/bash/",
                            icon: "hash",
                        },
                        {
                            name: "r/programming",
                            url: "https://www.reddit.com/r/programming/",
                            icon: "code",
                        },
                    ],
                },
                {
                    name: "docs",
                    links: [
                        {
                            name: "python",
                            url: "https://docs.python.org/3/",
                        },
                        {
                            name: "rust",
                            url: "https://doc.rust-lang.org/book/",
                            icon: "notebook",
                        },
                        {
                            name: "React",
                            url: "https://reactjs.org/docs/getting-started.html",
                        },
                        {
                            name: "React Native",
                            url: "https://reactnative.dev/docs/accessibilityinfo",
                            icon: "brand-react-native",
                        },
                        {
                            name: "React Native Navigation",
                            url: "https://reactnavigation.org/docs/getting-started/",
                        },
                        {
                            name: "Bootstrap",
                            url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
                            icon: "brand-bootstrap",
                        },
                        {
                            name: "Tailwind",
                            url: "https://tailwindcss.com/docs",
                            icon: "brand-tailwind",
                        },
                    ],
                },
            ],
        },
    ],
});
