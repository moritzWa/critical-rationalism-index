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
    description: string,
    href: string,
}

export const People: Record<string, PeopleTypes> = {
    "David Deutsch": {
        name: 'David Deutsch',
        description: 'David Elieser Deutsch FRS is a British physicist at the University of Oxford. He is a Visiting Professor in the Department of Atomic and Laser Physics at the Centre for Quantum Computation in the Clarendon Laboratory of the University of Oxford.',
        href: 'http://www.daviddeutsch.org.uk/h',
    },
    "Brett Hall": {
        name: 'Brett Hall',
        description: "doing ToKCast",
        href: 'https://www.bretthall.org/',
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