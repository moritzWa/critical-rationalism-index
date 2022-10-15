// Resources
type Resource = {
    name: string,
    authors: [keyof typeof People],
    description: string,
    href: string,
    type: ResourceType,
}

enum ResourceType {
    book = "book",
}

export const Resources: Resource[] = [
    {
        name: 'The Beginning of Infinity: Explanations That Transform the World',
        authors: ['David Deutsch'],
        description: 'This is a book by a noted quantum physicist discussing epistemology, the nature of reality, and human progress.',
        href: 'https://en.wikipedia.org/wiki/The_Beginning_of_Infinity',
        type: ResourceType.book
    },
]  

// People

type PeopleTypes = {
    name: string,
}

export const People = {
    "David Deutsch": {
        name: 'David Deutsch',
        description: 'wrote BoI'
    },
    "Brett Hall": {
        name: 'Brett Hall',
        intro: "doing ToKCast"
    },
}

// Sources

enum SourceType {
    podcast = "podcast",
}

type Source = {
    name: string,
    type: SourceType,
    href: string,
    authors: [keyof typeof People],
}

// type Keys = keyof typeof employee;

export const Sources: Source[] = [
    {
        name: 'ToKCast',
        type: SourceType.podcast,
        href: 'https://brettroberthall.podbean.com/',
        authors: ['Brett Hall'],
    },
]