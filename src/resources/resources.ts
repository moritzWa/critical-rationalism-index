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

export const People = {
    "David Deutsch": {
        name: 'David Deutsch',
        description: 'David Elieser Deutsch FRS is a British physicist at the University of Oxford. He is a Visiting Professor in the Department of Atomic and Laser Physics at the Centre for Quantum Computation in the Clarendon Laboratory of the University of Oxford.',
        href: 'http://www.daviddeutsch.org.uk/h',
    } as PeopleTypes,
    "Brett Hall": {
        name: 'Brett Hall',
        description: "doing ToKCast",
        href: 'https://www.bretthall.org/',
    },
    "Aaron Stupple": {
        name: 'Aaron Stupple',
        description: "Aaron Stupple is the founder of Conjecture Magazine which applies critical rationalism to contemporary issues and the nature of progress. Aaron is an internal medicine physician in Massachusetts.",
        href: "https://twitter.com/astupple",
    },

}

// Sources

enum SourceType {
    podcast = "podcast",
    blog = "blog",
}

type Source = {
    name: string,
    type: SourceType,
    href: string,
    authors: (keyof typeof People)[],
}

// Note, if you add an Author here pls make sure you add them to the People object above
export const Sources: Source[] = [
    {
        name: 'ToKCast',
        type: SourceType.podcast,
        href: 'https://brettroberthall.podbean.com/',
        authors: ['Brett Hall'],
    },
    {
        name: 'Conjecture Magazine',
        type: SourceType.blog,
        href: 'https://medium.com/conjecture-magazine',
        authors: ['Aaron Stupple'],
    },
    {
        name: 'The Four Strands',
        type: SourceType.blog,
        href: 'https://fourstrands.org/',
        authors: ['Aaron Stupple'],
    }
]